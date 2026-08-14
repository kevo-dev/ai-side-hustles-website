# Next.js Migration Checklist

- [x] Define the target Next.js app-router structure and static deployment strategy.
- [x] Update package scripts and dependencies for Next.js, React, and the existing Tailwind/shadcn stack.
- [x] Move the landing page into the Next.js app router with client-side interaction boundaries.
- [x] Preserve the existing product asset and metadata with Next.js-safe asset handling.
- [x] Remove or isolate Vite-only runtime assumptions without touching backend/server logic.
- [x] Run type-check, lint/build, and responsive visual verification.
- [x] Save a migration checkpoint and document any follow-up configuration.
- [x] Initialize the local Git repository with the migrated project state.
- [x] Create a private GitHub repository and push the main branch.
- [x] Verify the remote repository URL and uploaded commit.
