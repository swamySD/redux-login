import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const LoadingToRedirects = () => {
    const [count,setCount]=useState(5)
    const navigate=useNavigate()
useEffect(()=>{
const interval=setInterval(()=>{
setCount((currentCount)=>currentCount-1)
},1000)
count ===0 && navigate('/login')
return ()=>clearInterval(interval)
},[count,navigate])

  return (
  <div>
    <p>Redireting you in {count} seconds </p>
  </div>
  )
}

export default LoadingToRedirects