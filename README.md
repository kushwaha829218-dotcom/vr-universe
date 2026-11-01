# VR UNIVERSE — EXPLORE BEYOND LIMITS.

Part 1 of the build: foundation, authentication, core database, secure AI chat, first tools.

## What works in Part 1
- React + TypeScript + Vite + Tailwind + React Router, cinematic starfield UI
- Email/password signup, email verification, login, password reset, logout, protected routes
- Roles (free / pro / founder) stored server-side; users cannot change them (no write policy)
- Core Postgres schema with Row Level Security (`supabase/migrations/0001_core.sql`)
- VR AI: conversations (create, rename, delete), history, copy, daily usage limits, via Edge Function
- VR Tools: word counter, password generator, length converter, stopwatch
- My Universe: account, plan, AI usage

## Not built yet (Part 2+)
Academy, Studio, Library, Community, Admin dashboard, remaining tools, subscriptions/payments, file uploads, and their tables (courses, lessons, quizzes, resources, bookmarks, community_*, announcements). Those pages currently show an honest "not built yet" screen. No payment provider is connected.

## Setup
1. Create a project at https://supabase.com.
2. Run `supabase/migrations/0001_core.sql` in the SQL editor.
3. `cp .env.example .env` and fill `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (Project Settings → API).
4. `npm install && npm run dev`
5. Sign up, verify your email, then make yourself founder in the SQL editor:
   `update public.user_roles set role='founder' where user_id=(select id from auth.users where email='YOU@example.com');`

## AI setup (Edge Function)
```
npm i -g supabase
supabase login
supabase link --project-ref YOUR_REF
supabase secrets set AI_API_KEY=your-anthropic-key
supabase functions deploy ai-chat
```
Required credential: an Anthropic API key (`AI_API_KEY`). Optional: `AI_MODEL`. The key never reaches the browser.
Limits default to 10/day (free) and 200/day (pro), editable in `platform_settings`.

## GitHub and deploy
```
git init && git add . && git commit -m "VR UNIVERSE part 1"
git branch -M main
git remote add origin https://github.com/YOU/vr-universe.git && git push -u origin main
```
Deploy on Vercel or Netlify: build command `npm run build`, output `dist`, add the two `VITE_` env vars. Add your site URL under Supabase → Auth → URL Configuration. For SPA routing add a rewrite of all paths to `/index.html`.

## Verification status
I could not run `npm install` or a build in my environment, so this code is untested. Run `npm run build` first and send me any errors to fix.
