
import './App.css'
import Header from './assets/component/Header'
import Blogs from './assets/component/Blogs'
import BookMarks from './assets/component/BookMarks'
import { useState } from 'react'




function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const addToBookMark = (blog) => {

    const isExist = bookMarks.find(item => item.id == blog.id);
    if (!isExist) {
      setBookMarks([...bookMarks, blog]);
    } else {
      alert("Already Exist")
    }

    // const newBookMark = [...bookMarks, blog]
    // setBookMarks(newBookMark)
  };

  const handleMarkAsRead = (id, time) => {
    console.log(typeof time)
    setReadingTime(readingTime + parseInt(time));


    // remove bookmark 
    const remainningBookMark = bookMarks.filter(bookMark => bookMark.id !== id)
    setBookMarks(remainningBookMark)

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs addToBookMark={addToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>

    </>
  )
}

export default App
