import styles from '../styles/Home.module.css'
import Wallet from '../pages/WriteData';
import DataWrite from './DataWrite';
import HandleLogic from '../pages/AccountInfo';
import Link from "next/link";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.link} href="/">HOME</Link>
            <Link className={styles.link} href="/AccountInfo">ACCOUNT INFO</Link>
            <Link className={styles.link} href="/WriteData">WRITE DATA</Link>
            <Link className={styles.link} href="/Transaction">TRANSACTIONS</Link>
        </header>     
    )
}