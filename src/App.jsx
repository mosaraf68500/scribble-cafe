import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [bookmark ,setBookmark]=useState([]);

  const handleBookmarked=(blog)=>{

    const newBookmark=[...bookmark,blog];
    setBookmark(newBookmark);
  }
  console.log(bookmark)
  console.log(Array.isArray(bookmark)); // true হলে সমস্যা নেই

  return (
    <>
      <Navbar></Navbar>

      <div className="container flex text-center ">
        <div className="left-side w-[70%]">
          <Blogs handleBookmarked={handleBookmarked}></Blogs>
        </div>
        <div className="right-side w-[30%]">

          <h1>Reading time:0</h1>
          <h1>BookmarkedCount:0</h1>
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
