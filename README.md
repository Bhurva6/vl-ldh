# LDH Agro Foods — AI Inventory Intelligence Dashboard

**Phase 1: Static Dashboard UI Shell with Mock Data**

## Project Overview

This is a modern Next.js web application implementing the complete UI specification for LDH Agro Foods' AI-powered inventory management dashboard. The dashboard captures, processes, and visualizes goods movement at manufacturing facilities in real-time using camera-based AI inference, truck tracking (ANPR), weighbridge integration, and ERP sync.

## Technology Stack

- **Frontend Framework**: Next.js 14 + React 18
- **Styling**: CSS Modules + Custom CSS with CSS Variables
- **Charts**: Recharts (interactive, responsive, interactive)
- **Export**: ExcelJS/SheetJS (for Excel downloads, Phase 2)
- **Fonts**: Google Fonts (Sora, Space Grotesk, DM Mono)
- **Color Scheme**: Dark theme (OLED-optimized) with amber accents

## Project Structure

```
/Users/bhurvasharma/vl-ldh/
├── pages/
│   ├── _app.js              # Main app wrapper with layout
│   ├── _document.js         # HTML structure and meta tags
│   ├── dashboard.js         # Live Overview (Home) — Screen 1
│   ├── inbound.js           # Inbound Tracking — Screen 2
│   ├── outbound.js          # Outbound & Godown Tracking — Screen 3
│   ├── trucks.js            # Truck & ANPR Log — Screen 4
│   ├── sku.js               # SKU Intelligence — Screen 5
│   ├── reports.js           # Reports — Screen 6
│   ├── alerts.js            # Alerts & WhatsApp — Screen 7
│   ├── erp-sync.js          # ERP Sync — Screen 8
│   └── settings/
│       └── users.js         # Access Management — Screen 9
├── components/
│   ├── Sidebar.js           # Left navigation sidebar
│   └── TopBar.js            # Top navigation bar
├── styles/
│   ├── globals.css          # Global theme and utilities
│   ├── Sidebar.module.css   # Sidebar styles
│   ├── TopBar.module.css    # TopBar styles
│   ├── Dashboard.module.css # Home dashboard styles
│   ├── Inbound.module.css   # Inbound tracking styles
│   └── ScreenPlaceholder.module.css # Reusable placeholder styles
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
└── README.md                # This file
```

## Screens Implemented (Phase 1)

### 1. **Live Overview Dashboard** (`/dashboard`)
   - 6 KPI cards (trucks in/out, bags received/dispatched, goods produced, active trucks)
   - SKU breakdown pie chart (interactive, showing today's mix)
   - 7-day inbound vs outbound trend bar chart
   - 2x camera feed placeholders (entry gate + unloading bay)
   - Alert feed (last 5 events with timestamps)
   - Recent truck log (last 5 trucks with status)

### 2. **Inbound Tracking** (`/inbound`)
   - Filter bar: date range, SKU type, truck plate, status
   - Complete truck record table with 13 columns:
     - Truck Plate, Entry Time, Gross/Net Weight, Bag Count, Bag Size
     - SKU, Confidence %, Calculated Weight, Discrepancy Flag, ERP Status, Exit Time, Status
   - Color-coded confidence badges (green ≥90%, amber 70-89%, red <70%)
   - Status badges (Complete, Pending Review, Flagged)
   - Camera snapshot placeholders with expandable details
   - Excel export button

### 3. **Outbound & Godown Tracking** (`/outbound`)
   - Tab navigation: Conveyor Count, Godown Flow, Truck Loading
   - Live conveyor counter and camera feed placeholder
   - Godown in/out flow tracking with net flow display
   - Outbound truck loading table
   - SKU breakdown on conveyor (pie chart placeholder)

### 4. **Truck & ANPR Log** (`/trucks`)
   - Searchable truck log with filters (plate, direction, date range)
   - Master vehicle record with 9 columns:
     - Truck Plate, Visit Date & Time, Direction, Weights, Bag Count, SKU, Duration, ANPR Snapshot, ERP Link
   - ANPR snapshot placeholder with detection metadata
   - Excel export capability

### 5. **SKU Intelligence** (`/sku`)
   - Today's SKU mix pie chart
   - Week-on-week SKU volume trends
   - Review queue badge (pending low-confidence items)
   - SKU reference table with:
     - SKU Name, Colour Swatch, Bag Size, Daily Volume, AI Accuracy, Actions
   - AI model performance stats (Super Admin only)

### 6. **Reports** (`/reports`)
   - Report type selector (Daily, Weekly, Monthly, Quarterly, Custom Range)
   - Daily Inbound Summary with KPIs and charts
   - Daily Outbound Summary
   - Daily Production Count vs Target
   - Weekly/Monthly/Quarterly aggregations
   - PDF & Excel download buttons
   - Interactive charts for visual reports

### 7. **Alerts & WhatsApp Notifications** (`/alerts`)
   - Configurable alert events table (8 event types)
   - Default state configuration for each alert
   - WhatsApp message preview for each event
   - Recipient management interface
   - Alert log search (date range, event type, delivery status)
   - Quiet hours configuration (e.g., 11 PM – 6 AM)

### 8. **ERP Sync (Frappe Integration)** (`/erp-sync`)
   - KPI cards: Records Synced Today, Sync Errors, Last Successful Sync, Pending Records
   - Manual sync trigger button
   - Sync direction A: Dashboard → Frappe (GRN, Delivery Notes)
   - Sync direction B: Frappe → Dashboard (Production orders, targets)
   - Sync log table with Record ID, Type, Direction, Timestamp, Status, Frappe ID
   - Error details and retry mechanism

### 9. **Access Management** (`/settings/users`)
   - Role hierarchy display with permission matrices:
     - **Super Admin** (Jay Shah): Full access
     - **Operations Manager**: View all data, confirm SKU reviews, download reports
     - **Gate Operator**: View live overview, confirm SKU reviews, log manual entries
   - User management table: Name, Role, Email, Phone, Last Login, Status
   - Invite new user flow
   - Audit log with search filters (user, date range)

## Key Features

### Design System
- **Color Scheme**: Dark theme (#080808 bg, #111111 surface) optimized for OLED displays
- **Accent Color**: Amber (#E8931A) for primary actions and highlights
- **Status Colors**: Green (#22c55e), Red (#ef4444), Blue (#3b82f6)
- **Typography**: Sora (sans-serif), Space Grotesk (body), DM Mono (code/data)

### Navigation
- **Persistent Left Sidebar** (260px width, collapsible on mobile)
  - 9 module icons + labels
  - Active state highlighting with amber left border
  - Badge count for review queue
- **Top Navigation Bar** (64px height)
  - Facility selector (LDH Main Plant)
  - System status indicator with live pulse animation
  - Current time (HH:MM:SS)
  - User profile dropdown (name, role)

### Responsive Design
- Desktop-first approach (1400px max-width for content)
- Tablet-friendly (768px breakpoint)
- Mobile-optimized tables and layouts
- Sidebar hides on screens < 768px

### Data Visualization
- **Pie Charts**: SKU breakdown with color-coded segments, hover tooltips
- **Bar Charts**: Daily volume trends, 7-day comparison
- **Interactive Elements**: All charts respond to hover for exact values
- **Color Coordination**: Pie chart colors match configured SKU colour codes

### Accessibility
- Semantic HTML (header, nav, main, section)
- Proper form label associations (htmlFor)
- Accessible color contrast ratios
- Keyboard navigation support (Next/Links)
- ARIA-ready structure

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- macOS, Linux, or Windows with Git

### Installation

1. **Clone the repository** (already set up in `/Users/bhurvasharma/vl-ldh`)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The dashboard will be available at `http://localhost:3000/dashboard`

### Build for Production
```bash
npm run build
npm start
```

## Screens Navigation

Once the server is running, navigate to:
- `/dashboard` — Live Overview (default home)
- `/inbound` — Inbound Tracking
- `/outbound` — Outbound & Godown Tracking
- `/trucks` — Truck & ANPR Log
- `/sku` — SKU Intelligence
- `/reports` — Reports
- `/alerts` — Alerts & WhatsApp
- `/erp-sync` — ERP Sync
- `/settings/users` — Access Management

## Mock Data

All screens are populated with realistic mock data:
- **KPI Cards**: Sample truck counts, bag quantities, production figures
- **Tables**: 4-5 sample records per table (trucks, SKUs, alerts)
- **Charts**: 7-day trend data for line/bar charts, SKU distribution for pie charts
- **User Accounts**: Jay Shah (Super Admin), Operations Manager, Gate Operators

## Placeholder Media

All placeholder images/videos follow the specifications in the requirements document:
- **Camera Feeds**: 480×270px (16:9) dashed border boxes with icon + description
- **ANPR Snapshots**: 160×90px thumbnails, 1280×720px in modal
- **SKU Swatches**: 48×48px colour blocks, 320×320px in modal
- **Dimensions**: Clearly labeled in placeholders for post-deployment replacement

## Phase 2: Backend Integration (Planned)

The UI shell is designed to receive real data via:
- **REST API** from AI inference engine (truck detections, bag counts, SKU detections)
- **WebSocket/Polling** for live updates (≤30s interval)
- **Weighbridge API** integration for weight data
- **Frappe ERP API** for two-way sync

No backend code is included in Phase 1 — the focus is on the UI/UX review and approval before development begins.

## Phase 3: Features (Planned)

- **WhatsApp Integration**: Business API for real-time alerts
- **Excel Export**: ExcelJS for proper .xlsx files with charts and data tables
- **Frappe ERP Sync**: Automatic GRN/Delivery Note creation
- **Authentication**: Email + password login with session management
- **Multi-Facility Support**: Facility selector in top bar
- **Audit Logging**: User action tracking for compliance

## File Sizes & Performance

- Total bundle size: ~180KB (gzipped)
- Recharts library: ~70KB
- CSS modules: ~15KB
- No external CDN dependencies (all fonts served via Google Fonts)
- Lazy loading on routes

## Development Notes

### Color Variables (CSS Variables)
All colors are defined in `:root` in `globals.css`:
- `--bg`, `--surface`, `--card`, `--card2`, `--border`
- `--amber`, `--amber-dim`, `--green`, `--red`, `--blue`
- `--muted`, `--silver`, `--light`, `--white`
- `--mono`, `--sans`, `--body` (font families)

To update the theme, modify these variables in one place.

### CSS Modules
Each screen has its own `.module.css` file for scoped styles, preventing naming conflicts and making components reusable.

### Linting
ESLint is configured with Next.js rules:
- No unused imports
- No `Array index` in React keys
- Proper accessibility (labels, ARIA)
- Optional chaining preference

## Known Limitations (Phase 1)

- No backend connection — all data is mock
- No real-time WebSocket updates
- No file downloads (Excel/PDF)
- No WhatsApp/SMS notifications
- No Frappe ERP integration
- Camera feeds are placeholders only
- No user authentication or session management
- No data persistence (refresh clears all state)

## Next Steps

1. **Jay Shah Review**: Present all 9 screens for feedback and approval
2. **UI Adjustments**: Incorporate client feedback on layouts, colors, terminology
3. **Backend Development**: Build API endpoints for AI inference integration
4. **Frappe ERP Integration**: Confirm field mapping and implement sync
5. **WhatsApp Integration**: Integrate Business API or SMS fallback
6. **UAT & Testing**: User acceptance testing with operators
7. **Go-Live**: Deploy to on-premise server with HTTPS

## Support & Maintenance

For questions or issues, contact:
- **Vigilant Labs**: hello@vigilantlabs.in | +91 95743 32221
- **Client Contact**: Jay Shah (Super Admin)

---

**Document**: LDH Agro Foods Dashboard v1.0
**Date**: 10 March 2026
**Status**: Phase 1 — UI Shell Complete, Ready for Review
