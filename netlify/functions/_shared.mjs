const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'https://renerrenergies.com,https://www.renerrenergies.com,http://localhost:5173,http://127.0.0.1:5173')
  .split(',').map((origin) => origin.trim()).filter(Boolean);

export const json = (request, data, status = 200) => {
  const origin = request.headers.get('origin') || '';
  const corsOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return new Response(status === 204 ? null : JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'access-control-allow-origin': corsOrigin,
      'access-control-allow-methods': 'GET, POST, OPTIONS',
      'access-control-allow-headers': 'authorization, content-type',
      'vary': 'origin',
    },
  });
};

export const unavailable = (request) => json(request, {
  error: 'The Renerr marketplace backend is not configured yet. Please contact Renerr directly while setup is completed.',
  code: 'BACKEND_NOT_CONFIGURED',
}, 503);

export const envReady = () => Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
export const supabaseUrl = () => process.env.SUPABASE_URL.replace(/\/$/, '');

export async function serviceRequest(path, { method = 'GET', body, headers = {} } = {}) {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key || !process.env.SUPABASE_URL) throw new Error('Supabase server configuration is missing.');
  const response = await fetch(`${supabaseUrl()}${path}`, {
    method,
    headers: {
      apikey: key,
      authorization: `Bearer ${key}`,
      ...(body === undefined ? {} : { 'content-type': 'application/json', prefer: 'return=representation' }),
      ...headers,
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
  const text = await response.text();
  let payload;
  try { payload = text ? JSON.parse(text) : null; } catch { payload = text; }
  if (!response.ok) {
    const error = new Error(typeof payload === 'object' ? payload?.message || payload?.hint || 'Database request failed.' : 'Database request failed.');
    error.status = response.status;
    throw error;
  }
  return payload;
}

export async function uploadPrivateFiles(files, folder) {
  if (!Array.isArray(files) || files.length > 4) throw new Error('Attach no more than four files.');
  const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'application/pdf']);
  const output = [];
  let totalBytes = 0;
  for (const file of files) {
    if (!file || typeof file.base64 !== 'string' || !allowedTypes.has(file.type)) throw new Error('Use JPG, PNG, WebP or PDF files only.');
    const content = Buffer.from(file.base64, 'base64');
    if (!content.length || content.length > 1_000_000) throw new Error('Each attachment must be 1 MB or smaller.');
    totalBytes += content.length;
    if (totalBytes > 3_500_000) throw new Error('Combined attachments must be 3.5 MB or smaller.');
    const extension = ({ 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'application/pdf': 'pdf' })[file.type];
    const path = `${folder}/${crypto.randomUUID()}.${extension}`;
    const response = await fetch(`${supabaseUrl()}/storage/v1/object/marketplace-private/${path}`, {
      method: 'POST',
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
        authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        'content-type': file.type,
        'x-upsert': 'false',
      },
      body: content,
    });
    if (!response.ok) {
      for (const uploaded of output) await deletePrivateFile(uploaded.path).catch(() => {});
      throw new Error('An attachment could not be saved. Please try again or submit without attachments.');
    }
    output.push({ path, type: file.type, size: content.length, name: String(file.name || 'attachment').slice(0, 100) });
  }
  return output;
}

export async function deletePrivateFile(path) {
  await fetch(`${supabaseUrl()}/storage/v1/object/marketplace-private/${path}`, {
    method: 'DELETE',
    headers: { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}` },
  });
}

export async function signedFileUrl(path, expiresIn = 1800) {
  const response = await fetch(`${supabaseUrl()}/storage/v1/object/sign/marketplace-private/${path}`, {
    method: 'POST',
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ expiresIn }),
  });
  if (!response.ok) return null;
  const data = await response.json();
  return data.signedURL?.startsWith('http') ? data.signedURL : `${supabaseUrl()}${data.signedURL}`;
}

export const requiredText = (data, key, max = 300) => {
  const value = typeof data[key] === 'string' ? data[key].trim() : '';
  if (!value || value.length > max) throw new Error(`${key} is required and must be under ${max} characters.`);
  return value;
};

export const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
export const requestReference = (prefix) => `${prefix}-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;

export function safeError(request, error) {
  if (error.status === 404) return json(request, { error: 'The requested record was not found.' }, 404);
  if (error.status === 409) return json(request, { error: 'A record with those details already exists.' }, 409);
  if (error.message && !/database|supabase|configuration/i.test(error.message)) return json(request, { error: error.message }, 400);
  console.error('Marketplace function error:', error.message);
  return json(request, { error: 'The request could not be completed. Please try again later.' }, 500);
}
