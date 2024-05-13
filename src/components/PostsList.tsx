
import Post from './Post'
import classes  from "./PostsList.module.css"
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


function PostLists(){
  const posts = useLoaderData()


  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts',{
      method: 'Post',
      body: JSON.stringify(postData),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  
  return(
    <>
      
    <ul >
      { posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post) => (
              <Post author={post.author} body={post.body}/>
            ))}
        </ul>
      )}   
    </ul>
      { posts.length ===0 && (
        <div style={{textAlign: 'center', color: "white"}}>
            <h2>There are no post yet</h2>
            <p>Start adding some</p>
        </div>
      )}
      
    
    </>
  )
}

export default  PostLists