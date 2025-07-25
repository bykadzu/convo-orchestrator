# AI Steering Hub

This project is a Vite + React application that connects to Supabase and various AI providers. It features two chat panels for side by side model comparison and an overseer panel for controlling active sessions.

## Prerequisites

- Node.js 18+
- A Supabase project

## Local Setup

```bash
# clone and install
git clone <repo-url>
cd convo-orchestrator
npm install

# copy environment variables
cp .env.example .env
# edit .env with your Supabase URL and anon key

# run in development
npm run dev
```

## Supabase Setup

1. Create a new project in Supabase.
2. Replace `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env` with the values from your project.
3. Run the SQL migrations in `supabase/migrations` to create tables.
4. Deploy the edge functions found in `supabase/functions`.

## Deployment

Any static hosting that supports Vite can be used (e.g. Vercel or Netlify). Ensure the environment variables are set in your deployment platform.

## Usage

Configure your preferred AI provider and models using the Settings dialog. Start a session and converse with the models in each panel. The overseer panel allows pausing, resuming and exporting sessions.

## Testing

Run the unit tests using:

```bash
npm test
```
