# 💧 AquaShine — Car Wash Management (Frontend Demo)

A **frontend-only prototype** for a Car Wash Management web application, built with plain
**HTML, CSS, and JavaScript** — no frameworks, no build step, no backend.

This demo is intended for **client review** of the design and workflow. Once approved,
the full application (REST API, database, authentication, real payments) can be built on top.

---

## 🚀 How to run

No installation needed. Just open the entry page in a browser:

```
index.html
```

> Tip: for the cleanest experience (so relative paths and localStorage behave like production),
> serve the folder with any static server, e.g.:
> ```bash
> python3 -m http.server 8000
> ```
> then visit http://localhost:8000

---

## 🔑 Demo logins

Credentials are **pre-filled** on the login screens — just click the button.

| Module   | Entry page            | Notes                         |
|----------|-----------------------|-------------------------------|
| Customer | `login.html`          | `rahul.sharma@example.com`    |
| Admin    | `admin/login.html`    | `admin@aquashine.com`         |

---

## 🗂️ What's included

### Customer Module (`/customer`)
- **Dashboard** — stats, next appointment, recent bookings, rewards
- **Services** — filterable service catalogue
- **Service Details** — inclusions, pricing, related services
- **Book a Wash** — 4-step flow: service → vehicle → schedule → payment → confirmation
- **My Bookings** — filter, view timeline, cancel
- **My Vehicles** — add / edit / delete vehicles
- **Payments** — transaction history + printable receipts
- **Profile** — edit details, security, account stats

### Admin Module (`/admin`)
- **Dashboard** — revenue chart, KPIs, popular services, recent bookings
- **Booking Management** — filter, search, update status, assign staff
- **Customer Management** — search, profiles, lifetime value
- **Service Management** — full CRUD for services
- **Pricing Management** — live price editing, GST, promotions
- **Payment Management** — transactions, refunds, revenue stats
- **Reports** — analytics, revenue trends, top customers, report generation

---

## 📁 Project structure

```
Washing/
├── index.html              # Landing page
├── login.html              # Customer login / register
├── customer/               # Customer module pages
├── admin/                  # Admin module pages (incl. login.html)
└── assets/
    ├── css/styles.css      # Shared design system
    └── js/
        ├── data.js         # Mock data (seeded into localStorage)
        └── app.js          # Shared UI shell, helpers, toasts, modals
```

---

## ℹ️ Important notes for the demo

- **Data is mocked** in the browser via `localStorage`. Adding a vehicle, making a booking,
  or editing a service will persist within your browser and reflect across pages.
- To **reset the demo data**, open the browser console and run: `DB.reset()`.
- **No real payments** are processed — the payment step is a simulated flow.
- Fully **responsive** — works on desktop, tablet and mobile.

---

## 🔮 Next steps (post-approval)

The full build would add:
- REST API + database (Customers, Vehicles, Services, Bookings, Payments, Users)
- Real authentication & authorization (JWT / sessions, role-based access)
- Payment gateway integration (Razorpay / Stripe) with real receipts
- Server-side validation, security hardening, and reporting exports
```
