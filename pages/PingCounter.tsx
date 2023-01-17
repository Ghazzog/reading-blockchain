import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import * as web3 from "@solana/web3.js"
import Header from "../components/Header"
import styles from '../styles/Home.module.css'

const PROGRAM_ID = new web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa")
const PROGRAM_DATA_PUBLIC_KEY = new web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod")


export default function PingCounter() {
    const {connection} = useConnection()
    const {publicKey, sendTransaction} = useWallet()

    const handleClick = () => {
        if(!connection || !publicKey) {
            alert("Wallet not connected!")
            return
        }
        const transaction = new web3.Transaction()
        const instruction = new web3.TransactionInstruction({
            keys: [
                {
                    pubkey: PROGRAM_DATA_PUBLIC_KEY,
                    isWritable: true,
                    isSigner: false
                }
            ],
            programId: PROGRAM_ID
        })
        transaction.add(instruction)
        sendTransaction(transaction,connection).then(sign => {
            console.log(`Explorer URL: https://explorer.solana.com/tx/${sign}?cluster=devnet`)
        })
    }

    return (
        <>
        <Header/>
            <div className={styles.main}>
              <button onClick={handleClick}>PING!</button>
            </div>
        </>
)}