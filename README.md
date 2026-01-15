# 🚀 Tech Gadgets Store - Next.js E-Commerce Platform

A modern, feature-rich e-commerce platform for gadgets and electronics built with **Next.js 16**, **React 19**, **Tailwind CSS**, and **Firebase**. This project showcases best practices in building scalable, performant web applications with a beautiful user interface.

**🌐 Live Demo:** [https://tech-gadgets-store-git-main-rifat240510-2123s-projects.vercel.app/](https://tech-gadgets-store-git-main-rifat240510-2123s-projects.vercel.app/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Key Components](#key-components)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Overview

Tech Gadgets Store is a comprehensive e-commerce solution designed to provide users with an exceptional shopping experience for the latest gadgets and electronics. The platform features a responsive design, intuitive navigation, detailed product information, user authentication, and an engaging blog section.

---

## ✨ Features

### 🏠 **Homepage**

- **Hero Section** - Eye-catching banner with call-to-action
- **Featured Products** - Showcase of bestselling gadgets
- **Mobile-Friendly Section** - Highlights mobile optimization
- **Quality Commitment** - Brand values and promises
- **Product Showcase** - Detailed product categories
- **Latest News Section** - Blog post highlights
- **Customer Support** - 24/7 support information
- **CTA Section** - Drive user engagement

### 📦 **Products Management**

- **Product Listing Page** - Browse all gadgets with filters
- **Dynamic Product Details Page** - Complete product information including:
  - High-quality product images
  - Detailed descriptions
  - Specifications and features
  - Customer ratings and reviews
  - Stock availability status
  - Quantity selector
  - Add to cart functionality
  - Wishlist support
  - Price display with discounts

### 📝 **Blog System**

- **Blog Homepage** - Latest tech articles and insights
- **Dynamic Blog Posts** - Individual article pages with slug-based routing
- **Categories** - Tech trends, expert reviews, how-to guides, industry news, comparisons, tips & tricks
- **Newsletter Subscription** - Email subscription feature
- **Reading Time Indicator** - Estimated read duration

### 🔐 **User Authentication**

- **Sign Up Page** - User registration with validation
- **Login Page** - User authentication
- **Context API** - State management for user sessions
- **Firebase Integration** - Secure authentication backend

### 📄 **Additional Pages**

- **About Page** - Company information and mission
- **Navigation** - Smooth, intuitive navigation bar
- **Footer** - Quick links and company information

### 🎨 **UI/UX Features**

- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Dark Mode Support** - Eye-friendly viewing options
- **Loading States** - Skeleton screens and spinners
- **Toast Notifications** - User feedback via react-toastify
- **Smooth Animations** - Hover effects and transitions
- **Star Ratings** - Visual product ratings

---

## 🛠️ Tech Stack

### **Frontend**

- **Framework:** [Next.js 16.1.1](https://nextjs.org/) - React meta-framework with SSR/SSG
- **UI Library:** [React 19.2.3](https://react.dev/) - Modern UI component library
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons:** [React Icons 5.5.0](https://react-icons.github.io/react-icons/) - SVG icons library
- **Notifications:** [React Toastify 11.0.5](https://fkhadra.github.io/react-toastify/) - Toast notifications

### **Backend & Services**

- **Firebase 12.7.0** - Authentication and backend services
- **Next.js API Routes** - Serverless functions

### **Development Tools**

- **ESLint 9** - Code quality and linting
- **Babel Plugin React Compiler** - React optimization
- **PostCSS** - CSS processing
- **Tailwind CSS PostCSS** - CSS utilities

### **Deployment**

- **Vercel** - Production hosting and deployment

---

## 📁 Project Structure

```
scic-nextjs-gadgets-store/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.jsx                  # Homepage
│   │   ├── layout.js                 # Root layout wrapper
│   │   ├── globals.css               # Global styles
│   │   ├── favicon.ico               # Browser tab icon
│   │   ├── about/
│   │   │   └── page.jsx              # About page
│   │   ├── blog/
│   │   │   ├── page.jsx              # Blog listing page
│   │   │   └── [slug]/
│   │   │       └── page.jsx          # Dynamic blog post page
│   │   ├── products/
│   │   │   ├── page.jsx              # Products listing page
│   │   │   └── [id]/
│   │   │       └── page.jsx          # Dynamic product details page
│   │   ├── login/
│   │   │   └── page.jsx              # Login page
│   │   ├── signUp/
│   │   │   └── page.jsx              # Sign up page
│   │   └── context/
│   │       ├── AuthContext.jsx       # Auth context definition
│   │       └── AuthProvider.jsx      # Auth provider wrapper
│   │
│   └── components/                   # Reusable components
│       ├── Navber.jsx                # Navigation bar
│       ├── NavLink.jsx               # Navigation links
│       ├── Footer.jsx                # Footer component
│       ├── Products.jsx              # Products grid component
│       ├── form/
│       │   ├── LoginForm.jsx         # Login form component
│       │   └── SignUpForm.jsx        # Sign up form component
│       └── home/
│           ├── HomeHero.jsx          # Hero section
│           ├── FeaturedProducts.jsx  # Featured products section
│           ├── MobileFriendlySection.jsx
│           ├── QualityCommitmentSection.jsx
│           ├── ProductShowcaseSection.jsx
│           ├── LatestNews.jsx        # Blog highlights section
│           └── CustomerSupportSection.jsx
│
├── firebase/
│   └── firebase.config.js            # Firebase configuration
│
├── public/
│   └── data.json                     # Products database (JSON)
│
├── eslint.config.mjs                 # ESLint configuration
├── next.config.mjs                   # Next.js configuration
├── jsconfig.json                     # JavaScript configuration
├── postcss.config.mjs                # PostCSS configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── package.json                      # Project dependencies
└── README.md                         # This file
```

---

## 🗺️ Pages & Routes

| Route            | Page             | Description                                           |
| ---------------- | ---------------- | ----------------------------------------------------- |
| `/`              | Homepage         | Main landing page with featured products and sections |
| `/products`      | Products Listing | All products with filtering options                   |
| `/products/[id]` | Product Details  | Individual product page with full information         |
| `/blog`          | Blog Listing     | All blog posts with categories                        |
| `/blog/[slug]`   | Blog Post        | Individual blog article                               |
| `/about`         | About            | Company information page                              |
| `/login`         | Login            | User authentication page                              |
| `/signUp`        | Sign Up          | User registration page                                |

---

## 🚀 Installation & Setup

### **Prerequisites**

- Node.js 18+ or higher
- npm, yarn, or bun package manager
- Firebase account (for authentication)
- Git for version control

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/yourusername/scic-nextjs-gadgets-store.git
cd scic-nextjs-gadgets-store
```

### **Step 2: Install Dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### **Step 3: Configure Firebase**

Update the Firebase configuration in `src/firebase/firebase.config.js`:

```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export const app = initializeApp(firebaseConfig);
```

### **Step 4: Create Environment Variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

---

## ▶️ Running the Application

### **Development Mode**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### **Build for Production**

```bash
npm run build
npm run start
```

### **Linting**

```bash
npm run lint
```

---

## 🧩 Key Components

### **Navigation Component**

- Responsive navbar with mobile menu
- Active link highlighting
- Quick access to main pages

### **Products Component**

- Grid layout with responsive design
- Product card with image, price, and rating
- Add to cart and view details buttons
- Stock status indicators

### **Product Details Component**

- Large product image with zoom
- Detailed specifications and features
- Customer ratings and reviews count
- Quantity selector
- Add to cart and wishlist buttons
- Trust badges and security indicators

### **Blog Components**

- Featured blog posts with images
- Category filtering
- Newsletter subscription
- Dynamic routing with slug-based URLs

### **Authentication Forms**

- Sign up with email validation
- Login functionality
- Firebase integration
- Error handling and validation

### **Home Sections**

- Hero section with CTA
- Featured products showcase
- Quality commitment messaging
- Customer support information
- Latest news/blog highlights
- Mobile-friendly design showcase

---

## 🔄 Data Management

### **Products Data**

Products are stored in `public/data.json` with the following structure:

```json
{
  "id": "1",
  "name": "Product Name",
  "description": "Product description",
  "price": 120,
  "image": "image_url",
  "category": "Category",
  "brand": "Brand Name",
  "rating": 4.6,
  "reviewsCount": 245,
  "stock": 25,
  "features": ["Feature 1", "Feature 2"],
  "createdAt": "2024-11-12"
}
```

### **Blog Posts Data**

Blog posts are defined in `src/app/blog/page.jsx` with:

- Title, excerpt, and full description
- Author and publication date
- Category and reading time
- Dynamic slug-based routing

---

## 🌐 Deployment

The project is currently deployed on **Vercel**. To deploy your own version:

### **Deploy on Vercel**

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Click "Deploy"

```bash
# Deploy using Vercel CLI
npm install -g vercel
vercel
```

---

## 📦 Dependencies Overview

| Package        | Version | Purpose                  |
| -------------- | ------- | ------------------------ |
| next           | 16.1.1  | React framework          |
| react          | 19.2.3  | UI library               |
| react-dom      | 19.2.3  | DOM rendering            |
| tailwindcss    | 4       | CSS framework            |
| firebase       | 12.7.0  | Authentication & backend |
| react-icons    | 5.5.0   | Icon library             |
| react-toastify | 11.0.5  | Notifications            |
| react-spinners | 0.17.0  | Loading spinners         |
| eslint         | 9       | Code linting             |

---

## 🎨 Styling & Design

- **Tailwind CSS** - Utility-first CSS for rapid UI development
- **Responsive Design** - Mobile-first approach
- **Modern Colors** - Blue gradient themes with complementary colors
- **Smooth Animations** - Hover effects and transitions
- **Accessible** - WCAG compliance considerations

---

## 🔒 Security Features

- **Firebase Authentication** - Secure user login
- **Environment Variables** - Sensitive data protection
- **HTTPS** - Encrypted data transmission
- **Input Validation** - Form validation on client and server
- **CORS** - Cross-origin resource sharing protection

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Icons Guide](https://react-icons.github.io/react-icons/)

---

## 📝 License

This project is open source and available under the MIT License.

---

## 📧 Support

For questions, issues, or suggestions, please open an issue on the GitHub repository or contact the development team.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Happy Coding! 🚀**
