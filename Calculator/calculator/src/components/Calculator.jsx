import React, { useState } from 'react'
import styles from "./Calculator.module.css"

const Calculator = () => {
    const[input,setInput]=useState("")
    const[result,setResult]=useState([])
    const handler=(e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }
  return (
    <>
        <p className={styles.cal}>Calculator</p>
        <div>
        <input type="text" className={styles.inputtag} value={input} name="input" onChange={handler} placeholder="Enter Number"/>
        <br/>
        <button className={styles.btn1}onClick={()=>setResult(eval(input))}>Check Result</button>
        <div className={styles.result}>{result}</div>

        
        <button className={styles.btn} onClick={()=>setInput(input+'1')}>1</button>
        <button className={styles.btn}onClick={()=>setInput(input+'2')}>2</button>
        <button className={styles.btn}onClick={()=>setInput(input+'3')}>3</button>
        <button className={styles.btn}onClick={()=>setInput(input+'4')}>4</button>
        <button className={styles.btn}onClick={()=>setInput(input+'5')}>5</button><br/>

        <button className={styles.btn}onClick={()=>setInput(input+'6')}>6</button>
        <button className={styles.btn}onClick={()=>setInput(input+'7')}>7</button>
        <button className={styles.btn}onClick={()=>setInput(input+'8')}>8</button>
        <button className={styles.btn}onClick={()=>setInput(input+'9')}>9</button>
        <button className={styles.btn}onClick={()=>setInput(input+'0')}>0</button><br/>

        <button className={styles.btn}onClick={()=>setInput(input+'+')}>+</button>
        <button className={styles.btn}onClick={()=>setInput(input+'-')}>-</button>
        <button className={styles.btn}onClick={()=>setInput(input+'*')}>*</button>
        <button className={styles.btn}onClick={()=>setInput(input+'/')}>/</button>
        <button className={styles.btn}onClick={()=>setInput(input+'')}>X</button><br/>
        
        </div>
    </>
  )
}

export default Calculator