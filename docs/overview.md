# Project Overview & Architecture

## 1. Executive Summary

This repository contains the **TCC (The Career Company) Campus Placement CRM**, a comprehensive web application designed specifically for campus placement teams (Placement Heads and Placecom Members). Currently heavily focused on the **Outreach CRM** module, it serves to manage corporate relationships, track outreach activities (calls, emails, meetings), and support a structured sales-style funnel from first contact to final student placement and offer.

## 2. Core Modules

The application is built using a modular structure utilizing the Next.js App Router (`app/` directory), separated into diverse user contexts:

- **Dashboard / Outreach CRM (`app/dashboard/*`)**: The central command center for Placement Heads and Placecom members.
  - **Today / Homepage**: A timeline of tasks, SLAs, and upcoming events.
  - **Account Management (`companies`)**: Master lists and detailed 360-views of engaged companies.
  - **Pipeline Visualization (`pipeline`)**: Overview of the conversion funnel.
  - **Communications (`calls`, `sequences`, `meetings`)**: Call logging, email sequences/campaign tracking, and meeting management.
  - **Analytics & Settings (`analytics`, `settings`, `audit`)**: System configuration, load balancing, reporting, and activity tracking.
- **Student Portal (`app/student/*`)**: Student-facing interfaces for placements and profiles.
- **Saarthi (`app/saarthi/*`)**: Intelligent, AI-driven mock interviews, resume analysis, and career coaching tools.
- **Placement Officer (`app/placement-officer/*`)**: Administrative module for overall placement lifecycle control.

## 3. Technology Stack & Architecture

The application is built as a modern, high-performance web application utilizing the React ecosystem:

| Layer | Technology | Purpose / Rationale |
|-------|------------|---------------------|
| **Framework** | Next.js 15 (App Router) | React Server Components, SSR, fast initial load times, great DX. |
| **Language** | TypeScript (Strict) | Type safety, maintainability, and enterprise-grade robustness. |
| **UI Library** | React 19 + shadcn/ui | Beautifully crafted, accessible, headless UI components powered by Radix primitives. |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework for rapid and responsive UI development. |
| **State/Forms** | React Hook Form & Zod | Robust form state management combined with schema-based validation. |
| **Icons & Assets** | Lucide React | Clean, consistent, and scalable SVG icon library. |
| **Data Visualization** | Recharts | Composable charting library for analytics dashboards and pipelines. |

## 4. Key Architectural Patterns

- **Server and Client Components**: Leveraging Next.js Server Components for data fetching and minimal bundle sizes, opting into Client Components only where interactivity is required.
- **Modular Component Design**: Global layout logic residing in `app/layout.tsx` and module-specific templates residing in context subdirectories (e.g., `app/dashboard/layout.tsx`).
- **Component Reusability**: All shared primitive components (buttons, dialogs, inputs) are maintained via `shadcn/ui` in the `components/ui/` folder for absolute consistency.

## 5. Integrations & Data Flow

As defined in the PRD, this system is architected to be highly interconnected with two external portals:
1. **Placement Management Portal**: Provides the system with Active Drives, Roles, Applications, Shortlist Status, and Placement Outcomes.
2. **CDM Preparation Portal**: Provides Batch Profiles, Readiness Scores, Target Functions, and Top Performer Lists.

Interactions with these portals form the backbone of the actionable data surfaced within the Outreach CRM timelines.
