import NewPost from './NewPost'
import Post from './Post'
import classes  from "./PostsList.module.css"
import { useState } from 'react';
import Modal from "./Modal"

function PostLists({isPosting, onCancelPost }){
  const [startvalue, setStartValue] = useState('');
  const [author, setAuthor] = useState('');
  

  function changeBodyHandler(event){
    console.log(event.target.value);
    setStartValue(event.target.value);
  }

  function changeAuthorHandler(event){
    setAuthor(event.target.value)
  }

  
  // console.log("visibilily value", isVisible)

  return(
    <>

      {isPosting && (
          <Modal onClose={onCancelPost}>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
          </Modal>
        )
      }
      
    <ul className={classes.posts}>
      <Post author={author} body={startvalue}/>
      <Post author="Janak" body="Hello good morning"/>
      <Post author="satish" body="welll good enough"/>    
    </ul>
    
    </>
  )
}

export default  PostLists