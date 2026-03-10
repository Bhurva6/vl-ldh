import styles from '@/styles/ScreenPlaceholder.module.css';

const Reports = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>📈 Reports</h1>
        <p>Daily, weekly, monthly, and quarterly summaries with charts and Excel export.</p>
      </div>

      <div className={styles.filterSection}>
        <input type="date" defaultValue="2026-03-10" />
        <span>Select report type:</span>
        <select>
          <option>Daily Summary</option>
          <option>Weekly Summary</option>
          <option>Monthly Summary</option>
          <option>Quarterly Summary</option>
          <option>Custom Date Range</option>
        </select>
        <button>Generate Report</button>
        <button>📥 Download PDF</button>
        <button>📥 Download Excel</button>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Daily Inbound Summary — March 10, 2026</h3>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.label}>Total Trucks</div>
              <div className={styles.value}>12</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.label}>Total Bags</div>
              <div className={styles.value}>1,240</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.label}>Total Weight</div>
              <div className={styles.value}>62,000 kg</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.label}>Discrepancies</div>
              <div className={styles.value}>1</div>
            </div>
          </div>
          <p className={styles.note}>Pie chart showing SKU breakdown and bar chart showing inbound volume trend by hour.</p>
        </div>

        <div className={styles.section}>
          <h3>Daily Outbound Summary</h3>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.label}>Bags Dispatched</div>
              <div className={styles.value}>1,180</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.label}>Trucks Loaded</div>
              <div className={styles.value}>8</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.label}>Net Godown Flow</div>
              <div className={styles.value}>+60</div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Daily Production Count</h3>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.label}>Produced</div>
              <div className={styles.value}>450</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.label}>Target</div>
              <div className={styles.value}>450</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.label}>Status</div>
              <div className={styles.value} style={{ color: '#22c55e' }}>✓ On Target</div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Weekly/Monthly/Quarterly Summaries</h3>
          <p className={styles.note}>Auto-generated reports for prior week (Mondays), prior month (1st), and prior quarter. Includes aggregated metrics, trend analysis, top 10 SKUs, discrepancy rates, and ERP sync success rates.</p>
        </div>

        <div className={styles.section}>
          <h3>Custom Date Range Report</h3>
          <p className={styles.note}>User selects any date range. Dashboard generates complete report with all available charts and data tables. Instant download as PDF or Excel.</p>
        </div>
      </div>

      <div className={styles.infoBox}>
        <p>💡 <strong>Chart Requirements:</strong> All reports must include at minimum one pie chart (SKU breakdown) and one bar chart (daily volume trend). Charts are interactive (hover for exact values). Pie chart colours match SKU colour codes.</p>
      </div>
    </div>
  );
};

export default Reports;
