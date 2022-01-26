import React from 'react';
import Blog from '../Home/Blog/Blog';
import BlogBanner from '../Home/Blog/BlogBanner/BlogBanner';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Blogs = () => {
    return (
        <div>
            <Navigation></Navigation>
             <BlogBanner></BlogBanner>
            <Blog></Blog>
             <Footer></Footer>
        </div>
    );
};

export default Blogs;