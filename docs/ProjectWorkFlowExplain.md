# Project Workflow Explanation (`/src`)

## 1) Big Picture Workflow

1. User enters a route in `src/app`.
2. `src/app/layout.tsx` wraps the app with providers (`ThemeProvider`, `QueryProvider`, `ToastProvider`).
3. Page components render feature components from `src/components`.
4. Feature components call hooks from `src/hooks`.
5. Hooks call service layer functions in `src/services`.
6. Services call `apiClient` from `src/lib/api/client.ts`.
7. API responses are used by UI; global UI/auth state is stored in Zustand stores under `src/stores`.
8. In mock mode, MSW handlers in `src/mocks` can intercept API calls.

## 2) `src/app` (Routing + Entry)

1. `src/app/layout.tsx`: Root HTML layout and global provider wiring.
2. `src/app/globals.css`: Imports project global styles.
3. `src/app/page.tsx`: Landing page with links to login/candidate/employer areas.
4. `src/app/error.tsx`: Client error boundary UI for app-level runtime errors.
5. `src/app/not-found.tsx`: Fallback 404 page.
6. `src/app/api/health/route.ts`: Health check endpoint returning `{ status: "ok" }`.
7. `src/app/(auth)/layout.tsx`: Auth route-group layout wrapper.
8. `src/app/(auth)/login/page.tsx`: Login page rendering `LoginForm`.
9. `src/app/(auth)/register/page.tsx`: Register page rendering `RegisterForm`.
10. `src/app/(auth)/forgot-password/page.tsx`: Forgot-password placeholder page.
11. `src/app/(candidate)/layout.tsx`: Candidate layout (header + content container).
12. `src/app/(candidate)/dashboard/page.tsx`: Candidate dashboard page.
13. `src/app/(candidate)/jobs/page.tsx`: Candidate job list page.
14. `src/app/(candidate)/jobs/[id]/page.tsx`: Candidate job detail page.
15. `src/app/(candidate)/matches/page.tsx`: Candidate matching results page.
16. `src/app/(candidate)/profile/page.tsx`: Candidate profile page.
17. `src/app/(candidate)/profile/edit/page.tsx`: Candidate profile edit page.
18. `src/app/(candidate)/applications/page.tsx`: Candidate applications page.
19. `src/app/(employer)/layout.tsx`: Employer layout (header + content container).
20. `src/app/(employer)/employer/dashboard/page.tsx`: Employer dashboard page (`/employer/dashboard`).
21. `src/app/(employer)/employer/jobs/page.tsx`: Employer jobs page (`/employer/jobs`).
22. `src/app/(employer)/employer/jobs/create/page.tsx`: Employer create-job page.
23. `src/app/(employer)/employer/matches/page.tsx`: Employer matches page.
24. `src/app/(employer)/employer/candidates/page.tsx`: Employer candidate listing page.

## 3) `src/components` (UI Layers)

### 3.1 `src/components/ui`

1. `src/components/ui/button.tsx`: Reusable button with CVA variants.
2. `src/components/ui/input.tsx`: Reusable input component.
3. `src/components/ui/card.tsx`: Generic card wrapper.
4. `src/components/ui/badge.tsx`: Simple badge text component.
5. `src/components/ui/skeleton.tsx`: Loading skeleton placeholder.
6. `src/components/ui/dialog.tsx`: Dialog placeholder stub.
7. `src/components/ui/dropdown-menu.tsx`: Dropdown placeholder stub.
8. `src/components/ui/select.tsx`: Select placeholder stub.
9. `src/components/ui/toast.tsx`: Toast placeholder stub.

### 3.2 `src/components/layout`

1. `src/components/layout/header.tsx`: Top header used in candidate/employer layouts.
2. `src/components/layout/sidebar.tsx`: Sidebar placeholder.
3. `src/components/layout/footer.tsx`: Footer placeholder.
4. `src/components/layout/container.tsx`: Max-width content container.

### 3.3 `src/components/common`

1. `src/components/common/loading-spinner.tsx`: Loading state component.
2. `src/components/common/empty-state.tsx`: Empty-state message block.
3. `src/components/common/error-boundary.tsx`: React class-based error boundary.
4. `src/components/common/pagination.tsx`: Pagination placeholder.
5. `src/components/common/search-bar.tsx`: Search input component.

### 3.4 `src/components/features/auth`

1. `src/components/features/auth/login-form.tsx`: RHF + Zod login form using `loginSchema`.
2. `src/components/features/auth/register-form.tsx`: Register form placeholder.
3. `src/components/features/auth/oauth-buttons.tsx`: OAuth buttons placeholder.

### 3.5 `src/components/features/job`

1. `src/components/features/job/job-card.tsx`: Displays a `Job` entity in card form.
2. `src/components/features/job/job-filters.tsx`: Job filter UI placeholder.
3. `src/components/features/job/job-detail-header.tsx`: Job detail header placeholder.
4. `src/components/features/job/job-form.tsx`: Job create/edit form placeholder.

### 3.6 `src/components/features/candidate`

1. `src/components/features/candidate/cv-upload.tsx`: CV upload UI placeholder.
2. `src/components/features/candidate/cv-preview.tsx`: CV preview UI placeholder.
3. `src/components/features/candidate/profile-card.tsx`: Candidate profile card placeholder.
4. `src/components/features/candidate/skill-tags.tsx`: Skill tags placeholder.

### 3.7 `src/components/features/matching`

1. `src/components/features/matching/match-score-gauge.tsx`: Shows matching score value.
2. `src/components/features/matching/match-details.tsx`: Matching detail placeholder.
3. `src/components/features/matching/match-card.tsx`: Matching card placeholder.

## 4) `src/hooks` (Application Logic)

1. `src/hooks/use-auth.ts`: Wraps `authService.login` in `useMutation` for login requests.
2. `src/hooks/use-user.ts`: Reads current user from Zustand `useAuthStore`.
3. `src/hooks/use-jobs.ts`: Fetches jobs via TanStack Query and `jobService.getAll`.
4. `src/hooks/use-matching.ts`: Fetches matching results via TanStack Query and `matchingService.getMatches`.
5. `src/hooks/use-toast.ts`: Temporary toast API (currently logs to console).
6. `src/hooks/use-debounce.ts`: Returns debounced value after delay.
7. `src/hooks/use-local-storage.ts`: Syncs React state with localStorage.
8. `src/hooks/use-media-query.ts`: Subscribes to `window.matchMedia` and returns match boolean.

### `use-auth.ts` specifically

1. Purpose: Centralizes login mutation logic in a reusable hook.
2. Input: Expects login payload `{ email, password }` when `mutate`/`mutateAsync` is called.
3. Behavior: Calls `authService.login`, which posts to `API_ENDPOINTS.auth.login`.
4. Output: Returns full TanStack mutation object (`isPending`, `isError`, `data`, `error`, `mutate`, etc.).
5. Typical usage: UI form submits credentials, `useAuth().mutate(payload)` triggers request and state updates.

## 5) `src/lib` (Infrastructure)

### 5.1 `src/lib/api`

1. `src/lib/api/client.ts`: Axios instance with base URL and timeout.
2. `src/lib/api/interceptors.ts`: Response interceptor pass-through + error rejection.
3. `src/lib/api/endpoints.ts`: Re-export for endpoint constants.

### 5.2 `src/lib/providers`

1. `src/lib/providers/query-provider.tsx`: Creates and provides `QueryClient`.
2. `src/lib/providers/theme-provider.tsx`: Theme provider placeholder wrapper.
3. `src/lib/providers/toast-provider.tsx`: Toast provider placeholder wrapper.

### 5.3 `src/lib/utils`

1. `src/lib/utils/cn.ts`: `clsx` + `tailwind-merge` helper.
2. `src/lib/utils/format.ts`: Date formatting helper.
3. `src/lib/utils/validation.ts`: Generic email validation helper.
4. `src/lib/utils/file.ts`: File size helper (MB).

## 6) `src/services` (Service Layer)

1. `src/services/auth.service.ts`: `login`, `register`, `me` API calls.
2. `src/services/job.service.ts`: Job list/detail/create API calls.
3. `src/services/candidate.service.ts`: Candidate list/detail API calls.
4. `src/services/matching.service.ts`: Matching list API call.
5. `src/services/upload.service.ts`: CV upload via `FormData`.

## 7) `src/stores` (Global Client State)

1. `src/stores/auth.store.ts`: Auth state (`user`, `token`, `isAuthenticated`) + `setAuth`/`logout`.
2. `src/stores/ui.store.ts`: UI state (`sidebarOpen`, `theme`) + mutators.
3. `src/stores/filter.store.ts`: Filter keyword state + setter.

## 8) `src/types` (Domain Contracts)

1. `src/types/api.ts`: Generic API response shape.
2. `src/types/common.ts`: Common pagination type.
3. `src/types/components.ts`: Common component children type.
4. `src/types/index.ts`: Barrel export for types.
5. `src/types/entities/user.ts`: User model + roles.
6. `src/types/entities/job.ts`: Job model + job type union.
7. `src/types/entities/matching.ts`: Matching result model.
8. `src/types/entities/cv.ts`: CV model.

## 9) `src/schemas` (Validation)

1. `src/schemas/auth.schema.ts`: Zod login schema + inferred type.
2. `src/schemas/job.schema.ts`: Zod job schema.
3. `src/schemas/profile.schema.ts`: Zod profile schema.
4. `src/schemas/index.ts`: Barrel export for schemas.

## 10) `src/constants` (Configuration Constants)

1. `src/constants/routes.ts`: Frontend route constants.
2. `src/constants/api-endpoints.ts`: API endpoint path constants.
3. `src/constants/config.ts`: App config from environment variables.
4. `src/constants/regex.ts`: Shared regex patterns.

## 11) `src/mocks` (MSW Mocking)

1. `src/mocks/browser.ts`: Browser MSW worker setup.
2. `src/mocks/server.ts`: Node/test MSW server setup.
3. `src/mocks/data/users.ts`: Mock users.
4. `src/mocks/data/jobs.ts`: Mock jobs.
5. `src/mocks/data/matches.ts`: Mock matching results.
6. `src/mocks/handlers/auth.handlers.ts`: Mock auth endpoint handlers.
7. `src/mocks/handlers/job.handlers.ts`: Mock job endpoint handlers.
8. `src/mocks/handlers/matching.handlers.ts`: Mock matching endpoint handlers.

## 12) `src/styles`

1. `src/styles/globals.css`: Tailwind directives + CSS variable theme tokens for light/dark.

## 13) Current End-to-End Flow Example (Login)

1. User opens `/login`.
2. `src/app/(auth)/login/page.tsx` renders `LoginForm`.
3. `LoginForm` validates input via `loginSchema` + React Hook Form.
4. On submit, a feature/page would call `useAuth().mutate({ email, password })`.
5. `use-auth.ts` calls `authService.login`.
6. `authService.login` uses `apiClient.post("/auth/login", payload)`.
7. Success response can be stored in `auth.store.ts` via `setAuth`.
8. UI rerenders based on store/query state.

## 14) Current Maturity Notes

1. Structure is complete and buildable.
2. Many feature pages/components are placeholders (intended scaffold state).
3. Core architecture path is already wired: route -> component -> hook -> service -> API.
4. This file can be updated as business logic is implemented.
