import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  // these state created for show title, Total Credit Hour, Credit Hour Remaining
  const [blogs, setBlogs] = useState([])
  const [creditHour, setCreditHour] = useState(0)
  const [remainingHour, setRemainingHour] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)

  // handle title func for handling select button
  const handleTitle = (blog) => {
    const isExit = blogs.find(item => item.id === blog.id)
    if (isExit) {
      alert('already booked')
    } else {
      // For Total Credit Hour
      const tme = parseInt(blog.credit.slice(0,2))
      const totalCreditHour = creditHour + tme;
      if(totalCreditHour <= 20){
        setCreditHour(totalCreditHour)
      // for title
      const newArr = [...blogs, blog]
      setBlogs(newArr)

      // For total price 
      const price = totalPrice + blog.price;
      setTotalPrice(price)
      
      }

      // For Total remaining Hour
      const subTme = parseInt(blog.credit.slice(0,2))
      const totalRemainingHour = remainingHour - subTme;
      if(totalRemainingHour >= 0){
        setRemainingHour(totalRemainingHour)
      }else{
        alert("doesn't have more remaining hour")
      }

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
        totalPrice={totalPrice}
        ></Sidebar>
      </div>
    </div>
  )
}

export default App
