import styles from '@/styles/NavbarItem.module.css';
import Link from 'next/link';
import { ReactNode } from "react";

export default function NavbarItem({ children, link, underline, position }: { children: ReactNode, link: string | undefined, underline: boolean | undefined, position: 'left' | 'right' }) {
  let underlineClass = underline ? ' underline' : '';
  if (link) {
    return <li className={styles.navItem + underlineClass}><Link href={link}>{children}</Link></li>;
  } else {
    return <li className={styles.navItem + underlineClass}>children</li>;
  }
}
