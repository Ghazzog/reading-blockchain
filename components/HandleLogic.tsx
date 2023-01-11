import * as web3 from "@solana/web3.js"

import { useState } from "react"
import styles from '../styles/Home.module.css'

export default function HandleLogic() {

    const [value, setValue] = useState("")
    const [click, setClick] = useState(false)
    const [balance, setBalance] = useState(0)
    const [address, setAddress] = useState("")
    const [minRent, setMinRent] = useState(0)
    const [isExecutable, setIsExecutable] = useState<boolean>()
    
    function handleChange(e: any) {
    e.preventDefault()
    if(e.target != null)
    setValue(e.currentTarget.value)
  }
  
  function handleClick() {
        setClick(true)
        try {
          const key = new web3.PublicKey(value)
        setAddress(key.toBase58())
        const connection = new web3.Connection(web3.clusterApiUrl("devnet"))
        connection.getBalance(key).then(balance => {
          setBalance(balance / web3.LAMPORTS_PER_SOL)}) 
        connection.getMinimumBalanceForRentExemption(50).then(rent => {
          setMinRent(rent / web3.LAMPORTS_PER_SOL)})
        connection.getAccountInfo(key).then(info => {
          setIsExecutable(info?.executable)})
        } catch(error) {
          setAddress("")
          setBalance(0)
          setMinRent(0)
          alert(error)
        }
  }
  return (
    <div className={styles.description}>
    <h1 className={styles.text}>SOLANA BALANCE VIEW</h1>
    <input type="text" value={value} onChange={handleChange} />
    <button className={styles.button} onClick={handleClick}>SUBMIT</button>
    <p>Address: {click ? address : null}</p>
    <p>Balance: {click ? balance : null}</p>
    <p>MinRENT: {click ? minRent : null}</p>
    <p>Executable: {click ? isExecutable?.toString() : null}</p>
    </div> 
      
  )
}