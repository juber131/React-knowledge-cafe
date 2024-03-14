
import Proptypes from 'prop-types'
// eslint-disable-next-line react/prop-types
const BookMark = ({ bookMark }) => {
    console.log(bookMark)
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { author, title } = bookMark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2>Author name :{author} </h2>
            <h2>Title No: {title} </h2>
        </div>
    );
};

BookMark.proptypes = {
    bookMark: Proptypes.object.isRequired,
}

export default BookMark;