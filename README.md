**🥘 Zarephath Nigerian Limited – Landing Page**

Welcome to the official codebase for the **Zarephath Nigerian Limited** landing page — a professional web platform for showcasing products, collecting orders, and growing brand visibility online.

**This project is built with:**

- ✅ [Next.js](https://nextjs.org/)
- ✅ [Tailwind CSS](https://tailwindcss.com/)
- ✅ [TypeScript](https://www.typescriptlang.org/)
- ✅ [shadcn/ui](https://ui.shadcn.com/)
- ✅ [Zod + React Hook Form](https://react-hook-form.com/)


** 👥 Contributors**

Built with 💻 by:

- **Mattia Lavai** – [GitHub](https://github.com/mattialavai) · Product & UI Design · Frontend Dev  
- **Sifan** – [GitHub](https://github.com/Sifan23) · Frontend Dev .Frontend Setup · Repo Owner · Form Logic  

 **🚀 Getting Started**

Clone and run locally:

bash
git clone https://github.com/Sifan23/Zarephath.git
cd Zarephath
npm install
npm run dev
Open http://localhost:3000 to view it in your browser.

**📦 Folder Structure**
csharp
Copy
Edit
Zarephath/
├── public/                  # Static assets: images, logo, favicon, etc.
│   └── assets/              # Organize image files, icons, etc.
│       └── products/
│       └── team/
│       └── banners/

├── app/                     # Next.js App Router (if using `app/` instead of `pages/`)
│   ├── layout.tsx          # Global layout (header/footer)
│   ├── page.tsx            # Homepage (landing)
│   ├── order/              # Order form route
│   └── thank-you/          # Thank you page after form submission

├── components/             # Reusable UI components
│   ├── ui/                 # shadcn/ui-based components (Button, Input, etc.)
│   ├── layout/             # Header, Footer, NavBar, etc.
│   ├── sections/           # Page-specific sections (Hero, Products, AboutUs)
│   └── shared/             # Other shared widgets (Loader, Toasts, etc.)

├── styles/                 # Global styles
│   └── globals.css         # Tailwind base & custom styles

├── lib/                    # Utility functions, API helpers, validators
│   └── form.ts             # zod schema and react-hook-form logic
│   └── utils.ts            # Formatters, constants

├── config/                 # Environment-based settings (metadata, site config)
│   └── site.ts             # Company name, description, social links, etc.

├── types/                  # Global TypeScript interfaces & types
│   └── index.d.ts

├── .env.local              # Environment variables (never commit to GitHub)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md               # Project overview and instructions

**💡 Features**
🏠 Landing page introducing the company

🛒 Product preview with images and descriptions

📝 Order form with validation and WhatsApp redirection

✅ Thank-you page for user confirmation

📱 Fully responsive and mobile-friendly

🔐 Ready for deployment on Vercel or Netlify

✅ To Do / Future Improvements
 Admin dashboard (optional)

 Connect to Google Sheets or Email API

 Live database order storage (optional)

**🌍 Deployment**
Deployed via:

Vercel: https://vercel.com

Netlify: https://netlify.com

**📬 Contact**
Want a landing page like this for your business?

Contact Mattia or Sifan via WhatsApp or email. We design + build modern websites for small businesses and startups.

📜 License
This project is open source and available under the MIT License.
