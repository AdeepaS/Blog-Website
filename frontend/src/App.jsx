import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  
  const [data,setData] = useState()

  useEffect(() => {
    async function grabData(){
      const responce = await axios.get("http://localhost:3000/posts")
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
