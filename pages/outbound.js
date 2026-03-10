import styles from '@/styles/ScreenPlaceholder.module.css';

const Outbound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>📤 Outbound & Godown Tracking</h1>
        <p>Tracks finished goods movement: production → godown → loading → truck departure</p>
      </div>

      <div className={styles.tabs}>
        <button className={styles.tabActive}>Conveyor Count</button>
        <button>Godown Flow</button>
        <button>Truck Loading</button>
      </div>

      <div className={styles.content}>
        <div className={styles.placeholder}>
          <div className={styles.icon}>📹</div>
          <h2>Conveyor Camera Feed Placeholder</h2>
          <p>Live snapshot from conveyor belt with AI bag count overlay. Running count displayed in real time.</p>
          <div className={styles.dims}>480×270px | RTSP feed to be integrated post-deployment</div>
        </div>

        <div className={styles.section}>
          <h3>Live Counters</h3>
          <div className={styles.counters}>
            <div className={styles.counter}>
              <div className={styles.label}>Bags on Conveyor Today</div>
              <div className={styles.value}>1,240</div>
              <div className={styles.trend}>↑ 320 this hour</div>
            </div>
            <div className={styles.counter}>
              <div className={styles.label}>Net Godown Flow</div>
              <div className={styles.value}>+180</div>
              <div className={styles.trend}>IN: 450 | OUT: 270</div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>SKU Breakdown on Conveyor</h3>
          <p className={styles.note}>Pie chart showing distribution of SKUs processed today. Interactive chart to be implemented.</p>
        </div>

        <div className={styles.section}>
          <h3>Outbound Truck Loading Table</h3>
          <p className={styles.note}>Table showing trucks loaded today with plate, loading times, bag counts, and SKU mix. ERP sync status for each record.</p>
        </div>
      </div>
    </div>
  );
};

export default Outbound;
