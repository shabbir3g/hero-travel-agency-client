import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import "./Blog.css";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 6;


  useEffect(() => {
    fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count/3);
        setPageCount(pageNumber);
      });
  }, [page]);
  return (
      <div className="bg-service">
      <div className="container pb-4">
      <div className="my-5 text-center section-title mx-auto">
        <h2>Our Blogs </h2>
        </div>
        <div className="card mb-3" >
        {blogs.map((blog, index) => (
          <div className="row g-0 mb-4">
            <div className="col-md-4">
              <img  src={blog.image} className="img-fluid rounded-start" alt={blog.image}  />
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <div className="blog-title">
                  <h2> {blog.title}</h2>  
                  <h5>Cost: {blog.cost}</h5>
                </div>
                <p className="card-text"> {<p> {blog.description.slice(0, 150)}</p>}</p>
                <Link className="card-btn" to={`/SingleBlog/${blog._id}`}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
        <u className="pagination">
          {
              [...Array(pageCount).keys()]
              .map(number => <li><button
              className={number === page ? "selected": '' }
              key={number}
              onClick={() => setPage(number)}
              >{number + 1}</button></li> )
          }
      </u>
       
      </div>
    </div>
  );
};

export default Blog;
