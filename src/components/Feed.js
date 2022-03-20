import React from 'react'
import posts from '../constant/Feed.json'
import Post from './Post'
import './Feed.css'

function Feed() {
  return (
    <div className='feed'>
    {posts.map((post) => {
      return(
        <Post type={post.type} description={post.description} address={post.address} amount={post.amount} number={post.number} />
      )
    })}
    </div>
  )
}

export default Feed