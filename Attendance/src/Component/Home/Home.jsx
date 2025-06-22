import React, { useState } from 'react'
import "./Home.css"
import Dashboard from '../Dashboard/Dashboard'
const Home = () => {
  const [count,setCount] = useState(0)
  const [message,setMessage] = useState("")
  const Subtract = ()=>{
    if(count>0){
      setCount(count-1)
      console.log(count)
      }
    else{
      setMessage("Cannot do negative operation")
      setCount(null)
    }
  }
  const Add = ()=>{
    if(count>=0){
      setMessage("")
    }
    setCount(count+1)
    console.log(count)
  }


  return (
    <div className='hh-container'>
        <Dashboard/>
        <div>
          <button onClick={()=>Add()}>Add</button>
          <div>{count} </div>
          <div>{message}</div>          
          <button onClick={()=>Subtract()}>Subtract</button>

        </div>
    </div>
  )
}

export default Home
