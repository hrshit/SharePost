
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {
  
  return (
    <Modal>
      <Form method='post' className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name='body' required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name='author' id="name" required  />
        </p>
        <p className={classes.actions}>
          <Link  to='..' > Cancel </Link>
          <button type='submit'>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  // forData.get('body');  // it is also a complex object provided , it's not have simple key pair value.
  const postData = Object.fromEntries(formData); // it returns a basic key value pari object.
  const response = await fetch('http://localhost:8080/posts',{
      method: 'Post',
      body: JSON.stringify(postData),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
     console.log("post data", postData);
     return redirect('/'); 
}