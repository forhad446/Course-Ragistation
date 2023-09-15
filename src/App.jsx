import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  // these state created for show title, Total Credit Hour
  const [blogs, setBlogs] = useState([])
  const [creditHour, setCreditHour] = useState(0)
  const [remainingHour, setRemainingHour] = useState(20)

  // handle title func for handling select button
  const handleTitle = (blog) => {
    const isExit = blogs.find(item => item.id === blog.id)
    if (isExit) {
      alert('already booked')
    } else {
      // for title
      const newArr = [...blogs, blog]
      setBlogs(newArr)

      // For Total Credit Hour
      const tme = parseInt(blog.credit.slice(0,2))
      const totalCreditHour = creditHour + tme;
      setCreditHour(totalCreditHour)

      // For Total remaining Hour
      const subTme = parseInt(blog.credit.slice(0,2))
      const totalRemainingHour = remainingHour - subTme;
      setRemainingHour(totalRemainingHour)
    }
  }
  return (
    <div className='max-w-7xl mx-auto py-12 font-inter'>
      <Header></Header>
      <div className='flex justify-between '>
        <Blogs
          handleTitle={handleTitle}
        ></Blogs>
        <Sidebar 
        blogs={blogs}
        creditHour={creditHour}
        remainingHour={remainingHour}
        ></Sidebar>
      </div>
    </div>
  )
}

export default App
