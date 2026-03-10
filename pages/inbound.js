import { useState } from 'react';
import styles from '@/styles/Inbound.module.css';

const Inbound = () => {
  const [dateRange, setDateRange] = useState({ start: '2026-03-09', end: '2026-03-10' });
  const [filters, setFilters] = useState({
    skuType: 'all',
    plate: '',
    status: 'all',
  });

  const inboundRecords = [
    {
      id: 1,
      plate: 'MH 02 AB 1234',
      entryTime: '08:30 AM',
      grossWeight: 2100,
      netWeight: 1850,
      bagCount: 37,
      bagSize: '50 kg',
      sku: 'Basmati',
      confidence: 95,
      calcWeight: 1850,
      discrepancy: false,
      erpStatus: 'synced',
      exitTime: '09:15 AM',
      status: 'Complete',
    },
    {
      id: 2,
      plate: 'GJ 05 CD 5678',
      entryTime: '09:45 AM',
      grossWeight: 2200,
      netWeight: 1950,
      bagCount: 39,
      bagSize: '50 kg',
      sku: 'Jasmine',
      confidence: 72,
      calcWeight: 1950,
      discrepancy: false,
      erpStatus: 'pending',
      exitTime: '10:32 AM',
      status: 'Pending Review',
    },
    {
      id: 3,
      plate: 'KA 01 EF 9012',
      entryTime: '10:15 AM',
      grossWeight: 2050,
      netWeight: 1800,
      bagCount: 36,
      bagSize: '50 kg',
      sku: 'Sella',
      confidence: 88,
      calcWeight: 1800,
      discrepancy: false,
      erpStatus: 'synced',
      exitTime: '11:00 AM',
      status: 'Complete',
    },
    {
      id: 4,
      plate: 'UP 16 GH 3456',
      entryTime: '10:45 AM',
      grossWeight: 2300,
      netWeight: 2100,
      bagCount: 42,
      bagSize: '50 kg',
      sku: 'White Rice',
      confidence: 91,
      calcWeight: 2100,
      discrepancy: false,
      erpStatus: 'synced',
      exitTime: '11:35 AM',
      status: 'Complete',
    },
    {
      id: 5,
      plate: 'MH 03 IJ 7890',
      entryTime: '11:20 AM',
      grossWeight: 2150,
      netWeight: 1900,
      bagCount: 38,
      bagSize: '50 kg',
      sku: 'Basmati',
      confidence: 93,
      calcWeight: 1900,
      discrepancy: false,
      erpStatus: 'error',
      exitTime: 'Pending',
      status: 'Flagged',
    },
  ];

  const getConfidenceBadge = (confidence) => {
    if (confidence >= 90) return styles.confidenceGreen;
    if (confidence >= 70) return styles.confidenceAmber;
    return styles.confidenceRed;
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Complete':
        return styles.statusComplete;
      case 'Pending Review':
        return styles.statusPending;
      case 'Flagged':
        return styles.statusFlagged;
      default:
        return '';
    }
  };

  const getErpStatusIcon = (status) => {
    switch (status) {
      case 'synced':
        return '✓';
      case 'pending':
        return '⏳';
      case 'error':
        return '✕';
      default:
        return '?';
    }
  };

  return (
    <div className={styles.inbound}>
      <div className={styles.pageHeader}>
        <h1>Inbound Tracking</h1>
        <p className={styles.subtitle}>Raw material truck records. Auto-populated by AI, manual intervention only for low-confidence SKUs.</p>
      </div>

      {/* Filters */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label htmlFor="dateStart">Date Range</label>
          <input
            id="dateStart"
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          />
          <span>to</span>
          <input
            id="dateEnd"
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          />
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="skuType">SKU Type</label>
          <select id="skuType" value={filters.skuType} onChange={(e) => setFilters({ ...filters, skuType: e.target.value })}>
            <option value="all">All SKUs</option>
            <option value="basmati">Basmati</option>
            <option value="jasmine">Jasmine</option>
            <option value="sella">Sella</option>
            <option value="white">White Rice</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="plateSrc">Truck Plate</label>
          <input
            id="plateSrc"
            type="text"
            placeholder="Search plate..."
            value={filters.plate}
            onChange={(e) => setFilters({ ...filters, plate: e.target.value })}
          />
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="statusFilter">Status</label>
          <select id="statusFilter" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
            <option value="all">All Status</option>
            <option value="complete">Complete</option>
            <option value="pending">Pending Review</option>
            <option value="flagged">Flagged</option>
          </select>
        </div>
        <button className={styles.downloadBtn}>📥 Export Excel</button>
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Truck Plate</th>
              <th>Entry Time</th>
              <th>Gross Weight</th>
              <th>Net Weight</th>
              <th>Bag Count</th>
              <th>Bag Size</th>
              <th>SKU</th>
              <th>Confidence</th>
              <th>Calc. Weight</th>
              <th>Discrepancy</th>
              <th>ERP Status</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inboundRecords.map((record) => (
              <tr key={record.id}>
                <td>
                  <strong>{record.plate}</strong>
                </td>
                <td>{record.entryTime}</td>
                <td>{record.grossWeight} kg</td>
                <td>{record.netWeight} kg</td>
                <td>{record.bagCount}</td>
                <td>{record.bagSize}</td>
                <td>
                  <span className={styles.skuTag}>{record.sku}</span>
                </td>
                <td>
                  <span className={`${styles.confidence} ${getConfidenceBadge(record.confidence)}`}>
                    {record.confidence}%
                  </span>
                </td>
                <td>{record.calcWeight} kg</td>
                <td>{record.discrepancy ? <span className={styles.flagBadge}>⚠️ Yes</span> : <span className={styles.okBadge}>✓ No</span>}</td>
                <td>
                  <span className={styles.erpStatusIcon}>{getErpStatusIcon(record.erpStatus)}</span>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusBadge(record.status)}`}>{record.status}</span>
                </td>
                <td>
                  <button className={styles.actionBtn}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Placeholder Info */}
      <div className={styles.placeholderInfo}>
        <div className={styles.placeholder}>
          <div className={styles.placeholderIcon}>🎥</div>
          <div className={styles.placeholderText}>
            <strong>Inbound Record Snapshots</strong>
            <p>Each truck record includes expandable camera snapshots (unloading view + ANPR view) with AI bounding boxes. Placeholder images to be replaced with actual inference frames post-deployment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbound;
