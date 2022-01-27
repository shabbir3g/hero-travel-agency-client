import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopRatedSpot = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch(`https://serene-mesa-56595.herokuapp.com/blogs`)
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data.blogs);
          });
      }, []);

    return (
        <div className='mt-5' style={{position: 'sticky', top: '80px'}}>
                 <div className="mt-5  pt-5 text-center mx-auto">
                <h4>Recent Blogs </h4>
                </div>
            <div class="list-group">
            {blogs.slice(0, 5).map(blog => 

                <Link className="list-group-item list-group-item-action" to={`/SingleBlog/${blog._id}`}>
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{blog.title}</h5>
                    </div>
                    <p class="mb-1">{blog.description.slice(0, 50)}</p>
                    </Link>

            )}
                
               
                </div>
        </div>
    );
};

export default TopRatedSpot;