import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarked}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // console.log(blogs)
  return (
    <div>
      <h1 className="text-3xl font-semibold">Total:{blogs.length}</h1>

      <div className="grid grid-cols-2">
        {
            blogs.map(blog =><Blog blog={blog} handleBookmarked={handleBookmarked} key={blog.id}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;
