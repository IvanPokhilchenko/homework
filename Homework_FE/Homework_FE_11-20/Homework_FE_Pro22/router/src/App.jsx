import React from 'react'
import HomePage from './Components/pages/HomePage'

import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import PostsPage from './Components/pages/PostsPage'
import Nav from './Components/Nav'
import Post from './Components/pages/Post'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/posts/:id' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App