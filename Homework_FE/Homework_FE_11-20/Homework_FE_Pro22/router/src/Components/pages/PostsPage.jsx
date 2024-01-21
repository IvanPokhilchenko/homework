import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './PostPage.css'

function PostsPage({response}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
        setLoading(false);
      } catch(err) {
        setError('Постов нет!!!');
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if(loading) {
    return <p>Посты грузятся</p>
  }
  if(error){
    return <h2>{error}</h2>
  }

  return (

    <div className='post-list'>
        {
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 50)}...</p>
              <Link to={`/posts/${post.id}`} className="read-link">Читать далее</Link>
            </div>
          ))
        }  
    </div>
  )
}

export default PostsPage