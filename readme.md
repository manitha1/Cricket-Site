# Apex Cricket Association Website

## Complete Website & Management System Specification

---

## 1. Project Overview

Develop a modern, responsive website and management platform for **Apex Cricket Association (ACA)**.

The website should function as both:

1. A professional public-facing cricket association website.
2. A complete cricket association management system for administrators.

The design should be modern, premium, sporty and professional.

The website should be suitable for:

- Cricket players
- Cricket teams
- Team managers
- Coaches
- Umpires
- Sponsors
- Association members
- Academy students and parents
- Cricket fans
- Visitors
- Association administrators

---

# 2. Technology Stack

Use the following technologies:

### Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Lucide React Icons

### Backend

Use **Supabase** for:

- PostgreSQL database
- Authentication
- Row Level Security
- Storage
- Realtime functionality
- Edge Functions where required

### Optional

- React Hook Form
- Zod
- TanStack Query
- date-fns
- Recharts
- React Hot Toast

---

# 3. Brand Identity

## Organization

**Name:** Apex Cricket Association

**Short name:** ACA

**Tagline:**

> Elevate the Game. Inspire the Future.

The branding should communicate:

- Cricket
- Competition
- Excellence
- Community
- Professionalism
- Youth development

---

# 4. Design Direction

Create a premium sports website.

### Visual style

- Modern
- Clean
- Athletic
- Professional
- Responsive
- Mobile-first
- Strong cricket imagery
- Large hero sections
- Rounded cards
- Subtle shadows
- Smooth animations

### Suggested colors

Primary:

`#0B3D2E`

Secondary:

`#16A34A`

Accent:

`#F5B301`

Background:

`#F8FAFC`

Dark:

`#0F172A`

White:

`#FFFFFF`

Use the colors consistently throughout the application.

---

# 5. Main Navigation

Desktop navigation:

```text
Apex Cricket Association

Home
About
Tournaments
Teams
Players
Academy
Facilities
News & Events
Membership
Gallery
Contact

Login
```

Mobile navigation should use a hamburger menu.

---

# 6. HOME PAGE

Create a professional cricket-themed homepage.

## Hero Section

Large cricket background image.

Headline:

> Elevate the Game. Inspire the Future.

Subheading:

> Apex Cricket Association is dedicated to developing competitive cricket, nurturing young talent and building a stronger cricket community.

Buttons:

- Explore Tournaments
- Join Apex

Hero should contain:

- Cricket stadium imagery
- CTA buttons
- Subtle overlay
- Animated entrance

---

## Live Match Section

Display currently active matches.

Example:

```text
LIVE

Apex Warriors
vs
Apex Titans

Division A

Warriors 142/5
18.2 Overs

Titans 136/8
20 Overs

Warriors won by 6 runs
```

Include:

- Live badge
- Score
- Overs
- Team logos
- Match status

If no live matches:

> No live matches currently.

---

# 7. UPCOMING MATCHES

Display upcoming fixtures.

Each card:

```text
Saturday
20 September 2026

Apex Warriors
vs
Colombo Strikers

Division A

3:00 PM

Apex Cricket Ground
```

Button:

> Match Details

---

# 8. LATEST RESULTS

Display recently completed matches.

Example:

```text
Apex Lions       168/7
Apex Warriors    162/9

Apex Lions won by 6 runs
```

Include:

- Score
- Overs
- Winner
- Date
- Competition

---

# 9. TOURNAMENT HIGHLIGHT

Homepage should display major tournaments.

Example:

### Apex Premier League

```text
Teams: 12
Matches: 66
Format: T20
Status: Ongoing
```

Button:

> View Tournament

---

# 10. NEWS & EVENTS

Display latest news.

Each article card:

- Featured image
- Category
- Date
- Title
- Short description
- Read More

Categories:

- News
- Tournament
- Academy
- Announcement
- Community
- Events

---

# 11. QUICK STATISTICS

Display association statistics.

Example:

```text
25+
Registered Teams

500+
Players

8
Annual Tournaments

150+
Matches Per Year
```

Statistics should be editable from the admin panel.

---

# 12. ABOUT PAGE

Create an About Apex page.

Sections:

## Who We Are

Explain the history and purpose of Apex Cricket Association.

## Vision

> To become a leading cricket association that develops players, promotes competitive cricket and strengthens the cricket community.

## Mission

> To provide professional opportunities, quality facilities and structured competitions for players of all levels.

## Objectives

- Promote cricket
- Develop young players
- Organize competitive tournaments
- Support cricket clubs
- Develop coaches and officials
- Provide quality facilities
- Encourage sportsmanship
- Build a strong cricket community

---

# 13. MANAGEMENT / COMMITTEE

Display association leadership.

Cards:

```text
President
Vice President
Secretary
Assistant Secretary
Treasurer
Tournament Director
Academy Director
Committee Member
```

Each profile can contain:

- Photo
- Name
- Position
- Short biography

---

# 14. TOURNAMENTS PAGE

Create a complete tournament management interface.

Tournament categories:

- Premier League
- Division A
- Division B
- Division C
- T20
- One Day
- Six-a-Side
- Over 40
- Women's Cricket
- Youth Cricket
- Corporate Cricket

Tournament cards:

```text
Apex Premier League 2026

Format: T20
Teams: 12
Matches: 66
Status: Ongoing

View Tournament
```

---

# 15. TOURNAMENT DETAILS

Each tournament must have:

### Overview

- Tournament name
- Season
- Format
- Start date
- End date
- Organizer
- Status

### Tabs

```text
Overview
Matches
Points Table
Teams
Players
Statistics
Results
Fixtures
```

---

# 16. POINTS TABLE

Example:

| Pos | Team          | P   | W   | L   | NR  | Pts | NRR   |
| --- | ------------- | --- | --- | --- | --- | --- | ----- |
| 1   | Apex Warriors | 5   | 4   | 1   | 0   | 8   | +1.42 |
| 2   | Apex Titans   | 5   | 4   | 1   | 0   | 8   | +0.88 |
| 3   | Apex Lions    | 5   | 3   | 2   | 0   | 6   | +0.41 |

The table must be generated automatically from match results.

---

# 17. MATCH DETAILS

Each match should have:

```text
Match ID
Tournament
Date
Time
Venue
Team A
Team B
Umpires
Scorers
Match Status
Toss
Result
```

Scorecard:

```text
TEAM A

Batter          R    B    4s    6s    SR
Player 1        72   45   8     2     160.00
Player 2        41   32   5     1     128.12

Bowler          O    M    R    W
Player 3        4    0    27   3
```

---

# 18. LIVE SCORING

Create a live scoring system.

Scorer should be able to record:

```text
0
1
2
3
4
6
Wide
No Ball
Bye
Leg Bye
Wicket
```

Live information:

- Runs
- Wickets
- Overs
- Current batsmen
- Current bowler
- Partnership
- Run rate
- Required run rate
- Target
- Match status

Use Supabase Realtime to update spectators instantly.

---

# 19. TEAMS PAGE

Display registered teams.

Team card:

```text
Team Logo

Apex Warriors

Division A

Captain: John Silva

Players: 18

View Team
```

---

# 20. TEAM DETAILS

Display:

- Team logo
- Team name
- Division
- Captain
- Vice Captain
- Manager
- Coach
- Players
- Tournament participation
- Results
- Statistics

---

# 21. PLAYERS PAGE

Create searchable player directory.

Filters:

- Name
- Team
- Division
- Role
- Age group

Player roles:

- Batsman
- Bowler
- All-Rounder
- Wicket Keeper

---

# 22. PLAYER PROFILE

Display:

```text
Player Photo

Name
Jersey Number
Team
Role
Batting Style
Bowling Style
Date of Birth
Nationality
```

Statistics:

```text
Matches
Runs
Batting Average
Strike Rate
50s
100s
Highest Score

Wickets
Bowling Average
Economy
Best Bowling
5 Wicket Hauls
```

Statistics should be calculated from match data.

---

# 23. ACADEMY

Create a dedicated Apex Cricket Academy section.

Sections:

### About Academy

### Programs

```text
Beginner
Junior
Intermediate
Advanced
Elite
```

### Age Groups

```text
U10
U12
U14
U16
U18
```

### Coaching Staff

Display:

- Coach photo
- Name
- Qualification
- Experience
- Specialization

### Training Schedule

Example:

```text
Monday
4:00 PM – 6:00 PM

Wednesday
4:00 PM – 6:00 PM

Saturday
8:00 AM – 11:00 AM
```

### Academy Registration

Online application form:

- Student name
- Date of birth
- Parent/guardian
- Phone
- Email
- Address
- Emergency contact
- Program
- Age group
- Previous cricket experience

---

# 24. MEMBERSHIP

Create membership system.

Membership types:

```text
Full Member
Associate Member
Player Member
Corporate Member
Academy Member
```

Membership page should display:

- Benefits
- Requirements
- Fees
- Terms
- Application process

---

# 25. ONLINE MEMBERSHIP APPLICATION

Form:

```text
Full Name
Date of Birth
NIC/Passport
Address
Phone
Email
Occupation
Membership Type
Emergency Contact
Profile Photo
Identity Document
```

After submission:

```text
Application ID
Application Status
Pending
```

Admin can:

- Approve
- Reject
- Request information

---

# 26. MEMBER LOGIN

Members should be able to log in.

Member dashboard:

```text
My Profile
Membership
My Team
My Matches
My Statistics
Tournament Registration
Payments
Documents
Notifications
```

---

# 27. FACILITIES

Create facilities page.

Example facilities:

### Cricket Ground

- Turf wicket
- Floodlights
- Pavilion
- Seating

### Indoor Nets

- Bowling nets
- Batting nets
- Bowling machine

### Outdoor Nets

### Fitness Centre

### Conference Room

### Restaurant

### Lounge

### Parking

Each facility should have:

- Images
- Description
- Opening hours
- Capacity
- Facilities
- Booking button

---

# 28. FACILITY BOOKING

Users should be able to request facility bookings.

Form:

```text
Facility
Date
Start Time
End Time
Number of People
Purpose
Contact Number
Additional Notes
```

Booking status:

```text
Pending
Approved
Rejected
Cancelled
Completed
```

Admin can manage bookings.

---

# 29. NEWS & EVENTS

Create CMS functionality.

Admin can create:

- News
- Articles
- Announcements
- Events
- Match reports

Fields:

```text
Title
Slug
Category
Featured Image
Content
Author
Publish Date
Status
```

Status:

```text
Draft
Published
Archived
```

---

# 30. EVENT CALENDAR

Display:

- Tournaments
- Matches
- Academy events
- Meetings
- Community events
- Award ceremonies

Calendar views:

- Month
- Week
- List

---

# 31. GALLERY

Create image gallery.

Categories:

```text
Matches
Tournaments
Academy
Events
Awards
Facilities
Community
```

Features:

- Image grid
- Lightbox
- Category filter
- Search

Admin can upload images.

Use Supabase Storage.

---

# 32. SPONSORS

Create sponsor section.

Sponsor levels:

```text
Title Sponsor
Platinum
Gold
Silver
Partner
```

Display:

- Logo
- Company name
- Website
- Sponsor category

Sponsors should be manageable through admin dashboard.

---

# 33. CONTACT PAGE

Display:

```text
Apex Cricket Association

Address
Telephone
Email
Opening Hours
```

Contact form:

```text
Name
Email
Phone
Subject
Message
```

Categories:

```text
General
Tournament
Membership
Academy
Facilities
Sponsorship
Media
```

Store messages in database.

---

# 34. ADMIN DASHBOARD

Create a separate secure admin dashboard.

Dashboard should show:

```text
Total Members
Total Teams
Total Players
Active Tournaments
Upcoming Matches
Live Matches
Pending Memberships
Pending Facility Bookings
Academy Students
Unread Messages
```

Use charts for:

- Membership growth
- Match statistics
- Tournament participation
- Academy registrations

---

# 35. ADMIN SIDEBAR

```text
Dashboard

Tournaments
  ├── All Tournaments
  ├── Create Tournament
  ├── Fixtures
  ├── Results
  └── Points Tables

Matches
  ├── All Matches
  ├── Live Matches
  └── Scorecards

Teams

Players

Members

Academy
  ├── Students
  ├── Coaches
  └── Programs

Facilities
  ├── Facilities
  └── Bookings

News & Events

Gallery

Sponsors

Messages

Payments

Reports

Settings
```

---

# 36. USER ROLES

Implement role-based access control.

Roles:

### Super Admin

Full system access.

### Administrator

Manage general association data.

### Tournament Manager

Manage tournaments, fixtures and results.

### Scorer

Manage live match scoring.

### Team Manager

Manage team information and players.

### Coach

Manage academy information.

### Member

Access member dashboard.

### Player

Access player profile and statistics.

### Public User

Read public website content.

---

# 37. DATABASE DESIGN

Use Supabase PostgreSQL.

Main tables:

```text
profiles
roles
members
teams
players
coaches
tournaments
tournament_teams
matches
match_innings
batting_scores
bowling_scores
ball_events
venues
facilities
facility_bookings
academy_programs
academy_students
academy_coaches
membership_applications
payments
news
events
gallery
gallery_categories
sponsors
contact_messages
notifications
documents
```

---

# 38. IMPORTANT DATABASE RELATIONSHIPS

### Tournament

```text
tournaments
    ↓
tournament_teams
    ↓
teams
```

### Team

```text
teams
    ↓
players
```

### Match

```text
matches
    ↓
match_innings
    ↓
ball_events
```

### Player Statistics

Calculate from:

```text
ball_events
batting_scores
bowling_scores
matches
```

Avoid manually storing statistics where they can be calculated reliably from match data.

---

# 39. AUTHENTICATION

Use Supabase Auth.

Support:

- Email/password
- Password reset
- Email verification

Optional:

- Google login

After login, redirect users based on role.

Example:

```text
Admin → /admin
Member → /member
Player → /player
Team Manager → /team-manager
Scorer → /scorer
```

---

# 40. SECURITY

Implement:

- Supabase Row Level Security
- Role-based authorization
- Protected routes
- Secure file uploads
- Input validation
- Database constraints
- Admin-only operations

Never expose service-role keys in frontend code.

---

# 41. RESPONSIVE DESIGN

The website must work correctly on:

### Mobile

```text
320px+
```

### Tablet

```text
768px+
```

### Desktop

```text
1024px+
```

### Large desktop

```text
1440px+
```

All tables should become horizontally scrollable or responsive on mobile.

---

# 42. FOOTER

Footer sections:

### Apex Cricket Association

Short description.

### Quick Links

```text
About
Tournaments
Teams
Players
Academy
Membership
Contact
```

### Useful Links

```text
Fixtures
Results
Points Tables
Live Scores
News
Gallery
```

### Contact

Address
Phone
Email

### Social Media

- Facebook
- Instagram
- YouTube
- TikTok

Bottom:

```text
© 2026 Apex Cricket Association. All Rights Reserved.
```

---

# 43. SEARCH

Global search should search:

```text
Players
Teams
Tournaments
Matches
News
Events
```

Display results grouped by category.

---

# 44. NOTIFICATIONS

Create notification system.

Examples:

```text
Your membership has been approved.

Your team has been registered for Apex Premier League 2026.

Match scheduled for tomorrow at 3:00 PM.

Your facility booking has been approved.
```

Notifications should be stored in database.

---

# 45. PAYMENTS

Prepare the system for online payments.

Payment types:

```text
Membership
Tournament Registration
Academy Fees
Facility Booking
Other
```

Payment record:

```text
Payment ID
User
Amount
Payment Type
Reference
Date
Status
```

Support future integration with a Sri Lankan payment gateway.

Do not hard-code a payment provider into the initial architecture.

---

# 46. REPORTS

Admin should be able to generate reports.

Reports:

### Membership Report

- Total members
- Active members
- Expired memberships
- New registrations

### Tournament Report

- Teams
- Matches
- Results
- Registrations

### Player Report

- Runs
- Wickets
- Matches
- Performance

### Financial Report

- Membership income
- Academy income
- Facility income
- Tournament income

Allow export to:

```text
PDF
CSV
Excel
```

---

# 47. SEO

Implement:

- Page titles
- Meta descriptions
- Open Graph metadata
- Sitemap
- Robots.txt
- Clean URLs
- Structured data where appropriate

Example URLs:

```text
/
 /about
 /tournaments
 /tournaments/apex-premier-league-2026
 /matches
 /matches/123
 /teams
 /teams/apex-warriors
 /players
 /players/john-silva
 /academy
 /membership
 /facilities
 /news
 /gallery
 /contact
```

---

# 48. PERFORMANCE

Optimize:

- Image loading
- Lazy loading
- Code splitting
- Database queries
- Caching
- Pagination
- Mobile performance

Use optimized WebP/AVIF images where possible.

---

# 49. ACCESSIBILITY

Follow good accessibility practices.

Implement:

- Semantic HTML
- Keyboard navigation
- Accessible forms
- Alt text
- Proper color contrast
- ARIA labels where necessary
- Visible focus states

---

# 50. ANIMATIONS

Use subtle animations.

Examples:

- Fade-in sections
- Card hover
- Button hover
- Page transitions
- Number counters
- Image transitions

Do not overuse animations.

The website should feel professional rather than flashy.

---

# 51. SAMPLE HOMEPAGE STRUCTURE

```text
------------------------------------------------
NAVBAR
------------------------------------------------

HERO
"Elevate the Game. Inspire the Future."

[Explore Tournaments] [Join Apex]

------------------------------------------------

LIVE MATCH
------------------------------------------------

UPCOMING MATCHES
------------------------------------------------

LATEST RESULTS
------------------------------------------------

TOURNAMENTS
------------------------------------------------

LATEST NEWS
------------------------------------------------

ACADEMY
------------------------------------------------

FACILITIES
------------------------------------------------

SPONSORS
------------------------------------------------

JOIN APEX
"Become part of the Apex cricket community."

[Become a Member]

------------------------------------------------

FOOTER
------------------------------------------------
```

---

# 52. ADMIN WORKFLOW

### Create Tournament

Admin:

```text
Create Tournament
↓
Enter tournament details
↓
Add teams
↓
Generate fixtures
↓
Publish tournament
```

### Match Workflow

```text
Scheduled
↓
Toss
↓
Live
↓
Completed
↓
Result Confirmed
↓
Statistics Updated
↓
Points Table Updated
```

### Membership Workflow

```text
Application
↓
Pending Review
↓
Approved / Rejected
↓
Payment
↓
Membership Activated
```

### Facility Workflow

```text
Booking Request
↓
Admin Review
↓
Approved
↓
Payment
↓
Booking Confirmed
```

---

# 53. IMPORTANT UI COMPONENTS

Create reusable components:

```text
Navbar
Footer
HeroSection
MatchCard
LiveMatchCard
TournamentCard
TeamCard
PlayerCard
NewsCard
EventCard
FacilityCard
SponsorCard
StatCard
DataTable
Modal
Dialog
Form
Toast
Pagination
SearchBar
FilterBar
StatusBadge
LoadingSkeleton
EmptyState
```

---

# 54. ERROR HANDLING

Create friendly error messages.

Examples:

```text
Unable to load matches.

Something went wrong while submitting your application.

You do not have permission to access this page.

This tournament could not be found.
```

Never display raw database errors to users.

---

# 55. EMPTY STATES

Every dynamic page should have a proper empty state.

Example:

```text
No upcoming matches

There are currently no upcoming matches scheduled.

[View Tournament Calendar]
```

---

# 56. ADMIN DATA TABLES

Admin tables should support:

- Search
- Filter
- Sort
- Pagination
- Add
- Edit
- Delete
- View
- Export

Use confirmation dialogs before destructive actions.

---

# 57. SAMPLE ADMIN DASHBOARD

```text
Welcome back, Administrator

------------------------------------------------
Members       Teams       Players      Tournaments
1,245         42          680          8
------------------------------------------------

Upcoming Matches

Apex Warriors vs Apex Titans
20 Sep 2026

Apex Lions vs Colombo Strikers
21 Sep 2026

------------------------------------------------

Membership Growth
[Chart]

------------------------------------------------

Tournament Activity
[Chart]

------------------------------------------------

Pending Requests

Membership Applications     12
Facility Bookings           8
Academy Applications        15
------------------------------------------------
```

---

# 58. PROJECT STRUCTURE

Recommended React structure:

```text
src/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── matches/
│   ├── tournaments/
│   ├── teams/
│   ├── players/
│   ├── academy/
│   └── facilities/
│
├── pages/
│   ├── public/
│   ├── auth/
│   ├── member/
│   ├── player/
│   └── admin/
│
├── layouts/
│
├── hooks/
│
├── services/
│
├── lib/
│   └── supabase.ts
│
├── types/
│
├── utils/
│
├── routes/
│
└── App.tsx
```

---

# 59. DEVELOPMENT PHASES

Build the project in phases.

## Phase 1 — Foundation

Implement:

- React/Vite
- Tailwind
- Routing
- Supabase
- Authentication
- Main layout
- Navbar
- Footer
- Responsive design

## Phase 2 — Public Website

Implement:

- Home
- About
- Tournaments
- Teams
- Players
- Academy
- Facilities
- News
- Gallery
- Contact

## Phase 3 — Cricket Management

Implement:

- Tournaments
- Teams
- Players
- Matches
- Fixtures
- Results
- Points tables

## Phase 4 — Live Scoring

Implement:

- Ball-by-ball scoring
- Scorecards
- Live matches
- Realtime updates

## Phase 5 — Membership

Implement:

- Membership applications
- Member accounts
- Membership status
- Documents
- Payments

## Phase 6 — Academy

Implement:

- Students
- Coaches
- Programs
- Registration
- Training schedules

## Phase 7 — Facilities

Implement:

- Facilities
- Availability
- Booking requests
- Approval system
- Payments

## Phase 8 — Administration

Implement:

- Admin dashboard
- Reports
- User management
- CMS
- Notifications
- Analytics

## Phase 9 — Finalization

Implement:

- SEO
- Performance optimization
- Security
- Accessibility
- Testing
- Deployment

---

# 60. IMPORTANT DEVELOPMENT RULE

Do not build the entire system as one huge component.

Use:

- Reusable components
- Reusable hooks
- Service functions
- TypeScript types
- Database relationships
- Proper state management
- Proper error handling

Keep public website and administration functionality logically separated.

---

# 61. SAMPLE DATA

Initially populate the system with realistic demo data.

Teams:

```text
Apex Warriors
Apex Titans
Apex Lions
Apex Kings
Colombo Strikers
Western Eagles
Capital Challengers
Southern Sharks
```

Tournaments:

```text
Apex Premier League 2026
Apex T20 Championship 2026
Apex Corporate Sixes 2026
Apex Youth Championship 2026
```

Venues:

```text
Apex Cricket Ground
Apex Indoor Cricket Centre
Apex Training Ground
```

Use fictional players and fictional statistics for demo data.

---

# 62. FINAL QUALITY REQUIREMENT

The finished website should feel like a professional national-level cricket association website rather than a simple university CRUD project.

Prioritize:

1. Professional UI
2. Excellent mobile experience
3. Fast performance
4. Easy navigation
5. Cricket-specific functionality
6. Secure authentication
7. Good database architecture
8. Admin usability
9. Accurate statistics
10. Scalable architecture

The system should be designed so that additional tournaments, teams, players, facilities, members and seasons can be added without changing the application architecture.

---

# 63. FINAL PRODUCT

The final Apex Cricket Association platform should provide:

```text
PUBLIC WEBSITE
        +
CRICKET MANAGEMENT SYSTEM
        +
MEMBERSHIP SYSTEM
        +
TOURNAMENT MANAGEMENT
        +
LIVE SCORING
        +
PLAYER STATISTICS
        +
ACADEMY MANAGEMENT
        +
FACILITY BOOKING
        +
NEWS/CMS
        +
SPONSOR MANAGEMENT
        +
ADMIN DASHBOARD
        +
REPORTING
```

The result should be a complete, scalable **Apex Cricket Association digital platform**.
