import React from 'react'
import {getPost} from "../api"
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const ReadBlog = () => {
  
  const [post, setPost] = useState({})

  let params = useParams() 
  let id = params.id

  useEffect(()=>{
    async function loadPost(){
      let data = await getPost()
      setPost(data)
    }
    loadPost()
  },[])
  return (
    <> 
     <h1>{post.title}</h1> 
     <h2>{post.description}</h2> 
     <h3>{post.dateCreated}</h3> 
     <p>{post.content}</p> 
    </>
  )
}

export default ReadBlog;
