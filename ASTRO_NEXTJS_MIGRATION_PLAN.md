# A1 Furniture Polish - Complete Migration & Booking System Plan

## 🎯 Goal
Fast marketing website (Astro) + Advanced booking system (Next.js)

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  a1furniturepolish.com (Main Domain)               │
│                                                     │
│  ┌──────────────────┐      ┌──────────────────┐   │
│  │   ASTRO SITE     │      │   NEXT.JS APP    │   │
│  │   (Marketing)    │◄────►│   (Booking)      │   │
│  │                  │      │                  │   │
│  │  - Home          │      │  - Login/Signup  │   │
│  │  - About         │      │  - Book Service  │   │
│  │  - Services      │      │  - My Bookings   │   │
│  │  - Blog          │      │  - Payment       │   │
│  │  - Contact       │      │  - Admin Panel   │   │
│  │                  │      │                  │   │
│  │  Static (Fast)   │      │  Dynamic (SSR)   │   │
│  └──────────────────┘      └──────────────────┘   │
│         ↓                           ↓              │
│    Vercel/Netlify              Vercel              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 📋 Phase-wise Implementation

### **PHASE 1: Astro Marketing Site (Week 1-2)**
**Goal:** Ultra-fast static marketing website

#### Tasks:
- [ ] Setup Astro project
- [ ] Migrate all static pages
- [ ] Optimize images
- [ ] Setup Tailwind CSS
- [ ] Add SEO meta tags
- [ ] Generate sitemap
- [ ] Deploy to Vercel/Netlify

#### Pages to Migrate:
- Home page
- About page
- Services listing
- Individual service pages
- Blog listing & posts
- Contact page (form only)

#### Performance Target:
- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 1.5s

---

### **PHASE 2: Next.js Booking System (Week 3-5)**
**Goal:** Full-featured booking platform

#### Tech Stack:
```json
{
  "framework": "Next.js 14 (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS + Shadcn UI",
  "database": "PostgreSQL (Supabase/Neon)",
  "orm": "Prisma",
  "auth": "NextAuth.js",
  "payments": "Razorpay",
  "storage": "Cloudinary/Supabase Storage",
  "notifications": "Twilio/WhatsApp Business API"
}
```

#### Features:

**1. User Authentication**
- Email/Password signup
- Google OAuth
- Phone OTP login
- User profile management

**2. Service Booking Flow**
```
Select Service → Choose Date/Time → Add Address → 
Review Details → Make Payment → Confirmation
```

**3. Booking Management**
- View upcoming bookings
- Booking history
- Cancel/Reschedule
- Track service status
- Rate & review

**4. Payment Integration**
- Razorpay gateway
- Multiple payment methods
- Booking confirmation
- Invoice generation

**5. Admin Dashboard**
- View all bookings
- Manage availability
- Assign professionals
- Track revenue
- Customer management

---

### **PHASE 3: Integration & Polish (Week 6)**

#### Connect Both Systems:
- Astro site links to Next.js booking
- Shared design system
- Consistent branding
- Unified navigation

#### Testing:
- End-to-end booking flow
- Payment testing
- Mobile responsiveness
- Performance optimization
- Security audit

---

## 🗂️ Project Structure

### **Astro Site (Marketing)**
```
a1-furniture-astro/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   └── BlogCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   └── [service].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── contact.astro
│   └── data/
│       ├── services.ts
│       └── blogPosts.ts
└── public/
    └── assets/
```

### **Next.js App (Booking)**
```
a1-booking-app/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── (booking)/
│   │   │   ├── book/
│   │   │   ├── checkout/
│   │   │   └── confirmation/
│   │   ├── (dashboard)/
│   │   │   ├── bookings/
│   │   │   ├── profile/
│   │   │   └── admin/
│   │   └── api/
│   │       ├── auth/
│   │       ├── bookings/
│   │       └── payments/
│   ├── components/
│   │   ├── ui/ (Shadcn)
│   │   ├── booking/
│   │   └── dashboard/
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   └── types/
├── prisma/
│   └── schema.prisma
└── public/
```

---

## 🗄️ Database Schema

```prisma
// prisma/schema.prisma

model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  phone         String?
  password      String?
  image         String?
  role          Role      @default(CUSTOMER)
  bookings      Booking[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Service {
  id            String    @id @default(cuid())
  name          String
  slug          String    @unique
  description   String
  price         Float
  duration      Int       // in minutes
  image         String
  category      String
  active        Boolean   @default(true)
  bookings      Booking[]
}

model Booking {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  serviceId     String
  service       Service   @relation(fields: [serviceId], references: [id])
  date          DateTime
  timeSlot      String
  address       String
  city          String
  pincode       String
  status        BookingStatus @default(PENDING)
  amount        Float
  paymentId     String?
  paymentStatus PaymentStatus @default(PENDING)
  notes         String?
  rating        Int?
  review        String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum Role {
  CUSTOMER
  PROFESSIONAL
  ADMIN
}

enum BookingStatus {
  PENDING
  CONFIRMED
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

enum PaymentStatus {
  PENDING
  PAID
  FAILED
  REFUNDED
}
```

---

## 🎨 Design System (Shared)

### Colors:
```css
:root {
  --primary: #d97706;      /* Amber-600 */
  --primary-dark: #b45309; /* Amber-700 */
  --secondary: #1f2937;    /* Gray-800 */
  --accent: #f59e0b;       /* Amber-500 */
  --success: #10b981;      /* Green-500 */
  --error: #ef4444;        /* Red-500 */
}
```

### Components:
- Buttons (Primary, Secondary, Outline)
- Cards (Service, Booking, Review)
- Forms (Input, Select, Textarea)
- Modals (Confirmation, Info)
- Toasts (Success, Error, Info)

---

## 🔗 URL Structure

### Marketing Site (Astro):
```
https://a1furniturepolish.com/
https://a1furniturepolish.com/about
https://a1furniturepolish.com/services
https://a1furniturepolish.com/services/wooden-furniture-polish
https://a1furniturepolish.com/blog
https://a1furniturepolish.com/blog/post-slug
https://a1furniturepolish.com/contact
```

### Booking App (Next.js):
```
https://book.a1furniturepolish.com/
https://book.a1furniturepolish.com/login
https://book.a1furniturepolish.com/book/wooden-furniture-polish
https://book.a1furniturepolish.com/checkout
https://book.a1furniturepolish.com/bookings
https://book.a1furniturepolish.com/admin
```

**OR** (Single domain approach):
```
https://a1furniturepolish.com/          (Astro)
https://a1furniturepolish.com/book      (Next.js)
```

---

## 💰 Cost Estimate

### Development:
- Astro Migration: 1-2 weeks
- Next.js Booking System: 3-4 weeks
- Integration & Testing: 1 week
- **Total: 5-7 weeks**

### Hosting (Monthly):
- Vercel (Astro): Free tier
- Vercel (Next.js): Free tier / $20
- Database (Supabase): Free tier / $25
- Storage (Cloudinary): Free tier / $0
- **Total: ₹0-3,500/month**

### Third-party Services:
- Razorpay: 2% per transaction
- Twilio SMS: ₹0.50/SMS
- Domain: ₹1,000/year

---

## 📱 Features Breakdown

### MVP (Minimum Viable Product) - Week 1-4:
✅ Fast marketing site
✅ User authentication
✅ Service selection
✅ Date/time booking
✅ Basic payment
✅ Booking confirmation

### Phase 2 - Week 5-6:
✅ Admin dashboard
✅ Booking management
✅ Professional assignment
✅ SMS notifications
✅ Rating & reviews

### Phase 3 - Future:
- Mobile app (React Native)
- Professional app
- Advanced analytics
- Loyalty program
- Referral system

---

## 🚀 Deployment Strategy

### Astro Site:
```bash
# Build
npm run build

# Deploy to Vercel
vercel --prod

# OR Netlify
netlify deploy --prod
```

### Next.js App:
```bash
# Setup environment variables
DATABASE_URL=
NEXTAUTH_SECRET=
RAZORPAY_KEY=

# Deploy to Vercel
vercel --prod
```

---

## 📊 Success Metrics

### Performance:
- Lighthouse Score: 95+
- Page Load: < 2s
- Time to Interactive: < 1.5s

### Business:
- Booking conversion: 5-10%
- Average booking value: ₹2,000+
- Customer retention: 30%+

### User Experience:
- Mobile-friendly: 100%
- Booking completion: 80%+
- Customer satisfaction: 4.5+ stars

---

## 🎯 Next Steps

1. **Approve this plan**
2. **Start with Astro migration** (fastest wins)
3. **Parallel: Design booking system UI**
4. **Build Next.js booking app**
5. **Integrate & test**
6. **Launch! 🚀**

---

## ⚡ Quick Start Commands

### Astro Setup:
```bash
npm create astro@latest a1-furniture-astro
cd a1-furniture-astro
npx astro add react tailwind
npm run dev
```

### Next.js Setup:
```bash
npx create-next-app@latest a1-booking-app --typescript --tailwind --app
cd a1-booking-app
npm install prisma @prisma/client next-auth
npx prisma init
npm run dev
```

---

**Ready to start? Let me know!** 🚀
