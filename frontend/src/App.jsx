import { useState, useEffect } from 'react'
import { getPost, getPosts, createPost, updatePost, deletePost } from './api'
import axios from "axios"
import './App.css'

function App() {
  
  const [posts,setPosts] = useState()

  useEffect(() => {
    async function loadAllPosts() {
      let data = await getPosts()
      if(data){
        setPosts(data)
      }
    }

    loadAllPosts()
  },[])
  return (
    <>
      {JSON.stringify(posts)}
    </>
  )
}

export default App
