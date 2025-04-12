import React from "react";

const Blog = ({blog}) => {
    const { title, cover,author_img,author,posted_date,reading_time,hashtags}=blog;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={cover}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <div className="card-actions">
      <button className="btn btn-primary">reading as mark</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Blog;
