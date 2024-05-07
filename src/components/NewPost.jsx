import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  

  function changeBodyHandler(event){
    console.log(event.target.value);
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event){
    setEnteredAuthor(event.target.value)
  }

  function onSubmitHandler(event){
    event.preventDefault();
    const postData = {
      body : enteredBody,
      author: enteredAuthor
    }
    onAddPost(postData);
    console.log("post data", postData);

    onCancel();
    
  }
  

  
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}
        >Cancel</button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;