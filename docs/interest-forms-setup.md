# Marketplace expression-of-interest forms

The `/professionals` and `/energy-projects` pages submit to Netlify Forms using native form detection. The forms are separate (`solar-professional-interest` and `energy-project-interest`) and include matching static form blueprints in `index.html` for this React-rendered site.

## Netlify setup required

1. In the Netlify site dashboard, enable **Form detection** under Forms and redeploy the site so Netlify scans the static form blueprints.
2. After the deployment is scanned, confirm both forms appear under Forms.
3. Configure a submission notification for each form, addressed to `notifications@renerrenergies.com` (or the appropriate internal recipient).
4. Submit a controlled test from the deployed site and confirm it appears in the Netlify Forms submissions list and reaches the notification recipient. Remove the test submission afterward.

The React pages POST URL-encoded values to `/`. They show a received confirmation only when the POST response is successful; network and server errors show an error state. Until form detection and notifications are enabled and verified in Netlify, delivery to the business inbox is not confirmed.

No Supabase, Firebase, custom API, paid form service, or new backend is used by these public forms. The Contact Us page and its existing handler are unchanged.
