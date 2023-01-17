import Header from "../components/Header"
import styles from '../styles/Home.module.css'
import * as web3 from "@solana/web3.js"
import { useState } from "react"
import React from "react"




export default function WriteData() {
    const[pubKey, setPubkey] = useState("")
    const [value, setValue] = useState("")
    const [address, setAddress] = useState<web3.PublicKey>()
    const generateKeypair = () => {
        const ownerKeypair = web3.Keypair.generate()
        const ownerPublicKey = ownerKeypair.publicKey
        setPubkey(ownerPublicKey.toBase58())
    } 
    const getKeypair = () => {
        const ownerKeypair = web3.Keypair.fromSecretKey(Uint8Array.from([
             174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169,
             175, 31, 56, 222, 53, 138, 189, 224, 216, 117,173, 10, 149, 53, 
             45, 73, 251, 237, 246, 15, 185, 186, 82, 177, 240, 148, 69, 241, 
             227, 167, 80, 141, 89, 240, 121, 121, 35, 172, 247, 68, 251, 226, 
             218, 48, 63, 176, 109, 168, 89, 238, 135]
             ))
        setPubkey(ownerKeypair.publicKey.toBase58())
    }
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const handleClick = () => {
       const secret = JSON.parse(process.env.PRIVATE_KEY ?? "") as number[]
       const secretKey = Uint8Array.from(secret)
       const keyPair = web3.Keypair.fromSecretKey(secretKey)
    }
    return (
        <>
        <Header/>
        <div className={styles.main}>
        <button onClick={generateKeypair}>GENERATE KEYPAIR</button>
        <button onClick={getKeypair}>FROM SECRET KEYPAIR</button>
{/*         <form>
            <input type="text" value={value} onChange={handleChange}></input>
            <button onClick={handleClick}>Convert to UINT8ARRAY</button>
        </form> */}
        <h1>Public Key: {pubKey}</h1>
        </div>
        </>

    )
}