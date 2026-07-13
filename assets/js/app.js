/* ============================================================
   AquaShine — Shared UI helpers & app shell
   ============================================================ */

const App = {
  /* ---------- formatting ---------- */
  money(n) { return '₹' + Number(n).toLocaleString('en-IN'); },
  date(d) {
    if (!d) return '—';
    const dt = new Date(d + 'T00:00:00');
    return dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  initials(name) { return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase(); },

  statusBadge(status) {
    const map = {
      'Confirmed': 'info', 'Pending': 'warning', 'Completed': 'success',
      'Cancelled': 'danger', 'In Progress': 'info', 'Active': 'success',
      'Inactive': 'muted', 'VIP': 'info', 'Paid': 'success', 'Success': 'success',
      'Failed': 'danger', 'Refunded': 'muted'
    };
    const cls = map[status] || 'muted';
    return `<span class="badge badge-${cls}"><span class="dot"></span>${status}</span>`;
  },

  /* ---------- toast ---------- */
  toast(msg, type = 'success') {
    let wrap = document.querySelector('.toast-wrap');
    if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; document.body.appendChild(wrap); }
    const icons = { success: '✅', error: '⚠️', info: 'ℹ️' };
    const el = document.createElement('div');
    el.className = 'toast ' + type;
    el.innerHTML = `<span>${icons[type] || ''}</span><span>${msg}</span>`;
    wrap.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(120%)'; el.style.transition = '.3s'; }, 2600);
    setTimeout(() => el.remove(), 2950);
  },

  /* ---------- modal ---------- */
  modal(html) {
    let overlay = document.querySelector('.modal-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', e => { if (e.target === overlay) App.closeModal(); });
    }
    overlay.innerHTML = `<div class="modal">${html}</div>`;
    overlay.classList.add('open');
    return overlay;
  },
  closeModal() { const o = document.querySelector('.modal-overlay'); if (o) o.classList.remove('open'); },

  confirm(title, message, onYes, yesLabel = 'Confirm', danger = false) {
    App.modal(`
      <div class="modal-head"><h3>${title}</h3><button class="modal-close" onclick="App.closeModal()">×</button></div>
      <div class="modal-body"><p class="muted">${message}</p></div>
      <div class="modal-foot">
        <button class="btn btn-ghost" onclick="App.closeModal()">Cancel</button>
        <button class="btn ${danger ? 'btn-danger' : ''}" id="confirmYes">${yesLabel}</button>
      </div>`);
    document.getElementById('confirmYes').onclick = () => { App.closeModal(); onYes(); };
  },

  logout() {
    App.confirm('Sign out', 'Are you sure you want to sign out of the demo?', () => {
      App.toast('Signed out', 'info');
      setTimeout(() => { window.location.href = App.rel('index.html'); }, 600);
    }, 'Sign out');
  },

  // relative path helper (pages live in /customer or /admin subfolders)
  rel(path) {
    const inSub = /\/(customer|admin)\//.test(window.location.pathname);
    return (inSub ? '../' : '') + path;
  },

  /* ---------- App shell (sidebar + topbar) ---------- */
  shell(cfg) {
    // cfg: { role:'customer'|'admin', active:'key', title:'', subtitle:'' }
    const inSub = true; // shell only used on inner pages
    const base = '';
    const customerNav = [
      { key: 'dashboard', label: 'Dashboard', icon: '📊', href: 'dashboard.html' },
      { key: 'services', label: 'Services', icon: '🧴', href: 'services.html' },
      { key: 'book', label: 'Book a Wash', icon: '📅', href: 'book.html' },
      { key: 'bookings', label: 'My Bookings', icon: '🗓️', href: 'bookings.html' },
      { key: 'vehicles', label: 'My Vehicles', icon: '🚗', href: 'vehicles.html' },
      { key: 'payments', label: 'Payments', icon: '💳', href: 'payments.html' },
      { key: 'profile', label: 'Profile', icon: '👤', href: 'profile.html' }
    ];
    const adminNav = [
      { key: 'dashboard', label: 'Dashboard', icon: '📊', href: 'dashboard.html' },
      { key: 'bookings', label: 'Bookings', icon: '🗓️', href: 'bookings.html' },
      { key: 'customers', label: 'Customers', icon: '👥', href: 'customers.html' },
      { key: 'services', label: 'Services', icon: '🧴', href: 'services.html' },
      { key: 'pricing', label: 'Pricing', icon: '🏷️', href: 'pricing.html' },
      { key: 'payments', label: 'Payments', icon: '💳', href: 'payments.html' },
      { key: 'reports', label: 'Reports', icon: '📈', href: 'reports.html' }
    ];
    const nav = cfg.role === 'admin' ? adminNav : customerNav;
    const cust = DB.customer();
    const user = cfg.role === 'admin'
      ? { name: 'Admin User', role: 'Administrator', avatar: 'AU' }
      : { name: cust.name, role: 'Customer', avatar: cust.avatar || App.initials(cust.name) };
    const brandSub = cfg.role === 'admin' ? 'Admin Panel' : 'Customer';

    const navHtml = nav.map(n =>
      `<a href="${n.href}" class="${n.key === cfg.active ? 'active' : ''}"><span class="ic">${n.icon}</span>${n.label}</a>`
    ).join('');

    const shellHtml = `
    <div class="backdrop" id="backdrop" onclick="App.toggleSidebar()"></div>
    <div class="app">
      <aside class="sidebar" id="sidebar">
        <div class="logo"><span class="mark">💧</span> AquaShine</div>
        <div class="nav-label">${brandSub}</div>
        <nav>${navHtml}</nav>
        <div class="side-foot">
          <a href="#" onclick="App.logout();return false;" style="display:flex;align-items:center;gap:10px;color:#94a3b8;font-size:.9rem;">
            <span>↩️</span> Sign out
          </a>
        </div>
      </aside>
      <div class="main">
        <header class="topbar">
          <div style="display:flex;align-items:center;gap:14px;">
            <button class="icon-btn menu-toggle" onclick="App.toggleSidebar()">☰</button>
            <div class="page-title">${cfg.title || ''}</div>
          </div>
          <div class="tb-right">
            <button class="icon-btn" title="Notifications" onclick="App.toast('No new notifications','info')">🔔<span class="badge-count">2</span></button>
            <div class="user-chip" onclick="window.location.href='${cfg.role === 'admin' ? 'dashboard.html' : 'profile.html'}'">
              <div class="avatar">${user.avatar}</div>
              <div class="u-meta">
                <div class="u-name">${user.name}</div>
                <div class="u-role">${user.role}</div>
              </div>
            </div>
          </div>
        </header>
        <main class="content" id="pageContent"></main>
      </div>
    </div>`;
    document.getElementById('app-root').innerHTML = shellHtml;
    return document.getElementById('pageContent');
  },

  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('backdrop').classList.toggle('show');
  }
};
