
import PropTypes from 'prop-types';
import BookMark from './BookMark';

// eslint-disable-next-line react/prop-types
const BookMarks = ({ bookMarks, readingTime }) => {
    return (
        <>


            <div className="md:w-1/3">

                <div>
                    <h1 className='text-green-500 text-center'>
                        reading time : {readingTime}
                    </h1>
                </div>
                <h1 className='text-center text-3xl text-green-500'>book mark:{bookMarks.length} </h1>
                {bookMarks.map(bookMark => <BookMark key={bookMark.author} bookMark={bookMark}></BookMark>)}
            </div>
        </>
    );

};

BookMarks.propTypes = {

    bookMarks: PropTypes.array.isRequired,
    readingtime: PropTypes.number
}
export default BookMarks;