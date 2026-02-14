# JOB-MATCHING FRONTEND - PLANNING & SETUP GUIDE

> **Mục đích**: Tài liệu này hướng dẫn chi tiết việc setup môi trường và kiến trúc Frontend cho hệ thống Job-Matching, đảm bảo cấu trúc chuẩn, dễ scale và maintain.

---

## 📋 MỤC LỤC

1. [Tổng quan Tech Stack](#1-tổng-quan-tech-stack)
2. [Kiến trúc Frontend](#2-kiến-trúc-frontend)
3. [Cấu trúc thư mục chi tiết](#3-cấu-trúc-thư-mục-chi-tiết)
4. [Hướng dẫn Setup môi trường](#4-hướng-dẫn-setup-môi-trường)
5. [Configuration Files](#5-configuration-files)
6. [Dependencies & Packages](#6-dependencies--packages)
7. [Docker Setup](#7-docker-setup)
8. [Development Workflow](#8-development-workflow)
9. [Best Practices](#9-best-practices)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. TỔNG QUAN TECH STACK

### 1.1. Core Framework

```
Next.js 15+          → App Router, Server Components, Server Actions
TypeScript 5.3+      → Strict mode enabled
React 19             → Latest features
Node.js 20 LTS       → Runtime environment
pnpm 8+              → Package manager (nhanh hơn npm/yarn)
```

### 1.2. UI & Styling

```
shadcn/ui            → Component library (copy-paste, fully customizable)
Tailwind CSS 3.4+    → Utility-first CSS framework
Lucide React         → Icon library (lightweight, tree-shakeable)
Radix UI             → Headless UI primitives (accessibility built-in)
class-variance-authority (cva) → Variant management cho components
clsx + tailwind-merge → Conditional className utilities
```

### 1.3. State Management & Data

```
Zustand 4.4+         → Global state (auth, theme, user preferences)
TanStack Query v5    → Server state, caching, synchronization
Zod 3.22+            → Schema validation, type inference
```

### 1.4. Forms & Validation

```
React Hook Form 7.48+ → Form state management
Zod                   → Runtime validation + TypeScript types
@hookform/resolvers   → Zod integration với React Hook Form
```

### 1.5. API & Networking

```
Axios 1.6+           → HTTP client (interceptors, request cancellation)
MSW 2.0+             → Mock Service Worker (API mocking)
```

### 1.6. Development Tools

```
ESLint 8+            → Code linting
Prettier 3+          → Code formatting
Husky 8+             → Git hooks
lint-staged          → Run linters on staged files
TypeScript ESLint    → TypeScript-specific linting rules
```

### 1.7. Testing (Optional - có thể thêm sau)

```
Vitest               → Unit testing (faster than Jest)
Testing Library      → Component testing
Playwright           → E2E testing
```

---

## 2. KIẾN TRÚC FRONTEND

### 2.1. Architecture Pattern

**Feature-Sliced Design (FSD)** kết hợp **Clean Architecture**

```
Principles:
├── Separation of Concerns    → Tách biệt UI, Business Logic, Data
├── Dependency Rule           → Inner layers không biết outer layers
├── Feature-based Structure   → Code theo tính năng, không theo type
└── Scalability First         → Dễ thêm features mới
```

### 2.2. Layer Architecture

```
┌─────────────────────────────────────────┐
│         PRESENTATION LAYER              │  ← React Components, Pages
│  (app/, components/, features/)         │
├─────────────────────────────────────────┤
│         APPLICATION LAYER               │  ← Business Logic, Hooks
│  (hooks/, services/, stores/)           │
├─────────────────────────────────────────┤
│         DOMAIN LAYER                    │  ← Types, Schemas, Models
│  (types/, schemas/, constants/)         │
├─────────────────────────────────────────┤
│         INFRASTRUCTURE LAYER            │  ← API, Utils, Config
│  (lib/, utils/, config/)                │
└─────────────────────────────────────────┘
```

### 2.3. Data Flow

```
User Interaction
      ↓
  Component
      ↓
  Custom Hook (useJobs, useMatching)
      ↓
  TanStack Query (caching layer)
      ↓
  API Service (axios wrapper)
      ↓
  MSW (development) / Real API (production)
```

---

## 3. CẤU TRÚC THƯ MỤC CHI TIẾT

### 3.1. Full Directory Structure

```
job-matching-frontend/
│
├── .husky/                          # Git hooks configuration
│   ├── pre-commit                   # Run lint-staged before commit
│   └── commit-msg                   # Validate commit message format
│
├── .vscode/                         # VSCode settings
│   ├── settings.json                # Workspace settings
│   ├── extensions.json              # Recommended extensions
│   └── launch.json                  # Debug configurations
│
├── public/                          # Static assets
│   ├── images/                      # Images, logos
│   ├── fonts/                       # Custom fonts (nếu cần)
│   └── favicon.ico                  # Favicon
│
├── src/
│   │
│   ├── app/                         # Next.js App Router
│   │   ├── (auth)/                  # Route group - Authentication
│   │   │   ├── login/
│   │   │   │   └── page.tsx         # Login page
│   │   │   ├── register/
│   │   │   │   └── page.tsx         # Register page
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx         # Forgot password
│   │   │   └── layout.tsx           # Auth layout (centered, no navbar)
│   │   │
│   │   ├── (candidate)/             # Route group - Candidate dashboard
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx         # Candidate dashboard
│   │   │   ├── jobs/
│   │   │   │   ├── page.tsx         # Job listing
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx     # Job detail
│   │   │   ├── matches/
│   │   │   │   └── page.tsx         # Matching results
│   │   │   ├── profile/
│   │   │   │   ├── page.tsx         # Profile & CV management
│   │   │   │   └── edit/
│   │   │   │       └── page.tsx     # Edit profile
│   │   │   ├── applications/
│   │   │   │   └── page.tsx         # Applied jobs tracking
│   │   │   └── layout.tsx           # Candidate layout (sidebar, header)
│   │   │
│   │   ├── (employer)/              # Route group - Employer dashboard
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx         # Employer dashboard
│   │   │   ├── jobs/
│   │   │   │   ├── page.tsx         # Job management listing
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx     # Create new job
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx     # Job detail & edit
│   │   │   │       └── candidates/
│   │   │   │           └── page.tsx # Matched candidates for this job
│   │   │   ├── candidates/
│   │   │   │   ├── page.tsx         # All candidates
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx     # Candidate profile view
│   │   │   ├── matches/
│   │   │   │   └── page.tsx         # Matching results overview
│   │   │   └── layout.tsx           # Employer layout
│   │   │
│   │   ├── api/                     # API routes (nếu cần)
│   │   │   └── health/
│   │   │       └── route.ts         # Health check endpoint
│   │   │
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Landing page
│   │   ├── not-found.tsx            # 404 page
│   │   ├── error.tsx                # Error boundary
│   │   └── globals.css              # Global styles
│   │
│   ├── components/                  # React Components
│   │   │
│   │   ├── ui/                      # shadcn/ui components (auto-generated)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── select.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── ...                  # Thêm theo nhu cầu
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── header.tsx           # Main header/navbar
│   │   │   ├── sidebar.tsx          # Sidebar navigation
│   │   │   ├── footer.tsx           # Footer
│   │   │   └── container.tsx        # Content container wrapper
│   │   │
│   │   ├── common/                  # Common reusable components
│   │   │   ├── loading-spinner.tsx  # Loading states
│   │   │   ├── empty-state.tsx      # Empty states
│   │   │   ├── error-boundary.tsx   # Error handling
│   │   │   ├── pagination.tsx       # Pagination component
│   │   │   └── search-bar.tsx       # Search input
│   │   │
│   │   └── features/                # Feature-specific components
│   │       ├── auth/                # Authentication components
│   │       │   ├── login-form.tsx
│   │       │   ├── register-form.tsx
│   │       │   └── oauth-buttons.tsx
│   │       │
│   │       ├── job/                 # Job-related components
│   │       │   ├── job-card.tsx     # Job listing card
│   │       │   ├── job-filters.tsx  # Filter sidebar
│   │       │   ├── job-detail-header.tsx
│   │       │   └── job-form.tsx     # Create/Edit job form
│   │       │
│   │       ├── candidate/           # Candidate components
│   │       │   ├── cv-upload.tsx    # CV upload widget
│   │       │   ├── cv-preview.tsx   # CV viewer
│   │       │   ├── profile-card.tsx
│   │       │   └── skill-tags.tsx
│   │       │
│   │       └── matching/            # Matching components
│   │           ├── match-score-gauge.tsx  # Visual score (0-100)
│   │           ├── match-details.tsx      # Strengths/Gaps breakdown
│   │           └── match-card.tsx         # Match result card
│   │
│   ├── hooks/                       # Custom React Hooks
│   │   ├── use-auth.ts              # Authentication state & actions
│   │   ├── use-user.ts              # Current user info
│   │   ├── use-jobs.ts              # Job data fetching
│   │   ├── use-matching.ts          # Matching operations
│   │   ├── use-toast.ts             # Toast notifications
│   │   ├── use-debounce.ts          # Debounce utility
│   │   ├── use-local-storage.ts     # LocalStorage wrapper
│   │   └── use-media-query.ts       # Responsive breakpoints
│   │
│   ├── lib/                         # Libraries & configurations
│   │   ├── api/                     # API client setup
│   │   │   ├── client.ts            # Axios instance
│   │   │   ├── interceptors.ts      # Request/Response interceptors
│   │   │   └── endpoints.ts         # API endpoint constants
│   │   │
│   │   ├── utils/                   # Utility functions
│   │   │   ├── cn.ts                # className utility (clsx + tailwind-merge)
│   │   │   ├── format.ts            # Date, number formatting
│   │   │   ├── validation.ts        # Common validations
│   │   │   └── file.ts              # File handling utilities
│   │   │
│   │   └── providers/               # Context providers
│   │       ├── query-provider.tsx   # TanStack Query setup
│   │       ├── theme-provider.tsx   # Theme (light/dark mode)
│   │       └── toast-provider.tsx   # Toast notifications
│   │
│   ├── services/                    # API service layer
│   │   ├── auth.service.ts          # Login, Register, Logout
│   │   ├── job.service.ts           # Job CRUD operations
│   │   ├── candidate.service.ts     # Candidate operations
│   │   ├── matching.service.ts      # Matching API calls
│   │   └── upload.service.ts        # File upload (CV, images)
│   │
│   ├── stores/                      # Zustand stores
│   │   ├── auth.store.ts            # Auth state (user, token, isAuthenticated)
│   │   ├── ui.store.ts              # UI state (sidebar open/close, theme)
│   │   └── filter.store.ts          # Filter state (job filters, search)
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── index.ts                 # Export all types
│   │   ├── api.ts                   # API request/response types
│   │   ├── entities/                # Business entities
│   │   │   ├── user.ts              # User, Candidate, Employer
│   │   │   ├── job.ts               # Job, JobPosting
│   │   │   ├── matching.ts          # MatchingResult, MatchScore
│   │   │   └── cv.ts                # CV, Resume
│   │   ├── components.ts            # Component prop types
│   │   └── common.ts                # Common types (Pagination, etc.)
│   │
│   ├── schemas/                     # Zod validation schemas
│   │   ├── auth.schema.ts           # Login, Register validation
│   │   ├── job.schema.ts            # Job form validation
│   │   ├── profile.schema.ts        # Profile form validation
│   │   └── index.ts                 # Export all schemas
│   │
│   ├── constants/                   # Constants & configurations
│   │   ├── routes.ts                # Route paths
│   │   ├── api-endpoints.ts         # API URLs
│   │   ├── config.ts                # App configuration
│   │   └── regex.ts                 # Common regex patterns
│   │
│   ├── mocks/                       # MSW (Mock Service Worker)
│   │   ├── handlers/                # Request handlers
│   │   │   ├── auth.handlers.ts     # Auth endpoints
│   │   │   ├── job.handlers.ts      # Job endpoints
│   │   │   └── matching.handlers.ts # Matching endpoints
│   │   ├── data/                    # Mock data
│   │   │   ├── users.ts             # Mock users
│   │   │   ├── jobs.ts              # Mock jobs
│   │   │   └── matches.ts           # Mock matching results
│   │   ├── browser.ts               # MSW browser setup
│   │   └── server.ts                # MSW server setup (for testing)
│   │
│   └── styles/                      # Additional styles
│       └── globals.css              # Tailwind directives, custom CSS
│
├── .env.local                       # Environment variables (local)
├── .env.example                     # Example env file
├── .eslintrc.json                   # ESLint configuration
├── .prettierrc                      # Prettier configuration
├── .gitignore                       # Git ignore rules
├── components.json                  # shadcn/ui configuration
├── docker-compose.yml               # Docker compose for local dev
├── Dockerfile                       # Production Docker image
├── next.config.js                   # Next.js configuration
├── package.json                     # Dependencies & scripts
├── pnpm-lock.yaml                   # Lock file
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Project documentation
```

### 3.2. Giải thích cấu trúc quan trọng

#### **Route Groups trong App Router**

```
(auth)      → Không tạo path segment, chỉ để group layout
              URL: /login, /register (không có /auth/)

(candidate) → Candidate dashboard routes
              URL: /dashboard, /jobs, /matches

(employer)  → Employer dashboard routes
              URL: /dashboard, /jobs, /candidates
```

#### **Component Organization**

```
ui/         → Base components từ shadcn/ui, không custom logic
common/     → Reusable components, có thể có logic đơn giản
features/   → Complex components tied to specific features
layout/     → Layout components (Header, Sidebar, Footer)
```

#### **Data Layer**

```
services/   → API calls (axios wrappers)
hooks/      → React hooks sử dụng TanStack Query
stores/     → Global state (Zustand)
```

---

## 4. HƯỚNG DẪN SETUP MÔI TRƯỜNG

### 4.1. Prerequisites (Yêu cầu hệ thống)

```bash
# Kiểm tra version
node --version    # >= 20.0.0
pnpm --version    # >= 8.0.0
git --version     # >= 2.30.0
docker --version  # >= 24.0.0 (optional)
```

**Cài đặt pnpm (nếu chưa có):**

```bash
# Windows (PowerShell as Administrator)
iwr https://get.pnpm.io/install.ps1 -useb | iex

# Hoặc qua npm
npm install -g pnpm
```

### 4.2. Khởi tạo Project

**Bước 1: Create Next.js Project**

```bash
# Navigate to workspace
cd /path/to/your/workspace

# Create Next.js app với pnpm
pnpm create next-app@latest job-matching-frontend

# Chọn options sau:
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? … Yes
✔ Would you like to customize the default import alias (@/*)? … No

# Di chuyển vào project
cd job-matching-frontend
```

**Bước 2: Install Core Dependencies**

```bash
# State Management & Data Fetching
pnpm add zustand @tanstack/react-query

# Forms & Validation
pnpm add react-hook-form zod @hookform/resolvers

# API Client
pnpm add axios

# UI Utilities
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react

# Date handling
pnpm add date-fns

# Development Dependencies
pnpm add -D @types/node
pnpm add -D prettier prettier-plugin-tailwindcss
pnpm add -D eslint-config-prettier
pnpm add -D husky lint-staged
pnpm add -D msw
```

**Bước 3: Setup shadcn/ui**

```bash
# Initialize shadcn/ui
pnpm dlx shadcn-ui@latest init

# Chọn options:
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? … yes

# Install commonly used components
pnpm dlx shadcn-ui@latest add button
pnpm dlx shadcn-ui@latest add input
pnpm dlx shadcn-ui@latest add card
pnpm dlx shadcn-ui@latest add dialog
pnpm dlx shadcn-ui@latest add dropdown-menu
pnpm dlx shadcn-ui@latest add select
pnpm dlx shadcn-ui@latest add toast
pnpm dlx shadcn-ui@latest add badge
pnpm dlx shadcn-ui@latest add skeleton
pnpm dlx shadcn-ui@latest add avatar
pnpm dlx shadcn-ui@latest add separator
pnpm dlx shadcn-ui@latest add label
pnpm dlx shadcn-ui@latest add textarea
pnpm dlx shadcn-ui@latest add form
```

**Bước 4: Setup Git Hooks**

```bash
# Initialize Husky
pnpm exec husky init

# Add pre-commit hook
echo "pnpm lint-staged" > .husky/pre-commit
```

**Bước 5: Create folder structure**

```bash
# Tạo tất cả thư mục cần thiết (run trong terminal)
# Linux/Mac:
mkdir -p src/{hooks,lib/{api,utils,providers},services,stores,types/entities,schemas,constants,mocks/{handlers,data},styles}
mkdir -p src/components/{layout,common,features/{auth,job,candidate,matching}}
mkdir -p src/app/{api/health,\(auth\)/{login,register,forgot-password},\(candidate\)/{dashboard,jobs/[id],matches,profile/{edit},applications},\(employer\)/{dashboard,jobs/{create,[id]/candidates},candidates/[id],matches}}
mkdir -p public/{images,fonts}
mkdir -p .vscode

# Windows (PowerShell):
New-Item -ItemType Directory -Force -Path src/hooks
New-Item -ItemType Directory -Force -Path src/lib/api
New-Item -ItemType Directory -Force -Path src/lib/utils
New-Item -ItemType Directory -Force -Path src/lib/providers
New-Item -ItemType Directory -Force -Path src/services
New-Item -ItemType Directory -Force -Path src/stores
New-Item -ItemType Directory -Force -Path src/types/entities
New-Item -ItemType Directory -Force -Path src/schemas
New-Item -ItemType Directory -Force -Path src/constants
New-Item -ItemType Directory -Force -Path src/mocks/handlers
New-Item -ItemType Directory -Force -Path src/mocks/data
New-Item -ItemType Directory -Force -Path src/styles
New-Item -ItemType Directory -Force -Path src/components/layout
New-Item -ItemType Directory -Force -Path src/components/common
New-Item -ItemType Directory -Force -Path src/components/features/auth
New-Item -ItemType Directory -Force -Path src/components/features/job
New-Item -ItemType Directory -Force -Path src/components/features/candidate
New-Item -ItemType Directory -Force -Path src/components/features/matching
New-Item -ItemType Directory -Force -Path "src/app/(auth)/login"
New-Item -ItemType Directory -Force -Path "src/app/(auth)/register"
New-Item -ItemType Directory -Force -Path "src/app/(auth)/forgot-password"
New-Item -ItemType Directory -Force -Path "src/app/(candidate)/dashboard"
New-Item -ItemType Directory -Force -Path "src/app/(candidate)/jobs/[id]"
New-Item -ItemType Directory -Force -Path "src/app/(candidate)/matches"
New-Item -ItemType Directory -Force -Path "src/app/(candidate)/profile/edit"
New-Item -ItemType Directory -Force -Path "src/app/(candidate)/applications"
New-Item -ItemType Directory -Force -Path "src/app/(employer)/dashboard"
New-Item -ItemType Directory -Force -Path "src/app/(employer)/jobs/create"
New-Item -ItemType Directory -Force -Path "src/app/(employer)/jobs/[id]/candidates"
New-Item -ItemType Directory -Force -Path "src/app/(employer)/candidates/[id]"
New-Item -ItemType Directory -Force -Path "src/app/(employer)/matches"
New-Item -ItemType Directory -Force -Path public/images
New-Item -ItemType Directory -Force -Path public/fonts
New-Item -ItemType Directory -Force -Path .vscode
```

---

## 5. CONFIGURATION FILES

### 5.1. Environment Variables

**File: `.env.example`**

```env
# App Configuration
NEXT_PUBLIC_APP_NAME=Job Matching Platform
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_AI_API_URL=http://localhost:8000/api

# Feature Flags
NEXT_PUBLIC_ENABLE_MSW=true
NEXT_PUBLIC_ENABLE_ANALYTICS=false

# Upload Configuration
NEXT_PUBLIC_MAX_FILE_SIZE=5242880
NEXT_PUBLIC_ALLOWED_FILE_TYPES=.pdf,.doc,.docx
```

**File: `.env.local`** (copy from .env.example)

```bash
cp .env.example .env.local
```

### 5.2. TypeScript Configuration

**File: `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    },
    "baseUrl": "."
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 5.3. Tailwind Configuration

**File: `tailwind.config.ts`**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 5.4. ESLint Configuration

**File: `.eslintrc.json`**

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

### 5.5. Prettier Configuration

**File: `.prettierrc`**

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 5.6. lint-staged Configuration

**File: `package.json` (add this section)**

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

### 5.7. VSCode Settings

**File: `.vscode/settings.json`**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

**File: `.vscode/extensions.json`**

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "csstools.postcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### 5.8. Next.js Configuration

**File: `next.config.js`**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    domains: [
      "localhost",
      // Add your image domains here
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Environment variables available on client
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // MSW support
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },

  // Experimental features
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

module.exports = nextConfig;
```

---

## 6. DEPENDENCIES & PACKAGES

### 6.1. Complete package.json

**File: `package.json`**

```json
{
  "name": "job-matching-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "type-check": "tsc --noEmit",
    "prepare": "husky install"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",

    "zustand": "^4.4.7",
    "@tanstack/react-query": "^5.17.0",

    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",

    "axios": "^1.6.0",

    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-avatar": "^1.0.4",

    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.1.0",
    "lucide-react": "^0.294.0",

    "date-fns": "^3.0.0",

    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",

    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",

    "eslint": "^8.55.0",
    "eslint-config-next": "^15.0.0",
    "eslint-config-prettier": "^9.1.0",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",

    "prettier": "^3.1.0",
    "prettier-plugin-tailwindcss": "^0.5.9",

    "husky": "^8.0.3",
    "lint-staged": "^15.2.0",

    "msw": "^2.0.0"
  }
}
```

### 6.2. Installation Command

```bash
# Hoặc install tất cả cùng lúc
pnpm install
```

---

## 7. DOCKER SETUP

### 7.1. Dockerfile (Production)

**File: `Dockerfile`**

```dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:20-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build arguments
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_AI_API_URL

ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_AI_API_URL=${NEXT_PUBLIC_AI_API_URL}
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

# Stage 3: Runner
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### 7.2. Docker Compose (Development)

**File: `docker-compose.yml`**

```yaml
version: "3.8"

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.dev
    container_name: job-matching-frontend
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    environment:
      - NODE_ENV=development
      - NEXT_PUBLIC_API_URL=http://backend:8080/api
      - NEXT_PUBLIC_AI_API_URL=http://ai-service:8000/api
      - WATCHPACK_POLLING=true
    networks:
      - job-matching-network
    depends_on:
      - backend
      - ai-service

  # Placeholder cho backend (sẽ implement sau)
  backend:
    image: openjdk:21-slim
    container_name: job-matching-backend
    ports:
      - "8080:8080"
    networks:
      - job-matching-network
    # Backend config sẽ thêm sau

  # Placeholder cho AI service (sẽ implement sau)
  ai-service:
    image: python:3.11-slim
    container_name: job-matching-ai
    ports:
      - "8000:8000"
    networks:
      - job-matching-network
    # AI service config sẽ thêm sau

networks:
  job-matching-network:
    driver: bridge
```

**File: `Dockerfile.dev`**

```dockerfile
FROM node:20-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
```

### 7.3. .dockerignore

**File: `.dockerignore`**

```
node_modules
.next
.git
.gitignore
.vscode
.env.local
*.md
Dockerfile*
docker-compose*.yml
.husky
coverage
.turbo
```

---

## 8. DEVELOPMENT WORKFLOW

### 8.1. Daily Development Commands

```bash
# Start development server
pnpm dev

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Type check
pnpm type-check

# Build for production (test)
pnpm build

# Start production build locally
pnpm start
```

### 8.2. Docker Development

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f frontend

# Stop all services
docker-compose down

# Rebuild frontend
docker-compose up -d --build frontend

# Enter container shell
docker exec -it job-matching-frontend sh
```

### 8.3. Git Workflow

```bash
# Create feature branch
git checkout -b feature/job-listing

# Make changes and commit (Husky will run automatically)
git add .
git commit -m "feat: add job listing page"

# Push to remote
git push origin feature/job-listing
```

### 8.4. Adding New shadcn/ui Components

```bash
# List available components
pnpm dlx shadcn-ui@latest add

# Add specific component
pnpm dlx shadcn-ui@latest add [component-name]

# Example: Add tabs component
pnpm dlx shadcn-ui@latest add tabs
```

---

## 9. BEST PRACTICES

### 9.1. Code Organization

**✅ DO:**

```typescript
// Group imports logically
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/features/job/job-card";

import { useJobs } from "@/hooks/use-jobs";
import { cn } from "@/lib/utils/cn";
```

**❌ DON'T:**

```typescript
// Mixed import order
import { useJobs } from "@/hooks/use-jobs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
```

### 9.2. Component Structure

**✅ DO: Feature-based Components**

```typescript
// src/components/features/job/job-card.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Job } from "@/types/entities/job";

interface JobCardProps {
  job: Job;
  onApply?: (jobId: string) => void;
}

export function JobCard({ job, onApply }: JobCardProps) {
  // Component logic
}
```

**❌ DON'T: God Components**

```typescript
// Don't put everything in one huge component
```

### 9.3. Type Safety

**✅ DO: Strict Types**

```typescript
// types/entities/job.ts
export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  location: string;
  type: "full-time" | "part-time" | "contract";
  createdAt: Date;
}
```

**❌ DON'T: Any types**

```typescript
// Don't use 'any'
const handleData = (data: any) => {};
```

### 9.4. State Management

**✅ DO: Proper separation**

```typescript
// Global state → Zustand (auth, theme)
// Server state → TanStack Query (jobs, matches)
// Local state → useState (form inputs, UI toggles)
```

### 9.5. API Calls

**✅ DO: Service Layer**

```typescript
// services/job.service.ts
import { apiClient } from "@/lib/api/client";
import type { Job } from "@/types/entities/job";

export const jobService = {
  getAll: () => apiClient.get<Job[]>("/jobs"),
  getById: (id: string) => apiClient.get<Job>(`/jobs/${id}`),
  create: (data: CreateJobDto) => apiClient.post<Job>("/jobs", data),
};

// hooks/use-jobs.ts
import { useQuery } from "@tanstack/react-query";
import { jobService } from "@/services/job.service";

export function useJobs() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: () => jobService.getAll(),
  });
}
```

### 9.6. Error Handling

**✅ DO: Proper error boundaries**

```typescript
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

### 9.7. Performance

**✅ DO:**

- Use React.memo() for expensive components
- Implement code splitting with dynamic imports
- Use Next.js Image component
- Implement pagination/infinite scroll for lists
- Use Suspense boundaries

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./heavy-component'), {
  loading: () => <Skeleton />,
  ssr: false,
})
```

---

## 10. TROUBLESHOOTING

### 10.1. Common Issues

**Issue: pnpm command not found**

```bash
# Solution: Install pnpm globally
npm install -g pnpm

# Or use corepack (Node.js 16.9+)
corepack enable
corepack prepare pnpm@latest --activate
```

**Issue: Port 3000 already in use**

```bash
# Windows: Find and kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
pnpm dev -p 3001
```

**Issue: Module not found errors**

```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
```

**Issue: TypeScript errors in IDE but build works**

```bash
# Restart TypeScript server in VSCode
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

**Issue: Tailwind classes not working**

```bash
# Check if file is in content paths (tailwind.config.ts)
# Restart dev server
pnpm dev
```

**Issue: ESLint/Prettier conflicts**

```bash
# Make sure eslint-config-prettier is installed
pnpm add -D eslint-config-prettier

# Add to .eslintrc.json extends array (last position)
"extends": ["next/core-web-vitals", "prettier"]
```

### 10.2. Docker Issues

**Issue: Docker build fails on Windows**

```bash
# Use WSL2 or Git Bash for Docker commands
# Or use PowerShell with proper syntax
```

**Issue: Hot reload not working in Docker**

```bash
# Add to docker-compose.yml environment
WATCHPACK_POLLING: true
```

**Issue: Permission denied in Docker**

```bash
# Run with sudo (Linux)
sudo docker-compose up

# Or add user to docker group
sudo usermod -aG docker $USER
```

---

## 📝 NEXT STEPS (Post-Setup)

Sau khi setup xong môi trường, bạn nên:

### 1. **Tạo base files** (Utility & Configuration)

```bash
# lib/utils/cn.ts - className utility
# lib/api/client.ts - Axios instance
# constants/routes.ts - Route definitions
# types/entities/user.ts - User types
# stores/auth.store.ts - Auth store
```

### 2. **Setup MSW** (Mock API)

```bash
# mocks/handlers/auth.handlers.ts
# mocks/data/users.ts
# mocks/browser.ts
```

### 3. **Create Layout Components**

```bash
# components/layout/header.tsx
# components/layout/sidebar.tsx
# app/layout.tsx (root layout)
# app/(auth)/layout.tsx
# app/(candidate)/layout.tsx
```

### 4. **Implement Authentication Flow**

```bash
# app/(auth)/login/page.tsx
# components/features/auth/login-form.tsx
# hooks/use-auth.ts
# services/auth.service.ts
```

### 5. **Test & Verify**

```bash
# Run dev server: pnpm dev
# Check all routes working
# Verify dark mode toggle
# Test responsive design
```

---

## 🎯 CHECKLIST BEFORE CODING

- [ ] Node.js 20+ installed
- [ ] pnpm installed and working
- [ ] Project created with Next.js 15
- [ ] All dependencies installed
- [ ] shadcn/ui initialized
- [ ] Folder structure created
- [ ] All config files in place (.env, tsconfig, tailwind, etc.)
- [ ] Git initialized and Husky setup
- [ ] VSCode extensions installed
- [ ] Dev server runs without errors (`pnpm dev`)
- [ ] Linting works (`pnpm lint`)
- [ ] Formatting works (`pnpm format`)
- [ ] Can commit with pre-commit hooks working

---

## 📚 REFERENCE LINKS

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest/docs/react/overview)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Zod](https://zod.dev/)

### Tools

- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Tailwind Play](https://play.tailwindcss.com/)
- [Transform Tools](https://transform.tools/) - Convert code formats

---

## 🚀 SUMMARY

Tài liệu này cung cấp:

✅ **Complete Tech Stack** - Tất cả công nghệ cần thiết
✅ **Detailed Architecture** - Kiến trúc rõ ràng, dễ scale
✅ **Full Folder Structure** - Cấu trúc thư mục chuẩn
✅ **Step-by-step Setup** - Hướng dẫn setup chi tiết
✅ **All Config Files** - Tất cả file cấu hình cần thiết
✅ **Docker Support** - Containerization ready
✅ **Best Practices** - Coding standards
✅ **Troubleshooting** - Giải quyết vấn đề thường gặp

**Next Action**: Gửi file này cho Claude Code Agent để execute setup!

---

_Generated: 2026-02-07_
_Project: Job Matching Platform - Frontend_
_Framework: Next.js 15 + TypeScript + shadcn/ui_
