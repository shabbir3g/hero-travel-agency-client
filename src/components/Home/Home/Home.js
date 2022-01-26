import React from 'react';
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navigation from '../../Shared/Navigation/Navigation';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Blog></Blog>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;