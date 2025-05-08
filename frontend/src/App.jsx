import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  
  const [data,setData] = useState()

  useEffect(() => {
    async function grabData(){
      const responce = await axios.delelte("http://localhost:3000/posts/681c2fb7b35cfbbdf550e25d")
      if(responce.status === 200){
        setData(responce.data)
      }
    }

    grabData()
  },[])
  return (
    <>
    {JSON.stringify(data)}
    </>
  )
}

export default App
