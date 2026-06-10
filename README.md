# 09-auth

A Next.js 16 app with authentication, protected notes pages, and client/server API routes.

## Features

- Email/password auth with register, login, logout, and session routes
- Protected private routes for profile and notes management
- Create, read, and filter notes with dynamic routing
- Modal previews for note content
- Client-side state with React Query and Zustand
- REST API routes under `app/api` for auth, notes, and user sessions

## Tech stack

- Next.js 16
- React 19
- TypeScript
- React Query (`@tanstack/react-query`)
- Zustand for client state management
- Axios for HTTP requests
- React Hot Toast for notifications
- React Paginate for paginated note listing
- ESLint for linting

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - start the Next.js development server
- `npm run build` - build the production app
- `npm run start` - run the built production app
- `npm run lint` - run ESLint

## Project structure

- `app/` - Next.js App Router pages and route handlers
  - `app/(auth routes)/` - sign-in and sign-up pages
  - `app/(private routes)/` - authenticated notes and profile pages
  - `app/@modal/` - modal route layouts for note previews
  - `app/api/` - backend API route handlers
- `components/` - reusable UI components and providers
- `lib/` - API helpers and client/server utilities
- `types/` - shared TypeScript types for notes and users

## Notes

This repo is structured for a local auth-enabled note app. The current implementation assumes a backend session strategy via API route handlers and uses client-side state for note data.

## License

This project is provided as-is for learning and development purposes.
