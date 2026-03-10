import { useState, useEffect } from 'react';
import styles from '@/styles/TopBar.module.css';

const TopBar = ({ facility }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-IN', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof globalThis !== 'undefined') {
      setIsOnline(navigator.onLine);
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
      globalThis.addEventListener('online', handleOnline);
      globalThis.addEventListener('offline', handleOffline);
      return () => {
        globalThis.removeEventListener('online', handleOnline);
        globalThis.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  return (
    <div className={styles.topbar}>
      <div className={styles.topbarLeft}>
        <div className={styles.facilityInfo}>
          <div className={styles.facilityIcon}>🏭</div>
          <div className={styles.facilityContent}>
            <div className={styles.facilityLabel}>Active Facility</div>
            <div className={styles.facilityName}>{facility}</div>
          </div>
        </div>
      </div>

      <div className={styles.topbarCenter}>
        <div className={styles.systemStatus}>
          <div className={`${styles.statusDot} ${isOnline ? styles.online : styles.offline}`}></div>
          <span className={styles.statusText}>{isOnline ? 'System Online' : 'Offline'}</span>
        </div>
        <div className={styles.timeDisplay}>{currentTime}</div>
      </div>

      <div className={styles.topbarRight}>
        <button className={styles.userProfile}>
          <span className={styles.avatar}>👤</span>
          <div className={styles.userInfo}>
            <div className={styles.userName}>Jay Shah</div>
            <div className={styles.userRole}>Super Admin</div>
          </div>
          <span className={styles.dropdownArrow}>▼</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
