import styles from '@/styles/ScreenPlaceholder.module.css';

const ERPSync = () => {
  const syncRecords = [
    { id: 'GRN-001', type: 'Inbound Receipt', direction: 'Dashboard → Frappe', time: '08:45 AM', status: 'Success', frappeID: 'GRN-2026-0001' },
    { id: 'GRN-002', type: 'Inbound Receipt', direction: 'Dashboard → Frappe', time: '09:30 AM', status: 'Success', frappeID: 'GRN-2026-0002' },
    { id: 'DN-001', type: 'Outbound Dispatch', direction: 'Dashboard → Frappe', time: '10:15 AM', status: 'Success', frappeID: 'DN-2026-0001' },
    { id: 'GRN-003', type: 'Inbound Receipt', direction: 'Dashboard → Frappe', time: '10:45 AM', status: 'Pending', frappeID: '-' },
    { id: 'GRN-004', type: 'Inbound Receipt', direction: 'Dashboard → Frappe', time: '11:20 AM', status: 'Error', frappeID: '-' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🔗 ERP Sync (Frappe Integration)</h1>
        <p>Two-way sync status and management. Full visibility into what has been synced, pending, or errored.</p>
      </div>

      {/* KPI Cards */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.label}>Records Synced Today</div>
          <div className={styles.value}>23</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.label}>Sync Errors</div>
          <div className={styles.value} style={{ color: '#ef4444' }}>1</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.label}>Last Successful Sync</div>
          <div className={styles.value} style={{ fontSize: '14px' }}>10:15 AM</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.label}>Pending Records</div>
          <div className={styles.value}style={{ color: '#3b82f6' }}>1</div>
        </div>
      </div>

      {/* Action Button */}
      <div className={styles.filterSection} style={{ justifyContent: 'flex-start' }}>
        <button>🔄 Manual Sync Trigger</button>
        <span style={{ fontSize: '12px', color: 'var(--silver)' }}>Last manual sync: 10:15 AM</span>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h3>📤 Sync Direction A: Dashboard → Frappe</h3>
          <p className={styles.note}>Inbound receipts (GRN), outbound dispatches (Delivery Note), and bag counts are pushed automatically on record completion. Each record is logged with timestamp, status, and Frappe document ID.</p>

          <h4 style={{ marginTop: '16px', marginBottom: '8px', fontSize: '13px' }}>Sync Log</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Record ID</th>
                <th>Type</th>
                <th>Direction</th>
                <th>Timestamp</th>
                <th>Status</th>
                <th>Frappe ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {syncRecords.map((record) => {
                const getStatusStyle = (status) => {
                  const styleObj = { padding: '2px 6px', borderRadius: '2px', fontSize: '10px', fontWeight: '600' };
                  if (status === 'Success') {
                    styleObj.background = 'rgba(34, 197, 94, 0.15)';
                    styleObj.color = '#22c55e';
                  } else if (status === 'Pending') {
                    styleObj.background = 'rgba(59, 130, 246, 0.15)';
                    styleObj.color = '#3b82f6';
                  } else {
                    styleObj.background = 'rgba(239, 68, 68, 0.15)';
                    styleObj.color = '#ef4444';
                  }
                  return styleObj;
                };

                return (
                  <tr key={record.id}>
                    <td>
                      <strong>{record.id}</strong>
                    </td>
                    <td>{record.type}</td>
                    <td>{record.direction}</td>
                    <td>{record.time}</td>
                    <td>
                      <span style={getStatusStyle(record.status)}>{record.status}</span>
                    </td>
                    <td>{record.frappeID}</td>
                    <td>
                      {record.status === 'Error' && <button className={styles.smallBtn}>Retry</button>}
                      {record.status === 'Success' && <button className={styles.smallBtn}>View</button>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h3>📥 Sync Direction B: Frappe → Dashboard</h3>
          <p className={styles.note}>Production orders and expected daily intake targets are pulled from Frappe and displayed as targets on the home dashboard. If Frappe has a GRN template, it pre-populates inbound records.</p>
        </div>

        <div className={styles.section}>
          <h3>⏳ Pending Records Queue</h3>
          <p className={styles.note}>Records awaiting sync (e.g., due to network issues) are shown here with estimated retry time. Auto-retry with 3 attempts, then alert to Super Admin.</p>
        </div>

        <div className={styles.section}>
          <h3>❌ Error Details & Resolution</h3>
          <p className={styles.note}>Clicking an error record shows the exact Frappe API error message and suggested resolution steps. Common issues include field mapping errors, missing ERP master data, or API authentication failures.</p>
        </div>
      </div>

      <div className={styles.infoBox}>
        <p>
          ⚠️ <strong>Development Note:</strong> Frappe ERP screenshots from Jay Shah are required before development of this module can begin. The exact field
          mapping (which dashboard field maps to which Frappe doctype/field) must be confirmed with Jay's team. This module should be built with a configurable
          field-mapping layer to handle differences between Frappe instance configurations.
        </p>
      </div>
    </div>
  );
};

export default ERPSync;
