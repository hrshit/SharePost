import { Outlet } from 'react-router-dom';
import PostLists from '../components/PostsList';

function Posts() {
  return (
         <>
            <Outlet/>         
            <PostLists/>
         </>
  )
}

export default Posts;

export  async function loader () {
  const response = await fetch('http://localhost:8080/posts');
  const resData =await response.json();
  return resData.posts;
}