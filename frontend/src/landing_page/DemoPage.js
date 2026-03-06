import React from "react";

const apps = [
  {
    icon: "fa-home",
    badge: "React • Bootstrap",
    badgeColor: "#0d6efd",
    title: "Landing Site",
    description:
      "Public-facing marketing website with 5 pages — Home, About, Products, Pricing, and Support. Showcases Zerodha's discount broking model, pricing tiers, and product ecosystem.",
    tag: "Frontend",
    tagColor: "#198754",
    href: "https://frontend-swart-phi-91.vercel.app",
    btnLabel: "View Landing Site →",
    btnClass: "btn-primary",
    features: ["5 page routes", "Responsive layout", "Bootstrap 5"],
  },
  {
    icon: "fa-bar-chart",
    badge: "React • MUI • Chart.js",
    badgeColor: "#6f42c1",
    title: "Trading Dashboard",
    description:
      "Authenticated trading interface with live P&L computation, watchlist with buy/sell order flow, holdings portfolio table, and Chart.js visualizations for stock price distribution.",
    tag: "Dashboard",
    tagColor: "#6f42c1",
    href: "https://dashboard-flame-ten-54.vercel.app",
    btnLabel: "Open Dashboard →",
    btnClass: "btn-purple",
    features: ["Real-time P&L", "Buy/Sell orders", "Portfolio charts"],
  },
  {
    icon: "fa-server",
    badge: "Node.js • Express • MongoDB",
    badgeColor: "#0dcaf0",
    title: "REST API",
    description:
      "Express.js backend with 6 REST endpoints connected to MongoDB Atlas. Handles holdings, positions, and order management. Deployed as serverless functions on Vercel.",
    tag: "Backend",
    tagColor: "#0dcaf0",
    href: "https://zerodha-be.vercel.app",
    btnLabel: "Test API →",
    btnClass: "btn-info",
    features: ["/allHoldings", "/allOrders", "/newOrder"],
  },
];

const endpoints = [
  { method: "GET", path: "/allHoldings", desc: "Fetch all portfolio holdings" },
  { method: "GET", path: "/allPositions", desc: "Fetch all open positions" },
  { method: "GET", path: "/allOrders", desc: "Fetch all placed orders" },
  { method: "POST", path: "/newOrder", desc: "Place a buy / sell order" },
  { method: "GET", path: "/addHoldings", desc: "Seed sample holdings data" },
  { method: "GET", path: "/addPositions", desc: "Seed sample positions data" },
];

export default function DemoPage() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          color: "#fff",
          padding: "72px 0 56px",
        }}
      >
        <div className="container text-center">
          <span
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 20,
              padding: "6px 18px",
              fontSize: 13,
              letterSpacing: 1,
            }}
          >
            LIVE DEMO
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginTop: 20,
              marginBottom: 12,
            }}
          >
            Zerodha Clone
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.15rem",
              maxWidth: 560,
              margin: "0 auto 32px",
            }}
          >
            A full-stack stock trading platform — 3 independently deployed apps
            sharing a single MongoDB Atlas database.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB Atlas",
              "Chart.js",
              "MUI",
              "Vercel",
            ].map((t) => (
              <span
                key={t}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 20,
                  padding: "4px 14px",
                  fontSize: 13,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="https://github.com/variantbyx/zerodha"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              <i className="fa fa-github" style={{ marginRight: 6 }}></i>View on
              GitHub →
            </a>
          </div>
        </div>
      </div>

      {/* App Cards */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-2" style={{ color: "#1a1a2e" }}>
          3 Deployed Applications
        </h2>
        <p className="text-center text-muted mb-5">
          Each app is independently deployed on Vercel
        </p>

        <div className="row g-4">
          {apps.map((app) => (
            <div className="col-md-4" key={app.title}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  border: "1px solid #e9ecef",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #1a1a2e, #0f3460)",
                    padding: "28px 28px 20px",
                    color: "#fff",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <i
                      className={`fa ${app.icon}`}
                      style={{ fontSize: 28, opacity: 0.9 }}
                    ></i>
                    <span
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: 20,
                        padding: "3px 12px",
                        fontSize: 12,
                      }}
                    >
                      {app.badge}
                    </span>
                  </div>
                  <h4
                    style={{ marginTop: 16, marginBottom: 4, fontWeight: 700 }}
                  >
                    {app.title}
                  </h4>
                  <span
                    style={{
                      background: app.tagColor,
                      borderRadius: 20,
                      padding: "2px 10px",
                      fontSize: 12,
                    }}
                  >
                    {app.tag}
                  </span>
                </div>
                <div style={{ padding: "20px 28px", flexGrow: 1 }}>
                  <p
                    style={{ color: "#6c757d", fontSize: 14, lineHeight: 1.7 }}
                  >
                    {app.description}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "12px 0 0",
                    }}
                  >
                    {app.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          fontSize: 13,
                          color: "#495057",
                          padding: "3px 0",
                        }}
                      >
                        <i
                          className="fa fa-check-circle"
                          style={{ color: "#198754", marginRight: 8 }}
                        ></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: "0 28px 24px" }}>
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark w-100"
                    style={{ borderRadius: 8, fontWeight: 600 }}
                  >
                    {app.btnLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div
        style={{
          background: "#fff",
          borderTop: "1px solid #e9ecef",
          borderBottom: "1px solid #e9ecef",
        }}
      >
        <div className="container py-5">
          <h2 className="text-center fw-bold mb-2" style={{ color: "#1a1a2e" }}>
            System Architecture
          </h2>
          <p className="text-center text-muted mb-5">
            How the three apps interact
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                style={{
                  background: "#1a1a2e",
                  borderRadius: 16,
                  padding: "32px",
                  color: "#fff",
                  fontFamily: "monospace",
                  fontSize: 14,
                  lineHeight: 2,
                }}
              >
                <div style={{ color: "#6ee7b7" }}>
                  ┌─ Frontend (React) ──────────────────────────────┐
                </div>
                <div style={{ color: "#93c5fd", paddingLeft: 24 }}>
                  │ Landing pages: Home / About / Products / │
                </div>
                <div style={{ color: "#93c5fd", paddingLeft: 24 }}>
                  │ Pricing / Support → Static CDN (Vercel) │
                </div>
                <div style={{ color: "#6ee7b7" }}>
                  └─────────────────────────────────────────────────┘
                </div>
                <div style={{ color: "#6ee7b7", marginTop: 8 }}>
                  ┌─ Dashboard (React + MUI + Chart.js) ────────────┐
                </div>
                <div style={{ color: "#93c5fd", paddingLeft: 24 }}>
                  │ WatchList → BuyActionWindow → POST /newOrder │
                </div>
                <div style={{ color: "#93c5fd", paddingLeft: 24 }}>
                  │ Holdings → GET /allHoldings → P&L Table │
                </div>
                <div style={{ color: "#93c5fd", paddingLeft: 24 }}>
                  │ GeneralContext (React Context API) for modal │
                </div>
                <div style={{ color: "#6ee7b7" }}>
                  └──────────────────┬──────────────────────────────┘
                </div>
                <div style={{ textAlign: "center", color: "#fbbf24" }}>
                  {" "}
                  │ REST API (JSON)
                </div>
                <div style={{ color: "#6ee7b7", marginTop: 4 }}>
                  ┌──────────────────▼──────────────────────────────┐
                </div>
                <div style={{ color: "#93c5fd", paddingLeft: 24 }}>
                  │ Backend (Express + Vercel Serverless) │
                </div>
                <div style={{ color: "#93c5fd", paddingLeft: 24 }}>
                  │ CORS │ cookieParser │ express.json │
                </div>
                <div style={{ color: "#93c5fd", paddingLeft: 24 }}>
                  │ Mongoose ODM → MongoDB Atlas (cloud) │
                </div>
                <div style={{ color: "#6ee7b7" }}>
                  └─────────────────────────────────────────────────┘
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-2" style={{ color: "#1a1a2e" }}>
          API Endpoints
        </h2>
        <p className="text-center text-muted mb-5">
          Base URL:{" "}
          <code
            style={{
              background: "#e9ecef",
              padding: "2px 8px",
              borderRadius: 4,
            }}
          >
            https://zerodha-be.vercel.app
          </code>
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {endpoints.map((ep) => (
              <div
                key={ep.path}
                style={{
                  background: "#fff",
                  border: "1px solid #e9ecef",
                  borderRadius: 10,
                  padding: "14px 20px",
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    background: ep.method === "POST" ? "#fff3cd" : "#d1ecf1",
                    color: ep.method === "POST" ? "#856404" : "#0c5460",
                    borderRadius: 6,
                    padding: "3px 10px",
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "monospace",
                    minWidth: 52,
                    textAlign: "center",
                  }}
                >
                  {ep.method}
                </span>
                <code
                  style={{ color: "#0f3460", fontWeight: 600, minWidth: 160 }}
                >
                  {ep.path}
                </code>
                <span style={{ color: "#6c757d", fontSize: 14 }}>
                  {ep.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          background: "#1a1a2e",
          color: "rgba(255,255,255,0.6)",
          textAlign: "center",
          padding: "28px 0",
          fontSize: 14,
        }}
      >
        <p style={{ margin: 0 }}>
          Built with React · Node.js · MongoDB Atlas · Deployed on Vercel
        </p>
        <a
          href="https://github.com/variantbyx/zerodha"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "rgba(255,255,255,0.8)",
            textDecoration: "none",
            marginTop: 8,
            display: "inline-block",
          }}
        >
          <i className="fa fa-github" style={{ marginRight: 6 }}></i>
          github.com/variantbyx/zerodha
        </a>
      </div>
    </div>
  );
}
