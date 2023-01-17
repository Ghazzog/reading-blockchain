import Header from "../components/Header"
import styles from "../styles/Home.module.css"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import React, { useEffect, useState } from "react"
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, TransactionInstruction } from "@solana/web3.js"


export default function SendSol() {
    const [amountToSend, setAmountToSend] = useState(0)
    const [address,setAddress] = useState("")
    const [balance, setBalance] = useState(0)
    const {connection} = useConnection()
    const {sendTransaction, publicKey} = useWallet()
    const handleChangeAmount = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const result = e.currentTarget.value
        setAmountToSend(Number(result))
    }
    console.log(amountToSend)
    console.log(typeof(amountToSend))
    console.log(address)
    console.log(typeof(address))

    if(publicKey)
    connection.getBalance(publicKey).then(balance => setBalance(balance / LAMPORTS_PER_SOL))
    console.log("I'm running")

    const handleChangeAddress = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setAddress(e.currentTarget.value)
    }
    const handleClick = () => {
        const transaction = new Transaction()
        if(!amountToSend){
            alert("Please enter a number")
            return
        }
        if(!connection || !publicKey) {
            alert("Please connect your wallet")
            return 
        }
        const instruction = SystemProgram.transfer({
            fromPubkey: publicKey,
            lamports: LAMPORTS_PER_SOL * amountToSend,
            toPubkey: new PublicKey(address) 
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
            <form>
                <div >
                    {publicKey? <h1>Your balance is: {balance}</h1> : null}
                    <label>Enter Sol amount</label>
                    <input className={styles.form} type="text" onChange={handleChangeAmount} value={amountToSend}/>
                    <label>Enter address</label>
                    <input className={styles.form} type="text" onChange={handleChangeAddress} value={address} />
                </div>
            </form>
          <button onClick={handleClick}> SUBMIT</button>
        </div>
    </>
    )
}