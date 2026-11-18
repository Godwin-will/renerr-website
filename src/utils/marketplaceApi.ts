export const marketplaceApi = '/.netlify/functions/marketplace';
export const adminApi = '/.netlify/functions/admin';

export async function readResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error('Marketplace storage is not connected yet. Set up the Supabase project and Netlify Function environment variables.');
  }
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'The request could not be completed.');
  return data as T;
}

export async function getMarketplace<T>(resource: string, slug?: string): Promise<T> {
  const params = new URLSearchParams({ resource });
  if (slug) params.set('slug', slug);
  const response = await fetch(`${marketplaceApi}?${params.toString()}`, { headers: { Accept: 'application/json' } });
  return readResponse<T>(response);
}

export const filePayload = async (file: File) => {
  if (file.size > 1_000_000) throw new Error(`${file.name} is over the 1 MB limit.`);
  const base64 = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
    reader.readAsDataURL(file);
  });
  return { name: file.name, type: file.type, base64 };
};

export async function postMarketplace<T>(action: string, values: Record<string, unknown>, files: File[] = []): Promise<T> {
  if (files.length > 4) throw new Error('Attach no more than four files.');
  const attachments = await Promise.all(files.map(filePayload));
  const response = await fetch(marketplaceApi, {
    method: 'POST',
    headers: { 'content-type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...values, action, attachments }),
  });
  return readResponse<T>(response);
}

export function supabaseClientConfig() {
  return { url: import.meta.env.VITE_SUPABASE_URL as string | undefined, anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined };
}

export async function adminRequest<T>(token: string, body?: Record<string, unknown>): Promise<T> {
  const response = await fetch(adminApi, {
    method: body ? 'POST' : 'GET',
    headers: { authorization: `Bearer ${token}`, Accept: 'application/json', ...(body ? { 'content-type': 'application/json' } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  return readResponse<T>(response);
}
