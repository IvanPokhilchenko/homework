import React from 'react'
import { deletePost, getPosts } from '../actions/postsActions';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getPosts());
  }, []);


  if(error) {
    return <h1>{error}</h1>
  }


  return (
    <ul>
      {
        posts.map((post) => (
          <>
          <li key={post.id}>{post.title}</li>
          <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
          </>
        ))
      }
    </ul>
  )
}

export default PostsList