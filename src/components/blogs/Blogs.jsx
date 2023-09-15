import { useState } from 'react';
import Blog from '../blog/Blog';
import { useEffect } from 'react';

const Blogs = ({handleTitle}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("course-registration.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-5 mt-8'>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    handleTitle={handleTitle}
                ></Blog>)
            }
        </div>
    );
};
export default Blogs;