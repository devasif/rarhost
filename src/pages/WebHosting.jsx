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

export const WebHosting = () => {

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
                        <h2>Super Fast</h2>
                        <h3>UK Web Hosting</h3>
                        <p className='py-2'>Experience Continuous Superior Performance <br />with Unlimited Data Hosting


</p>
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
                    <img src={webhost} alt="img" />
                   </div>
                </div>
            </div>
        </div>
    </div>


{/* web hosting service */}

<section className="hosting-s" style={{background: `url(${webRock})`}}>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="host-title">
                    <h2><b>Reliable & FastWeb</b> Hosting Service</h2>
                </div>
                <div className="host-extra">
                    <div className="extra-data">
                        <h4>UK-based data centres</h4>
                        <p>Ultrafast UK Web hosting</p>
                    </div>
                    <div className='call-now'>
                        <a href="callto:0493043"><i class="fa-solid fa-phone-volume"></i> 04930493049</a>
                    </div>
                </div>
            </div>
        </div>
       
        
    </div>
</section>

{/* host price */}

<section className="host-pricing py-5">
    <div className="container">
    <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="host-pricing">
                    <div className="host-head">
                        <h5>Rar Lite</h5>
                        <img src={host1} alt="img" />
                        <p>Only</p>
                        <h3>£2.99</h3>
                        <p>Per Month</p>
                        <span>(£3.59 including VAT)</span>
                        <Link className=" table-btn" to="/">Buy Now</Link>
                       
                    </div> 
                    <div className="all-data">
                    <div className="table-data some-added">
                            <ul> 
                            <Tooltip title="Website files are stored on hybrid SAS/SSD storage clusters. We already have many hundreds of terabytes of storage deployed – and this can scale instantly as our client base grows">   

<span>   <i className="fa-regular fa-circle-check"></i> Unlimited SSD Disk Space

</span>
</Tooltip>
                                <Tooltip title="The number of websites you can host on your account. This quota can be allocated to domains hosted with Certa Hosting or with other domain registrars.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> 1 x Unique Websites
</span>
                            </Tooltip>
                            <Tooltip title="The number of personalised email addresses you can create with your Domain Name. Each mailbox is limited to 10GB per account. ">   

                            <span>   <i className="fa-regular fa-circle-check"></i> 10 x Mail Accounts
 </span>
                            </Tooltip>
                            <Tooltip title="1Gb MySQL database with PHP MyAdmin  ">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  2 × MySQL Databases
</span>
                    </Tooltip>

                    <Tooltip title="Your monthly bandwidth allocation determines how much visitor activity hosted websites can receive.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Unlimited Bandwidth
</span>
                    </Tooltip>
                   
                    <Tooltip title="Free daily backups of your website and store them off-server for up to 30 days. When needed you can simply restore a backup from within your control panel.">   

<span>   <i className="fa-regular fa-circle-check"></i> Weekly Back Ups
 </span>
</Tooltip>
                     <Tooltip title="">   

                    <span>   <i className="fa-regular fa-circle-check"></i> <Link to="#">Control Panel Demo</Link> </span>
                    </Tooltip>
                    
                   
                    
                            </ul>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="">   

                            <span>  <i class="fa-solid fa-xmark"></i> Free Domain

</span>
                            </Tooltip>
                            <Tooltip title="The hosting service will be instantly set up on completion of payment. The service will be ready for use within minutes of receiving your welcome email.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Instant Setup


 </span>
                            </Tooltip>
                            <Tooltip title="Your website is spread across hundreds of our cloud servers. So you’re guaranteed reliable stability and performance.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> 99.9% Uptime Guarantee


</span>
                    </Tooltip>

                    <Tooltip title="Chat with our support team, 24/7, 365 days a year. By phone or email & chat.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  UK Phone Support


</span>
                    </Tooltip>
                   
                    <Tooltip title="All our Cloud Hosting plans come with a 30-day money back guarantee. If for any reason you decide not to continue with your plan, we'll offer you a full refund – no questions asked. Excludes VPS or cloud servers.">   

<span>   <i className="fa-regular fa-circle-check"></i> 30 Day Money Back


 </span>
</Tooltip>
                    
                    
                   
                    
                            </ul>
                        </div>
                      
                {/* 
                show more
                
                */}

                <div className={show ? "show-now" : "show-off"}>
                      {/* table-title */}
                      <div className="table-pricing">
                            <h3>Email Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                
                            <Tooltip title="Access your email through a webmail client anywhere that has an internet connection.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Professional Webmail


 </span>
                            </Tooltip>
                            <Tooltip title="Quickly configure a customised auto-responder: set a unique subject, main body of text and a time period you'd like it to run for.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Auto Responders


</span>
                    </Tooltip>

                    <Tooltip title="A mailing list is a collection of names and addresses used by an individual or an organization to send material to multiple recipients.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Mailing Lists

</span>
                    </Tooltip>
                   
                    <Tooltip title="Quickly create forwarders to automatically forward mail received at one address to one or multiple other recipients.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Email Forwarders

</span>
                    </Tooltip>
                      <Tooltip title="Create a centralised mailbox to capture all email sent to your Domain Name. So you don't lose emails, even if they're sent to the wrong mailbox.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Catch All Email

</span>
                    </Tooltip>
                    
                    <Tooltip title="Create unlimited domain aliases to point additional Domain Names to an existing website and hosting account.">   

<span>   <i className="fa-regular fa-circle-check"></i> Aliases

</span>
    </Tooltip>
    <Tooltip title="Whether you prefer to use POP3 or IMAP to retrieve your mail – we have you covered. All our mail services are fully POP3 and IMAP ready, both with and without SSL encryption.">   

<span>   <i className="fa-regular fa-circle-check"></i> Pop 3 / IMAP

</span>
    </Tooltip>
    <Tooltip title="Built-in spam filtering tools keep your inbox spam free. You can use our suggested spam settings, or set your own preferences, thresholds and actions.">   

<span>   <i className="fa-regular fa-circle-check"></i> Spam Protection

</span>
    </Tooltip>
    <Tooltip title="Built-in spam filtering tools keep your inbox spam free. You can use our suggested spam settings, or set your own preferences, thresholds and actions.">   

<span>   <i className="fa-regular fa-circle-check"></i> Virus Protection

</span>
    </Tooltip>
    <Tooltip title="We scan the hundreds of thousands of mailboxes used hourly on our Cloud Hosting platform and protect your emails from spam blacklisting. Using clever scanning methods – including watching for HELO changes or bulk mail.">   

<span>   <i className="fa-regular fa-circle-check"></i> SMTP Outbound Filter

</span>
    </Tooltip>
    <Tooltip title="You can take advantage of our cloud authenticated SMTP service. This would allow you to add the SMTP service to any device such as a PC, Laptop, Tablet or smart phone and all email will be scanned via our out bound email service, resulting in your domain name staying black list free.">   

<span>   <i className="fa-regular fa-circle-check"></i> Authenticated SMTP

</span>
    </Tooltip>
    <Tooltip title="Improve deliverability of emails by securely signing your outgoing emails.">   

<span>   <i className="fa-regular fa-circle-check"></i> DKIM Email Authentication

</span>
    </Tooltip>
    <Tooltip title="Add your mailboxes to Outlook in an instant, thanks to our autodiscovery service. Enter your name, email and password and let Outlook search for and populate your server settings in seconds: no need to remember any server hostnames!">   

<span>   <i className="fa-regular fa-circle-check"></i> Mailbox Autodiscover

</span>
    </Tooltip>
                   
                    
                            </ul>
                        </div>
                        {/* table-title */}
                        <div className="table-pricing">
                            <h3>Database Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Add new users We offer the latest MS SQL software, full daily backups and the ability to restore from .bak files if you've taken your own backups. Limited to 1 GBto existing databases, grant specific permissions to each user, change passwords – and more – using our intuitive MySQL User Manager tool.">   

                            <span>  <i class="fa-regular fa-circle-check"></i> 2 x MySQL Databases


</span>
                            </Tooltip>
                            <Tooltip title="Add new users to existing databases, grant specific permissions to each user, change passwords – and more – using our intuitive MySQL User Manager tool.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> PHP MyAdmin Interface



 </span>
                            </Tooltip>
                   
                    
                    
                   
                    
                            </ul>
                        </div>
                        <div className="table-pricing">
                            <h3>Back Up Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="">   

                            <span>  <i className="fa-regular fa-circle-check"></i>

                            Daily Snapshot Backups


</span>
                            </Tooltip>
                            <Tooltip title="">   

                            <span>  <i className="fa-regular fa-circle-check"></i>
                            Self Restore


</span>
                            </Tooltip>
                          
                    
                            </ul>
                        </div>

                        {/* Security Features*/}
                        <div className="table-pricing">
                            <h3>Security Features</h3>
                        </div> 
                      <div className="added-more-data">
                        <ul>
                            <li>    <i class="fa-regular fa-circle-check"></i> 1 Tbps+ DDoS Protection

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> FTP Security Lock

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Block visitors by IP

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Block visitors Country

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Web Application Firewall

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> File Permissions Checker

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Two-Factor - 2FA

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Password Manager

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Hotlink Protection

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Brute force login protection

</li>
                          
                        </ul>
                      </div>

                      {/* Web Hosting Software
 */}    
                        <div className="table-pricing">
                            <h3>Web Hosting Software</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i>  10 Versions of PHP

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Popular Modules

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  PHP Ioncube Loader

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Perl and Python

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  phpMyAdmin

</li>
                            </ul>
                        </div>

                        {/* Web Hosting Features
 */}
                        <div className="table-pricing">
                            <h3>Web Hosting Features
</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Website Builder

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Free Wildcard SSL Certs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Back up and Restore

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited Subdomains

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited FTP/SFTP

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Scheduled Tasks

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Online File Manager

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> SSH Access

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Google 2 FA

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Directory Indexing

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Error / Bandwidth Logs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Custom Errors

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Mapped Domains

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Sitemap Generator

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Free Migration

</li>
                            </ul>
                        </div>
                        {/* Auto Installers
 */}    
                     <div className="table-pricing">
                            <h3>Auto Installers</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Wordpress  </li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Joomla

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Zen Cart

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  OS Commerce

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Drupal  </li>
                            <li>    <i className="fa-regular fa-circle-check"></i> B2Evolution

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Advanced Pole  </li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Template Express

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>osTickets

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>dotProject   </li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  And Many More

</li>
                            </ul>
                            
                        </div>
                        {/* Our Promise
 */}                    
                      <div className="table-pricing">
                            <h3>Auto Installers</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> 30 Day Money Back

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cancel Anytime

</li>
                            </ul>
                        </div>

                </div>

                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="host-pricing">
                    <div className="host-head">
                        <h5>Rar Pro</h5>
                        <button className="most-popular">
                        Most Popular

                        </button>
                        <img src={host2} alt="img" />
                        <p>Only</p>
                        <h3>£4.99</h3>
                        <p>Per Month</p>
                        <span>(£5.99 including VAT)</span>
                        <Link className=" table-btn" to="/">Buy Now</Link>
                       
                    </div> 
                    <div className="all-data">
                    <div className="table-data some-added">
                            <ul> 
                            <Tooltip title="Website files are stored on hybrid SAS/SSD storage clusters. We already have many hundreds of terabytes of storage deployed – and this can scale instantly as our client base grows">   

<span>   <i className="fa-regular fa-circle-check"></i> Unlimited SSD Disk Space

</span>
</Tooltip>
                                <Tooltip title="The number of websites you can host on your account. This quota can be allocated to domains hosted with Certa Hosting or with other domain registrars.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> 10 x Unique Websites
</span>
                            </Tooltip>
                            <Tooltip title="The number of personalised email addresses you can create with your Domain Name. Each mailbox is limited to 10GB per account. ">   

                            <span>   <i className="fa-regular fa-circle-check"></i> 50 x Mail Accounts
 </span>
                            </Tooltip>
                            <Tooltip title="1Gb MySQL database with PHP MyAdmin  ">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  50 × MySQL Databases
</span>
                    </Tooltip>

                    <Tooltip title="Your monthly bandwidth allocation determines how much visitor activity hosted websites can receive.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Unlimited Bandwidth
</span>
                    </Tooltip>
                   
                    <Tooltip title="Free daily backups of your website and store them off-server for up to 30 days. When needed you can simply restore a backup from within your control panel.">   

<span>   <i className="fa-regular fa-circle-check"></i> Daily Back Ups

 </span>
</Tooltip>
                     <Tooltip title="">   

                    <span>   <i className="fa-regular fa-circle-check"></i> <Link to="#">Control Panel Demo</Link> </span>
                    </Tooltip>
                    
                   
                    
                            </ul>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="">   

                            <span>  <i class="fa-solid fa-xmark"></i> Free Domain

</span>
                            </Tooltip>
                            <Tooltip title="The hosting service will be instantly set up on completion of payment. The service will be ready for use within minutes of receiving your welcome email.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Instant Setup


 </span>
                            </Tooltip>
                            <Tooltip title="Your website is spread across hundreds of our cloud servers. So you’re guaranteed reliable stability and performance.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> 99.9% Uptime Guarantee


</span>
                    </Tooltip>

                    <Tooltip title="Chat with our support team, 24/7, 365 days a year. By phone or email & chat.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  UK Phone Support


</span>
                    </Tooltip>
                   
                    <Tooltip title="All our Cloud Hosting plans come with a 30-day money back guarantee. If for any reason you decide not to continue with your plan, we'll offer you a full refund – no questions asked. Excludes VPS or cloud servers.">   

<span>   <i className="fa-regular fa-circle-check"></i> 30 Day Money Back


 </span>
</Tooltip>
                    
                    
                   
                    
                            </ul>
                        </div>
                      
                {/* 
                show more
                
                */}

                <div className={show ? "show-now" : "show-off"}>
                      {/* table-title */}
                      <div className="table-pricing">
                            <h3>Email Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                
                            <Tooltip title="Access your email through a webmail client anywhere that has an internet connection.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Professional Webmail


 </span>
                            </Tooltip>
                            <Tooltip title="Quickly configure a customised auto-responder: set a unique subject, main body of text and a time period you'd like it to run for.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Auto Responders


</span>
                    </Tooltip>

                    <Tooltip title="A mailing list is a collection of names and addresses used by an individual or an organization to send material to multiple recipients.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Mailing Lists

</span>
                    </Tooltip>
                   
                    <Tooltip title="Quickly create forwarders to automatically forward mail received at one address to one or multiple other recipients.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Email Forwarders

</span>
                    </Tooltip>
                      <Tooltip title="Create a centralised mailbox to capture all email sent to your Domain Name. So you don't lose emails, even if they're sent to the wrong mailbox.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Catch All Email

</span>
                    </Tooltip>
                    
                    <Tooltip title="Create unlimited domain aliases to point additional Domain Names to an existing website and hosting account.">   

<span>   <i className="fa-regular fa-circle-check"></i> Aliases

</span>
    </Tooltip>
    <Tooltip title="Whether you prefer to use POP3 or IMAP to retrieve your mail – we have you covered. All our mail services are fully POP3 and IMAP ready, both with and without SSL encryption.">   

<span>   <i className="fa-regular fa-circle-check"></i> Pop 3 / IMAP

</span>
    </Tooltip>
    <Tooltip title="Built-in spam filtering tools keep your inbox spam free. You can use our suggested spam settings, or set your own preferences, thresholds and actions.">   

<span>   <i className="fa-regular fa-circle-check"></i> Spam Protection

</span>
    </Tooltip>
    <Tooltip title="Built-in spam filtering tools keep your inbox spam free. You can use our suggested spam settings, or set your own preferences, thresholds and actions.">   

<span>   <i className="fa-regular fa-circle-check"></i> Virus Protection

</span>
    </Tooltip>
    <Tooltip title="We scan the hundreds of thousands of mailboxes used hourly on our Cloud Hosting platform and protect your emails from spam blacklisting. Using clever scanning methods – including watching for HELO changes or bulk mail.">   

<span>   <i className="fa-regular fa-circle-check"></i> SMTP Outbound Filter

</span>
    </Tooltip>
    <Tooltip title="You can take advantage of our cloud authenticated SMTP service. This would allow you to add the SMTP service to any device such as a PC, Laptop, Tablet or smart phone and all email will be scanned via our out bound email service, resulting in your domain name staying black list free.">   

<span>   <i className="fa-regular fa-circle-check"></i> Authenticated SMTP

</span>
    </Tooltip>
    <Tooltip title="Improve deliverability of emails by securely signing your outgoing emails.">   

<span>   <i className="fa-regular fa-circle-check"></i> DKIM Email Authentication

</span>
    </Tooltip>
    <Tooltip title="Add your mailboxes to Outlook in an instant, thanks to our autodiscovery service. Enter your name, email and password and let Outlook search for and populate your server settings in seconds: no need to remember any server hostnames!">   

<span>   <i className="fa-regular fa-circle-check"></i> Mailbox Autodiscover

</span>
    </Tooltip>
                   
                    
                            </ul>
                        </div>
                        {/* table-title */}
                        <div className="table-pricing">
                            <h3>Database Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Add new users We offer the latest MS SQL software, full daily backups and the ability to restore from .bak files if you've taken your own backups. Limited to 1 GBto existing databases, grant specific permissions to each user, change passwords – and more – using our intuitive MySQL User Manager tool.">   

                            <span>  <i class="fa-regular fa-circle-check"></i> 2 x MySQL Databases


</span>
                            </Tooltip>
                            <Tooltip title="Add new users to existing databases, grant specific permissions to each user, change passwords – and more – using our intuitive MySQL User Manager tool.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> PHP MyAdmin Interface



 </span>
                            </Tooltip>
                   
                    
                    
                   
                    
                            </ul>
                        </div>
                        <div className="table-pricing">
                            <h3>Back Up Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="">   

                            <span>  <i className="fa-regular fa-circle-check"></i>

                            Daily Snapshot Backups


</span>
                            </Tooltip>
                            <Tooltip title="">   

                            <span>  <i className="fa-regular fa-circle-check"></i>
                            Self Restore


</span>
                            </Tooltip>
                          
                    
                            </ul>
                        </div>

                        {/* Security Features*/}
                        <div className="table-pricing">
                            <h3>Security Features</h3>
                        </div> 
                      <div className="added-more-data">
                        <ul>
                            <li>    <i class="fa-regular fa-circle-check"></i> 1 Tbps+ DDoS Protection

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> FTP Security Lock

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Block visitors by IP

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Block visitors Country

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Web Application Firewall

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> File Permissions Checker

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Two-Factor - 2FA

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Password Manager

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Hotlink Protection

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Brute force login protection

</li>
                          
                        </ul>
                      </div>

                      {/* Web Hosting Software
 */}    
                        <div className="table-pricing">
                            <h3>Web Hosting Software</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i>  10 Versions of PHP

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Popular Modules

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  PHP Ioncube Loader

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Perl and Python

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  phpMyAdmin

</li>
                            </ul>
                        </div>

                        {/* Web Hosting Features
 */}
                        <div className="table-pricing">
                            <h3>Web Hosting Features
</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Website Builder

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Free Wildcard SSL Certs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Back up and Restore

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited Subdomains

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited FTP/SFTP

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Scheduled Tasks

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Online File Manager

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> SSH Access

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Google 2 FA

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Directory Indexing

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Error / Bandwidth Logs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Custom Errors

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Mapped Domains

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Sitemap Generator

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Free Migration

</li>
                            </ul>
                        </div>
                        {/* Auto Installers
 */}    
                     <div className="table-pricing">
                            <h3>Auto Installers</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Wordpress  </li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Joomla

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Zen Cart

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  OS Commerce

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Drupal  </li>
                            <li>    <i className="fa-regular fa-circle-check"></i> B2Evolution

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Advanced Pole  </li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Template Express

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>osTickets

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>dotProject   </li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  And Many More

</li>
                            </ul>
                            
                        </div>
                        {/* Our Promise
 */}                    
                      <div className="table-pricing">
                            <h3>Auto Installers</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> 30 Day Money Back

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cancel Anytime

</li>
                            </ul>
                        </div>

                </div>

                    </div>
                </div>
            </div>
            {/* third column */}
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="host-pricing">
                    <div className="host-head">
                        <h5>Rar Unlimited</h5>
                        <img src={host3} alt="img" />
                        <p>Only</p>
                        <h3>£9.99</h3>
                        <p>Per Month</p>
                        <span>(£11.99 including VAT)</span>
                        <Link className=" table-btn" to="/">Buy Now</Link>
                       
                    </div> 
                    <div className="all-data">
                    <div className="table-data some-added">
                            <ul> 
                            <Tooltip title="Website files are stored on hybrid SAS/SSD storage clusters. We already have many hundreds of terabytes of storage deployed – and this can scale instantly as our client base grows">   

<span>   <i className="fa-regular fa-circle-check"></i> Unlimited SSD Disk Space

</span>
</Tooltip>
                                <Tooltip title="The number of websites you can host on your account. This quota can be allocated to domains hosted with Certa Hosting or with other domain registrars.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Unlimited Unique Websites

</span>
                            </Tooltip>
                            <Tooltip title="The number of personalised email addresses you can create with your Domain Name. Each mailbox is limited to 10GB per account. ">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Unlimited Mail Accounts

 </span>
                            </Tooltip>
                            <Tooltip title="1Gb MySQL database with PHP MyAdmin  ">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Unlimited × MySQL Databases

</span>
                    </Tooltip>

                    <Tooltip title="Your monthly bandwidth allocation determines how much visitor activity hosted websites can receive.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Unlimited Bandwidth
</span>
                    </Tooltip>
                   
                    <Tooltip title="Free daily backups of your website and store them off-server for up to 30 days. When needed you can simply restore a backup from within your control panel.">   

<span>   <i className="fa-regular fa-circle-check"></i> Daily Back Ups

 </span>
</Tooltip>
                     <Tooltip title="">   

                    <span>   <i className="fa-regular fa-circle-check"></i> <Link to="#">Control Panel Demo</Link> </span>
                    </Tooltip>
                    
                   
                    
                            </ul>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="">   

                            <span>  <i class="fa-solid fa-xmark"></i> Free Domain

</span>
                            </Tooltip>
                            <Tooltip title="The hosting service will be instantly set up on completion of payment. The service will be ready for use within minutes of receiving your welcome email.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Instant Setup


 </span>
                            </Tooltip>
                            <Tooltip title="Your website is spread across hundreds of our cloud servers. So you’re guaranteed reliable stability and performance.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> 99.9% Uptime Guarantee


</span>
                    </Tooltip>

                    <Tooltip title="Chat with our support team, 24/7, 365 days a year. By phone or email & chat.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  UK Phone Support


</span>
                    </Tooltip>
                   
                    <Tooltip title="All our Cloud Hosting plans come with a 30-day money back guarantee. If for any reason you decide not to continue with your plan, we'll offer you a full refund – no questions asked. Excludes VPS or cloud servers.">   

<span>   <i className="fa-regular fa-circle-check"></i> 30 Day Money Back


 </span>
</Tooltip>
                    
                    
                   
                    
                            </ul>
                        </div>
                      
                {/* 
                show more
                
                */}

                <div className={show ? "show-now" : "show-off"}>
                      {/* table-title */}
                      <div className="table-pricing">
                            <h3>Email Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                
                            <Tooltip title="Access your email through a webmail client anywhere that has an internet connection.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Professional Webmail


 </span>
                            </Tooltip>
                            <Tooltip title="Quickly configure a customised auto-responder: set a unique subject, main body of text and a time period you'd like it to run for.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Auto Responders


</span>
                    </Tooltip>

                    <Tooltip title="A mailing list is a collection of names and addresses used by an individual or an organization to send material to multiple recipients.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Mailing Lists

</span>
                    </Tooltip>
                   
                    <Tooltip title="Quickly create forwarders to automatically forward mail received at one address to one or multiple other recipients.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Email Forwarders

</span>
                    </Tooltip>
                      <Tooltip title="Create a centralised mailbox to capture all email sent to your Domain Name. So you don't lose emails, even if they're sent to the wrong mailbox.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Catch All Email

</span>
                    </Tooltip>
                    
                    <Tooltip title="Create unlimited domain aliases to point additional Domain Names to an existing website and hosting account.">   

<span>   <i className="fa-regular fa-circle-check"></i> Aliases

</span>
    </Tooltip>
    <Tooltip title="Whether you prefer to use POP3 or IMAP to retrieve your mail – we have you covered. All our mail services are fully POP3 and IMAP ready, both with and without SSL encryption.">   

<span>   <i className="fa-regular fa-circle-check"></i> Pop 3 / IMAP

</span>
    </Tooltip>
    <Tooltip title="Built-in spam filtering tools keep your inbox spam free. You can use our suggested spam settings, or set your own preferences, thresholds and actions.">   

<span>   <i className="fa-regular fa-circle-check"></i> Spam Protection

</span>
    </Tooltip>
    <Tooltip title="Built-in spam filtering tools keep your inbox spam free. You can use our suggested spam settings, or set your own preferences, thresholds and actions.">   

<span>   <i className="fa-regular fa-circle-check"></i> Virus Protection

</span>
    </Tooltip>
    <Tooltip title="We scan the hundreds of thousands of mailboxes used hourly on our Cloud Hosting platform and protect your emails from spam blacklisting. Using clever scanning methods – including watching for HELO changes or bulk mail.">   

<span>   <i className="fa-regular fa-circle-check"></i> SMTP Outbound Filter

</span>
    </Tooltip>
    <Tooltip title="You can take advantage of our cloud authenticated SMTP service. This would allow you to add the SMTP service to any device such as a PC, Laptop, Tablet or smart phone and all email will be scanned via our out bound email service, resulting in your domain name staying black list free.">   

<span>   <i className="fa-regular fa-circle-check"></i> Authenticated SMTP

</span>
    </Tooltip>
    <Tooltip title="Improve deliverability of emails by securely signing your outgoing emails.">   

<span>   <i className="fa-regular fa-circle-check"></i> DKIM Email Authentication

</span>
    </Tooltip>
    <Tooltip title="Add your mailboxes to Outlook in an instant, thanks to our autodiscovery service. Enter your name, email and password and let Outlook search for and populate your server settings in seconds: no need to remember any server hostnames!">   

<span>   <i className="fa-regular fa-circle-check"></i> Mailbox Autodiscover

</span>
    </Tooltip>
                   
                    
                            </ul>
                        </div>
                        {/* table-title */}
                        <div className="table-pricing">
                            <h3>Database Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Add new users We offer the latest MS SQL software, full daily backups and the ability to restore from .bak files if you've taken your own backups. Limited to 1 GBto existing databases, grant specific permissions to each user, change passwords – and more – using our intuitive MySQL User Manager tool.">   

                            <span>  <i class="fa-regular fa-circle-check"></i> 2 x MySQL Databases


</span>
                            </Tooltip>
                            <Tooltip title="Add new users to existing databases, grant specific permissions to each user, change passwords – and more – using our intuitive MySQL User Manager tool.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> PHP MyAdmin Interface



 </span>
                            </Tooltip>
                   
                    
                    
                   
                    
                            </ul>
                        </div>
                        <div className="table-pricing">
                            <h3>Back Up Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="">   

                            <span>  <i className="fa-regular fa-circle-check"></i>

                            Daily Snapshot Backups


</span>
                            </Tooltip>
                            <Tooltip title="">   

                            <span>  <i className="fa-regular fa-circle-check"></i>
                            Self Restore


</span>
                            </Tooltip>
                          
                    
                            </ul>
                        </div>

                        {/* Security Features*/}
                        <div className="table-pricing">
                            <h3>Security Features</h3>
                        </div> 
                      <div className="added-more-data">
                        <ul>
                            <li>    <i class="fa-regular fa-circle-check"></i> 1 Tbps+ DDoS Protection

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> FTP Security Lock

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Block visitors by IP

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Block visitors Country

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Web Application Firewall

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> File Permissions Checker

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Two-Factor - 2FA

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Password Manager

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Hotlink Protection

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Brute force login protection

</li>
                          
                        </ul>
                      </div>

                      {/* Web Hosting Software
 */}    
                        <div className="table-pricing">
                            <h3>Web Hosting Software</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i>  10 Versions of PHP

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Popular Modules

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  PHP Ioncube Loader

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Perl and Python

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  phpMyAdmin

</li>
                            </ul>
                        </div>

                        {/* Web Hosting Features
 */}
                        <div className="table-pricing">
                            <h3>Web Hosting Features
</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Website Builder

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Free Wildcard SSL Certs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Back up and Restore

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited Subdomains

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited FTP/SFTP

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Scheduled Tasks

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Online File Manager

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> SSH Access

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Google 2 FA

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Directory Indexing

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Error / Bandwidth Logs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Custom Errors

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Mapped Domains

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Sitemap Generator

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Free Migration

</li>
                            </ul>
                        </div>
                        {/* Auto Installers
 */}    
                     <div className="table-pricing">
                            <h3>Auto Installers</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Joomla

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Zen Cart

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  OS Commerce

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Drupal  </li>
                            <li>    <i className="fa-regular fa-circle-check"></i> B2Evolution

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Advanced Pole  </li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Template Express

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>osTickets

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>dotProject   </li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  And Many More

</li>
                            </ul>
                            
                        </div>
                        {/* Our Promise
 */}                    
                      <div className="table-pricing">
                            <h3>Auto Installers</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> 30 Day Money Back

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cancel Anytime

</li>
                            </ul>
                        </div>

                </div>

                    </div>
                </div>
            </div>

        </div>
        <div className="row">
            <div className="col">
                <button onClick={showMore} className="full-btn">Full specs & features  { show? <i className="fa-solid fa-arrow-up"></i> :<i className="fa-solid fa-arrow-down"></i>}</button>
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
                    <h2>What makes Certa Web Hosting different?</h2>
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
                        <h4>Autoscaling servers

</h4>
                        <p>All our web hosting services use Certa's proprietary autoscaling technology. Bandwidth, memory and processing power is scaled up or down instantly – depending on demand. This is what makes our network true ‘elastic cloud’. If there’s a surge in traffic, your website will continue to offer the same fast experience for every user.


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
                        <h4>Load balancing that offers a lot more

</h4>
                        <p>Load balancing is about sharing traffic across our network of servers. Load balancing mitigates failover: if a server goes down, your site will be moved to another, so it stays online. Our global load balancing makes use of monitors that will respond to traffic load and balance it across <Link to="/">multiple servers</Link> when needed.


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
                        <h4>Optimised PHP with no limits


</h4>
                        <p>Our custom code makes every website load faster. We aren’t subject to the limits imposed by old-school web hosting services. As we’re not constrained by CloudLinux, we don’t have to impose limits on cores, memory, bandwidth and processes.


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
                        <h4>Fully managed & monitored​</h4>
                        <p>Around-the-clock UK web hosting support from our expert tech team, combined with monitoring and security updates. Leaving you to concentrate on your business.​


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
                        <h4>SSD storage layers

</h4>
                        <p>Built on SolidFire platform, our unlimited web hosting is 100 <Link to="/">VPS SSD-powered</Link>. Three separate layers ensure there is no single point of failure and data is secure and protected.​


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
                        <p>If you’re not completely satisfied with our web hosting service, we guarantee you’ll receive a full refund within 30 days of signing up. No questions asked.​


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
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">More power than cPanel</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Load balancing that works</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Google-based DNS</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">1 Tbps+ DDoS protection</button>
   
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
      <div className="tabs-content">
          <div className="tabs-head d-block">
            <div className="tabs-img">
              <img src={hostPanel} alt="img" />
            </div>
            <div className="tabs-data mt-2">
                <div className="web-host-tab">
                <h6>Free SSL protection</h6>
<p>Encrypt data and protect your site in a just a few clicks with Let’s Encrypt SSL</p>
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
                <h6>sharing traffic across servers
</h6>
<p>Load balancing is about sharing traffic across servers. Other web hosts use load balancing – but not the kind we’ve developed. Their load balancing mitigates failover: if a server goes down, your site will be moved to another, so it stays online.


</p>
                </div>

                <div className="web-host-tab">
                <h6>robust 10 Gb network
</h6>
<p>It’s a kind of disaster recovery. That’s expected: we offer that kind of server redundancy as well, even though we use some of the best hardware in the industry – thanks to our long-term partners at Dell – and a robust 10 Gb network.

</p>
                </div>
                 <div className="web-host-tab">
                <h6>global load balancing

</h6>
<p>Our global load balancing makes use of monitors that will respond to traffic load and balance it across multiple servers when needed. Many other providers don’t offer this. The consequence for you is this: with Certa Hosting, your site stays online, and remains fast, whatever load the servers are under.

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
                <h6>The Domain Name System (DNS)


</h6>
<p>The Domain Name System (DNS) translates domain names – and email addresses – into IP addresses. So when you visit a URL, your browser knows the address of the server to download the page from. It’s an essential part of the internet – so it needs to be fast.


</p>
                </div>
 <div className="web-host-tab">
                <h6>fast internet response times

</h6>
<p>Google knows all about fast internet response times – as you’d expect! Their global fibre network leads the industry. It provides a quick and stable response regardless of traffic. So we built our DNS platform on the same infrastructure as Google.


</p>
 </div>
  <div className="web-host-tab">
                <h6>benefit from Google DNS


</h6>
<p>All domains hosted with us benefit from Google DNS.

</p>
 </div>

          </div>
          
      </div>
    </div>
    <div class="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
    <div className="tabs-content">
          <div className="tabs-head d-block">
            <div className="tabs-img">
              <img src={tabs1} alt="img" />
            </div>
 <div className="web-host-tab">
                <h6>Distributed denial of service (DDoS)

</h6>
<p>Distributed denial of service (DDoS) attacks are a growing hazard on the web. If your shared hosting or virtual private server (VPS) is attacked, usually you don’t have much of a choice other than to weather the storm and wait for the attack to stop.


</p>
 </div>
 <div className="web-host-tab">
 <h6>1 Tbps+ anti-DDoS protection


</h6>
<p>That’s why we introduced 1 Tbps+ anti-DDoS protection. This enterprise-level protection covers you against most attacks. It only filters-out malicious traffic, so you can carry on working without noticing any interruption.


</p>
 </div>
 <div className="web-host-tab">
 <h6>Web Application Firewall

</h6>
<p>This also stops our platform being slowed-down. It blocks up to six million requests – every day


</p>
 </div>
          </div>
          
      </div>
    </div>
    <div class="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
    <div className="tabs-content">
          <div className="tabs-head">
            <div className="tabs-img">
              <img src={tabs1} alt="img" />
            </div>
            <div className="tabs-data">
              <h3>Expandable cloud server hosting
</h3>
            </div>
          </div>
          <p>A cloud server can be configured for growth at any time giving you maximum flexibility.


</p> 
<p>Use the customer portal to increase the CPU, RAM, disk and traffic whenever you need to. Alternatively, choose from one of our four SSD VPS packages if you already know the resources you'll need.


</p> <p>We provide simple unlimited-hosting solutions optimised for quality with a great value price. Choose from one of our four VPS options to suit your needs.

</p>
<p>If you're looking for more ability to configure, our <Link to="/">cloud servers</Link> will allow you to adapt CPU, RAM and disks.

</p>
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
                        <h2>What makes our platform better than the rest?</h2>

                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={what1} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Load Balanced Cloud Hosting</h4>
                                <p>Superfast, high-speed web hosting services tailored to suit your specific needs. Keeping our network robust with no single point of failure and constantly fast, your hosting could be ready in seconds!

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
                                <h4>Stay In Control</h4>
                                <p>The My rar <a href="#">hosting cPanel</a> is designed to be user-friendly. It will be familiar to those who have used other control panels, but puts user experience first.


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
                                <h4>SSD That's Super fast</h4>
                                <p>Does your site have a need for speed? Our SSD storage is optimised to deliver in double-quick time.

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
                                <h4>Free LetsEncrypt SSL Certification</h4>
                                <p>Create and manage your SSL certificates with ease from your Certa panel with free, unlimited LetsEncrypt SSL.​

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
                                <p>SIf you're not a professional website designer, why not use our free, easy to use, drag and drop site builder? You could have a professional, user-friendly site in double-quick time.​
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
                                <h4>Backups You Can Count On</h4>
                                <p>Need to go back in time? You can with us - access backups and restores for up to 30 days directly from your Certa panel. Restore files and databases, fuss-free.​

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
                                <h4>Protect Your Site From Spam and Malware​</h4>
                                <p>Protecting your site from spam comes as standard. We offer professional inbound and outbound spam filters that filter out the junk and leave the good stuff alone. ​

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
                                <h4>UK-Based Web Hosting Support 24/7</h4>
                                <p>Our dedicated UK-based support team are on hand to deliver answers to all your questions, and troubleshoot any issues you may be having.​
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
                                <h4>1 Tbps+ DDoS protection</h4>
                                <p>1 Tbps+ anti-DDoS protection. This enterprise-level protection covers you against most attacks. It only filters-out malicious traffic, so you can carry on working without noticing any interruption.
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
                        <h3>Create your own responsive website with ease</h3>
                        <p>Simple and easy to use.</p>
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
                            <h1>Choose a template</h1>
                            <p>Choose from templates that bring your business to life</p>
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
                            <h1>Customise your design.</h1>
                            <p>Build a beautiful looking website that looks great on all devices</p>
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
                            <h1>Publish your website</h1>
                            <p>Get your site online in minutes and start building your brand</p>
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

    {/* different */}
    <section className="different">
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-7">
                    <div className="diff-content">
                        <h2>Welcome to RarCP</h2>
                        <div className="diff d-flex">
                            <div className="diff-icon">
                                <span><i class="fa-solid fa-check"></i></span>
                            </div>
                            <div className="diff-data">
                                <p><b>Sleek & easy to use </b>: The simple to use, minimalist, feature-packed hosting management experience. Check out the  <a href="#">Control Panel Demo</a>

</p>
                            </div>
                        </div>
                        <div className="diff d-flex">
                            <div className="diff-icon">
                                <span><i class="fa-solid fa-check"></i></span>
                            </div>
                            <div className="diff-data">
                                <p><b>More power than cPanel</b> : More power than cPanel. Certa managed shared hosting is not being restricted by cPanel, we can offer more features and better performance across our load balanced cloud network.


</p>
                            </div>
                        </div>
                        <div className="diff d-flex">
                            <div className="diff-icon">
                                <span><i class="fa-solid fa-check"></i></span>
                            </div>
                            <div className="diff-data">
                                <p><b>Constant innovation</b> : With unique products, like free CDN and Website Acceleration Suite, DDoS protection and a load Balanced fail proof cloud network. means that you always have access to the latest web hosting tech.


</p>
                            </div>
                        </div>
                        <div className="diff d-flex">
                            <div className="diff-icon">
                                <span><i class="fa-solid fa-check"></i></span>
                            </div>
                            <div className="diff-data">
                                <p><b>Accessibility in mind</b> : Our Certa control panel is fully responsive, so you can manage your websites and email easily wherever you are, from any device.


</p>
                            </div>
                        </div>
                        <div className="diff d-flex">
                            <div className="diff-icon">
                                <span><i class="fa-solid fa-check"></i></span>
                            </div>
                            <div className="diff-data">
                                <p><b>Committed to secure hosting</b> : Secure your login details through two factor authentication (2FA). You can use 2FA to verify your identity when logging into your control panel.


</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5"></div>
            </div>
        </div>
    </section>

    {/* desk table */}
    <section className="desk-table">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="table-title">
                        <h3>More power than cPanel</h3>
                        <p>By not being restricted by cPanel, we can offer more features and better performance.

</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="desk-t">
                <table>
 <thead>
 <tr>
    <th className='first'></th>
    <th className='secn'><img src={logo} alt="logo" /></th>
    <th className='third'><img src={cp} alt="cpanel" /></th>
  </tr>

 </thead>
  <tbody>
  <tr>
    <td className='first'>Number of Accounts	</td>
    <td className='secn'>Unlimited	</td>
    <td className='third'>Restricted by the server’s hardware
	</td>
  </tr>
  <tr>
    <td className='first'>Disk Space		</td>
    <td className='secn'>Unlimited		</td>
    <td className='third'>Restricted by the server’s hardware</td>
  </tr> 

  <tr>
    <td className='first'>Bandwidth		</td>
    <td className='secn'>Unlimited		</td>
    <td className='third'>Restricted by the server’s hardware</td>
  </tr> 
  <tr>
    <td className='first'>	Autoscaling Cloud Platform		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	Redundant Web Servers		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	Built-in Replication & Failover		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	Global CDN	</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	Website Acceleration Suite		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	Anti-DDOS Protection		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	Built-in Web Application Firewall		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	Isolated Web, MySQL, FTP, Control Panel and		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	Storage	</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	E-mail kept securely away from website storage		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	Windows Server		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>		WordPress Optimised	</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>	WordPress Staging		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  <tr>
    <td className='first'>Google DNS		</td>
    <td className='secn'><i class="fa-solid fa-check"></i></td>
    <td className='third'><i class="fa-solid fa-xmark"></i></td>
  </tr> 
  </tbody>
</table>
                </div>
            </div>
        </div>
    </section>

    {/* country section */}

    <section className="country-sec">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="country-box">
                        <div className="country-title">
                            <h3>Europe</h3>

                        </div>
                        <ul>
                            <li>Amsterdam</li>
                            <li>Barcelona</li>
                            <li>Frankfurt</li>
                            <li>London</li>
                            <li>Moscow</li>
                            <li>Nottingham</li>
                            <li>Paris <span>New</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="country-box">
                        <div className="country-title">
                            <h3>North America</h3>

                        </div>
                        <ul>
                            <li>Ashburn</li>
                            <li>Chicago</li>
                            <li>Dallas</li>
                            <li>Los Angeles</li>
                            <li>Miami</li>
                            <li>New York <span>New</span></li>
                            <li>Seattle <span>New</span> </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                    <div className="country-box">
                        <div className="country-title">
                            <h3>Asia & Oceania</h3>

                        </div>
                        <ul>
                            <li>Hong Kong <span>New</span></li>
                            <li>Mumbai</li>
                            <li>Singapore</li>
                            <li>Sydney</li>
                            <li>Tokyo</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                    <div className="country-box">
                        <div className="country-title">
                            <h3>Africa</h3>

                        </div>
                        <ul>
                            <li>Johannesburg</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                    <div className="country-box">
                        <div className="country-title">
                            <h3>South America</h3>

                        </div>
                        <ul>
                            <li>Sāo Paulo</li>
                        </ul>
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
      Are backups included?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, we’ve got you covered. Daily automated backups come free with all our paid web hosting packages. <br />

You can also create backups whenever you like using the simple backup tool in the MyCerta control panel. <br />

You can restore from any point in the last 30 days.
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
      What are the email sending limits?
      </button>
    </h2>
    <div id="collapseOne4" class="accordion-collapse collapse " aria-labelledby="headingOne4" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The following limits apply to all messages sent via authenticated SMTP.

This will primarily be used for email sent via a mail client, but can also include mail sent via your website if configured to send via SMTP. We impose a limit of 8,000 messages per e-mail address per 24 hours.
<br />
The following limits also apply:
<br />
No more than 10,000 recipients per day.
<br />
No more than 2,000 unique recipients per day.
<br />
A single email may not be sent to more than 100 individual addresses.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
      What if my web sites have high traffic?
      </button>
    </h2>
    <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      We host some of the busiest sites around - so you won’t have any worries there! Our self-built platform grows with your website and business. <br />

It ‘autoscales’ - meaning that even if your site receives a sudden spike in traffic, it will be able to handle it.
<br />
The magic comes from our load-balancers. They’re constantly monitoring all requests to our network. When a website receives a large number of hits it’s quickly isolated and moved to its own dedicated backend.
<br />
This keeps your business running quickly at the most critical of times, but also means that your neighbours on our shared hosting aren’t affected by your spikes in traffic.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
      What are the contract lengths of your service?
      </button>
    </h2>
    <div id="collapseThree3" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Everything we offer is on a simple, no nonsense month-to-month basis. You can cancel your account with us at any time without a penalty.


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
            <div className="tt-s">
                        <h3>All your web hosting app's are just one click away</h3>
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
                        <div className="page"> <Link className="links" to="/">Home</Link>   »  Web Hosting</div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}
