import './App.css'
import { useState } from 'react';
import PostLists from './components/PostsList';
import MainHeader from './components/MainHeader';



function App() {
  const [isVisible, setIsVisible] = useState(false);

  function hideModalHandler(){
    setIsVisible(false);
  }
  
  function showModalHandler(){
    setIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostLists isPosting={isVisible} onCancelPost={hideModalHandler}/>
      </main>
    </>
  )
}

export default App;