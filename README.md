# Renerr Energies Ltd — Official Website

Production-quality, modern, lightweight website for **Renerr Energies Ltd**, a Nigerian renewable energy company developing accessible solar solutions for primary and secondary schools and underserved communities using an energy-as-a-service model.

---

## 🌟 Key Features & Architecture

- **Clean Tech & Modern Identity**: Premium African clean-energy aesthetic with brand colors:
  - Deep Forest Green (`#123B2A`)
  - Primary Green (`#218653`)
  - Bright Energy Green (`#B8E986`)
  - Warm Off-White (`#F7F8F3`)
  - Charcoal Text (`#202820`)
- **Complete Multi-Page Structure**:
  - `HomePage` (`/`): High-impact hero, problem breakdown, 5-step solution overview, school electrification feature, 4-step project process, target groups, partnership invitation, mission/vision, and calls-to-action.
  - `Our Solution` (`/solution`): Detailed energy-as-a-service model breakdown, upfront cost problem vs monthly subscription, technical sizing & EPC ecosystem, eligibility criteria, and interactive FAQ accordion.
  - `Who We Serve` (`/who-we-serve`): Detailed needs analysis for primary & secondary schools, vocational/technical institutions, and potential future expansion sectors (communities & small businesses).
  - `About Us` (`/about`): Origin story, mission, long-term vision, 6 guiding values, project methodology, and editable founder placeholder.
  - `Partner With Us` (`/partner`): 5 distinct partnership pathways with an interactive enquiry form.
  - `Register School Interest` (`/schools`): Dedicated questionnaire for schools with full load and power context inputs.
  - `Contact` (`/contact`): Centralized communication channels (email, WhatsApp, operating jurisdiction) and direct message form.
  - `Privacy Policy` (`/privacy`): Responsible, transparent privacy policy aligned with Nigerian data protection principles.
- **Transparent & Functional Forms**:
  - Validates all inputs client-side with clear error feedback.
  - **No Fake Submissions**: If a backend is not yet plugged in, the form provides a verified direct dispatch: 1-click pre-filled email app opener (`mailto:`), WhatsApp direct dispatch, and 1-click formatted copy to clipboard.
  - Plugs seamlessly into **Formspree**, **Formsubmit**, or custom APIs by adding an endpoint URL in `src/config/siteConfig.ts`.
- **Zero-Cost Hosting Ready**: Configured for Cloudflare Pages (free tier) with `public/_redirects` for instant single-page application (SPA) routing without 404 errors.
- **Fast & Accessible**: Total gzipped bundle size under 95 kB, optimized for Nigerian mobile networks, semantic HTML, keyboard accessible, and respects `prefers-reduced-motion`.

---

## ⚙️ Quick Start (Running Locally)

### 1. Prerequisites
Make sure you have Node.js (version 18 or newer) installed on your computer.

### 2. Install Dependencies
Open your terminal in this project directory and run:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:5173`. Any changes you make to files will immediately appear on the screen!

### 4. Build for Production
```bash
npm run build
```
This compiles the website into the `dist/` folder, ready for deployment.

---

## 🛠️ Centralized Configuration & Customization

All company details, contact information, and form settings are centralized in one single file:
👉 `src/config/siteConfig.ts`

### Updating Contact Information
Open `src/config/siteConfig.ts` and update the values:
```typescript
contact: {
  email: "your-actual-email@renerrenergies.com",
  phone: "+234 803 000 0000",
  whatsappNumber: "2348030000000", // International format, digits only (no '+')
  addressDisplay: "Lagos, Nigeria",
  officeHours: "Monday – Friday: 8:00 AM – 5:00 PM (WAT)",
}
```

### Connecting a Free Form Backend (e.g., Formspree)
By default, forms offer a pre-filled direct email / WhatsApp dispatch so visitors can reach you immediately without any setup.

When you want enquiries sent straight to your email inbox automatically:
1. Create a free account at [Formspree.io](https://formspree.io) or [Formsubmit.co](https://formsubmit.co).
2. Create a new form and copy the endpoint URL (e.g., `https://formspree.io/f/mqazkxyz`).
3. Paste the URL into `src/config/siteConfig.ts`:
```typescript
forms: {
  partnerFormEndpoint: "https://formspree.io/f/your_partner_form_id",
  schoolFormEndpoint: "https://formspree.io/f/your_school_form_id",
  contactFormEndpoint: "https://formspree.io/f/your_contact_form_id",
}
```
The website will automatically switch to posting directly to that endpoint and show a live success confirmation to the sender!

---

## 🚀 Free Deployment to Cloudflare Pages (Step-by-Step)

Cloudflare Pages provides fast global hosting with SSL certificates at **zero hosting cost** on their generous free tier. You do not need to buy a custom domain immediately; Cloudflare gives you a free `*.pages.dev` web address.

### Step 1: Push Code to GitHub
1. Create a free account on [GitHub.com](https://github.com) if you do not have one.
2. In your terminal, stage and commit the project files:
   ```bash
   git add .
   git commit -m "Initial commit of Renerr Energies website"
   ```
3. Create a new repository on GitHub named `renerrenergies` (set to Public or Private).
4. Link and push your repository (replace `YOUR_USERNAME` with your GitHub username):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/renerrenergies.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Cloudflare Pages
1. Sign up for a free account at [Cloudflare.com](https://dash.cloudflare.com).
2. In the Cloudflare dashboard left menu, click **Workers & Pages**.
3. Click **Create Application**, then choose the **Pages** tab.
4. Click **Connect to Git** and authorize your GitHub account.
5. Select your repository: `renerrenergies`.

### Step 3: Configure Build Settings
Cloudflare will ask for your build configuration. Enter:
- **Project Name**: `renerrenergies` (or your preferred name)
- **Production Branch**: `main`
- **Framework Preset**: `Vite` (or `None`)
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`

### Step 4: Deploy!
Click **Save and Deploy**. In less than 1 minute, Cloudflare will build and publish your site!
You will receive a live URL such as:
`https://renerrenergies.pages.dev`

### Step 5: Automatic Updates
Whenever you make changes to your code and run:
```bash
git add .
git commit -m "Update site content"
git push
```
Cloudflare Pages will automatically detect the push, rebuild, and update your live website within seconds!

---

## 🔒 Legal & Content Integrity Policy

To maintain the highest level of credibility with investors, government agencies, and partners:
- **No Fabricated Data**: This site does not claim completed installations, false customer metrics, fake testimonials, or unverified funding.
- **Accurate Model Description**: All school projects are transparently presented as subject to site evaluation, project financing, and bilateral service contracts.
- **Honest Relationships**: Prospective institutional partnerships are presented as collaborative ambitions, not formalized affiliations.

---

## 📁 Project Structure

```
renerrenergies/
├── public/
│   ├── _redirects         # Cloudflare Pages client-side routing fallback
│   ├── robots.txt         # Search engine crawl rules
│   └── sitemap.xml        # Complete sitemap for search engines
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ImageWithFallback.tsx  # Graceful fallback image component
│   │   │   ├── Logo.tsx               # Original Renerr brand mark & wordmark
│   │   │   └── ScrollToTop.tsx        # Auto-scrolls on route navigation
│   │   └── layout/
│   │       ├── Footer.tsx             # Universal responsive footer
│   │       ├── Layout.tsx             # Page layout shell
│   │       └── Navbar.tsx             # Sticky navigation header with mobile drawer
│   ├── config/
│   │   └── siteConfig.ts              # Centralized business & form configuration
│   ├── pages/
│   │   ├── AboutPage.tsx              # About Us & Story
│   │   ├── ContactPage.tsx            # Contact information & message form
│   │   ├── HomePage.tsx               # Primary landing page
│   │   ├── NotFoundPage.tsx           # 404 handler
│   │   ├── PartnerPage.tsx            # 5 partnership pathways & enquiry form
│   │   ├── PrivacyPage.tsx            # Responsible privacy policy
│   │   ├── SchoolsPage.tsx            # Dedicated school interest questionnaire
│   │   ├── SolutionPage.tsx           # Energy-as-a-service model & FAQ
│   │   └── WhoWeServePage.tsx         # Beneficiary & target customer breakdowns
│   ├── utils/
│   │   └── formHandler.ts             # Transparent form & direct dispatch handler
│   ├── App.tsx                        # React Router routing configuration
│   ├── index.css                      # Tailwind base & custom utility styles
│   └── main.tsx                       # React DOM entry point
├── index.html                         # Base HTML template with SEO & OpenGraph tags
├── package.json                       # Dependencies & build scripts
├── tailwind.config.js                 # Brand colors & design tokens
├── tsconfig.json                      # TypeScript configuration
└── vite.config.ts                     # Vite bundler configuration
```
