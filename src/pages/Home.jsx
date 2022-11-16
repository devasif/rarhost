import React, { useState } from 'react'
import bgImage from "../images/bannerbg.webp";
import images from "../images/banner_img.webp"
import { Link } from 'react-router-dom';
import t1 from "../images/t1.webp";
import t2 from "../images/t2.webp";
import t3 from "../images/t3.webp";
import t4 from "../images/t4.webp";
import m1 from "../images/m1.webp"
import m2 from "../images/m2.webp"
import m3 from "../images/m3.webp"
import m4 from "../images/m4.webp"
import m5 from "../images/m5.webp"
import m6 from "../images/m6.webp"
import ratingImage from "../images/rating.webp"
import star from "../images/start1.webp"
import extrBg from "../images/extrabg.jpg"
import ratingImage2 from "../images/rating2.webp"
import webmail from "../images/webmail.webp"  
import webmail2 from "../images/webmail2.webp"  
import qustion from "../images/qustion.jpg"
import { Tabs } from '../components/Tabs';

export const Home = () => {const [vat,setVat] = useState(false)

    const includeVat = ()=>{
        setVat(!vat)
    }


  return (
    <>
    <div className="home-content" style={{background: `url(${bgImage})`,}}>
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    <div className="home-left-content">
                        <h2>Reliable & Secure</h2>
                        <h3>Hassle Free Hosting</h3>
                        <p>We make sure your website is fast, secure & always up -so your visitors & search engines trust you
</p>
                        <h4>Secure, <span>UK-based data centres</span></h4>
                    </div>
                    <div className="content-box">
                        <div className="box pr-2">
                            <li><span><i class="fa-regular fa-circle-check"></i></span><b>Fully</b> managed & monitored
</li>
                            <li><span><i class="fa-regular fa-circle-check"></i></span><b>Live 24/7 </b>support

</li>
                            <li><span><i class="fa-regular fa-circle-check"></i></span><b>Award-winning</b> 5 star service

</li>
                           
                           
                        </div>
                        <div className="box">
                        <li><span><i class="fa-regular fa-circle-check"></i></span><b>Super</b> -fast SSD

</li>                    <li><span><i class="fa-regular fa-circle-check"></i></span><b>Ultra-fast</b> hosting

</li>
                   <li><span><i class="fa-regular fa-circle-check"></i></span><b>30-day </b>money-back guarantee

</li>
                        </div>
                        
                    </div>
                    <Link to="#" className=" links my-btn">get started now</Link>

                </div>
                <div className="col-xl-5">
                   <div className="home-img">
                    <img src={images} alt="img" />
                   </div>
                </div>
            </div>
        </div>
    </div>
    

    {/* table area */}

    <section className="table-area">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="table-title">
                    <h5>Hosting Packages</h5>
                    <h2>Find the Hosting Plan that's Right forYour Business</h2>
                    <p>Choose from our most popular packages</p>
                    </div>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="table-full">
                        <div className="table-top">
                            <h2>Rar Lite</h2>
                            <p>Linux Hosting Solutions</p>
                        </div>
                        <div className="table-info">
                            <img src={t1} alt="server" className="b-block" />
                            <br />
                            <span>From </span>
                            {vat ? <h3>£3.59</h3>:<h3>£2.99</h3> }
                            <span>Per Month</span> <br />
                            {vat ? <p>(£2.99  Including VAT)</p>: <p>(£3.59 Including VAT)</p>}
                            <Link className=" table-btn" to="/web-hosting">Get Started Now</Link>
                        </div>
                        <div className="table-aditional">
                            <p>Rock solid stable hosting solutions for everyone</p>
                        </div>
                        <div className="table-data">
                            <ul>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Daily</b> Backups</li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited</b> SSD Space


                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited</b> Bandwidth

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Instant</b> Setup
                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>99.9% </b>Uptime

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>UK</b> Phone Support

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>30</b> Day Money Back

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="table-full">
                        <div className="table-top">
                            <h2>Reseller Lite</h2>
                            <p>Reseller Hosting Solutions</p>
                        </div>
                        <div className="table-info">
                            <img src={t2} alt="server" className="b-block" />
                            <br />
                            <span>From </span>
                            {vat ? <h3>£15.59</h3>:<h3>12.99</h3> }
                            <span>Per Month</span> <br />
                            {vat ? <p>(£12.99 Excluding VAT)</p>: <p>(£15.59 Including VAT)</p>}
                            <Link className=" table-btn" to="/reseller-hosting">Get Started Now</Link>
                        </div>
                        <div className="table-aditional">
                            <p>Reliable reseller hosting with 24 hour support</p>
                        </div>
                        <div className="table-data">
                            <ul>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Daily</b> Backups</li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                cPanel / WHM


                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited</b> Bandwidth

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                WHM Access
                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                One Click Installs

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Easy</b> Branding

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                R1Soft Self Restore

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="table-full">
                        <div className="table-top">
                            <h2>Mail Lite</h2>
                            <p>Email Hosting Solutions</p>
                        </div>
                        <div className="table-info">
                            <img src={t3} alt="server" className="b-block" />
                            <br />
                            <span>From </span>
                            {vat ? <h3>£5.99</h3>:<h3>£4.99</h3> }
                            <span>Per Month</span> <br />
                            {vat ? <p>(£4.99 Excluding VAT)</p>: <p>(£5.99 Including VAT)</p>}
                            <Link className=" table-btn" to="/premium-email-hosting">Get Started Now</Link>
                        </div>
                        <div className="table-aditional">
                            <p>An email package as professional as you are</p>
                        </div>
                        <div className="table-data">
                            <ul>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                Anti Spam Filtering</li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                Anti Virus Filtering


                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                Roaming SMTP
                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                Filtered SMTP Gateway
                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                Webmail

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                              <b>  24/7 </b>Support </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>30</b> Day Money Back

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="table-full">
                        <div className="table-top">
                            <h2>Simple SSD VPS</h2>
                            <p>Cloud Server Solutions</p>
                        </div>
                        <div className="table-info">
                            <img src={t4} alt="server" className="b-block" />
                            <br />
                            <span>From </span>
                            {vat ? <h3>£9.59</h3>:<h3>£7.99</h3> }
                            <span>Per Month</span> <br />
                            {vat ? <p>(£7.99 Excluding VAT)</p>: <p>(£9.59 Including VAT)</p>}
                            <Link className=" table-btn" to="/cloud-vps-hosting">Get Started Now</Link>
                        </div>
                        <div className="table-aditional">
                            <p>Super-fast, super-stable, scalable cloud servers</p>
                        </div>
                        <div className="table-data">
                            <ul>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Global</b> availability
</li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>40GbE</b> Connectivity


                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                 <b>Enterprise</b> SSDs </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>KVM</b> 
                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Instant</b> Setup


                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                               <b> 99.99%</b> Uptime SLA

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>UK</b> Phone Support


                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button type='button' onClick={includeVat} className=' tax'>{vat ?<span>See prices Exc. vat</span> : <span>See Prices Inc.Vat</span>}<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </section>
   
   {/* hosting special */}

   <section className="hosting-special">
    <div className="container">
        <div className="row">
            <div className="col">
            <div className="table-title">
                    <h2>What makes Certa Hosting special?</h2>
                    </div>
            </div>

        </div>
        <div className="row">
            <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={m1} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Fully managed & monitored</h4>
                        <p>Your website is monitored day and night by our tech team to protect and optimise its performance. That security is taken care of so you can concentrate on running your online business services.
</p>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={m2} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>30-day money-back guarantee</h4>
                        <p>We're so sure you'll love working with us, we offer a full refund if you're not completely satisfied with our <Link to="/web-hosting" clasName="links">cheap web hosting plans.</Link> You've got nothing to lose by giving us a try.


</p>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={m3} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Live 24/7 support
</h4>
                        <p>We're here to help. Call us, email us, chat with us online or connect on social media. We're here to help your business, keeping you online day and night from right here in the UK.



</p>
                    </div>
                </div>
                
            </div>
             <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={m4} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Ultra-fast hosting</h4>
                        <p>No more slow page loading. Our hosting plans are built on the latest server technology in a state-of-the-art UK data centre for speed, quality and peace of mind utilising the latest version <Link to="/cpanel-hosting" className='links'>cPanel services.</Link>




</p>
                    </div>
                </div>
                
            </div> 
         <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={m5} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Award-winning 5 star service</h4>
                        <p>Our customers have rated us five star on Trustpilot, Serchen, and Reviews. Try us out today to find out why so many businesses trust us to look after their website.

</p>
                    </div>
                </div>
                
            </div>  
            
        <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={m6} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Super-fast SSD</h4>
                        <p>offers the fastest possible page loading time Certa's unlimited hosting with all-SSD storage built on three separate layers to ensure there's no single point of failure.


</p>
                    </div>
                </div>
                
            </div>
        
        </div>
    </div>
   </section>
      
      {/* comment section */}
      <section className="comment-section" style={{background: `url(${extrBg})`,}} >
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="comment-title">
                        <h2>Rock Solid Stable hosting from the UK's most trusted web host</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <div className="rating-img">
                        <img src={ratingImage} alt="img" />
                        <img src={ratingImage2} alt="img" />
                        <h4>“Excellent uptime, <br />
                        service and support”</h4>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <h4>Highly recommended!</h4>
                        <p>I have signed up for a shared hosting plan account with Certa. Their servers are fast, Cpanel is easy-to-use and support is just professional. Highly recommended to everyone who needs a fast, secure and reliable website host provider..

</p>
<span>David Geresdi
</span>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <h4>Awesome service, nothing is too much trouble.</h4>
                        <p>Would recommend for any business looking for a reliable hosting solution. The control panel is so easy to use and if, for any reason you can't do what you want on there, the help desk guys are easy to reach and really helpful. Nothing was too much trouble for them.

</p>
<span>CLR
</span>
                    </div>
                </div>
            </div>
        </div>
      </section>


        <Tabs></Tabs>                    


      {/* service  */}

      <section className="service-simple">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="service-simple">
                        <div className="d-flex align-item-center py-3 mb-3">
                        <div className="simple-icon">
                            <img src={webmail} alt="img" />
                        </div>
                        <div className="simple-data">
                            <h3>Unlimited uk hosting</h3>
                            <p>Start from <strong>£ 2.99</strong></p>
                        </div>
                        </div>
                        <p>High-performance cheap web host plans from the certahosting.co.uk. From small personal projects to large-scale solutions we have a package for you. With better architecture & UK support, Certa Cloud is equipped to deal with the most demanding <Link to="/web-hosting">unlimited UK web hosting needs.</Link>

</p>
                    <Link to="/web-hosting">Find Out More <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="service-simple">
                        <div className="d-flex align-item-center py-3 mb-3">
                        <div className="simple-icon">
                            <img src={webmail2} alt="img" />
                        </div>
                        <div className="simple-data">
                            <h3>Business-class email</h3>
                            <p>Start from <strong>£ 4.99</strong></p>
                        </div>
                        </div>
                        <p>You manage your business and we'll manage your email. Certa delivers affordable, business-class solutions, along with premium spam and antivirus protection and support.


</p>
                    <Link to="#">Find Out More <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* qustion answer section */}

        <section className="question_ans"  style={{background: `url(${qustion})`,}} >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="qustion-data">
                            <h4>Have more questions? <br />
Talk to our experts…</h4>
<p>Our expert team is always on hand to help answer your questions, get you started, and grow your presence online. You can call, chat or email us any time!

</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
