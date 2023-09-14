import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'

function App() {
  return (
    <div className='max-w-7xl mx-auto py-12 font-inter bg-[#F3F3F3]'>
      <Header></Header>
      <Blogs></Blogs>
    </div>
  )
}

export default App
