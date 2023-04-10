import styles from '@/styles/Navbar.module.css';
import { ReactNode } from 'react';


export default function Navbar({children}: { children: ReactNode }) {
  return (
    <ul className={styles.navbar}>
      {children}
    </ul>
  );
}
