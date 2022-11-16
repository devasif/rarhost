import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from "../images/bannerbg.webp";
import webhost from "../images/01/webhosting.webp"
import webRock from "../images/01/webrock.webp"
import { Tooltip } from '@mui/material';
import host1 from "../images/01/host1.webp"
import host2 from "../images/01/host2.webp"
import host3 from "../images/01/host3.webp"
import { useState } from 'react';
import m1 from "../images/01/m1.webp"
import m2 from "../images/01/m2.webp"
import m3 from "../images/01/m3.webp"
import m4 from "../images/01/m4.webp"
import m5 from "../images/01/m5.webp"
import m6 from "../images/01/m6.webp"
import tabs1 from "../images/01/tabs1.webp"
import tabsBg from  "../images/01/tabsbg.jpg"
import hostPanel from "../images/01/hostpanel.jpg"
import what1 from "../images/01/what1.webp"
import what2 from "../images/01/what2.webp"
import what3 from "../images/01/what3.webp"
import what4 from "../images/01/what4.webp"
import what5 from "../images/01/what5.webp"
import what6 from "../images/01/what6.webp"
import what7 from "../images/01/what7.webp"
import what8 from "../images/01/what8.webp"
import what9 from "../images/01/what9.webp"
import whatBg from "../images/01/webbg.jpg"
import sub1 from "../images/01/sub1.png"
import sub2 from "../images/01/sub2.png"
import sub3 from "../images/01/sub3.png"
import border1 from "../images/01/border1.png"
import border2 from "../images/01/border2.webp"
import web1 from "../images/01/web1.webp"
import web2 from "../images/01/web2.png"
import web3 from "../images/01/web3.webp"
import web4 from "../images/01/web4.webp"
import web5 from "../images/01/web5.png"
import web6 from "../images/01/web6.webp"
import logo from "../images/rarhost.png"
import cp from "../images/01/cpanel.webp"
import grid1 from "../images/01/grid1.webp"
import grid2 from "../images/01/grid2.webp"
import grid3 from "../images/01/grid3.webp"
import grid4 from "../images/01/grid4.png"
import grid5 from "../images/01/grid5.png"
import grid6 from "../images/01/grid6.webp"
import grid7 from "../images/01/grid7.webp"
import grid8 from "../images/01/grid8.png"
import qustion from "../images/qustion.jpg"
import { SliderReview } from '../components/SliderReview';
import cpanel2 from "../images/02/icon1.jpg"
import card1 from "../images/02/card1.webp"
import card2 from "../images/02/card2.webp"
import card3 from "../images/02/card3.webp"
import card4 from "../images/02/card4.webp"

export const CpanelHosting = () => 
    {const [vat,setVat] = useState(false);
    const [show,setShow] = useState(false);


    const showMore =()=>{
        setShow(!show);
        
    }
   
    
  return (
    <>
    <div className="home-content" style={{background: `url(${bgImage})`,}}>
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    <div className="home-left-content">
                        <h2> Cpanel</h2>
                        <h3> Web Hosting</h3>
                        <p className='py-2'>Super-fast, secure and feature-rich UK-based cPanel cloud hosted solutions.



</p>
                    </div>
                    <div className="content-box">
                        <div className="box pr-2">
                            <li><span><i class="fa-regular fa-circle-check"></i></span><b>Lightning Fast</b>  Cloud Platform


</li>
                            <li><span><i class="fa-regular fa-circle-check"></i></span><b>100% </b>NVMe SSD storage

</li>
                            <li><span><i class="fa-regular fa-circle-check"></i></span><b>Free</b>Daily Back ups

</li>
                           
                           
                        </div>
                        <div className="box">
                        <li><span><i class="fa-regular fa-circle-check"></i></span><b>Free</b> Unlimited SSL's

</li>                    <li><span><i class="fa-regular fa-circle-check"></i></span><b>Award-winning</b> 5 star service

</li>
                   <li><span><i class="fa-regular fa-circle-check"></i></span><b>30-day </b>money-back guarantee

</li>
                        </div>
                        
                    </div>
                    <Link to="#" className=" links my-btn">get started now</Link>

                </div>
                <div className="col-xl-5">
                   <div className="home-img">
                    <img src={webhost} alt="img" />
                   </div>
                </div>
            </div>
        </div>
    </div>


{/* web hosting service  price*/}

<section className="hos-pricing-service exbgs">
    <div className="container">
        <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="table-full py-3">
                              <div className="table-info">
                        <h2><b>Unlimited</b> cPanel Hosting
 </h2>
                            <img src={host2} alt="server" className="b-block" />
                            <br />
                            <span>From </span>
                            <h3>$4.49</h3>
                            <span>Pay Monthly</span> 
                            
                           
                        </div>
                        
                        <div className="table-data">
                            <ul>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited</b>  Websites</li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited</b> NVMe SSD Web Space


                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited</b> Bandwidth

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited </b> Email Accounts
                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited </b>MySQL Databases

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>100+ </b>One-Click Installs </li>

                                 <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Malware & Virus  </b>Scanning </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Free  </b>Unlimited SSL Certificates </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Free  </b> Hourly Backups </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Free  </b> Web Site Builder </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Standard   </b> LVE Resources </li>
                                <li className='text-left pt-3'>LVE Limits: 2 CPU, 2GB RAM & 25 EP
</li>
                            </ul>
                        </div>
                        <div className="pay-option ">
                            <div className="pay-option-head">
                                <h3>Payment Options</h3>
                            </div>
                            <div className="pay brp">
                                <div className="pay-text">
                                    <h3>Pay Monthly: $4.49</h3>
                                    <p>Renewal Price $4.49 per month.</p>
                                </div>
                                <div className="pay-btn">
                                    <a href='#' className="pay-now">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            <div className="pay">
                                <div className="pay-text">
                                    <h3>Pay Yearly: $49.39</h3>
                                    <p className='freemonth'>1 Months FREE! –</p>
                                </div>
                                <div className="pay-btn">
                                    <a href='#' className="pay-now">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="table-full py-3">
                              <div className="table-info">
                        <h2><b>Premium</b> + cPanel Hosting

 </h2>
                            <img src={host3} alt="server" className="b-block" />
                            <br />
                            <span>From </span>
                            <h3>$7.99</h3>
                            <span>Pay Monthly</span> 
                            
                           
                        </div>
                        <a onClick={showMore} class="btn btn-link stretched-link text-reset collapsed" data-toggle="collapse" href="#more">All Unlimited cPanel features { show ? "-" : "+"}</a>
                        <div className="table-data">
                            <div className={show ? "show-now" : "show-off"}>
                            <ul> 
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited</b>  Websites  with cPanel</li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited</b> NVMe SSD Web Space


                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited</b> Bandwidth

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited </b> Email Accounts
                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Unlimited </b>MySQL Databases

                                </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>200+ </b>One-Click Installs </li>

                                 <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Malware & Virus  </b>Scanning </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Free  </b>Unlimited SSL Certificates </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Free  </b> Hourly Backups </li>
                                <li><span><i className="fa-regular fa-circle-check"></i></span>
                                <b>Free  </b> Web Site Builder </li>
                                
                            </ul>
                            </div>
                            
                        </div>
                        <div className="table-card brp">
                            <div className="card-icon">
                                <img src={card1} alt="img" />
                            </div>
                            <div className="card-data">
                                <h3>Higher LVE Resources</h3>
                                <p>LVE Resources: 4 CPU, 4GB RAM & 100 EP</p>
                                <p>The Premium + cPanel package is 2 x more powerful with more LVE resources giving you faster hosting performance.

</p>
                            </div>
                        </div>
                        <div className="table-card brp">
                            <div className="card-icon">
                                <img src={card2} alt="img" />
                            </div>
                            <div className="card-data">
                                <h3>Hourly Backups</h3>
                                <p>Our Premium Hosting plan include hourly backups and a 90-day backup retention. Our backups are stored off-site with a 100% redundancy.

</p>
                            </div>
                        </div>
                        <div className="table-card brp">
                            <div className="card-icon">
                                <img src={card3} alt="img" />
                            </div>
                            <div className="card-data">
                                <h3>Advanced SSH Access</h3>
                                <p>SSH Access is available on our Premium + cPanel web hosting package, enabling better control over your account.

</p>
                            </div>
                        </div>
                        <div className="table-card ">
                            <div className="card-icon">
                                <img src={card4} alt="img" />
                            </div>
                            <div className="card-data">
                                <h3>Reduced Noise</h3>
                                <p>The Premium + cPanel accounts are on cloud servers with a reduced amount of users.
</p>
                            </div>
                        </div>

                        <div className="pay-option ">
                            <div className="pay-option-head">
                                <h3>Payment Options</h3>
                            </div>
                            <div className="pay brp">
                                <div className="pay-text">
                                    <h3>Pay Monthly: $7.99</h3>
                                    <p>Renewal Price $7.99 per month.</p>
                                </div>
                                <div className="pay-btn">
                                    <a href='#' className="pay-now">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            <div className="pay">
                                <div className="pay-text">
                                    <h3>Pay Yearly: $87.89</h3>
                                    <p className='freemonth'>1 Months FREE! –</p>
                                </div>
                                <div className="pay-btn">
                                    <a href='#' className="pay-now">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
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
                    <h2>cPanel - Ultra-reliable and lightning-fast</h2>
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
                        <h4>Daily off-site backups

</h4>
                        <p>Complete peace of mind delivered with daily backups of files and databases, all securely saved and stored in our off-site datacentres. Fast recovery available.


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
                        <h4>PHP7, LiteSpeed & cPanel

</h4>
                        <p>Included as standard; cPanel, the industry’s most  <Link to="/web-hosting">trusted unlimited hosting</Link>   service with cPanel control panel. The ability to go back to PHP4.4 and LiteSpeed technology to power your web site. 


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
                        <h4>Ultrafast UK cPanel web hosting</h4>
                        <p>All Certa shared web hosting accounts come with the industry leading cPanel web hosting control panel “cPanel”. This gives you the ability to administrate your UK web hosting account with ease. Find out more about what cPanel is here.

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
                        <h4>Fully managed & monitored 24/7​</h4>
                        <p>Security updates, management, monitoring and backups are all managed and maintained by a Certa expert, leaving you to focus on your business.
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
                        <h4>NVMe SSD storage layers</h4>
                        <p>Built on SolidFire platform, <Link to="/cloud-vps-hosting">our 100% NVMe SSD hosting UK.</Link> Three separate layers ensure there is no single point of failure and data is secure and protected.
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
                        <h4>30-day money-back guarantee
</h4>
                        <p>If you’re not completely satisfied with our best Uk web hosting service, we guarantee you’ll receive a full refund within 30 days of signing up. No questions asked.
</p>
                    </div>
                </div>
                
            </div>
        
        </div>
    </div>
   </section>

 {/* 
  review section
 */}
    <SliderReview/>

  {/* tabs */}
  <section className="tabs-area" style={{background: `url(${tabsBg})`}} >
      <div className="container">
        <div className="row">
          <div className="col">
          <div class="d-flex align-items-start">
  <div class="nav tabs flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">cPanel web hosting</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Unlimited email accounts</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Packed with features</button>
    
   
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
      <div className="tabs-content">
          <div className="tabs-head d-block">
            <div className="tabs-img">
              <img src={cpanel2} alt="img" />
            </div>
            <div className="tabs-data mt-2">
                <div className="web-host-tab">
                <h6>The power behind cPanel</h6>
<p>The cPanel interface allows you to do a multitude of things to manage your sites, intranets, and keep your online properties running smoothly.

</p>
                </div>
                <div className="web-host-tab">
                <h6>Lightning-fast performance

</h6>
<p>Optimised LiteSpeed for unlimited web hosting, powered by our UK data centre and monitored 24/7 for the very best performance. Our unlimited web host service gets your website online in a couple of minutes.

</p>
                </div>
                <div className="web-host-tab">
                <h6>Ultra-fast load times
</h6>
<p>We only use the latest and greatest hardware, housed in our purpose-built UK data centres.

</p>
                </div>
            </div>
          </div>
       
      </div>
    </div>
    <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">

    <div className="tabs-content">
          <div className="tabs-head d-block">
            <div className="tabs-img">
              <img src={tabs1} alt="img" />
            </div>
            <div className="web-host-tab">
                <h6>Create emails with ease

</h6>
<p>Every web hosting package includes free email accounts. Certa hosting uses the latest tech to ensure that email is delivered safely, and the email you receive is spam-free.
</p>
                </div>

                <div className="web-host-tab">
                <h6>Spam-free, at no extra cost
</h6>
<p>All <Link to="/premium-email-hosting">Rar email</Link> is filtered using the latest technology in email security. We not only filter all mail inbound we also filter out bound, keeping your mail delivering to the inbox and not the junk folder.


</p>
                </div>
                 <div className="web-host-tab">
                <h6>Collect your email anywhere


</h6>
<p>Get your email on any device. Anytime, anywhere using web apps or our free webmail facility.


</p>
                </div>


          </div>
      
      </div>
    </div>
    <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex="0">
    <div className="tabs-content">
          <div className="tabs-head d-block">
            <div className="tabs-img">
              <img src={tabs1} alt="img" />
            </div>
            <div className="web-host-tab">
                <h6>Launch databases
</h6>
<p>The power to design custom databases using MySQL Wizard, phpMyAdmin and various other tools.
</p>
                </div>
 <div className="web-host-tab">
                <h6>Backup, transfer & manage files
</h6>
<p>Securely backup and transfer all web files from within the cPanel interface or allow your customers to use the FTP controls.

</p>
 </div>
  <div className="web-host-tab">
                <h6>Manage domains
</h6>
<p>Complete power to manage networks of domains. Create aliases, add or remove subdomains, manage DNS zones and direct site visitors around any of your web properties.


</p>
 </div>

          </div>
          
      </div>
    </div>
    
  
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
     
    {/* what make section */}
    <section className="what-makes">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="what-title">
                        <h2>What makes Rar cPanel Hosting special?</h2>

                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what1} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Host Unlimited Domains</h4>
                                <p>We won’t limit the additional number of sites that you can host. Host multiple websites, domains names and <Link to="premium-email-hosting"> email accounts</Link> on the same account at no extra cost.

</p>
                            </div>
                        </div>
                    </div>
                    
              

                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what2} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>cPanel Control Panel</h4>
                                <p>Make things easier with cPanel. The world’s leading industry standard control panel at your finger tips.

</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what3} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Super-Fast SSD & LSAPI</h4>
                                <p>Lightning-fast and reliable performance thanks to our enterprise-grade cloud network powered by 100% SSD SAN storage.



</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what4} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Free LetsEncrypt SSL Certificates</h4>
                                <p>Protect your data and keep your customers safe with Free unlimited SSL certificates provided by LetsEncrypt

</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what5} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Free Website Builder</h4>
                                <p>Get online in minutes using our drag and drop website builder. Over 300 industry ready-made mobile compatible templates.


</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what6} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Daily Backups with JetBackup</h4>
                                <p>Get daily back up’s as standard. Revert back to any point with in the last 30 days at the click of the mouse. Direct from our My Certa control panel.

</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what7} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Spam Protection​</h4>
                                <p>Rar Spam protection is a market-leading solution which helps filter junk emails and malware from your mailbox keeping you protected.


</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what8} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Fast Support</h4>
                                <p>Years of experience in the hosting world tells us that our customers expect support when they need it


</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what9} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>100% Network Uptime</h4>
                                <p>Stay online thanks to our network rich, redundant load balanced, fail over cloud platform.
</p>
                            </div>
                        </div>
                    </div>
                


            </div>
            </div>
        </div>
    </section>
    {/* sub web section */}

    <section className="sub-web" style={{background: `url(${whatBg})`,}}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="sub-title">
                        <h3>Get a your website online in minutes</h3>
                        <p>Quickly and Easily</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="sub-box">
                        <div className="sub-icon">
                            <span><img src={sub1} alt="sub img" /></span>
                        </div>
                        <div className="sub-data">
                            <h4>STEP <span>01</span></h4>
                            <h1>Choose your template</h1>
                            <p>Choose from a huge selection of mobile compatible templates, all modern and easy to customise

</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="sub-box">
                        <div className="sub-icon">
                            <span><img src={sub2} alt="sub img" /></span>
                        </div>
                        <span className="atach-border">
                            <img src={border1} alt="img" />
                        </span>
                        <div className="sub-data">
                            <h4>STEP <span>02</span></h4>
                            <h1>Drag & Drop</h1>
                            <p>Your website content is easily arranged with cutting edge drag-and-drop functions

</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="sub-box">
                        <div className="sub-icon">
                            <span><img src={sub3} alt="sub img" /></span>
                        </div>
                        <span className="atach-border-2">
                            <img src={border2} alt="img" />
                        </span>
                        <div className="sub-data">
                            <h4>STEP <span>03</span></h4>
                            <h1>Go live</h1>
                            <p>Easily publish your site and get on line with a click of a button

</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* web box */}
    <section className="web-box">
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={web1} alt="web" />
                        <h3>File Manager</h3>
                        <p>File Manager gives you useful options to quickly manage your files within the interface. It's easy to use and it removes the hassles of using FTP.

</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={web2} alt="web" />
                        <h3>Email Management</h3>
                        <p>Every web hosting package includes a number of free <a href="#">email</a> accounts. Certa email makes use of the latest technologies ensuring that all email is delivered safely, and the email that you receive is spam-free.


</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={web3} alt="web" />
                        <h3>Domains & DNS</h3>
                        <p>All DNS records can be easily controlled from your Mycerta Hosting control panel: from A records to CNAME, TXT and SRV. Our name servers use Google’s reliable global network to deliver quick and reliable responses.
</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={web4} alt="web" />
                        <h3>Application Installer</h3>
                        <p>Choose from 80+ popular free apps including <a href="#">WordPress</a>, Joomla!, Drupal, Magento and OpenCart. Install them in seconds!


</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={web5} alt="web" />
                        <h3>Free Global CDN</h3>
                        <p>The Certa Web Host Content Delivery Network will cache your website at different locations around the world, so that it loads faster wherever your users are. It’s free, and there are no bandwidth limits.

</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={web6} alt="web" />
                        <h3>Super-fast edge cache engine</h3>
                        <p>CertaCache, which uses the same tech as our CDN is configured to speed up page loading for users. Configured to be used straight out of the box, advanced users have the ability to manage the cached content themselves.

</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

 

 

    {/* accordition */}

    <section className="accordior">
        <div className="container">
            <div className="row">
                <div className="col-">
                    <div className="tt-s">
                        <h3>Frequently Asked Questions</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Which PHP versions do you support?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      We support all versions of PHP from 5.3 upto 8.. You can select the version on a per-account basis via the control panel.


      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Can you migrate my sites for me?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      We’ll migrate your first 20 cPanel websites for free. Once you’ve signed-up, give our Support Team the details of your current web hosting and we’ll get to work, quickly migrating your websites and emails from your previous host.


      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Is overselling allowed?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Yes! You can create packages and accounts that exceed your overall limits.

</p>
      </div>
    </div>
  </div>
</div>


                </div>
                <div className="col-xl-6">
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne4">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4">
      What are the contract lengths of your service?
      </button>
    </h2>
    <div id="collapseOne4" class="accordion-collapse collapse " aria-labelledby="headingOne4" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Everything we offer is on a simple, no nonsense month-to-month basis. You can cancel your account with us at any time without a penalty.

</p>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
      Are Back ups included?
      </button>
    </h2>
    <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, we’ve got you covered. Daily automated backups come free with all our paid web hosting packages. <br />

You can also create backups whenever you like using the simple backup tool in the MyCerta control panel. <br />

You can restore from any point in the last 30 days.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
      What are the email sending limits?
      </button>
    </h2>
    <div id="collapseThree3" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The following limits apply to all messages sent via authenticated SMTP.

This will primarily be used for email sent via a mail client, but can also include mail sent via your website if configured to send via SMTP. We impose a limit of 8,000 messages per e-mail address per 24 hours. <br />

The following limits also apply: <br />

No more than 10,000 recipients per day. <br />

No more than 2,000 unique recipients per day. <br />

A single email may not be sent to more than 100 individual addresses. <br />

As an example, if you were to send 100 emails to 5 different e-mail addresses within a 24 hour period. We would count 100 messages, 500 total recipients and 5 unique recipients.

      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    </section>

    {/* feacure images */}
    <section className="feature-img">
        <div className="container">
            <div className="row">  
            <div className="col">
            <div className="tt-s text-center">
                        <h3>One-Click Installs</h3>
                        <p>Choose from hundreds of application that can be installed quickly with one click of the mouse

</p>
                    </div>
                    <div className="feature-grid">
                        <img src={grid1} alt="img" />
                        <img src={grid2} alt="img" />
                        <img src={grid3} alt="img" />
                        <img src={grid4} alt="img" />
                        <img src={grid5} alt="img" />
                        <img src={grid6} alt="img" />
                        <img src={grid7} alt="img" />
                        <img src={grid8} alt="img" />
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
        {/* pagination*/}
        <section className="pagination-sec">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="page"> <Link className="links" to="/">Home</Link>   » Panel Web Hosting</div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}
