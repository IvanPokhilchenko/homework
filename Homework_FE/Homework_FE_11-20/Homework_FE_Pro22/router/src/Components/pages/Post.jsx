import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './Post.css'


function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    async function fetchData() {
      try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);

        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments `);
        setComments(commentsResponse.data);


        setLoading(false);
      } catch(err) {
        setError('Пост или коментарий не найдены!!!');
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if(loading) {
    return <p>Пост грузится</p>
  }
  if(error){
    return <h2>{error}</h2>
  }

  return (
    <div className='post-card'>
      <h1>Пост:</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Коментарии к посту:</h3>
      <ul>
        {
          comments.map((comment) => (
            <li key={comment.id} className='comment'>
              {comment.name} - {comment.body}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Post