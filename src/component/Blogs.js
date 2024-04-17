import React from 'react'
import '../css/blog.css'
import B1 from './sub-cmp/blogs/disb/B1'
import B1c from './sub-cmp/blogs/blogcom/B1c'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Blogs = () => {
  return (
    <>
    <main>
      <div className="blogs-pg">
          <div className="head">
          <h3 className="bl-art">Articles</h3>
        </div>
        <B1c/>
      </div>
      </main>
    </>
  )
}

export default Blogs