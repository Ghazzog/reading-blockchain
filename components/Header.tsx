import styles from '../styles/Home.module.css'
import Wallet from '../pages/WriteData';
import DataWrite from './DataWrite';
import HandleLogic from '../pages/AccountInfo';
import Link from "next/link";
import { Inter } from '@next/font/google'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import dynamic from 'next/dynamic';


const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return (
        <div className={styles.header}>
            <Link className={styles.link} href="/">HOME</Link>
            <Link className={styles.link} href="/AccountInfo">ACCOUNT INFO</Link>
            <Link className={styles.link} href="/WriteData">WRITE DATA</Link>
            <Link className={styles.link} href="/Transaction">TRANSACTIONS</Link>
            <Link className={styles.link} href="/PingCounter">PING COUNTER</Link>
            <Link className={styles.link} href="/SendSol">SEND SOL</Link>
            <WalletMultiButtonDynamic className={styles.buttonEdit}/>
        </div>     
    )
}