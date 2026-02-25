# Product Requirements Document (PRD)
# TCC Campus Placement CRM - Outreach Module

**Document Version:** 1.0  
**Date:** February 2026  
**Product:** The Career Company (TCC) - Campus Placement CRM  
**Module Scope:** Company Outreach CRM Only  

---

## 1. EXECUTIVE SUMMARY

### 1.1 Product Vision
TCC Outreach CRM is a **sales-style relationship management system** designed specifically for campus placement teams (Placement Heads and Placement Committee Members) to systematically manage corporate relationships, track outreach activities, and convert company engagement into placement opportunities.

### 1.2 The Core Problem We Solve
Campus placement teams currently operate like **sales teams without a CRM**:
- No centralized view of company relationships and communication history
- No accountability tracking for follow-ups and pending actions
- No visibility into team workload distribution
- No structured process from first contact to final placement
- Communication scattered across personal emails, WhatsApp, and spreadsheets

### 1.3 Target Users
| User Role | Description | Daily Active Hours |
|-----------|-------------|-------------------|
| **Placement Head** | Senior administrator overseeing entire placement cycle. Needs bird's-eye view, team performance, and strategic insights. | 2-4 hours |
| **Placecom Member** | Student committee member managing assigned company accounts. Executes outreach, logs activities, tracks progress. | 4-6 hours |

### 1.4 Business Context
- **Typical campus:** 300-500 students, 100-300 target companies
- **Placement cycle:** 6-8 months (May-December typically)
- **Team size:** 1 Placement Head + 15-30 Placecom Members
- **Key metrics:** Companies converted, roles received, offers made

---

## 2. SYSTEM ARCHITECTURE OVERVIEW

### 2.1 Module Structure
```
TCC Platform
├── Outreach CRM (THIS DOCUMENT)
│   ├── Today (Command Center)
│   ├── Companies (Account Management)
│   ├── Pipeline (Funnel Visualization)
│   ├── Meetings
│   ├── Calls
│   ├── Email Campaigns (Sequences)
│   ├── Database & TCC Meetings
│   ├── Team Management
│   ├── Calendar
│   ├── Analytics
│   ├── Audit Log
│   └── Settings
│
├── Placement Management (EXTERNAL INTEGRATION)
│   └── Data to fetch: Drives, Roles, Applications, Shortlists, Offers
│
└── CDM Preparation (EXTERNAL INTEGRATION)
    └── Data to fetch: Student profiles, Readiness scores, Target functions
```

### 2.2 Data Flow from External Systems
The Outreach CRM needs to display and link to data from **Placement Management** and **CDM Preparation** portals:

**From Placement Management Portal:**
- Active placement drives and their status
- Roles received from each company (with JD, CTC, positions)
- Application counts per role
- Shortlist and interview schedules
- Offer counts and acceptance status

**From CDM Preparation Portal:**
- Student batch profile (demographics, skills, preferences)
- Readiness score distribution
- Target function preferences (Consulting, Product, Finance, etc.)
- Module completion rates

---

## 3. DETAILED FEATURE SPECIFICATIONS

### 3.1 TODAY - COMMAND CENTER (Homepage)

**Purpose:** Single-screen operational dashboard that tells the placement team "what needs attention right now."

**URL:** `/dashboard`

**User Story:**  
*As a Placement Head, I want to see all pending actions, alerts, and team status in one view so I can prioritize my day and catch problems before they escalate.*

#### 3.1.1 Header Section
| Element | Description | Interaction |
|---------|-------------|-------------|
| Page Title | "Today" with role badge (PLACEMENT HEAD / PLACECOM) | Static display |
| Context Line | Campus name, placement cycle, current date | Static display |
| Set Targets Button | Opens target-setting modal | Click to open modal |

#### 3.1.2 Today Timeline Component
**Purpose:** Chronologically ordered list of the day's actionable items.

| Field | Description | Data Type |
|-------|-------------|-----------|
| Time | Scheduled time or deadline (e.g., "2:00 PM", "EOD", "Pending") | String |
| Type | Category (Guest Session, Call Scheduled, Follow-up Deadline, etc.) | Enum |
| Detail | Specific action required | String |
| Company | Associated company name | String/Link |
| Priority | High/Medium/Low (visual indicator: black dot = high) | Enum |

**Interaction:** Each row is clickable, navigates to relevant company detail or filtered view.

**Complexity Note:** Requires aggregating data from multiple sources:
- Scheduled meetings from calendar
- Overdue tasks from task system
- Pending follow-ups calculated from last activity dates

#### 3.1.3 Tasks & SLAs Table
**Purpose:** Action items with deadline tracking and owner accountability.

| Column | Description |
|--------|-------------|
| Task | Specific action to complete |
| Company | Associated company |
| Owner | Assigned Placecom member |
| Due | Deadline with status badge (OVERDUE in black, DUE TODAY in gray) |

**Visual Treatment:**
- Overdue tasks: Black badge background
- Due today: Gray badge
- Upcoming: Plain text

**Complexity:** Requires SLA rules engine:
- "Send PPT" SLA: 48 hours from request
- "Follow-up" SLA: 72 hours from last contact
- "Interview feedback" SLA: 24 hours post-interview

#### 3.1.4 Placement Funnel Widget
**Purpose:** Visual conversion funnel from initial targeting to offers.

| Stage | Definition | Typical Count |
|-------|------------|---------------|
| Targeted | Companies identified for outreach | 300-500 |
| Contacted | First email/call made | 200-400 |
| Replied | Company responded (any response) | 80-150 |
| Meeting Done | Virtual/in-person meeting completed | 40-80 |
| Roles Received | JD and role details confirmed | 20-50 |
| Process Live | Active recruitment process | 15-40 |
| Offers Made | Offers extended to students | 10-30 |
| Offers Accepted | Confirmed placements | 8-25 |

**Interaction:** Each stage is clickable, filters companies list to that stage.

**Display:** Shows count + conversion rate from previous stage.

#### 3.1.5 Alerts & Risks Sidebar
**Purpose:** Proactively surface accounts needing attention.

| Alert Type | Trigger Rule | Severity |
|------------|--------------|----------|
| No response | No company reply in 14+ days | High |
| Interview feedback pending | 5+ days since interview | High |
| PPT requested, not sent | PPT requested, 48+ hours no action | Medium |
| Guest session pending | Meeting scheduled, no confirmation | Medium |
| Roles expected, not received | Verbal commitment, 10+ days no JD | Low |

**Interaction:** Click navigates to company detail page.

#### 3.1.6 Team Workload Table (Placement Head Only)
**Purpose:** Manager view of team distribution and capacity.

| Column | Description |
|--------|-------------|
| Member | Team member name |
| Accounts | Total companies assigned |
| Active | Companies with activity in last 14 days |
| Meetings | Meetings conducted this month |
| Roles | Roles received from their accounts |
| Non-Resp | Companies not responding (14+ days) |
| Load | Status indicator (OVER/OK/UNDER) |

**Load Calculation:**
- OVER: >25 accounts OR >10 active conversations
- OK: 15-25 accounts AND 5-10 active
- UNDER: <15 accounts OR <5 active

**Interaction:** Click member row to see their assigned companies.

---

### 3.2 COMPANIES (Account Management)

**Purpose:** Master list of all company accounts with filtering, search, and quick status view.

**URL:** `/dashboard/companies`

**User Story:**  
*As a Placecom member, I want to see all my assigned companies, their status, and what action is due next so I can prioritize my outreach effectively.*

#### 3.2.1 Page Header
| Element | Action |
|---------|--------|
| Title | "Companies (Accounts)" with count |
| Export Button | Downloads CSV of filtered list |
| Add Company Button | Opens company creation modal |

#### 3.2.2 Search & Filter Bar
| Filter | Options |
|--------|---------|
| Search | Free text search on company name |
| Status | All, Hot, Warm, Cold |
| Stage | All stages from funnel |
| Owner | Dropdown of team members |
| Sector | Consulting, Tech, FMCG, Finance, etc. |
| Last Activity | Today, This Week, This Month, Overdue |

#### 3.2.3 Companies Table
| Column | Description | Sortable |
|--------|-------------|----------|
| Company Name | Name with logo placeholder | Yes |
| Assigned Owner | Placecom member responsible | Yes |
| Last Activity | Relative time (Today 10:30 AM, 2 days ago) | Yes |
| Next Action Due | Pending action with deadline | Yes |
| Status | Hot/Warm/Cold badge | Yes |
| Roles Received | Count of roles from this company | Yes |
| Meetings Done | Total meetings conducted | Yes |

**Status Definitions:**
- **Hot** (Black badge): Active discussion in last 7 days, positive engagement
- **Warm** (Gray badge): Meeting done, follow-up in progress
- **Cold** (Light gray badge): No response in 14+ days OR declined

**Interaction:** Row click navigates to company detail page.

**Pagination:** 25 companies per page, infinite scroll or pagination controls.

---

### 3.3 COMPANY DETAIL PAGE (Account 360 View)

**Purpose:** Complete relationship history and all communication with a single company.

**URL:** `/dashboard/companies/[company-id]`

**User Story:**  
*As a Placecom member, I want to see the complete history of our engagement with a company - every call, email, meeting, and note - so I never repeat questions or miss context.*

#### 3.3.1 Header Section
| Element | Description |
|---------|-------------|
| Back Button | Returns to companies list |
| Company Name | Large, prominent display |
| Sector Tag | Industry category |
| Edit Button | Modify company details |
| Log Activity Button | Quick-add new activity |

#### 3.3.2 Quick Stats Row (5 Cards)
| Stat | Description |
|------|-------------|
| Assigned Owner | Avatar + name of responsible member |
| Status | Hot/Warm/Cold with visual badge |
| Last Activity | Timestamp of most recent interaction |
| Next Action | Pending task with deadline |
| Roles Received | Count of active roles |

#### 3.3.3 Tab Navigation
| Tab | Icon | Content |
|-----|------|---------|
| Overview | - | Summary stats and last outcome |
| Timeline | - | Chronological activity feed (DEFAULT TAB) |
| Calls | Phone | All call logs with notes and transcripts |
| Emails | Mail | Sent and received emails thread |
| Meetings | Calendar | Meeting records with outcomes |
| Contacts | Users | HR contacts at this company |
| Roles & Processes | FileText | Roles received, their status |
| Notes | StickyNote | Free-form notes from team |

#### 3.3.4 Timeline Tab (Most Critical Feature)
**Purpose:** Single source of truth for all company interactions.

**Entry Types:**
| Type | Icon | Display Fields |
|------|------|----------------|
| Call | Phone (black circle) | Date, Time, By, Duration, Notes, Outcome |
| Email Sent | Mail (gray circle) | Date, Time, By, To, Subject, Body preview |
| Email Reply | Mail (black circle) | Date, Time, From, Subject, Body (HIGHLIGHTED: "COMPANY REPLY" badge) |
| Meeting | Calendar (dark gray) | Date, Attendees, Agenda, Outcome, Notes |
| Note | StickyNote | Date, Author, Content |

**Visual Hierarchy:**
- Company replies get special treatment (black "COMPANY REPLY" badge)
- Chronological order, newest first
- Expandable entries for long content

**Complexity Note:** This is the most data-intensive component. Requires:
- Aggregating from calls, emails, meetings, notes tables
- Proper sorting by timestamp
- Infinite scroll or load-more for long histories
- Search within timeline

#### 3.3.5 Calls Tab
| Field | Description |
|-------|-------------|
| Date & Time | When call occurred |
| Caller | Who made the call |
| Duration | Call length |
| Notes | Summary of discussion |
| Transcript | Optional: Full call transcript if recorded |
| Outcome | Result (Positive, Neutral, No Answer, etc.) |

**Actions:** Add Call button opens logging modal.

#### 3.3.6 Emails Tab
| Display | Description |
|---------|-------------|
| Thread View | Emails grouped by conversation |
| Direction Indicator | Sent vs Received clearly marked |
| Full Body | Expandable email content |
| Attachments | List of attached files |

**Critical Feature:** Must clearly show company replies vs our sent emails.

#### 3.3.7 Meetings Tab
| Field | Description |
|-------|-------------|
| Date & Time | When meeting occurred |
| Attendees | All participants (our team + company) |
| Agenda | Pre-meeting objective |
| Outcome | Result of meeting |
| Next Steps | Agreed follow-up actions |
| Notes | Detailed meeting notes |

#### 3.3.8 Contacts Tab
**Purpose:** Directory of all people at this company we've engaged with.

| Field | Description |
|-------|-------------|
| Name | Contact person name |
| Role | Job title (e.g., "University Recruiting Lead") |
| Email | Contact email |
| Phone | Contact number |
| LinkedIn | Profile link |
| Influence | Decision Maker / Gatekeeper / Influencer |
| Last Contact | When we last spoke with them |

**Actions:** Add Contact, Edit, Copy Email/Phone.

#### 3.3.9 Roles & Processes Tab
**Purpose:** Track all roles received from this company.

| Field | Description |
|-------|-------------|
| Role Title | Position name |
| Campus | Target campus for this role |
| Stage | PPT Scheduled, Applications Open, Interview, etc. |
| Applications | Number of students applied |
| Interviews | Students in interview stage |
| Offers | Offers made |

**Data Source:** This data comes from Placement Management portal (see integration section).

#### 3.3.10 Notes Tab
**Purpose:** Free-form notes not tied to specific activities.

| Field | Description |
|-------|-------------|
| Date & Time | When note was added |
| Author | Who wrote the note |
| Content | Note text |

---

### 3.4 PIPELINE PAGE

**Purpose:** Visual funnel view of entire placement pipeline with drill-down capability.

**URL:** `/dashboard/pipeline`

**User Story:**  
*As a Placement Head, I want to see our placement funnel visually so I can identify where companies are dropping off and take corrective action.*

#### 3.4.1 Funnel Visualization
- **Visual:** Progressively narrowing bars representing each stage
- **Display:** Count + stage name + conversion rate
- **Interaction:** Click stage to expand and see companies at that stage

#### 3.4.2 Deficit Analysis Box
| Metric | Description |
|--------|-------------|
| Target | Placement target for the season |
| Current | Companies recruited so far |
| Gap | Deficit to fill |

#### 3.4.3 Company Classification Cards
Three columns showing Hot/Warm/Cold companies:

| Classification | Definition | Visual |
|----------------|------------|--------|
| Hot | Active discussion, positive signals | Flame icon, prominent |
| Warm | Meeting done, follow-up needed | Thermometer icon |
| Cold | No response, declined | Snowflake icon, faded |

#### 3.4.4 Suggested Actions
AI/Rule-based recommendations:
- "Increase outreach in Consulting sector"
- "Follow up with dormant companies"
- "Use remaining meeting credits"

---

### 3.5 MEETINGS PAGE

**Purpose:** Track all scheduled and completed meetings.

**URL:** `/dashboard/meetings`

#### 3.5.1 Upcoming Meetings Section
| Field | Description |
|-------|-------------|
| Company | Company name with icon |
| Date & Time | Scheduled time |
| Type | Virtual / On-Campus |
| Expected Outcome | What we hope to achieve |
| Actions | Reschedule, Join Meeting buttons |

#### 3.5.2 Completed Meetings Section
| Field | Description |
|-------|-------------|
| Company | Company name |
| Date | When meeting occurred |
| Outcome | Result badge |

#### 3.5.3 Roles Tab (Within Meetings Page)
Shows roles received through meetings with:
- Role title, company, package
- Application deadline
- Positions available
- Live/Closed status

---

### 3.6 CALLS PAGE

**Purpose:** Log and track all phone calls with companies.

**URL:** `/dashboard/calls`

#### 3.6.1 Call Log Table
| Column | Description |
|--------|-------------|
| Company | Company called |
| Date & Time | When call occurred |
| Caller | Team member who made call |
| Duration | Length of call |
| Outcome | Result (Positive, Scheduled Meeting, No Answer, etc.) |
| Actions | View Details, Add Follow-up |

#### 3.6.2 Call Detail Modal
- Full notes from the call
- Optional transcript
- Outcome and next steps
- Link to company timeline

---

### 3.7 EMAIL CAMPAIGNS (Sequences)

**Purpose:** Manage multi-step email outreach sequences.

**URL:** `/dashboard/sequences`

**User Story:**  
*As a Placecom member, I want to use pre-approved email templates in a sequence so I can systematically reach out to companies without writing each email from scratch.*

#### 3.7.1 Sequences Table
| Column | Description |
|--------|-------------|
| Sequence Name | Descriptive name |
| Email 1/2/3 | Subject lines of each step |
| Active Accounts | Companies currently in this sequence |
| Owner | Who manages this sequence |
| Performance | Response rate with badge (High/Medium/Low) |
| Actions | View, Edit, Clone |

#### 3.7.2 Sequence Detail (Expanded View)
Shows full email templates:
| Field | Description |
|-------|-------------|
| Step Number | Email 1, 2, 3 |
| Delay | Days after previous email |
| Subject | Email subject line |
| Body | Full email content with merge fields |

#### 3.7.3 Email Template Variables
| Variable | Description |
|----------|-------------|
| [HR Name] | Contact person name |
| [Company Name] | Company name |
| [Your Name] | Sender name |
| [Campus] | Campus name |
| [Batch Year] | Graduating batch |

**Complexity Note:** Requires:
- Template storage and versioning
- Merge field processing
- Send scheduling
- Open/click tracking
- Response detection

---

### 3.8 DATABASE & TCC MEETINGS

**Purpose:** Access TCC's company database and request facilitated meetings.

**URL:** `/dashboard/database`

**User Story:**  
*As a Placecom member, I want to browse TCC's company database and request warm introductions through TCC's network.*

#### 3.8.1 Company Database
| Field | Description |
|-------|-------------|
| Company Name | From TCC master database |
| Sector | Industry |
| Last Campus Visit | Historical data |
| HR Contacts | Available contacts |
| TCC Relationship | TCC's relationship level |

#### 3.8.2 Meeting Request Feature
- Request TCC to facilitate introduction
- Uses "Intro Credits" from subscription
- Tracks request status

---

### 3.9 TEAM MANAGEMENT

**Purpose:** Placement Head view of team performance and account distribution.

**URL:** `/dashboard/team`

#### 3.9.1 Summary Cards
| Metric | Description |
|--------|-------------|
| Total Companies Assigned | Across all members |
| Active Conversations | Companies with recent activity |
| Meetings This Week | Team total |
| Overloaded Members | Count needing rebalancing |

#### 3.9.2 Performance Table
Sales-manager style funnel metrics per member:
| Column | Description |
|--------|-------------|
| Team Member | Name, email, sectors |
| Total Accounts | Assigned companies |
| Active Conversations | % engagement |
| Meetings Done | Count |
| Roles Received | Successful conversions |
| Companies Recruited | Final placements |
| Non-Responsive | Stalled accounts |
| Load Indicator | OVERLOADED/BALANCED/UNDERLOADED |

#### 3.9.3 Load Balancing Recommendations
Rule-based suggestions:
- "Reassign 5 accounts from Rahul to Sneha"
- "Review Amit's non-responsive accounts"

#### 3.9.4 Rebalance Accounts Page
**URL:** `/dashboard/accounts/assign`

Drag-and-drop or bulk assignment interface to redistribute accounts.

---

### 3.10 CALENDAR

**Purpose:** Centralized calendar for all placement activities.

**URL:** `/dashboard/calendar`

#### 3.10.1 Calendar Views
- Month view (default)
- Week view
- Day view

#### 3.10.2 Event Types
| Type | Color | Description |
|------|-------|-------------|
| Meeting | Black | Company meetings |
| PPT | Gray | Pre-placement talks |
| Interview | Dark gray | Interview schedules |
| Deadline | Outlined | Submission deadlines |
| Internal | Light | Team meetings |

---

### 3.11 ANALYTICS

**Purpose:** Strategic insights and trend analysis.

**URL:** `/dashboard/analytics`

#### 3.11.1 Key Dashboards
| Dashboard | Metrics |
|-----------|---------|
| Funnel Analysis | Conversion rates at each stage |
| Sector Breakdown | Performance by industry |
| Time Analysis | Activity trends over time |
| Team Comparison | Member-wise metrics |
| Response Rates | Email/call response analysis |

---

### 3.12 AUDIT LOG

**Purpose:** Complete activity trail for accountability.

**URL:** `/dashboard/audit`

#### 3.12.1 Log Table
| Column | Description |
|--------|-------------|
| Timestamp | When action occurred |
| User | Who performed action |
| Action | What was done |
| Entity | Affected company/record |
| Details | Specifics of the change |

---

### 3.13 SETTINGS

**Purpose:** System configuration and user management.

**URL:** `/dashboard/settings`

#### 3.13.1 Settings Sections
| Section | Contents |
|---------|----------|
| Profile | Institution details, logo |
| Team | User management, roles |
| Integrations | Email, calendar sync |
| Notifications | Alert preferences |
| Subscription | Plan details, credits |

---

## 4. DATA INTEGRATION REQUIREMENTS

### 4.1 Data to Fetch from Placement Management Portal

| Data Point | Usage in Outreach CRM | Frequency |
|------------|----------------------|-----------|
| Active Drives | Display on company detail, Today page | Real-time |
| Roles (JD, CTC, Positions) | Roles tab in company detail | Real-time |
| Application Counts | Display in funnel, company card | Every 15 min |
| Shortlist Status | Alerts, company timeline | Real-time |
| Interview Schedules | Calendar, company detail | Real-time |
| Offer Counts | Funnel, analytics | Real-time |
| Offer Acceptance | Final metrics | Real-time |

### 4.2 Data to Fetch from CDM Preparation Portal

| Data Point | Usage in Outreach CRM | Frequency |
|------------|----------------------|-----------|
| Batch Profile Summary | Share with companies | Daily |
| Student Count by Program | Company conversations | Daily |
| Readiness Score Distribution | Strategic planning | Weekly |
| Target Function Preferences | Match with company roles | Weekly |
| Top Performers List | Premium company pitches | Weekly |

### 4.3 API Integration Specifications

**Placement Management API:**
```
GET /api/drives - List all active drives
GET /api/drives/{id}/roles - Roles for a drive
GET /api/roles/{id}/applications - Application stats
GET /api/companies/{id}/placements - Company placement history
```

**CDM Preparation API:**
```
GET /api/batch/profile - Batch summary
GET /api/students/readiness - Readiness distribution
GET /api/students/preferences - Function preferences
```

---

## 5. COMPLEXITY ASSESSMENT

### 5.1 High Complexity Components

| Component | Complexity Factors | Estimated Effort |
|-----------|-------------------|------------------|
| Company Timeline | Data aggregation from 5+ sources, infinite scroll, search | 3-4 weeks |
| Email Sequences | Template engine, scheduling, tracking, response detection | 4-5 weeks |
| Team Load Balancing | Algorithm development, UI for reassignment | 2-3 weeks |
| Analytics Dashboards | Multiple data sources, charts, filters | 3-4 weeks |
| Real-time Alerts | Event processing, notification system | 2-3 weeks |

### 5.2 Medium Complexity Components

| Component | Complexity Factors | Estimated Effort |
|-----------|-------------------|------------------|
| Companies List | Filtering, sorting, pagination, search | 1-2 weeks |
| Call/Meeting Logging | Forms, validation, file uploads | 1-2 weeks |
| Calendar Integration | Event CRUD, sync with Google/Outlook | 2-3 weeks |
| Contacts Management | CRUD, import, deduplication | 1 week |

### 5.3 Standard Components

| Component | Complexity Factors | Estimated Effort |
|-----------|-------------------|------------------|
| Settings Pages | Standard forms, validation | 1 week |
| Audit Log | Simple table with filters | 3-4 days |
| Static Dashboards | Data display, basic charts | 1 week |

### 5.4 Total Estimated Effort
**Backend:** 12-16 weeks  
**Frontend:** 10-14 weeks  
**Integration & Testing:** 4-6 weeks  
**Total:** 26-36 weeks (6-9 months) for a team of 4-6 developers

---

## 6. TECHNICAL REQUIREMENTS

### 6.1 Recommended Stack
| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | Next.js 14+ (App Router) | SSR, excellent DX |
| UI Components | shadcn/ui + Tailwind | Consistent, accessible |
| State Management | React Query / SWR | Server state caching |
| Backend | Node.js / Python FastAPI | Depends on team skills |
| Database | PostgreSQL | Relational data, ACID |
| Search | Elasticsearch / Algolia | Full-text search |
| Email | SendGrid / AWS SES | Transactional email |
| Storage | AWS S3 / Cloudflare R2 | File attachments |
| Auth | Auth.js / Clerk | Multi-tenant auth |

### 6.2 Performance Requirements
| Metric | Target |
|--------|--------|
| Page Load | < 2 seconds |
| Search Response | < 500ms |
| Timeline Load | < 1 second for 100 entries |
| Concurrent Users | 100+ per campus |

### 6.3 Security Requirements
- Row-level security (campus isolation)
- Audit logging for all data access
- Encrypted data at rest
- OAuth 2.0 / SAML for SSO
- Regular security audits

---

## 7. USER FLOWS

### 7.1 Daily Workflow - Placecom Member
1. Login → Land on Today page
2. Review timeline for scheduled activities
3. Check overdue tasks, prioritize
4. Navigate to first company needing action
5. Review timeline for context
6. Make call → Log call with notes
7. Update status if needed
8. Move to next company
9. End of day: Review pending tasks

### 7.2 Weekly Workflow - Placement Head
1. Monday: Review team workload table
2. Check alerts for at-risk companies
3. Review funnel conversion rates
4. Identify underperforming stages
5. Conduct team standup
6. Rebalance accounts if needed
7. Friday: Review week's analytics

### 7.3 New Company Outreach Flow
1. Add new company (or import from TCC database)
2. Assign to Placecom member
3. Add HR contacts
4. Select outreach sequence
5. System sends Email 1
6. If no reply → Email 2 (Day 3)
7. If no reply → Email 3 (Day 7)
8. If reply → Appears in timeline with alert
9. Member logs follow-up call
10. Schedule meeting
11. Log meeting outcome
12. If positive → Role received flow begins

---

## 8. SUCCESS METRICS

| Metric | Current State | Target |
|--------|---------------|--------|
| Companies contacted per week | Manual tracking | 50+ with full history |
| Follow-up completion rate | Unknown | 90%+ |
| Response tracking | Manual | 100% automated |
| Time to log activity | 5-10 minutes | < 1 minute |
| Team visibility | None | Full transparency |
| Historical context access | Scattered | Single click |

---

## 9. APPENDIX

### 9.1 Glossary
| Term | Definition |
|------|------------|
| Account | A company being tracked in the CRM |
| Placecom | Placement Committee (student volunteers) |
| PPT | Pre-Placement Talk |
| JD | Job Description |
| CTC | Cost to Company (salary package) |
| Hot/Warm/Cold | Company engagement classification |
| Sequence | Multi-step automated email campaign |
| Intro Credit | TCC service unit for facilitated introductions |

### 9.2 Reference Screenshots
The v0 prototype includes working UI for all screens described above. Please refer to the deployed prototype for visual reference.

### 9.3 Out of Scope (For This Module)
- Placement Management (drives, roles, applications, offers)
- CDM Preparation (student preparation, modules, AI interviews)
- Student-facing portal
- Company-facing portal

These are separate products that integrate with the Outreach CRM via APIs.

---

**Document prepared by:** TCC Product Team  
**For questions:** Contact product@thecareercompany.com

---

*This PRD should give agencies a complete understanding of the Outreach CRM module. The complexity assessment and effort estimates can be used as a baseline for quotations, adjusted based on the agency's experience and team composition.*
