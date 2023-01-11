import { Inter } from '@next/font/google'
import HandleLogic from '../components/HandleLogic'
import styles from '../styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        
        <div>
        <HandleLogic />
        </div>
      </main>
    </>
  )
}
