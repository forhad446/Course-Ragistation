
const Sidebar = ({ blogs, creditHour, remainingHour, totalPrice }) => {
    return (
        <div className="p-6 bg-[#FFF] rounded-xl">
            <div>
                <h1 className="text-[#2F80ED] text-xl font-bold my-4">Credit Hour Remaining {remainingHour} hr</h1>
                <hr className="text-[#1C1B1B33]" />
            </div>
            <div className="py-3">
                <h2 className="text-[#1C1B1B] text-xl font-bold mb-3">Course Name</h2>
                <ol className="list-decimal">
                    {
                        blogs.map(blog => <li
                            className="text-[#1C1B1BCC]"
                            key={blog.id}
                        >
                            {blog.title}
                        </li>)
                    }
                </ol>
                <h3 className="text-[#c91d12] font-medium mb-2">
                    {creditHour == 20 ? "You can't adding more course" : ''}
                </h3>
                <hr className="mt-3" />
            </div>
            <h3 className="text-[#1C1B1BCC] font-medium mb-2">Total Credit Hour : {creditHour}</h3>
            <h3 className="text-[#c91d12] font-medium mb-2">
                {creditHour == 20 ? 'Total credit hour limited full' : ''}
            </h3>
            <hr className="text-[#1C1B1B33]" />
            <div className="mt-3">
                <h2 className="text-[#1C1B1BCC] font-bold">Total Price : {totalPrice} USD</h2>
            </div>
        </div>
    );
};

export default Sidebar;