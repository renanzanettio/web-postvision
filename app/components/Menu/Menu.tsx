"use client";
import styles from './Menu.module.css';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Menu() {
    const pathname = usePathname();
    return(
            <div className={styles.menuContainer}>
                <Link href="/" className={styles.titleMenu}>PostVision</Link>
                <div className={styles.menuLinks}>
                    <Link href="/Status" className={`${styles.link} ${pathname === '/Status' ? styles.active : ''}`}>
                    <Icon icon="gridicons:stats" className={styles.statsIcon} />Status
                    </Link>
                    <Link href="/Profile" className={`${styles.link} ${pathname === '/Profile' ? styles.active : ''}`}>
                    <Icon icon="iconamoon:profile-fill" className={styles.profileIcon}/>Profile
                    </Link>
                </div>
                <Link href="/Entrar" className={styles.logoutContainer}><Icon icon="ri:logout-box-line" className={styles.logoutButton} /></Link>
            </div>
    )
}