import './App.css';
import PostList from './components/PostList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import { useState } from 'react';
// import Spinner from './components/Spinner';

function App() {
  const[selectedTab, SetselectedTab] = useState("home")
  return (
    <div className="App">
      <Sidebar selectedTab={selectedTab} SetselectedTab={SetselectedTab}/>
      <div className="content">  
        <Navbar SetselectedTab={SetselectedTab}/>
        {selectedTab==='home'?<PostList/>:<CreatePost SetselectedTab={SetselectedTab}/>}
        <Footer/>
      </div> 
    </div>
  );
}

export default App;
