import React from 'react'
import { useState } from 'react'
const Assignment1 = () => {
    let[data,setData]=useState("")
    let[data1,setData1]=useState("")
    let[res,setRes]=useState("")
    let num1Data=(e)=>{
        setData(e.target.value)
    }
    let num2Data=(e)=>{
        setData1(e.target.value)
    }
    let add=(e)=>{
        e.preventDefault()
        setRes(Number(data)+Number(data1))
    }
    let sub=(e)=>{
        e.preventDefault()
        setRes(Number(data)-Number(data1))
    }
    let mult=(e)=>{
        e.preventDefault()
        setRes(Number(data)*Number(data1))
    }
    let div=(e)=>{
        e.preventDefault()
        setRes(Number(data)/Number(data1))
    }
  return (
    <div>
         <center>
         <form action="">
          <label>Number 1</label><br/>
          <input type="number" value={data} onChange={num1Data}/><br/>
          <label>Number 2</label><br/>
          <input type="number" value={data1} onChange={num2Data}/><br/>
          <button onClick={add}>Add</button>
          <button onClick={sub}>Subtract</button>
          <button onClick={mult}>Multiplication</button>
          <button onClick={div}>Division</button>
          <h1>Result</h1>{res}
         </form>
        </center>
    </div>
  )
}

export default Assignment1
