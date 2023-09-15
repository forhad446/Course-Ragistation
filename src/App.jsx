import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  const [blogs, setBlogs] = useState([])

  const handleTitle = (blog) => {
    const newArr = [...blogs, blog]
    setBlogs(newArr)
  }
  return (
    <div className='max-w-7xl mx-auto py-12 font-inter'>
      <Header></Header>
      <div className='flex justify-between '>
        <Blogs 
        handleTitle={handleTitle}
        ></Blogs>
        <Sidebar blogs={blogs}></Sidebar>
      </div>
    </div>
  )
}

export default App
