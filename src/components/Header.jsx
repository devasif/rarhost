import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import iconOne from "../images/iconone.png";
import iconTwo from "../images/icon2.webp"
import iconthree from "../images/icon3.webp"
import iconfour from "../images/icon4.png"
import mega1 from "../images/mega2.webp"
import mega2 from "../images/mega1.webp"
import mega3 from "../images/mega3.webp"
import mega4 from "../images/mega4.webp"
import mega5 from "../images/mega5.webp"
import mega6 from "../images/mega6.png"
import https from "../images/http.webp"
import s1 from "../images/s1.webp"
import s2 from "../images/s2.png"
import s3 from  "../images/s3.webp"
import s4 from "../images/s4.jpg"
import s5 from "../images/s5.jpg"
import s6 from "../images/s6.jpg"
import s7 from "../images/s7.webp"
import s8 from "../images/s8.jpg"
import emails from "../images/email.png"
import email2 from  "../images/email2.webp"
import logo from "../images/rarhost.png"
export const Header = () => {
    const [ok,setOk] = useState(false);
    const [car,setCar]= useState(false);
    const [email,setEmail]= useState(false);

    const bal = ()=>{
        setOk(!ok);
        setCar(false);
        setEmail(false);
    }
    const caret = ()=>{
        setCar(!car);
        setOk(false);
        setEmail(false);
    }
    const onmail = ()=>{
        setEmail(!email);
        setCar(false);
        setOk(false);
    }
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    console.log(isNavExpanded)

  return (
    <>
    <header className='header'>
    <div className="header-top">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6"></div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="top-header-items">
                        <div className="top-item">
                            <li><a href="#"> <span><i className="fa-solid fa-user"></i></span>Client Login</a> </li>
                            <li><a href="#"> <span><i className="fa-solid fa-cart-shopping"></i></span> cart</a> </li>
                            <li><a href="tel:09898989899"> <span><i className="fa-solid fa-phone"></i></span> 09898989899</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="main-menu">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="logo">
                        <Link className='links' to="/">
                           <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="menu">
                    {/* <Link to="#" className="links dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >hosting
                    
                    <div class="down-menu dropdown-menu" aria-labelledby="navbarDropdown">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 ">
                                    <div className="hosting-list">
                                        <div className="lists">
                                            <Link to="/" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconOne} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>Web</b> hosting</h4>
                                                    <p>Ultra-reliable and lightning-fast UK web hosting all with <br />free CDN, free SSL’s, protected Email and DDoS protection.</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                      
                                        <div className="lists">
                                            <Link to="/" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconTwo} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>cPanel</b> Hosting</h4>
                                                    <p>Super-fast, secure and feature-rich UK-based cPanel <br />cloud hosted solutions. Backed by a 30 day money back guarantee.</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div> 
                                         <div className="lists">
                                            <Link to="/" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconthree} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>Wordpress </b> Hosting</h4>
                                                    <p>Supercharge your website with our Managed WordPress Hosting: <br />pre-configured & built with WordPress in mind.</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                        <div className="lists">
                                            <Link to="/" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconfour} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>Reseller </b> Hosting</h4>
                                                    <p>Offer UK based Web Hosting services or host multiple websites <br />with our easy to use reseller hosting service</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 ">
                                    <div className="two-menu-bar ">
                                    <div className="sub-menu-right">
                                        <h3><b>Application</b> Hosting</h3>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega1} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Magento Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega2} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Joomla Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega3} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Prestashop Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega4} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Drupal Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega5} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Concrete5 Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega6} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>OpenCart Hosting</p>
                                        </div>
                                        </div>
                                    </div>
                                        <div className="last-of">
                                            <h4>Secure & Cheap Hosting <br />At Its Very Best.</h4>
                                            <img src={https} className='d-block' alt="https" />
                                            <Link to="/top" className='my-btn d-inline-block mt-4'>Get Started now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </Link> */}
                   
                   <Link to="#" className="links  " onClick={bal}> Hosting {ok? <i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}
                    
                   { ok  &&  <div class="down-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 ">
                                    <div className="hosting-list">
                                        <div className="lists">
                                            <Link to="/web-hosting" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconOne} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>Web</b> hosting</h4>
                                                    <p>Ultra-reliable and lightning-fast UK web hosting all with <br />free CDN, free SSL’s, protected Email and DDoS protection.</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                      
                                        <div className="lists">
                                            <Link to="/cpanel-hosting" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconTwo} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>cPanel</b> Hosting</h4>
                                                    <p>Super-fast, secure and feature-rich UK-based cPanel <br />cloud hosted solutions. Backed by a 30 day money back guarantee.</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div> 
                                         <div className="lists">
                                            <Link to="/wordpress-hosting" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconthree} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>Wordpress </b> Hosting</h4>
                                                    <p>Supercharge your website with our Managed WordPress Hosting: <br />pre-configured & built with WordPress in mind.</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                        <div className="lists">
                                            <Link to="/reseller-hosting" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconfour} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>Reseller </b> Hosting</h4>
                                                    <p>Offer UK based Web Hosting services or host multiple websites <br />with our easy to use reseller hosting service</p>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 ">
                                    <div className="two-menu-bar ">
                                    <div className="sub-menu-right">
                                        <h3><b>Application</b> Hosting</h3>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega1} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Magento Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega2} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Joomla Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega3} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Prestashop Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega4} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Drupal Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega5} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>Concrete5 Hosting</p>
                                        </div>
                                        </div>
                                        <div className="main-sub-menu">
                                        <div className="menu-list">
                                            <img src={mega6} alt="icon" />
                                        </div>
                                        <div className="menu-img">
                                            <p>OpenCart Hosting</p>
                                        </div>
                                        </div>
                                    </div>
                                        <div className="last-of">
                                            <h4>Secure & Cheap Hosting <br />At Its Very Best.</h4>
                                            <img src={https} className='d-block' alt="https" />
                                            <Link to="/top" className='my-btn d-inline-block mt-4'>Get Started now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>}
                    </Link>
                    <Link to="#" className="links  " onClick={caret}>servers   {car? <i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}
                    
                    { car &&  <div class="down-menu">
                         <div className="container">
                             <div className="row">
                                 <div className="col-xl-6 ">
                                     <div className="hosting-list">
                                         <div className="lists">
                                             <Link to="/" className='linked'>
                                             <div className="list">
                                                 <div className="list-img">
                                                     <img src={s1} alt="server" />
                                                 </div>
                                                 <div className="list-content">
                                                     <h4><b>Cloud-vps</b> Hosting</h4>
                                                     <p>Ultra-fast cloud VPS servers starting at £7.99 per month,<br /> hosted on our super stable True Cloud network </p>
                                                 </div>
                                             </div>
                                             </Link>
                                         </div>
                                       
                                         <div className="lists">
                                             <Link to="/" className='linked'>
                                             <div className="list">
                                                 <div className="list-img">
                                                     <img src={s2} alt="server" />
                                                 </div>
                                                 <div className="list-content">
                                                     <h4><b>True-Cloud</b> Servers</h4>
                                                     <p>Easily deploy cloud servers designed with high <br /> performance and security in mind.</p>
                                                 </div>
                                             </div>
                                             </Link>
                                         </div> 
                                          <div className="lists">
                                             <Link to="/" className='linked'>
                                             <div className="list">
                                                 <div className="list-img">
                                                     <img src={s3} alt="server" />
                                                 </div>
                                                 <div className="list-content">
                                                     <h4><b>Bare Metal </b> Servers</h4>
                                                     <p>Complete control, no contracts, no setup fees. All with instant set up and a choice of operating systems.</p>
                                                 </div>
                                             </div>
                                             </Link>
                                         </div>
                                         
                                     </div>
                                 </div>
                                 <div className="col-xl-6 ">
                                     <div className="two-menu-bar ">
                                     <div className="sub-menu-right">
                                       
                                         <div className="main-sub-menu">
                                         <div className="menu-list">
                                             <img src={s4} alt="icon" />
                                         </div>
                                         <div className="menu-img">
                                             <p>Fedora</p>
                                         </div>
                                         </div>
                                         <div className="main-sub-menu">
                                         <div className="menu-list">
                                             <img src={s5} alt="icon" />
                                         </div>
                                         <div className="menu-img">
                                             <p>Debian</p>
                                         </div>
                                         </div>
                                         <div className="main-sub-menu">
                                         <div className="menu-list">
                                             <img src={s6} alt="icon" />
                                         </div>
                                         <div className="menu-img">
                                             <p>Ubuntu</p>
                                         </div>
                                         </div>
                                         <div className="main-sub-menu">
                                         <div className="menu-list">
                                             <img src={s7} alt="icon" />
                                         </div>
                                         <div className="menu-img">
                                             <p>Centos</p>
                                         </div>
                                         </div>
                                         <div className="main-sub-menu">
                                         <div className="menu-list">
                                             <img src={s8} alt="icon" />
                                         </div>
                                         <div className="menu-img">
                                             <p>Windows</p>
                                         </div>
                                         </div>
                                         
                                     </div>
                                         <div className="last-of">
                                             <h4>Secure & Cheap Hosting <br />At Its Very Best.</h4>
                                             <img src={https} className='d-block' alt="https" />
                                             <Link to="/top" className='my-btn d-inline-block mt-4'>Get Started now</Link>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                       </div>}
                     </Link>

                     <Link to="#" className="links  " onClick={onmail}>Email   {email? <i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}
                    { email &&  <div class="down-menu">
                         <div className="container">
                             <div className="row">
                                 <div className="col-xl-6 ">
                                     <div className="hosting-list">
                                         <div className="lists">
                                             <Link to="/" className='linked'>
                                             <div className="list">
                                                 <div className="list-img">
                                                     <img src={emails} alt="emails" />
                                                 </div>
                                                 <div className="list-content">
                                                     <h4><b>Email</b> Hosting</h4>
                                                     <p>Ensure the email you send is delivered safely, <br /> and the email you receive is spam-free.</p>
                                                 </div>
                                             </div>
                                             </Link>
                                         </div>
                                       
                                         <div className="lists">
                                             <Link to="/" className='linked'>
                                             <div className="list">
                                                 <div className="list-img">
                                                     <img src={email2} alt="email" />
                                                 </div>
                                                 <div className="list-content">
                                                     <h4><b>Microsoft</b>  Exchange</h4>
                                                     <p>Powerful business email powered by Microsoft <br /> Exchange. Email on the go via all your  <br />devices through the Outlook app.</p>
                                                 </div>
                                             </div>
                                             </Link>
                                         </div> 
                                        
                                         
                                     </div>
                                 </div>
                                 <div className="col-xl-6 ">
                                     <div className="two-menu-bar  ">
                                     <div className="sub-menu-right">
                                        <h3>
                                      <b>Premium Email</b> <br />for Business

                                      </h3>
                                        <p>Make light work of working remotely.</p>
                                        <div className="menu-box d-flex justify-content-between">
                                            <div className="menu-box-item ">
                                                <p><b>Mail Lite</b> 5 Mail Boxes</p>
                                            </div>
                                            <div className="menu-box-price">
                                                <p><b>£4.99</b> user/month</p>
                                            </div>
                                        </div>
                                        <div className="menu-box d-flex justify-content-between">
                                            <div className="menu-box-item ">
                                                <p><b>Mail Pro</b> 25 Mail Boxes</p>
                                            </div>
                                            <div className="menu-box-price">
                                                <p><b>£9.99 </b> user/month</p>
                                            </div>
                                        </div>
                                        <div className="menu-box d-flex justify-content-between">
                                            <div className="menu-box-item ">
                                                <p><b>Mail Unlimited</b> Unlimited Mail Boxes</p>
                                            </div>
                                            <div className="menu-box-price">
                                                <p><b>£19.99  </b> user/month</p>
                                            </div>
                                        </div>

                                     </div>
                                         <div className="last-of">
                                             <h4>Secure & Cheap Hosting <br />At Its Very Best.</h4>
                                             <img src={https} className='d-block' alt="https" />
                                             <Link to="/top" className='my-btn d-inline-block mt-4'>Get Started now</Link>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                       </div>}
                     </Link>
                    <Link className="links" to="/">Microsoft365</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    </header>


{/* // navigation with responsive */}
<nav className="navigation">
       <div className="logo"><a className='links' href="/">
                           <img src={logo} alt="logo" />
                        </a></div>                 
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
       <i class="fa-solid fa-bars-staggered"></i>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
          <div className="hosting-list">
                                        <div className="lists">
                                            <a href="/web-hosting" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconOne} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>Web</b> hosting</h4>
                                                    <p>Ultra-reliable and lightning-fast UK web hosting all with <br />free CDN, free SSL’s, protected Email and DDoS protection.</p>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                      
                                        <div className="lists">
                                            <a href="/cpanel-hosting" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconTwo} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>cPanel</b> Hosting</h4>
                                                    <p>Super-fast, secure and feature-rich UK-based cPanel <br />cloud hosted solutions. Backed by a 30 day money back guarantee.</p>
                                                </div>
                                            </div>
                                            </a>
                                        </div> 
                                         <div className="lists">
                                            <a href="/wordpress-hosting" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconthree} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>Wordpress </b> Hosting</h4>
                                                    <p>Supercharge your website with our Managed WordPress Hosting: <br />pre-configured & built with WordPress in mind.</p>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                        <div className="lists">
                                            <a href="/reseller-hosting" className='linked'>
                                            <div className="list">
                                                <div className="list-img">
                                                    <img src={iconfour} alt="wordpress" />
                                                </div>
                                                <div className="list-content">
                                                    <h4><b>Reseller </b> Hosting</h4>
                                                    <p>Offer UK based Web Hosting services or host multiple websites <br />with our easy to use reseller hosting service</p>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>
          </li>
         
         
        </ul>
      </div>
    </nav>
</>
  )
}
