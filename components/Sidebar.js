import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Sidebar.module.css';

const Sidebar = () => {
  const router = useRouter();
  const [reviewQueueCount] = useState(3); // Mock data

  const isActive = (path) => {
    return router.pathname === path ? styles.active : '';
  };

  const menuItems = [
    { icon: '📊', label: 'Live Overview', path: '/dashboard', id: '01' },
    { icon: '📥', label: 'Inbound Tracking', path: '/inbound', id: '02' },
    { icon: '📤', label: 'Outbound Tracking', path: '/outbound', id: '03' },
    { icon: '🚛', label: 'Truck & ANPR Log', path: '/trucks', id: '04' },
    { icon: '🏷️', label: 'SKU Intelligence', path: '/sku', id: '05', badge: reviewQueueCount },
    { icon: '📈', label: 'Reports', path: '/reports', id: '06' },
    { icon: '🔔', label: 'Alerts', path: '/alerts', id: '07' },
    { icon: '🔗', label: 'ERP Sync', path: '/erp-sync', id: '08' },
    { icon: '👥', label: 'Access Management', path: '/settings/users', id: '09' },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Image 
          src="/vigilantlabslogo.png" 
          alt="Vigilant Labs Logo" 
          width={48} 
          height={48}
          className={styles.logo}
        />
        <div className={styles.brand}>
          VIGILANT <span>LABS</span>
        </div>
      </div>

      <nav className={styles.navMenu}>
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path} className={`${styles.navItem} ${isActive(item.path)}`}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
            {item.badge && (
              <span className={styles.badge}>{item.badge}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className={styles.sidebarFooter}>
        <div className={styles.footerText}>v1.0</div>
      </div>
    </div>
  );
};

export default Sidebar;
