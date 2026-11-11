# Renerr Energies Ltd — Official Website

Production-quality, modern, lightweight website for **Renerr Energies Ltd**, an African energy-access company working to reduce energy poverty and expand access to affordable, reliable electricity across Africa through practical solutions, innovation, and strategic partnerships.

---

## 🌟 Brand Identity & Enduring Mission

- **Core Message**: *"Powering a future where everyone has access to reliable electricity."*
- **Mission**: *"To reduce energy poverty and expand access to affordable, reliable electricity across Africa through practical solutions, innovation, and strategic partnerships."*
- **Vision**: *"An Africa where access to reliable electricity enables every individual, household, business, and community to realise its full potential."*
- **Guiding Belief**: *"We believe that reliable electricity is fundamental to human progress and that access to energy should not be determined solely by income or geography."*
- **Brand Colors**:
  - Deep Forest Green (`#123B2A`)
  - Primary Green (`#218653`)
  - Bright Energy Green (`#B8E986`)
  - Warm Off-White (`#F7F8F3`)
  - Charcoal Text (`#202820`) & Muted Grey (`#68736A`)

---

## 🧭 Complete Multi-Page Structure

- **`HomePage` (`/`)**: High-impact hero, *"Reliable Electricity Should Not Be a Privilege"* challenge analysis, *"Expanding Energy Access. Unlocking Human Potential"* mission statement, 4-pillar flexible approach, comprehensive impact ambition across diverse sectors, African commitment statement, and partnership call-to-action.
- **`About Us` (`/about`)**: Origin story, permanent mission vs. evolving programmes, long-term vision, core beliefs, 6 guiding values (*Access & Inclusion, Integrity, Innovation, Collaboration, Sustainability, Impact*), and leadership dialogue section.
- **`Our Approach` (`/approach` & `/solution`)**: Needs-driven philosophy, four strategic delivery pillars, six flexible solution themes (*Renewable & Clean Energy, Distributed Energy Access, Innovative Business Models, Project Development, Strategic Partnerships, Scalable Infrastructure*), and interactive FAQ accordion.
- **`Our Impact` (`/impact` & `/who-we-serve`)**: Honest outcome-oriented framework assessing *People & Communities Reached, Improved Electricity Access, Institutions & Businesses Supported, Reliability & Affordability, Environmental & Development Benefits*, plus target beneficiary sector breakdowns (*Education, Healthcare, Productive Enterprise, Communities*).
- **`Partner With Us` (`/partner`)**: 7 collaboration pathways (*Technical & Technology, Project Development & Implementation, Investors & Financing, Development Organisations, Government & Public Sector, Commercial & Institutional Customers, Community & Civil Society*) with an interactive enquiry form.
- **`Project Energy Enquiry` (`/projects` & `/schools`)**: Broad questionnaire for institutions, healthcare clinics, businesses, and communities seeking to explore an energy project.
- **`Contact` (`/contact`)**: Official communication channels (*Email, WhatsApp, operating jurisdiction, WAT office hours*) and general inquiry form.
- **`Privacy Policy` (`/privacy`)**: Transparent policy aligned with the Nigeria Data Protection Act (NDPA).

---

## ⚙️ Quick Start (Running Locally)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized, static production files in `dist/`.

---

## 🛠️ Centralized Configuration & Customization

Update your business details and form endpoints in one place:
👉 **`src/config/siteConfig.ts`**

```typescript
contact: {
  email: "notifications@renerrenergies.com",
  phone: "+234 803 000 0000",
  whatsappNumber: "2348030000000", // International format digits only
  addressDisplay: "Headquartered in Nigeria • Operating with an Africa-wide vision",
  officeHours: "Monday – Friday: 8:00 AM – 5:00 PM (WAT)",
}
```

### Free Form Backend Setup
Forms function out of the box with transparent 1-click direct dispatch (email app opener, WhatsApp pre-filled sender, and clipboard copy).

To connect automated email forwarding via [Formspree](https://formspree.io) or [Formsubmit](https://formsubmit.co), simply paste your endpoint URLs:
```typescript
forms: {
  partnerFormEndpoint: "https://formspree.io/f/YOUR_PARTNER_FORM_ID",
  projectFormEndpoint: "https://formspree.io/f/YOUR_PROJECT_FORM_ID",
  contactFormEndpoint: "https://formspree.io/f/YOUR_CONTACT_FORM_ID",
}
```

---

## 🚀 Free Deployment to Cloudflare Pages

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete African energy-access positioning revision"
   git push -u origin main
   ```
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) &rarr; **Workers & Pages** &rarr; **Create Application** &rarr; **Pages** &rarr; **Connect to Git**.
3. Select your repository `renerrenergies`.
4. Build Settings:
   - **Framework Preset**: `Vite` (or `None`)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
5. Click **Save and Deploy**. Your site will be published at `https://renerrenergies.pages.dev` with a free SSL certificate.
