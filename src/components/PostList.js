import React, { useContext, useState } from 'react'
import Post from './Post'
import { PostListContext } from '../context/store'
import Welcome from './Welcome';
import Spinner from './Spinner';

export default function PostList() {
  const {postkiList, addInitialPost} = useContext(PostListContext);
  const[loading, Setloading] = useState(false);


  const HandleonGet = () => {
    Setloading(true);
    fetch('https://dummyjson.com/posts')
    .then((res) => res.json())
    .then((data) => {
      Setloading(false);
      addInitialPost(data.posts)});
  }

  return (
    <div>
      {loading && <Spinner/>}
      {!loading && postkiList.length===0 && <Welcome HandleonGet = {HandleonGet}/>}
      {!loading && postkiList.map((post) => <Post key = {post.id} POST = {post}/>)}
    </div>
  )
}
