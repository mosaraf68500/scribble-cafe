import React from "react";
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({blog,handleBookmarked, handleReadingTime}) => {
    // console.log(handleReadingTime)
    const { title, cover,author_img,author,hashtags}=blog;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={cover}
      alt="Shoes"
      className="rounded-xl" />
  </figure>

  <div className="flex justify-around pt-2 items-center">
    <h3>{author} </h3>
    <img className="w-10" src={author_img} alt="" />
    <button onClick={()=> handleBookmarked(blog)}><FaRegBookmark size={30} /></button>

  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
<div className="flex justify-around items-center gap-6">
{
    hashtags.map(has=><p>{has}</p>)
}
</div>

    <div className="card-actions">
      <button onClick={()=>handleReadingTime(blog.reading_time,blog.id)} className="btn btn-primary">reading as mark</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Blog;
