/* ============================================================
   AquaShine — Mock data layer (localStorage backed)
   NOTE: This is a front-end demo only. No real backend/payment.
   ============================================================ */

const DB = {
  KEY: 'aquashine_demo_v1',

  seed() {
    if (localStorage.getItem(this.KEY)) return;
    const data = {
      customer: {
        id: 'C-1001',
        name: 'Rahul Sharma',
        email: 'rahul.sharma@example.com',
        phone: '+91 98765 43210',
        address: '42, Green Park Avenue, Bengaluru, KA 560001',
        joined: '2025-11-02',
        avatar: 'RS'
      },
      services: [
        { id: 'S1', name: 'Express Exterior Wash', category: 'Exterior', price: 299, duration: 25, popular: false, icon: '🚿',
          desc: 'A quick exterior rinse, foam wash and hand dry to keep your car sparkling on the go.',
          includes: ['Pre-rinse & foam bath', 'Wheel & tyre clean', 'Hand dry with microfiber', 'Spot-free finish'] },
        { id: 'S2', name: 'Premium Foam Wash', category: 'Exterior', price: 499, duration: 40, popular: true, icon: '🫧',
          desc: 'Deep foam clean with wax protection for a glossy, showroom-style shine.',
          includes: ['Snow foam pre-wash', 'Two-bucket hand wash', 'Wheel & arch detailing', 'Liquid wax coat', 'Tyre dressing'] },
        { id: 'S3', name: 'Interior Deep Clean', category: 'Interior', price: 699, duration: 60, popular: false, icon: '🧽',
          desc: 'Vacuum, dashboard polish and upholstery shampoo for a fresh cabin.',
          includes: ['Full vacuum', 'Dashboard & console polish', 'Seat & carpet shampoo', 'Glass cleaning', 'Air freshener'] },
        { id: 'S4', name: 'Full Detailing Package', category: 'Premium', price: 1499, duration: 120, popular: true, icon: '✨',
          desc: 'The complete package — interior + exterior detailing with paint protection.',
          includes: ['Everything in Foam Wash', 'Full interior deep clean', 'Paint decontamination', 'Ceramic spray sealant', 'Leather conditioning', 'Engine bay clean'] },
        { id: 'S5', name: 'Ceramic Coating', category: 'Premium', price: 4999, duration: 240, popular: false, icon: '🛡️',
          desc: 'Long-lasting 9H ceramic coating for years of gloss and protection.',
          includes: ['Multi-stage paint correction', '9H ceramic coating', 'Hydrophobic finish', '12-month protection', 'Free top-up wash'] },
        { id: 'S6', name: 'Underbody Wash', category: 'Exterior', price: 349, duration: 30, popular: false, icon: '🔧',
          desc: 'High-pressure underbody clean to remove mud, salt and corrosion build-up.',
          includes: ['High-pressure underbody jet', 'Anti-rust treatment', 'Wheel arch clean', 'Chassis inspection'] }
      ],
      vehicles: [
        { id: 'V1', type: 'Sedan', make: 'Honda', model: 'City', plate: 'KA 01 AB 1234', color: 'Pearl White', year: 2022 },
        { id: 'V2', type: 'SUV', make: 'Hyundai', model: 'Creta', plate: 'KA 05 MN 8899', color: 'Titan Grey', year: 2023 }
      ],
      bookings: [
        { id: 'BK-2041', serviceId: 'S4', vehicleId: 'V2', date: '2026-07-15', slot: '10:30 AM', status: 'Confirmed', amount: 1499, payStatus: 'Paid', notes: 'Please clean pet hair from rear seats.' },
        { id: 'BK-2038', serviceId: 'S2', vehicleId: 'V1', date: '2026-07-18', slot: '02:00 PM', status: 'Pending', amount: 499, payStatus: 'Pending', notes: '' },
        { id: 'BK-2025', serviceId: 'S3', vehicleId: 'V1', date: '2026-06-28', slot: '11:00 AM', status: 'Completed', amount: 699, payStatus: 'Paid', notes: '' },
        { id: 'BK-2012', serviceId: 'S1', vehicleId: 'V2', date: '2026-06-14', slot: '09:00 AM', status: 'Completed', amount: 299, payStatus: 'Paid', notes: '' },
        { id: 'BK-1998', serviceId: 'S2', vehicleId: 'V1', date: '2026-05-30', slot: '04:30 PM', status: 'Cancelled', amount: 499, payStatus: 'Refunded', notes: '' }
      ],
      payments: [
        { id: 'TXN-88421', bookingId: 'BK-2041', amount: 1499, method: 'UPI', status: 'Success', date: '2026-07-10', ref: 'upi/aquashine/8842' },
        { id: 'TXN-88390', bookingId: 'BK-2025', amount: 699, method: 'Credit Card', status: 'Success', date: '2026-06-27', ref: 'card/****4521' },
        { id: 'TXN-88355', bookingId: 'BK-2012', amount: 299, method: 'UPI', status: 'Success', date: '2026-06-14', ref: 'upi/aquashine/8835' },
        { id: 'TXN-88301', bookingId: 'BK-1998', amount: 499, method: 'Net Banking', status: 'Refunded', date: '2026-05-30', ref: 'nb/hdfc/8830' },
        { id: 'TXN-88450', bookingId: 'BK-2038', amount: 499, method: 'UPI', status: 'Pending', date: '2026-07-12', ref: 'upi/aquashine/8845' }
      ],
      // Admin-side aggregate demo data
      allCustomers: [
        { id: 'C-1001', name: 'Rahul Sharma', email: 'rahul.sharma@example.com', phone: '+91 98765 43210', bookings: 5, spent: 3495, status: 'Active', joined: '2025-11-02' },
        { id: 'C-1002', name: 'Priya Nair', email: 'priya.nair@example.com', phone: '+91 90000 11223', bookings: 8, spent: 6240, status: 'Active', joined: '2025-09-15' },
        { id: 'C-1003', name: 'Arjun Mehta', email: 'arjun.mehta@example.com', phone: '+91 98111 22334', bookings: 2, spent: 998, status: 'Active', joined: '2026-02-20' },
        { id: 'C-1004', name: 'Sneha Reddy', email: 'sneha.reddy@example.com', phone: '+91 97222 33445', bookings: 12, spent: 14970, status: 'VIP', joined: '2025-06-10' },
        { id: 'C-1005', name: 'Vikram Singh', email: 'vikram.singh@example.com', phone: '+91 96333 44556', bookings: 1, spent: 299, status: 'Inactive', joined: '2026-05-01' },
        { id: 'C-1006', name: 'Ananya Iyer', email: 'ananya.iyer@example.com', phone: '+91 95444 55667', bookings: 6, spent: 4194, status: 'Active', joined: '2025-12-08' }
      ],
      adminBookings: [
        { id: 'BK-2041', customer: 'Rahul Sharma', service: 'Full Detailing Package', vehicle: 'KA 05 MN 8899', date: '2026-07-15', slot: '10:30 AM', status: 'Confirmed', amount: 1499, payStatus: 'Paid' },
        { id: 'BK-2040', customer: 'Priya Nair', service: 'Ceramic Coating', vehicle: 'KA 03 XY 4455', date: '2026-07-15', slot: '01:00 PM', status: 'Confirmed', amount: 4999, payStatus: 'Paid' },
        { id: 'BK-2039', customer: 'Sneha Reddy', service: 'Premium Foam Wash', vehicle: 'KA 09 PQ 7788', date: '2026-07-16', slot: '11:30 AM', status: 'In Progress', amount: 499, payStatus: 'Paid' },
        { id: 'BK-2038', customer: 'Rahul Sharma', service: 'Premium Foam Wash', vehicle: 'KA 01 AB 1234', date: '2026-07-18', slot: '02:00 PM', status: 'Pending', amount: 499, payStatus: 'Pending' },
        { id: 'BK-2037', customer: 'Ananya Iyer', service: 'Interior Deep Clean', vehicle: 'KA 02 CD 9911', date: '2026-07-14', slot: '09:30 AM', status: 'Completed', amount: 699, payStatus: 'Paid' },
        { id: 'BK-2036', customer: 'Arjun Mehta', service: 'Express Exterior Wash', vehicle: 'KA 07 EF 2020', date: '2026-07-13', slot: '03:30 PM', status: 'Completed', amount: 299, payStatus: 'Paid' },
        { id: 'BK-2035', customer: 'Priya Nair', service: 'Full Detailing Package', vehicle: 'KA 03 XY 4455', date: '2026-07-12', slot: '10:00 AM', status: 'Cancelled', amount: 1499, payStatus: 'Refunded' }
      ],
      adminPayments: [
        { id: 'TXN-88421', customer: 'Rahul Sharma', booking: 'BK-2041', amount: 1499, method: 'UPI', status: 'Success', date: '2026-07-10' },
        { id: 'TXN-88420', customer: 'Priya Nair', booking: 'BK-2040', amount: 4999, method: 'Credit Card', status: 'Success', date: '2026-07-10' },
        { id: 'TXN-88410', customer: 'Sneha Reddy', booking: 'BK-2039', amount: 499, method: 'UPI', status: 'Success', date: '2026-07-09' },
        { id: 'TXN-88450', customer: 'Rahul Sharma', booking: 'BK-2038', amount: 499, method: 'UPI', status: 'Pending', date: '2026-07-12' },
        { id: 'TXN-88405', customer: 'Ananya Iyer', booking: 'BK-2037', amount: 699, method: 'Net Banking', status: 'Success', date: '2026-07-08' },
        { id: 'TXN-88400', customer: 'Arjun Mehta', booking: 'BK-2036', amount: 299, method: 'UPI', status: 'Success', date: '2026-07-07' },
        { id: 'TXN-88355', customer: 'Priya Nair', booking: 'BK-2035', amount: 1499, method: 'Credit Card', status: 'Refunded', date: '2026-07-06' }
      ]
    };
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },

  all() { this.seed(); return JSON.parse(localStorage.getItem(this.KEY)); },
  save(data) { localStorage.setItem(this.KEY, JSON.stringify(data)); },

  // Convenience getters
  customer() { return this.all().customer; },
  services() { return this.all().services; },
  service(id) { return this.services().find(s => s.id === id); },
  vehicles() { return this.all().vehicles; },
  vehicle(id) { return this.vehicles().find(v => v.id === id); },
  bookings() { return this.all().bookings; },
  payments() { return this.all().payments; },

  // Mutations
  addVehicle(v) { const d = this.all(); v.id = 'V' + (Date.now() % 100000); d.vehicles.push(v); this.save(d); return v; },
  updateVehicle(id, patch) { const d = this.all(); const v = d.vehicles.find(x => x.id === id); Object.assign(v, patch); this.save(d); },
  deleteVehicle(id) { const d = this.all(); d.vehicles = d.vehicles.filter(v => v.id !== id); this.save(d); },

  addBooking(b) {
    const d = this.all();
    b.id = 'BK-' + (2042 + d.bookings.length);
    d.bookings.unshift(b);
    // matching payment record
    d.payments.unshift({
      id: 'TXN-' + Math.floor(88460 + Math.random() * 400),
      bookingId: b.id, amount: b.amount, method: b.method || 'UPI',
      status: b.payStatus === 'Paid' ? 'Success' : 'Pending',
      date: '2026-07-13', ref: 'upi/aquashine/' + Math.floor(1000 + Math.random() * 9000)
    });
    this.save(d);
    return b;
  },
  updateBooking(id, patch) { const d = this.all(); const b = d.bookings.find(x => x.id === id); Object.assign(b, patch); this.save(d); },

  updateProfile(patch) { const d = this.all(); Object.assign(d.customer, patch); this.save(d); },

  // Admin service mutations
  addService(s) { const d = this.all(); s.id = 'S' + (d.services.length + 1); s.includes = s.includes || []; d.services.push(s); this.save(d); return s; },
  updateService(id, patch) { const d = this.all(); const s = d.services.find(x => x.id === id); Object.assign(s, patch); this.save(d); },
  deleteService(id) { const d = this.all(); d.services = d.services.filter(s => s.id !== id); this.save(d); },

  reset() { localStorage.removeItem(this.KEY); this.seed(); }
};

DB.seed();
