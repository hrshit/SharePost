import NewPost from './NewPost'
import Post from './Post'
import classes  from "./PostsList.module.css"
import { useState } from 'react';
import Modal from "./Modal"

function PostLists({isPosting, onCancelPost }){
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  
  return(
    <>

      {isPosting && (
          <Modal onClose={onCancelPost}>
            <NewPost 
              onCancel={onCancelPost}
              onAddPost={addPostHandler}
            />
          </Modal>
        )
      }
      
    <ul >
      {posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post) => (
              <Post author={post.author} body={post.body}/>
            ))}
        </ul>
      )}   
    </ul>
      {posts.length ===0 && (
        <div style={{textAlign: 'center', color: "white"}}>
            <h2>There are no post yet</h2>
            <p>Start adding some</p>
        </div>
      )}
    
    </>
  )
}

export default  PostLists