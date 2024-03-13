
import './App.css'
import Header from './assets/component/Header'
import Blogs from './assets/component/Blogs'
import BookMarks from './assets/component/BookMarks'




function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>

    </>
  )
}

export default App
