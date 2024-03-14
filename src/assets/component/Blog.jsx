import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Blog = ({ blog, addToBookMark, handleMarkAsRead }) => {

    const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    console.log(blog)
    return (
        <div className='mb-20'>
            <img className='mb-14' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-14 mb-5 mb-5' src={author_img} alt={`this is the author img ${author}`} />
                    <div>
                        <h3>{author}</h3>
                        <span>{posted_date}</span>

                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => addToBookMark(blog)} className='ml-4 text-green-500'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h1 className="4xl mb-4">{title}</h1>
            <p>
                {
                    hashtags.map((hash, inx) => <span key={inx}>  <a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className=' btn text-green-400'>mark as read</button>

        </div>
    );
};

Blog.propTypes = {

    blog: PropTypes.object.isRequired,
    addToBookMark: PropTypes.function

}
export default Blog;