# Scrapie's Subtember Subathon Website

A responsive Next.js website for displaying subathon goals, events, and stream information for Scrapie's Twitch channel.

## Features

- ⏰ **Timer Rules** - Clear display of subscription/donation time additions
- 📅 **Event Schedule** - Upcoming stream events
- ✅ **Goal Tracking** - Mark completed goals with visual feedback

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling

## Getting Started

```bash
# Install dependencies
npm install
# Run development server
npm run dev
# Build for production
npm run build
```

## Goal Management

To mark goals as completed, edit the `subgoals` array in `app/page.tsx`:

```tsx
{ goal: 500, text: "RMT W/ GIFTSUBS", met: true }, // Completed goal
```

Then commit and deploy the changes. Scuffed but works.

## Live Site

Visit the live subathon page at: [[Your deployed URL here](https://scrapie-subathon.vercel.app/)]

---

Built for Scrapie's Subtember 2025 Subathon
