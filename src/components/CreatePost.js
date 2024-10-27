import React, { useContext, useRef } from 'react'
import { PostListContext } from '../context/store';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {

  const {addPost} = useContext(PostListContext)

  const navigate = useNavigate();
  
  const emailElement = useRef();
  const postIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const hashtagsElement = useRef();
  
  const handleSubmit = (event)=> {
    event.preventDefault();

    const email = emailElement.current.value;
    const userid = postIDElement.current.value;
    const posttitle = postTitleElement.current.value;
    const postbody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const hashtags = hashtagsElement.current.value.split(' ');

    addPost(email, userid, posttitle, postbody, reactions, hashtags);
    navigate("/");
  }

  return (
    <div>
      <form className='create-post' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" ref = {emailElement} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="UserID" className="form-label">UserId</label>
          <input type="text" ref = {postIDElement} className="form-control" id="UserID" placeholder='Enter your user ID here.'/>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" ref = {postTitleElement} className="form-control" id="title" placeholder='How are you feeling today.'/>
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea rows={2} type="text" ref = {postBodyElement} className="form-control" id="body" placeholder='Tell us more about it.'/>
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Public Reactions</label>
          <input type="text" className="form-control" id="reactions" ref = {reactionsElement} placeholder='How many people reacted on this post'/>
        </div>
        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">Hashtags</label>
          <input type="text" className="form-control" id="hashtags" ref = {hashtagsElement} placeholder='Enter your hashtags here using space'/>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </div>
  )
}
