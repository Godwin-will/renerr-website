type NetlifyValue = string | number | boolean | null | undefined | string[];

/** Submit an encoded form to Netlify Forms; success is returned only for an HTTP success response. */
export async function submitNetlifyForm(
  formName: string,
  values: Record<string, NetlifyValue>,
  fetcher: typeof fetch = fetch
): Promise<void> {
  const body = new URLSearchParams();
  body.set('form-name', formName);
  body.set('bot-field', '');

  for (const [name, value] of Object.entries(values)) {
    if (value === undefined || value === null) continue;
    body.set(name, Array.isArray(value) ? value.join(', ') : String(value));
  }

  const response = await fetcher('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error('The form could not be submitted. Please try again.');
  }
}
