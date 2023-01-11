import { Inter } from '@next/font/google'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <Header/>
    <div className={styles.main}>
          <h1>HOME</h1>
        </div>
    </>
  )
}
