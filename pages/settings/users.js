import styles from '@/styles/ScreenPlaceholder.module.css';

const Users = () => {
  const roles = [
    {
      role: 'Super Admin',
      user: 'Jay Shah',
      permissions: [
        'View all screens and data',
        'Add / edit / deactivate users',
        'Configure alerts & recipients',
        'Edit SKU reference table',
        'Manual Frappe sync trigger',
        'Download all reports + Excel',
        'View AI model performance',
        'Configure system settings',
      ],
    },
    {
      role: 'Operations Manager',
      user: 'Senior Staff',
      permissions: [
        'View all live and historical data',
        'Confirm SKU review queue items',
        'Download daily/weekly reports',
        'View alert log',
        'Edit individual records (with reason)',
      ],
      denials: ['Cannot add/remove users', 'Cannot change alert routing', 'Cannot edit SKU master list'],
    },
    {
      role: 'Gate Operator',
      user: 'Field Staff',
      permissions: [
        'View live overview (home screen)',
        'View inbound truck log (today only)',
        'Confirm SKU review items (own shift)',
        'Log manual truck entry if ANPR fails',
      ],
      denials: [
        'Cannot view reports',
        'Cannot view ERP sync screen',
        'Cannot view historical data',
        'Cannot download any data',
      ],
    },
  ];

  const users = [
    { name: 'Jay Shah', role: 'Super Admin', email: 'jay@ldh.com', phone: '+91 98765 43210', lastLogin: '2026-03-10 10:32 AM', status: 'Active' },
    { name: 'Rajesh Kumar', role: 'Operations Manager', email: 'rajesh@ldh.com', phone: '+91 98765 43211', lastLogin: '2026-03-10 09:15 AM', status: 'Active' },
    { name: 'Amit Singh', role: 'Gate Operator', email: 'amit@ldh.com', phone: '+91 98765 43212', lastLogin: '2026-03-09 04:30 PM', status: 'Active' },
    { name: 'Priya Patel', role: 'Gate Operator', email: 'priya@ldh.com', phone: '+91 98765 43213', lastLogin: '2026-03-09 08:00 PM', status: 'Inactive' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>👥 Access Management</h1>
        <p>User roles, permissions, and access hierarchy. Visible to Super Admin only.</p>
      </div>

      <div className={styles.filterSection} style={{ justifyContent: 'flex-start' }}>
        <button>➕ Invite New User</button>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h3>🔐 Role Hierarchy & Permissions</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '16px', marginTop: '16px' }}>
            {roles.map((r) => (
              <div key={r.role} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '4px', padding: '16px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', color: 'var(--white)' }}>{r.role}</h4>
                <p style={{ fontSize: '11px', color: 'var(--amber)', fontFamily: 'var(--mono)', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  {r.user}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {r.permissions.map((perm) => (
                    <li
                      key={perm}
                      style={{ fontSize: '11px', color: 'var(--light)', paddingLeft: '20px', position: 'relative', lineHeight: '1.5' }}
                    >
                      <span style={{ position: 'absolute', left: '0', color: 'var(--green)', fontSize: '10px' }}>✓</span>
                      {perm}
                    </li>
                  ))}
                  {r.denials?.map((denial) => (
                    <li
                      key={denial}
                      style={{
                        fontSize: '11px',
                        color: 'var(--muted)',
                        paddingLeft: '20px',
                        position: 'relative',
                        lineHeight: '1.5',
                      }}
                    >
                      <span style={{ position: 'absolute', left: '0', color: 'var(--red)', fontSize: '10px' }}>✕</span>
                      {denial}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>📋 User Management</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Last Login</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>
                    <strong>{user.name}</strong>
                  </td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.lastLogin}</td>
                  <td>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '600',
                        padding: '2px 6px',
                        borderRadius: '2px',
                        background:
                          user.status === 'Active'
                            ? 'rgba(34, 197, 94, 0.15)'
                            : 'rgba(239, 68, 68, 0.15)',
                        color: user.status === 'Active' ? '#22c55e' : '#ef4444',
                      }}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles.smallBtn}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h3>📧 Invite Flow</h3>
          <p className={styles.note}>Super Admin enters email + assigns role → system sends invite email with login setup link → user sets password and logs in.</p>
        </div>

        <div className={styles.section}>
          <h3>📊 Audit Log</h3>
          <p className={styles.note}>Every data edit/confirmation by any user is logged with timestamp and user identity. Super Admin can view full audit trail at any time. Searchable by user, date range, and record type.</p>

          <div className={styles.filterSection} style={{ marginTop: '12px', justifyContent: 'flex-start' }}>
            <select>
              <option>All Users</option>
              <option>Jay Shah</option>
              <option>Rajesh Kumar</option>
            </select>
            <input type="date" placeholder="From" />
            <input type="date" placeholder="To" />
            <button>Search Audit Log</button>
          </div>
        </div>
      </div>

      <div className={styles.infoBox}>
        <p>
          ℹ️ <strong>Session Management:</strong> Default session expiry is 8 hours of inactivity. Configurable by Super Admin. No SSO required in Phase 1. Email + password login only.
        </p>
      </div>
    </div>
  );
};

export default Users;
