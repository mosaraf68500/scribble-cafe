import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="container flex text-center ">
        <div className="left-side w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-side w-[30%]">

          <h1>Reading time:0</h1>
          <h1>BookmarkedCount:0</h1>
        </div>
      </div>
    </>
  );
}

export default App;
