# Zerodha Clone — Full-Stack Stock Trading Platform

A full-stack clone of [Zerodha](https://zerodha.com), India's largest discount stock broker. Built as a **monorepo** with three independently deployed applications sharing a single MongoDB Atlas database.

**Live Demo:** [frontend-swart-phi-91.vercel.app/demo](https://frontend-swart-phi-91.vercel.app/demo)

| App                  | URL                                                                            |
| -------------------- | ------------------------------------------------------------------------------ |
| 🌐 Landing Site      | [frontend-swart-phi-91.vercel.app](https://frontend-swart-phi-91.vercel.app)   |
| 📊 Trading Dashboard | [dashboard-flame-ten-54.vercel.app](https://dashboard-flame-ten-54.vercel.app) |
| ⚙️ REST API          | [zerodha-be.vercel.app](https://zerodha-be.vercel.app)                         |

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [System Architecture](#system-architecture)
- [Applications](#applications)
  - [Backend — REST API](#1-backend--rest-api)
  - [Frontend — Landing Site](#2-frontend--landing-site)
  - [Dashboard — Trading Interface](#3-dashboard--trading-interface)
- [API Reference](#api-reference)
- [Database Schema](#database-schema)
- [Key Design Patterns](#key-design-patterns)
- [Local Development Setup](#local-development-setup)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Project Challenges Solved](#project-challenges-solved)

---

## Overview

This project replicates the core product surfaces of Zerodha:

- A **public marketing website** with pages for Home, About, Products, Pricing, and Support
- A **trading dashboard** with a watchlist, buy/sell order flow, holdings portfolio with P&L computation, and Chart.js visualizations
- A **Node.js + Express REST API** backed by MongoDB Atlas handling holdings, positions, and order management — deployed as serverless functions

---

## Tech Stack

### Frontend (Landing Site)

| Technology       | Version | Purpose                     |
| ---------------- | ------- | --------------------------- |
| React            | 19.2.1  | UI framework                |
| Bootstrap        | 5.3.8   | Responsive layout & styling |
| Font Awesome     | 4.7.0   | Icons                       |
| react-router-dom | 7.11.0  | Routing                     |
| axios            | 1.4.0   | HTTP client                 |
| react-toastify   | 9.1.3   | Notifications               |

### Dashboard (Trading Interface)

| Technology        | Version | Purpose                    |
| ----------------- | ------- | -------------------------- |
| React             | 19.2.3  | UI framework               |
| MUI (Material UI) | 7.3.7   | Component library          |
| MUI Icons         | 7.3.7   | Icon set                   |
| Chart.js          | 4.5.1   | Data visualizations        |
| react-chartjs-2   | 5.3.1   | Chart.js React wrapper     |
| react-router-dom  | 7.12.0  | Client-side routing        |
| axios             | 1.13.2  | HTTP client                |
| @emotion/react    | 11.14.0 | CSS-in-JS (MUI dependency) |

### Backend (REST API)

| Technology    | Version | Purpose                       |
| ------------- | ------- | ----------------------------- |
| Node.js       | ≥18     | Runtime                       |
| Express       | 5.2.1   | Web framework                 |
| Mongoose      | 9.1.5   | MongoDB ODM                   |
| MongoDB Atlas | —       | Cloud database                |
| cors          | 2.8.6   | Cross-origin request handling |
| cookie-parser | 1.4.6   | Cookie parsing middleware     |
| dotenv        | 17.2.3  | Environment variable loading  |
| jsonwebtoken  | 9.0.0   | JWT (auth-ready)              |
| passport      | 0.7.0   | Auth middleware (auth-ready)  |
| bcryptjs      | 2.4.3   | Password hashing (auth-ready) |
| nodemon       | 3.1.11  | Dev auto-reload               |

---

## Repository Structure

```
zerodha/
├── backend/                    # Express REST API
│   ├── index.js                # App entry point, routes, DB connection
│   ├── package.json
│   ├── vercel.json             # Vercel serverless config
│   ├── model/                  # Mongoose model registrations
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModels.js
│   │   └── PositionsModel.js
│   └── schemas/                # Mongoose schema definitions
│       ├── HoldingsSchema.js
│       ├── OrdersSchema.js
│       └── PositionsSchema.js
│
├── frontend/                   # Public marketing site
│   ├── package.json
│   ├── .env                    # DISABLE_ESLINT_PLUGIN=true
│   ├── public/
│   │   ├── index.html          # Bootstrap + Font Awesome CDN links
│   │   └── media/images/       # Static assets
│   └── src/
│       ├── index.js            # Pathname-based router + root render
│       └── landing_page/
│           ├── Navbar.js
│           ├── Footer.js
│           ├── NotFound.js
│           ├── OpenAccount.js
│           ├── DemoPage.js     # Project showcase hub (/demo)
│           ├── home/           # HomePage, Hero, Awards, Stats, Pricing, Education
│           ├── about/          # AboutPage, Hero, Team
│           ├── products/       # ProductsPage, Hero, LeftSection, RightSection, Universe
│           ├── pricing/        # PricingPage, Hero, Brokerage
│           └── support/        # SupportPage, Hero, CreateTicket
│
├── dashboard/                  # Private trading interface
│   ├── package.json
│   └── src/
│       ├── index.js            # BrowserRouter + root render
│       ├── data/
│       │   └── data.js         # Local fallback data (watchlist, holdings, positions)
│       └── components/
│           ├── Home.js         # TopBar + Dashboard shell
│           ├── TopBar.js       # NIFTY 50, SENSEX + Menu
│           ├── Menu.js         # Side navigation with active state
│           ├── Dashboard.js    # Route layout + WatchList
│           ├── WatchList.js    # Left sidebar with Doughnut chart
│           ├── BuyActionWindow.js  # Order placement modal
│           ├── GeneralContext.js   # React Context for modal state
│           ├── Summary.js      # Account overview
│           ├── Holdings.js     # Portfolio table with P&L + Bar chart
│           ├── Positions.js    # Open positions table
│           ├── Orders.js       # Orders log
│           ├── Funds.js        # Funds management
│           ├── Apps.js         # Marketplace stub
│           ├── DoughnoutChart.js   # Doughnut chart component
│           └── VerticalGraph.js    # Vertical bar chart component
│
├── .env                        # MONGO_URL + TOKEN_KEY (gitignored)
├── .gitignore
└── README.md
```

---

## System Architecture

```
┌─ Frontend (React) ────────────────────────────────────────┐
│  Static CDN · Vercel · frontend-swart-phi-91.vercel.app   │
│  Routes: / /about /products /pricing /support /demo        │
│  Pathname-based router (no React Router dependency)        │
└───────────────────────────────────────────────────────────┘

┌─ Dashboard (React + MUI + Chart.js) ──────────────────────┐
│  Static CDN · Vercel · dashboard-flame-ten-54.vercel.app  │
│  WatchList ──► BuyActionWindow ──► POST /newOrder          │
│  Holdings  ──► GET /allHoldings ──► P&L Computation        │
│  GeneralContext (React Context API) for global modal       │
└────────────────────────┬──────────────────────────────────┘
                         │ HTTP REST (JSON)
                         ▼
┌─ Backend (Express · Vercel Serverless) ───────────────────┐
│  zerodha-be.vercel.app                                    │
│  Middleware: CORS · cookieParser · express.json           │
│  Mongoose ODM                                             │
└────────────────────────┬──────────────────────────────────┘
                         │ MongoDB Wire Protocol (TLS)
                         ▼
┌─ MongoDB Atlas (Cloud) ───────────────────────────────────┐
│  Collections: holdings · positions · orders               │
│  Cluster: ZerodhaCloneCluster (AWS / Mumbai)              │
└───────────────────────────────────────────────────────────┘
```

---

## Applications

### 1. Backend — REST API

**Entry point:** `backend/index.js`

#### Environment Strategy

```js
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}
```

In **development**, dotenv reads from the shared root `.env`. In **production** (Vercel), env vars are injected directly by the platform — no file needed. This prevents the silent failure of `injecting env (0)` that occurs when serverless containers can't find a `.env` file.

#### Middleware Stack

```
express.json()     → parses JSON request bodies
cors()             → whitelists localhost:3000 and localhost:3001 with credentials
cookieParser()     → parses Cookie headers for future auth flows
```

#### Database Connection

```js
mongoose
  .connect(uri)
  .then(() => app.listen(PORT)) // server only starts AFTER DB is ready
  .catch(() => process.exit(1)); // hard fail on connection error
```

The server gates startup on a successful MongoDB connection, ensuring no requests are handled on a disconnected database.

#### Seed Routes

`/addHoldings` and `/addPositions` use `Promise.all()` for **parallel writes** — all documents are saved concurrently, not sequentially:

```js
const ops = tempHoldings.map((item) => new HoldingsModel(item).save());
await Promise.all(ops); // parallel — O(1) time regardless of count
```

#### Schema / Model Separation

Schemas are defined in `schemas/` and models are registered in `model/`. This separation means the schema definition can be reused (e.g., for validation) independently of the Mongoose model registration.

---

### 2. Frontend — Landing Site

**Port:** 3000 (dev) · `frontend-swart-phi-91.vercel.app` (prod)

#### Custom Routing

The frontend uses a **deliberate pathname-based router** instead of React Router:

```js
const routeMap = {
  "/": HomePage,
  "/about": AboutPage,
  "/products": ProductsPage,
  "/pricing": PricingPage,
  "/support": SupportPage,
  "/demo": DemoPage,
};
const RouteComponent = routeMap[window.location.pathname] || NotFound;
```

This is intentional for a multi-page marketing site — no SPA router overhead, each page is independently accessible by URL, and Vercel's static hosting handles path resolution.

#### Pages

| Route       | Component      | Description                                                                                  |
| ----------- | -------------- | -------------------------------------------------------------------------------------------- |
| `/`         | `HomePage`     | Hero banner, Awards, Market stats, Pricing overview, Education section, Sign-up CTA          |
| `/about`    | `AboutPage`    | Company story, Founder profiles (Nithin Kamath)                                              |
| `/products` | `ProductsPage` | Kite, Console, Coin, Kite Connect API, Varsity — alternating LeftSection/RightSection layout |
| `/pricing`  | `PricingPage`  | ₹0 equity delivery, ₹20 flat intraday/F&O, Brokerage calculator links                        |
| `/support`  | `SupportPage`  | Ticket search, topic grid with 30+ support categories                                        |
| `/demo`     | `DemoPage`     | Project showcase hub — links to all 3 deployed apps                                          |

#### Reusable Layout Pattern

`LeftSection` and `RightSection` are **prop-driven layout components** that create the alternating image/text product showcase:

```jsx
<LeftSection
  imageURL="media/images/kite.png"
  productName="Kite"
  tryDemo="https://dashboard-flame-ten-54.vercel.app"
  learnMore="https://frontend-swart-phi-91.vercel.app/demo"
  googlePlay=""
  appStore=""
/>
```

---

### 3. Dashboard — Trading Interface

**Port:** 3001 (dev) · `dashboard-flame-ten-54.vercel.app` (prod)

#### Component Tree

```
<BrowserRouter>
  <Home>
    <TopBar>
      <div> NIFTY 50 · SENSEX (static) </div>
      <Menu>   ← Link-based nav, active state via useState
    </TopBar>
    <Dashboard>
      <GeneralContextProvider>   ← Global modal state
        <WatchList />            ← Left sidebar (always visible)
      </GeneralContextProvider>
      <Routes>
        /           → <Summary>     Account overview & margins
        /orders     → <Orders>      Order history
        /holdings   → <Holdings>    Portfolio table + Bar chart
        /positions  → <Positions>   Open positions table
        /funds      → <Funds>       Fund management
        /apps       → <Apps>        App marketplace stub
      </Routes>
    </Dashboard>
  </Home>
</BrowserRouter>
```

#### GeneralContext — Global Modal Pattern

The most architecturally significant component. Uses React Context to manage the buy/sell modal globally, avoiding prop-drilling through 4+ levels:

```js
// Any component at any depth can trigger the modal:
const { openBuyWindow } = useContext(GeneralContext);
openBuyWindow("INFY"); // opens modal pre-filled for INFY stock

// The modal renders at the Provider level (top of tree):
{
  isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />;
}
```

**State:** `isBuyWindowOpen: bool` + `selectedStockUID: string`
**Provider wraps:** WatchList (the only component that triggers buy actions)
**Consumer:** BuyActionWindow (reads uid, calls closeBuyWindow on submit)

#### WatchList — Left Sidebar

- 9 hardcoded NSE stocks: INFY, ONGC, TCS, KPITTECH, QUICKHEAL, WIPRO, M&M, RELIANCE, HUL
- Price and daily % change displayed per stock
- `isDown` flag controls red/green color coding
- MUI `<Tooltip>` + `<Grow>` for smooth animated hover action buttons
- MUI icons: `BarChartOutlined`, `KeyboardArrowUp`, `KeyboardArrowDown`, `MoreHoriz`
- **Doughnut chart** (Chart.js) showing portfolio price distribution across all 9 stocks
- Clicking **"B"** (Buy) calls `generalContext.openBuyWindow(stockName)`

#### BuyActionWindow — Order Placement

```
User interaction flow:
  Input qty (controlled: useState)
  Input price (controlled: useState, step=0.05)
  Click BUY  → POST /newOrder { name, qty, price, mode: "BUY" }
  Click SELL → POST /newOrder { name, qty, price, mode: "SELL" }
  Click Cancel → closeBuyWindow() (no API call)
```

#### Holdings — Portfolio Table with P&L

```js
// Hybrid data strategy:
const [allHoldings, setAllHoldings] = useState(holdings || []); // local fallback

useEffect(() => {
  axios
    .get("/allHoldings")
    .then((res) => {
      if (res.data.length > 0) setAllHoldings(res.data);
    })
    .catch(() => {
      /* keep local fallback, UI never breaks */
    });
}, []);

// P&L computed dynamically:
const curValue = price * qty;
const pnl = curValue - avg * qty;
const profClass = pnl >= 0 ? "profit" : "loss";
```

The component shows: Instrument, Qty, Avg Cost, LTP (Last Traded Price), Current Value, P&L (₹), Net Change (%), Day Change (%)

#### Menu — Active Navigation

```js
const [selectedMenu, setSelectedMenu] = useState(0);
// onClick → setSelectedMenu(index)
// className = selectedMenu === index ? "menu selected" : "menu"
```

Uses React Router `<Link>` for zero-reload SPA navigation.

---

## API Reference

**Base URL:** `https://zerodha-be.vercel.app`

| Method | Endpoint        | Description             | Request Body                 | Response                           |
| ------ | --------------- | ----------------------- | ---------------------------- | ---------------------------------- |
| `GET`  | `/`             | Health check            | —                            | `{ status: "ok", message: "..." }` |
| `GET`  | `/allHoldings`  | Get all holdings        | —                            | `Array<Holding>`                   |
| `GET`  | `/allPositions` | Get all positions       | —                            | `Array<Position>`                  |
| `GET`  | `/allOrders`    | Get all orders          | —                            | `Array<Order>`                     |
| `POST` | `/newOrder`     | Place buy/sell order    | `{ name, qty, price, mode }` | `"Order saved!"`                   |
| `GET`  | `/addHoldings`  | Seed 13 sample holdings | —                            | `Array<Holding>`                   |
| `GET`  | `/addPositions` | Seed 2 sample positions | —                            | `Array<Position>`                  |

### Example: Place an Order

```bash
curl -X POST https://zerodha-be.vercel.app/newOrder \
  -H "Content-Type: application/json" \
  -d '{ "name": "INFY", "qty": 2, "price": 1555.45, "mode": "BUY" }'
```

### Example: Fetch Holdings

```bash
curl https://zerodha-be.vercel.app/allHoldings
```

---

## Database Schema

### Holdings Collection

```js
{
  name:   String,   // NSE ticker symbol e.g. "INFY"
  qty:    Number,   // quantity held
  avg:    Number,   // average buy price (₹)
  price:  Number,   // current market price (₹)
  net:    String,   // net change since buy e.g. "+15.18%"
  day:    String,   // today's change e.g. "-1.60%"
  isLoss: Boolean   // true if today's day change is negative
}
```

### Positions Collection

```js
{
  product: String,  // product type: "CNC" | "MIS" | "NRML"
  name:    String,  // NSE ticker symbol
  qty:     Number,  // quantity
  avg:     Number,  // average entry price (₹)
  price:   Number,  // current market price (₹)
  net:     String,  // net change % since entry
  day:     String,  // today's change %
  isLoss:  Boolean  // profit/loss indicator
}
```

### Orders Collection

```js
{
  name:  String,  // NSE ticker symbol
  qty:   Number,  // quantity ordered
  price: Number,  // order price (₹)
  mode:  String   // "BUY" | "SELL"
}
```

---

## Key Design Patterns

### 1. Serverless-Safe Environment Loading

```js
// Only load .env file locally, not in Vercel production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}
```

### 2. React Context for Global Modal

Avoids prop-drilling through 4+ component levels for buy/sell window state. Any component calls `useContext(GeneralContext).openBuyWindow(uid)` — the modal renders at the Provider boundary.

### 3. Hybrid Data Strategy (Offline-Resilient)

```js
// Dashboard shows meaningful data even if backend is down
const [data, setData] = useState(localFallback);
useEffect(() => {
  axios
    .get(API_URL)
    .then((res) => setData(res.data))
    .catch(() => {});
}, []);
```

### 4. Parallel DB Writes with Promise.all

```js
// Seed 13 holdings concurrently instead of sequentially
await Promise.all(items.map((item) => new Model(item).save()));
```

### 5. Monorepo with Independent Deployments

Each app has its own `package.json`, `vercel.json` (backend), and Vercel project. Changes to one app don't trigger rebuilds of the others. Deploy command: `vercel deploy --cwd <folder> --prod`.

---

## Local Development Setup

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository

```bash
git clone https://github.com/variantbyx/zerodha.git
cd zerodha
```

### 2. Configure Environment Variables

Create a `.env` file in the **root** of the repository:

```env
MONGO_URL=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/zerodha?retryWrites=true&w=majority
TOKEN_KEY=your_jwt_secret_key_here
```

### 3. Install Dependencies & Run Each App

**Backend (port 3002):**

```bash
cd backend
npm install
npm start          # uses nodemon for auto-reload
```

**Frontend — Landing Site (port 3000):**

```bash
cd frontend
npm install
npm start
```

**Dashboard — Trading Interface (port 3001):**

```bash
cd dashboard
npm install
PORT=3001 npm start     # Windows: set PORT=3001 && npm start
```

### 4. Seed the Database (first time only)

```bash
# After backend is running:
curl http://localhost:3002/addHoldings
curl http://localhost:3002/addPositions
```

### 5. Access the Apps

| App               | URL                        |
| ----------------- | -------------------------- |
| Landing Site      | http://localhost:3000      |
| Trading Dashboard | http://localhost:3001      |
| API Health Check  | http://localhost:3002      |
| Demo Page         | http://localhost:3000/demo |

---

## Deployment

All three apps are deployed on **Vercel** using the CLI. The root is linked to `zerodha-be` (backend project).

### Deploy Backend

```bash
# From repo root (linked to zerodha-be project)
vercel --prod --yes
```

### Deploy Frontend

```bash
vercel deploy --cwd frontend --prod --yes
```

### Deploy Dashboard

```bash
vercel deploy --cwd dashboard --prod --yes
```

### Deploy All Three at Once

```bash
vercel --prod --yes ; vercel deploy --cwd frontend --prod --yes ; vercel deploy --cwd dashboard --prod --yes
```

### Backend `vercel.json`

```json
{
  "version": 2,
  "builds": [{ "src": "index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "index.js" }]
}
```

Routes all incoming requests to Express via `@vercel/node` serverless adapter.

---

## Environment Variables

| Variable                | Where Used | Description                                        |
| ----------------------- | ---------- | -------------------------------------------------- |
| `MONGO_URL`             | Backend    | MongoDB Atlas connection string                    |
| `TOKEN_KEY`             | Backend    | JWT signing secret                                 |
| `NODE_ENV`              | Backend    | Set to `"production"` automatically by Vercel      |
| `DISABLE_ESLINT_PLUGIN` | Frontend   | Set to `true` to prevent ESLint blocking CI builds |

**On Vercel:** Add `MONGO_URL` and `TOKEN_KEY` in Project Settings → Environment Variables for the `zerodha-be` project. `NODE_ENV=production` is set automatically by Vercel.

**Locally:** Place all variables in a `.env` file at the **repo root** (not inside `backend/`). The backend loads it via `path.resolve(__dirname, "../.env")`.

---

## Project Challenges Solved

| Challenge                                        | Root Cause                                                                                                                                 | Fix Applied                                                                                                       |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `SyntaxError: Unexpected token '<<'` on Vercel   | Git merge conflict markers pushed to `main`                                                                                                | Properly resolved all `<<<<<<< HEAD` conflict blocks before committing                                            |
| `injecting env (0)` — MongoDB connection failing | dotenv trying to read `.env` file that doesn't exist on Vercel's serverless container                                                      | Skip dotenv in `NODE_ENV=production`; Vercel injects env vars directly                                            |
| `404: NOT_FOUND` on all routes                   | Missing `vercel.json` — Vercel didn't know to route requests to Express                                                                    | Added `vercel.json` with `@vercel/node` build and `/*` route catch-all                                            |
| `Error: Command "npm run build" exited with 1`   | Vercel CI sets `CI=true`, treating ESLint warnings as hard errors                                                                          | Added `DISABLE_ESLINT_PLUGIN=true` to `frontend/.env`; fixed genuine issues (missing `alt` props, unused imports) |
| Backend deployment path mismatch                 | Running `vercel --prod` from inside `backend/` folder when Vercel project had `backend` as root directory — resolving to `backend/backend` | Deploy from repo root where `.vercel/project.json` is linked to `zerodha-be`                                      |

---

## Future Improvements

- **Authentication** — JWT + Passport.js infrastructure is already installed. Implementing login/signup would make Holdings/Orders user-specific
- **Live Market Data** — Replace static watchlist prices with WebSocket connection (Zerodha Kite Connect WebSocket or similar)
- **Order Book** — Show pending/executed orders separately with status updates
- **Real P&L** — Fetch live LTP from market data API to compute actual real-time P&L instead of stored prices
- **Redis Caching** — Cache `allHoldings` and `allPositions` responses with TTL to reduce MongoDB reads
- **Rate Limiting** — Add `express-rate-limit` to order endpoints to prevent API abuse
- **Tests** — Testing infrastructure (`@testing-library/react`) is installed in both frontend and dashboard; unit and integration test coverage can be added

---

## License

This project is built for educational purposes as a portfolio project. Not affiliated with Zerodha Broking Ltd.
