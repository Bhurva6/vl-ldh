import { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Warning as WarningIcon,
  Search as SearchIcon,
  CheckCircle as CheckIcon,
  LocalShipping as TruckIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';
import styles from '@/styles/Dashboard.module.css';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-IN', { hour12: false }));
    };
    updateTime();
  }, []);

  // Mock data
  const trucksToday = 12;
  const trucksOut = 8;
  const bagsReceived = 1240;
  const bagsDispatched = 1180;
  const goodsProduced = 450;
  const activeTrucks = 3;

  const skuBreakdownData = [
    { name: 'Basmati', value: 380, color: '#E8931A' },
    { name: 'Jasmine', value: 320, color: '#22c55e' },
    { name: 'Sella', value: 260, color: '#3b82f6' },
    { name: 'White Rice', value: 280, color: '#ef4444' },
  ];

  const trendData = [
    { date: 'Mon', inbound: 180, outbound: 160 },
    { date: 'Tue', inbound: 210, outbound: 190 },
    { date: 'Wed', inbound: 200, outbound: 170 },
    { date: 'Thu', inbound: 220, outbound: 210 },
    { date: 'Fri', inbound: 240, outbound: 230 },
    { date: 'Sat', inbound: 230, outbound: 220 },
    { date: 'Sun', inbound: 190, outbound: 160 },
  ];

  const alertEvents = [
    { id: 1, icon: WarningIcon, type: 'Weight Discrepancy', truck: 'MH 02 AB 1234', time: '10:45 AM' },
    { id: 2, icon: SearchIcon, type: 'SKU Review Needed', truck: 'GJ 05 CD 5678', time: '10:32 AM' },
    { id: 3, icon: CheckIcon, type: 'Unloading Complete', truck: 'KA 01 EF 9012', time: '10:15 AM' },
    { id: 4, icon: TruckIcon, type: 'Truck Arrived', truck: 'UP 16 GH 3456', time: '10:02 AM' },
    { id: 5, icon: ErrorIcon, type: 'ERP Sync Failed', truck: 'MH 03 IJ 7890', time: '09:48 AM' },
  ];

  const recentTrucks = [
    { plate: 'MH 02 AB 1234', status: 'Unloading', time: '10:45' },
    { plate: 'GJ 05 CD 5678', status: 'Pending Review', time: '10:32' },
    { plate: 'KA 01 EF 9012', status: 'Complete', time: '10:15' },
    { plate: 'UP 16 GH 3456', status: 'In Progress', time: '10:02' },
    { plate: 'MH 03 IJ 7890', status: 'Error', time: '09:48' },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.pageHeader}>
        <h1>Live Overview</h1>
        <p className={styles.timestamp}>Last updated: {currentTime}</p>
      </div>

      {/* KPI Cards */}
      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Trucks In Today</div>
          <div className={styles.kpiValue}>{trucksToday}</div>
          <div className={styles.kpiTrend}>↑ +2 from yesterday</div>
        </div>
        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Trucks Out Today</div>
          <div className={styles.kpiValue}>{trucksOut}</div>
          <div className={styles.kpiTrend}>↑ +1 from yesterday</div>
        </div>
        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Bags Received</div>
          <div className={styles.kpiValue}>{bagsReceived}</div>
          <div className={styles.kpiTrend}>↑ +120 today</div>
        </div>
        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Bags Dispatched</div>
          <div className={styles.kpiValue}>{bagsDispatched}</div>
          <div className={styles.kpiTrend}>↑ +180 today</div>
        </div>
        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Goods Produced</div>
          <div className={styles.kpiValue}>{goodsProduced}</div>
          <div className={styles.kpiTrend}>On target</div>
        </div>
        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Active Trucks</div>
          <div className={styles.kpiValue}>{activeTrucks}</div>
          <div className={styles.kpiTrend}>On site now</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className={styles.chartsSection}>
        <div className={styles.chartContainer}>
          <h3>SKU Breakdown Today</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skuBreakdownData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} (${value})`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {skuBreakdownData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} bags`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartContainer}>
          <h3>7-Day Inbound vs Outbound Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="date" stroke="var(--silver)" />
              <YAxis stroke="var(--silver)" />
              <Tooltip
                contentStyle={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  color: 'var(--white)',
                }}
              />
              <Legend />
              <Bar dataKey="inbound" fill="var(--amber)" name="Inbound" />
              <Bar dataKey="outbound" fill="var(--green)" name="Outbound" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Camera Feeds and Alerts Section */}
      <div className={styles.contentGrid}>
        {/* Camera Feeds */}
        <div className={styles.cameraSection}>
          <div className={styles.cameraPlaceholder}>
            <div className={styles.cameraIcon}>📷</div>
            <div className={styles.cameraLabel}>Entry Gate Camera Feed</div>
            <div className={styles.cameraDesc}>Live CCTV snapshot refreshing every 30s</div>
            <div className={styles.cameraDims}>480×270px | Placeholder</div>
          </div>
          <div className={styles.cameraPlaceholder}>
            <div className={styles.cameraIcon}>�</div>
            <div className={styles.cameraLabel}>Unloading Bay Camera</div>
            <div className={styles.cameraDesc}>AI bag count overlay in real time</div>
            <div className={styles.cameraDims}>480×270px | Placeholder</div>
          </div>
        </div>

        {/* Alerts and Trucks */}
        <div className={styles.sidePanel}>
          <div className={styles.alertSection}>
            <h3>Alert Feed — Last 5 Events</h3>
            <div className={styles.alertList}>
              {alertEvents.map((alert) => {
                const IconComponent = alert.icon;
                return (
                  <div key={alert.id} className={styles.alertItem}>
                    <IconComponent className={styles.alertIcon} />
                    <div className={styles.alertDetails}>
                      <div className={styles.alertType}>{alert.type}</div>
                      <div className={styles.alertTruck}>{alert.truck}</div>
                      <div className={styles.alertTime}>{alert.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.recentTrucksSection}>
            <h3>Recent Truck Log</h3>
            <div className={styles.truckList}>
              {recentTrucks.map((truck) => (
                <div key={truck.plate} className={styles.truckItem}>
                  <div className={styles.truckPlate}>{truck.plate}</div>
                  <div className={`${styles.truckStatus} ${styles[truck.status.toLowerCase().replace(' ', '-')]}`}>
                    {truck.status}
                  </div>
                  <div className={styles.truckTime}>{truck.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
