import { useEffect } from "react";
import { useState } from "react";



const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])



    return (

        <div className="md:w-2/3">
            <h1>jubaer ahmed :{blogs.length}</h1>
        </div>
    );
};

export default Blog;