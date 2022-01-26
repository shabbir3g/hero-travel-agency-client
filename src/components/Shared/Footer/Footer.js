import React from 'react';
import logo from '../../../images/logo.png';
import inst1 from '../../../images/instagram/1.jpg';
import inst2 from '../../../images/instagram/2.jpg';
import inst3 from '../../../images/instagram/3.jpg';
import inst4 from '../../../images/instagram/4.jpg';
import inst5 from '../../../images/instagram/5.jpg';
import inst6 from '../../../images/instagram/6.jpg';
import { Link } from 'react-router-dom';
import './Footer.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Facebook = <FontAwesomeIcon icon={faFacebook} />
const Twitter = <FontAwesomeIcon icon={faTwitter} />
const Instagram = <FontAwesomeIcon icon={faInstagram} />
const Youtube = <FontAwesomeIcon icon={faYoutube} />
const Linkedin = <FontAwesomeIcon icon={faLinkedin} />


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="bd-travel-footer">
                    <div className="container bd-travel-p-60-60">
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                        <img className="bd-travel-footer-logo" src={logo} alt="Kinsley" />
                        <div className="bd-travel-footer-about">Hero Travel Agency is a powerful flagship camera drone equipped with a 4/3 CMOS Hasselblad camera to facilitate professional-level imaging. It also offers omnidirectional obstacle.</div>
                        <ul className="bd-travel-footer-social">
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{Facebook}</a></li>
                            <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer">{Twitter}</a></li>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{Instagram}</a></li>
                            <li> <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">{Youtube}</a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">{Linkedin}</a></li>
                        </ul>
                        </div>

                        <div className="col-md-2 col-lg-2">
                        <h4>Our Company</h4>
                        <ul className="bd-travel-footer-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About us</Link></li>
                            <li><Link to="/">Products</Link></li>
                            <li><Link to="/">Contact Us</Link></li>
                        </ul>
                        </div>
                        <div className="col-md-2 col-lg-2">
                        <h4>Hero Travel</h4>
                        <ul className="bd-travel-footer-menu">
                            <li><Link to="/">Privacy policy</Link></li>
                            <li><Link to="/">Help center</Link></li>
                            <li><Link to="/">Work with us</Link></li>
                            <li><Link to="/">Terms & Conditions</Link></li>
                        </ul>
                        </div>

                        
                        <div className="col-md-4 col-lg-4">
                        <h4>Instagram</h4>
                        <div className="footer-insta">


                            <Link to="/"><div className="overlay"></div><img src={inst1} alt="insta"/></Link>
                            <Link to="/"><div className="overlay"></div><img src={inst2} alt="insta"/></Link>
                            <Link to="/"><div className="overlay"></div><img src={inst3} alt="insta"/></Link>
                            <Link to="/"><div className="overlay"></div><img src={inst4} alt="insta"/></Link>
                            <Link to="/"><div className="overlay"></div><img src={inst5} alt="insta"/></Link>
                            <Link to="/"><div className="overlay"></div><img src={inst6} alt="insta"/></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="hero-dron-copyright">
                    <div className="container">
                        <div className="copy-text text-center">
                        <p className="my-0"> &copy; Hero Travel Agency 2021 | All Rights Reserved</p>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
        </div>
    );
};

export default Footer;