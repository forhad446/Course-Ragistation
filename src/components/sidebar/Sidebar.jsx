
const Sidebar = ({blogs}) => {
    return (
        <div className="p-6 bg-[#FFF] rounded-xl">
            <div>
                <h1 className="text-[#2F80ED] text-xl font-bold my-4">Credit Hour Remaining 7 hr</h1>
                <hr className="text-[#1C1B1B33]" />
            </div>
            <div className="py-3">
                <h2 className="text-[#1C1B1B] text-xl font-bold mb-3">Course Name</h2>
                <ol>
                    {
                        blogs.map(blog => <li 
                            className="text-[#1C1B1BCC]"
                            key={blog.id}
                            >
                            {blog.title}
                            </li>)
                    }
                </ol>
                <hr className="mt-3"/>
            </div>
                <h3 className="text-[#1C1B1BCC] font-medium mb-3">Total Credit Hour : 13</h3>
                <hr className="text-[#1C1B1B33]" />
            <div className="mt-3">
                <h2 className="text-[#1C1B1BCC] font-bold">Total Price : 48000 USD</h2>
            </div>
        </div>
    );
};

export default Sidebar;