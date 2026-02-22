export const ROUTES = {
  home: "/",

  auth: {
    login: "/auth/login",
    register: "/auth/register",
    signup: "/auth/login?tab=signup",
    forgotPassword: "/auth/forgot-password",
  },

  candidate: {
    dashboard: "/candidate/dashboard",
    jobs: "/candidate/jobs",
    jobDetail: (id: string) => `/candidate/jobs/${id}`,
    matches: "/candidate/matches",
    profile: "/candidate/profile",
    editProfile: "/candidate/profile/edit",
    applications: "/candidate/applications",
  },

  employer: {
    dashboard: "/employer/dashboard",
    jobs: "/employer/jobs",
    createJob: "/employer/jobs/create",
    candidates: "/employer/candidates",
    matches: "/employer/matches",
  },
} as const;
