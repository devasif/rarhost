import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/rarhost.png"

export const Footer = () => {
  return (
    <>
    <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>support@rarhost.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="/"><img src={logo} className="img-fluid" alt="logo"/></Link>
                            </div>
                            <div className="footer-text">
                                <p> Customer service is at the heart of our offering, basing our business model and services on our vast experience of real business customers’ hosting needs. </p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>company</h3>
                            </div>
                            <ul>
                                  <li><Link to="/">About Us</Link></li>
                                  <li><Link to="/">Terms & Conditions</Link></li>
                                  <li><Link to="/">Privacy Policy</Link></li>
                                  <li><Link to="/">Service Level Agreement</Link></li>
                                  <li><Link to="/">Blog / News</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Services</h3>
                            </div>
                            <ul>
                                  <li><Link to="/">Web Hosting</Link></li>
                                  <li><Link to="/">cPanel Web Hosting</Link></li>
                                  <li><Link to="/">WordPress Hosting</Link></li>
                                  <li><Link to="/">VPS Hosting</Link></li>
                                  <li><Link to="/">Email Hosting</Link></li>
                                  <li><Link to="/">Cloud Servers</Link></li>
                                  <li><Link to="/">Reseller Hosting</Link></li>
                                  <li><Link to="/">Microsoft 365</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Support</h3>
                            </div>
                            <ul>
                                  <li><Link to="/">Contact Us</Link></li>
                                  <li><Link to="/">My Account</Link></li>
                                  <li><Link to="/">System Status</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </>
  )
}
