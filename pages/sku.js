import styles from '@/styles/ScreenPlaceholder.module.css';

const SKU = () => {
  const skus = [
    { name: 'Basmati', color: '#E8931A', volume: 380, confidence: 94 },
    { name: 'Jasmine', color: '#22c55e', volume: 320, confidence: 91 },
    { name: 'Sella', color: '#3b82f6', volume: 260, confidence: 88 },
    { name: 'White Rice', color: '#ef4444', volume: 280, confidence: 93 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🏷️ SKU Intelligence</h1>
        <p>Central module for SKU visibility, AI accuracy tracking, and human-in-the-loop review queue.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h3>📊 Today's SKU Mix (Pie Chart)</h3>
          <p className={styles.note}>Interactive pie chart showing proportion of each SKU received today. Hover for exact quantities.</p>
        </div>

        <div className={styles.section}>
          <h3>📈 SKU Volume Trends (Line Chart)</h3>
          <p className={styles.note}>Volume received per SKU over selected date range. Filterable and downloadable as Excel.</p>
        </div>

        <div className={styles.section}>
          <h3>🔍 Review Queue</h3>
          <div className={styles.badge}>3 pending items</div>
          <p className={styles.note}>Detections where AI confidence &lt;80%. Operator sees camera snapshot + top 3 guesses. One-click confirm to sync to Frappe.</p>
        </div>

        <div className={styles.section}>
          <h3>📝 SKU Reference Table</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>SKU Name</th>
                <th>Colour Swatch</th>
                <th>Bag Size</th>
                <th>Daily Volume</th>
                <th>AI Accuracy</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {skus.map((sku) => (
                <tr key={sku.name}>
                  <td>
                    <strong>{sku.name}</strong>
                  </td>
                  <td>
                    <div className={styles.colorSwatch} style={{ backgroundColor: sku.color }}></div>
                  </td>
                  <td>50 kg</td>
                  <td>{sku.volume} bags</td>
                  <td>
                    <span className={styles.accuracy}>{sku.confidence}%</span>
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
          <h3>🤖 AI Model Performance (Super Admin Only)</h3>
          <p className={styles.note}>Accuracy % per SKU over time. Identifies which SKUs need retraining. Graph view with historical data.</p>
        </div>
      </div>

      <div className={styles.placeholder}>
        <div className={styles.icon}>🎨</div>
        <h2>SKU Colour Sample Placeholders</h2>
        <p>Each SKU row includes a 48×48px colour swatch. Initially solid colour blocks. Replace with actual cropped sample images from training dataset during deployment.</p>
        <div className={styles.dims}>48×48px thumbnail | 320×320px in modal view</div>
      </div>
    </div>
  );
};

export default SKU;
