import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';


const Blogs = ({ addToBookMark, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])



    return (

        <div className="md:w-2/3">
            <h1> blogs {blogs.length}</h1>

            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} addToBookMark={addToBookMark} handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {

    addToBookMark: PropTypes.function

}

export default Blogs;