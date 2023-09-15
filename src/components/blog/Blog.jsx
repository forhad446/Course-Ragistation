
const Blog = ({blog,handleTitle}) => {
    const {pic,title,details,price,credit} = blog;
    return (
        <div id='card-container' className='w-72 p-4 bg-[#FFF] rounded-xl'>
                <div>
                    <img className='w-full' src={pic} alt="" />
                </div>
                <h3 className='text-[#1C1B1B] text-xl font-semibold my-4'>{title}</h3>
                <p className='text-[#1C1B1B99]'>
                    {details}
                </p>
                <div className='flex justify-between my-4 text-[#1C1B1B99] font-medium'>
                    <p className='text-[#1C1B1B]'>$</p>
                    <p>Price : <span>{price}</span></p>
                    <p className='text-[#1C1B1B] font-semibold'>🕮</p>
                    <p>Credit : <span>{credit}</span></p>
                </div>
                <button 
                onClick={() => handleTitle(blog)} 
                className='text-[#FFF] bg-[#2F80ED] w-full py-3 text-xl font-semibold rounded-lg mt-5'>Select</button>
            </div>
    );
};

export default Blog;