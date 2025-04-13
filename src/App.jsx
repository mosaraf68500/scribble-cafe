import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [bookmark ,setBookmark]=useState([]);
  const [readingTime, setReadingTime]=useState(0);


  const handleBookmarked=(blog)=>{

    const newBookmark=[...bookmark,blog];
    setBookmark(newBookmark);
  }
  // console.log(bookmark)

  const handleReadingTime=(blog)=>{

    const newReadingTime=readingTime+blog;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="container flex text-center ">
        <div className="left-side w-[70%]">
          <Blogs handleBookmarked={handleBookmarked} handleReadingTime={handleReadingTime}></Blogs>
        </div>
        <div className="right-side w-[30%]">

          <h1>Reading time:{readingTime}</h1>
          <h1>BookmarkedCount:{bookmark.length}</h1>
          <div>
            {
              bookmark.map(book =><p key={book.id}>{book.title} </p>)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
