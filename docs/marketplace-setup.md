# RENERR marketplace setup

The professional directory, project listings, public forms and administration console use Supabase through the Netlify Functions in `netlify/functions`. No visitor submissions are reported as successful until the function confirms that Supabase saved them.

## Supabase project setup

1. In the existing Supabase project, run `supabase/migrations/202611180001_marketplace.sql` in the SQL editor (or apply it through the Supabase CLI).
2. Create the first administrator as a user in Supabase Authentication.
3. Copy that user's UUID and run `insert into public.admin_users (user_id) values ('<auth-user-uuid>');` in the SQL editor.
4. Keep the `marketplace-private` storage bucket private. The server creates expiring signed links for approved public media.

## Netlify environment variables

Add these variables to the Netlify site, for every deploy context:

- `SUPABASE_URL`: the project URL.
- `SUPABASE_ANON_KEY`: the project's publishable/anon key. The server uses it to validate administrator access tokens.
- `SUPABASE_SERVICE_ROLE_KEY`: the service-role secret. This is server-only and must never be added to a `VITE_` variable or committed to the repository.
- `ALLOWED_ORIGINS`: comma-separated production and preview origins permitted to call the functions, for example `https://renerrenergies.com,https://www.renerrenergies.com`.
- `VITE_SUPABASE_URL`: same project URL, exposed only for the administrator sign-in request.
- `VITE_SUPABASE_ANON_KEY`: same publishable/anon key, safe for browser use. Required at build time for `/admin` sign-in.

After updating build variables, trigger a new Netlify deploy. Netlify must publish the `netlify/functions` directory as functions; its standard detection works with this repository's Vite setup.

## Limitations to review

- The current first version collects interest only. It does not process investments or payments.
- A service request or application is stored in Supabase and appears in `/admin` only after both the database migration and Netlify secrets are configured.
- Uploaded files are restricted to JPG, PNG, WebP and PDF; maximum four files, 1 MB each per submission.
- Professional registration does not publish a profile. An administrator must review and approve it. The administrator can verify and publish profiles separately.
- Reviews can be submitted against a completed service request using its unique reference and matching email address. They remain hidden until an administrator approves them.
- Administrators can create and edit projects, update technical and financial JSON fields, upload a cover image or public documents, and publish/unpublish or archive projects.
