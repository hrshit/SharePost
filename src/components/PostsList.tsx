
import Post from './Post'
import classes  from "./PostsList.module.css"
import { useLoaderData } from 'react-router-dom';


function PostLists(){
  const posts = useLoaderData() //the hook provide the value returned by the route loader.

  
  return(
    <>
      
    <ul >
      {posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post) => (
              <Post key={post.id} id={post.id} author={post.author} body={post.body}/>
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