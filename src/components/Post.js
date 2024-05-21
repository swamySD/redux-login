import React from 'react'
import { useParams } from 'react-router-dom'
import './Post.css'
const Post = () => {
    const {id}=useParams()
  return (
    <div className='post'>{id}</div>
  )
}

export default Post 

