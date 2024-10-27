import './App.css';
import PostList from './components/PostList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// import Spinner from './components/Spinner';

function App() {
  
  const[selectedTab, SetselectedTab] = useState("home")
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar selectedTab={selectedTab} SetselectedTab={SetselectedTab}/>
        <div className="content">  
          <Navbar SetselectedTab={SetselectedTab}/>
          {/* {selectedTab==='home'?<PostList/>:<CreatePost SetselectedTab={SetselectedTab}/>} */}
          <Routes>
            <Route path = "/" element = {<PostList/>}/>
            <Route path = "/create-post" element = {<CreatePost/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>  
    </div>
  );
}

export default App;
