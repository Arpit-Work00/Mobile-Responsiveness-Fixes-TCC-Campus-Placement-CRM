# Getting Started Guide

## Prerequisites

Before setting up the project locally, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (Version 18.x or above recommended)
- A package manager of your choice (`npm`, `yarn`, `pnpm`, or `bun`). *Note: This project natively uses `npm` per `package.json` configurations.*

## Installation

1. **Clone the repository** to your local machine:
   ```bash
   git clone <repository-url>
   cd v0-founder-guide-main
   ```

2. **Install dependencies**:
   Run the following command in the root directory:
   ```bash
   npm install
   ```
   *(Alternatively, use `yarn install` or `pnpm install` if preferred).*

## Running the Development Server

To start the application in development mode with Hot Module Replacement (HMR), run:

```bash
npm run dev
```

The terminal will launch a local server, usually accessible at:
**[http://localhost:3000](http://localhost:3000)**

Open this URL in your browser. The page will reload automatically as you edit files within the `app/` or `components/` directories.

## Available Scripts

The `package.json` file contains several utility scripts for development:

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles the application for production deployment, generating an optimized `.next` folder.
- `npm run start`: Starts a Node.js server in production mode (requires `npm run build` to be executed first).
- `npm run lint`: Runs ESLint over the project to find and fix code style and syntax issues.

## Deploying

This project is optimized for deployment on [Vercel](https://vercel.com/), the creators of Next.js. 

To deploy:
1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and apply the correct build settings (`npm run build`).

Any changes pushed to the `main` branch will automatically trigger a production deployment.

## Next Steps

For a deep dive into the application's structure and feature set, refer to the [Project Overview & Architecture](./overview.md) and the `PRD-TCC-Outreach-CRM.md` located in the project root.
