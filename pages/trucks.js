import styles from '@/styles/ScreenPlaceholder.module.css';

const Trucks = () => {
  const mockTrucks = [
    { plate: 'MH 02 AB 1234', time: '08:30 - 09:15 AM', direction: 'Inbound', weight: '1850 kg', bagCount: 37, sku: 'Basmati' },
    { plate: 'GJ 05 CD 5678', time: '09:45 - 10:32 AM', direction: 'Inbound', weight: '1950 kg', bagCount: 39, sku: 'Jasmine' },
    { plate: 'KA 01 EF 9012', time: '10:15 - 11:00 AM', direction: 'Inbound', weight: '1800 kg', bagCount: 36, sku: 'Sella' },
    { plate: 'UP 16 GH 3456', time: '10:45 - 11:35 AM', direction: 'Inbound', weight: '2100 kg', bagCount: 42, sku: 'White Rice' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🚛 Truck & ANPR Log</h1>
        <p>Complete master vehicle record. Searchable by plate, direction, and date range.</p>
      </div>

      <div className={styles.filterSection}>
        <input type="text" placeholder="Search by truck plate..." />
        <select>
          <option>All Directions</option>
          <option>Inbound</option>
          <option>Outbound</option>
        </select>
        <select>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Custom Range</option>
        </select>
        <button>📥 Export Excel</button>
      </div>

      <div className={styles.content}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Truck Plate</th>
              <th>Visit Date & Time</th>
              <th>Direction</th>
              <th>Gross / Net Weight</th>
              <th>Bag Count</th>
              <th>SKU</th>
              <th>Duration</th>
              <th>ANPR Snapshot</th>
              <th>ERP Link</th>
            </tr>
          </thead>
          <tbody>
            {mockTrucks.map((truck) => (
              <tr key={truck.plate}>
                <td>
                  <strong>{truck.plate}</strong>
                </td>
                <td>{truck.time}</td>
                <td>{truck.direction}</td>
                <td>{truck.weight}</td>
                <td>{truck.bagCount}</td>
                <td>{truck.sku}</td>
                <td>45 min</td>
                <td>
                  <button className={styles.smallBtn}>View</button>
                </td>
                <td>
                  <button className={styles.smallBtn}>Link</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.placeholder}>
        <div className={styles.icon}>🚛</div>
        <h2>ANPR Snapshot Placeholder</h2>
        <p>Each truck row shows a 160×90px thumbnail of gate camera frame with plate detection. Full 1280×720px image in modal. Confidence %, timestamp, and camera ID included.</p>
        <div className={styles.dims}>Placeholder images to be replaced with actual inference frames</div>
      </div>
    </div>
  );
};

export default Trucks;
