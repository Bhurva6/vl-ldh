import styles from '@/styles/ScreenPlaceholder.module.css';

const Alerts = () => {
  const alertTypes = [
    { event: 'Truck Arrived (Entry Gate)', default: 'ON', message: '🚛 Truck [PLATE] arrived at [TIME]. Inbound — awaiting weighbridge.' },
    { event: 'Unloading Complete', default: 'ON', message: '✅ Truck [PLATE] unloaded: [COUNT] bags of [SKU]. Weight: [NET]kg.' },
    { event: 'Weight Discrepancy Detected', default: 'ON (CRITICAL)', message: '⚠️ DISCREPANCY: Truck [PLATE] — AI count ≠ weighbridge. Review required.' },
    { event: 'Low Confidence SKU', default: 'ON', message: '🔍 SKU review needed: Truck [PLATE]. Confidence [X]%. Confirm in dashboard.' },
    { event: 'ERP Sync Failed', default: 'ON', message: '❌ ERP sync error for Truck [PLATE] record. Login to retry.' },
    { event: 'Truck Departed (Exit Gate)', default: 'OFF', message: '🚛 Truck [PLATE] exited at [TIME]. Duration: [X] mins.' },
    { event: 'Daily Summary Ready', default: 'ON', message: '📊 Daily summary for [DATE] ready. [X] trucks, [Y] in, [Z] out.' },
    { event: '10-min Delay Threshold', default: 'ON (CRITICAL)', message: '⏱️ Delay alert: Truck [PLATE] unloading data not received within 10 mins.' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🔔 Alerts & WhatsApp Notifications</h1>
        <p>Configure alert events, recipient routing, and view historical alert log.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h3>📋 Configurable Alert Events</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Event</th>
                <th>Default State</th>
                <th>WhatsApp Message Preview</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {alertTypes.map((alert) => (
                <tr key={alert.event}>
                  <td>
                    <strong>{alert.event}</strong>
                  </td>
                  <td>{alert.default}</td>
                  <td className={styles.messagePreview}>{alert.message}</td>
                  <td>
                    <button className={styles.smallBtn}>Config</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h3>👥 Recipient Management</h3>
          <p className={styles.note}>Super Admin can add/remove WhatsApp numbers per alert type. Configure which alerts go to which team members.</p>
          <div className={styles.exampleBox}>
            <p>Example:</p>
            <ul style={{ marginLeft: '20px' }}>
              <li>Weight Discrepancy → Jay Shah only</li>
              <li>Daily Summary → Jay Shah + Operations Manager</li>
              <li>Low Confidence SKU → Gate Operators</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h3>🔍 Alert Log</h3>
          <p className={styles.note}>Full searchable history of every alert sent. Event type, timestamp, recipient, delivery status (sent/failed/pending).</p>
          <div className={styles.filterSection} style={{ marginTop: '12px' }}>
            <input type="date" placeholder="From" />
            <input type="date" placeholder="To" />
            <select>
              <option>All Event Types</option>
              <option>Truck Arrived</option>
              <option>Weight Discrepancy</option>
              <option>SKU Review</option>
            </select>
            <button>Search</button>
          </div>
        </div>

        <div className={styles.section}>
          <h3>⏳ Quiet Hours</h3>
          <p className={styles.note}>Option to suppress non-critical alerts between configurable hours.</p>
          <div className={styles.exampleBox}>
            <input type="time" defaultValue="23:00" />
            <span>to</span>
            <input type="time" defaultValue="06:00" />
            <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--silver)' }}>Critical alerts (weight discrepancies, delays) will still be sent during quiet hours.</p>
          </div>
        </div>
      </div>

      <div className={styles.infoBox}>
        <p>⚠️ <strong>Note:</strong> WhatsApp Business API integration is an additional cost item to be confirmed after vendor call. Fallback: SMS via Indian gateway.</p>
      </div>
    </div>
  );
};

export default Alerts;
