import Header from "../components/Header"
import styles from "../styles/Home.module.css"
import * as web3 from "@solana/web3.js"
import { useState } from "react"


export default function Transactions() {
    const connection = new web3.Connection(web3.clusterApiUrl("devnet"))
    const transaction = new web3.Transaction()
    const [address, setAddress] = useState<web3.PublicKey>()

    const ownerKeypair = web3.Keypair.generate()

    const amount = 0.1
    if(address){
        const sendSolInstruction = web3.SystemProgram.transfer({
            fromPubkey: ownerKeypair.publicKey,
            toPubkey: address,
            lamports: web3.LAMPORTS_PER_SOL * amount
        })

        transaction.add(sendSolInstruction)
    }




    const signature = web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [ownerKeypair]
        )

        const handleChange = (e: React.FormEvent<HTMLInputElement> ) => {
            setAddress(new web3.PublicKey(e.currentTarget.value))
        }
    
    return (
        <>
        <Header/>
        <div className={styles.main}>
            <form>
                <input type="text" onChange={handleChange}>
                </input>
            </form>
              <button>SEND SOL!</button>
            </div>
        </>
    )
}