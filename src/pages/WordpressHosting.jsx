import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from "../images/bannerbg.webp";
import webRock from "../images/01/webrock.webp"
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import whatBg from "../images/01/webbg.jpg"
import logo from "../images/rarhost.png"
import cp from "../images/01/cpanel.webp"
import qustion from "../images/qustion.jpg"
import { SliderReview } from '../components/SliderReview';
import wordpressHosting from "../images/02/wordpresshosting.webp"
import optomize from "../images/02/opmomize.webp"
import optomize2 from "../images/02/opmomize2.webp"
import wp1 from "../images/02/wp1.webp"
import wp2 from "../images/02/wp2.webp"
import wp3 from "../images/02/wp3.webp"
import wp4 from "../images/02/wp4.webp"
import wp5 from "../images/02/wp5.webp"
import wp6 from "../images/02/wp6.webp"
import wpf1 from "../images/02/wpf1.webp"
import wpf2 from "../images/02/wpf2.webp"
import wpf3 from "../images/02/wpf3.webp"
import wpf4 from "../images/02/wpf4.webp"
import wpf5 from "../images/02/wpf5.webp"
import wpf6 from "../images/02/wpf6.webp"
import wpf7 from "../images/02/wpf7.webp"
import wpf8 from "../images/02/wpf8.webp"
import wpf9 from "../images/02/wpf9.webp"
import sb1 from "../images/02/sb1.webp"
import sb2 from "../images/02/sb2.webp"
import sb3 from "../images/02/sb3.webp"
import sb4 from "../images/02/sb4.webp"
import sb5 from "../images/02/sb5.webp"
import sb6 from "../images/02/sb6.webp"
import sh1 from "../images/02/sh1.webp"
import sh2 from "../images/02/h2.webp"
import sh3 from "../images/02/sh3.webp"
import th1 from "../images/02/th1.webp"
import th2 from "../images/02/thi2.webp"
import th3 from "../images/02/th3.webp"

export const WordpressHosting = () => {

    const [show,setShow] = useState(false);


    const showMore =()=>{
        setShow(!show);
    }
   
    const [moreText ,settext] = useState(false);
    const [moreText1 ,settext1] = useState(false);
    const [moreText2 ,settext2] = useState(false);

const showNow = ()=> {
    settext(!moreText);
    
}
const showNow1 = ()=> {
    settext1(!moreText1);
    
}
const showNow2 = ()=> {
    settext2(!moreText2);
    
}
    
  return (
    <>
    <div className="home-content" style={{background: `url(${bgImage})`,}}>
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    <div className="home-left-content">
                        <h2>Managed</h2>
                        <h3>WordPress Hosting</h3>
                        <p className='py-2'>Pre-configured & built with managed WordPress hosting  <br />in mind. Complete with enhanced security and free daily backups.


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
                    <img src={wordpressHosting} alt="img" />
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
                    <h2><b>WordPress Hosting</b> Managed!</h2>
                </div>
                <div className="host-extra">
                    <div className="extra-data">
                        <h4>UK-based data centres</h4>
                        <p>WordPress Web Hosting</p>
                        <p>WordPress - The world’s leading free, open source content management system.

</p>
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
                        <h5>WP Personal</h5>
                        <img src={th1} alt="img" />
                        <p>Only</p>
                        <h3>$4.99</h3>
                        <p>Per Month</p>
                        <span>($9.99 including VAT)</span>
                        <Link className=" table-btn" to="/">Buy Now</Link>
                       
                    </div> 
                    <div className="all-data">
                    <div className="table-data some-added">
                            <ul> 
                            <Tooltip title="The number of websites you can host on your account. This quota can be allocated to domains hosted with Certa Hosting or with other domain registrars.">   

<span>   <i className="fa-regular fa-circle-check"></i> 1 x Unique Websites

</span>
</Tooltip>
                                <Tooltip title="Website files are stored on hybrid SAS/SSD storage clusters. We already have many hundreds of terabytes of storage deployed – and this can scale instantly as our client base grows">   

                            <span>   <i className="fa-regular fa-circle-check"></i>25GB SSD Disk Space

</span>
                            </Tooltip>
                            <Tooltip title="Your monthly bandwidth allocation determines how much visitor activity hosted websites can receive. ">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Unlimited Bandwidth

 </span>
                            </Tooltip>
                            <Tooltip title="Free SSL cert providing the name servers are pointing to our name servers.  ">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  1 × Free Wildcard SSL Certificate

</span>
                    </Tooltip>

                    <Tooltip title="The number of personalised email addresses you can create with your Domain Name. Mail boxes are limited to 10GB per mailbox">   

                    <span>   <i className="fa-regular fa-circle-check"></i> 10 Mail Accounts

</span>
                    </Tooltip>
                   
                    <Tooltip title="Free daily backups of your website and store them off-server for up to 30 days. When needed you can simply restore a backup from within your control panel.">   

<span>   <i className="fa-regular fa-circle-check"></i>Daily Back Ups

 </span>
</Tooltip>
                            </ul>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                               
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
                            <h3>Cloud Platform</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Protect your site from distributed denial of service attacks. 'Bad' traffic is routed away from your site, while genuine users carry on as normal.">   

                            <span>  <i class="fa-regular fa-circle-check"></i>1 Tbps+ DDoS Protection

</span>
                            </Tooltip>
                            <Tooltip title="You can password protect areas or complete sites in a single click via our control panel.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Website Password Manager


 </span>
                            </Tooltip>
                   
   <Tooltip title="All FTP accounts all fully secured thanks to our FTP Lock. You can Unlock FTP for unrestricted access for a period of time or restrict access to one or more IP addresses for even better protection.">   

<span>   <i className="fa-regular fa-circle-check"></i> FTP Security Lock
</span>
</Tooltip>
<Tooltip title="Our RarProtect application will block attempts to brute-force WordPress admin passwords.">   

<span>   <i className="fa-regular fa-circle-check"></i> Brute Force Login Protection

</span>
</Tooltip>
<Tooltip title="Use 2-factor authentication to add an extra layer of security to your control panel login(s).">   

<span>   <i className="fa-regular fa-circle-check"></i> Two-Factor Authentication (2FA)


</span>
</Tooltip>
<Tooltip title="Block single IP addresses, entire subnets or even countries from your site via our control panel.">   

<span>   <i className="fa-regular fa-circle-check"></i> Block visitors by IP or Country

</span>
</Tooltip>
<Tooltip title="Our File Permissions Checker ensures that mistakes haven't been made with file permissions, and you can fix them in bulk if there are any.">   

<span>   <i className="fa-regular fa-circle-check"></i> File Permissions Checker
</span>
</Tooltip>
<Tooltip title="Prevent others from stealing your images with our inbuilt hotlink protection.">   

<span>   <i className="fa-regular fa-circle-check"></i> Hotlink Protection

</span>
</Tooltip>
<Tooltip title="The Rar WAF helps protect your site from malware and security breaches by inspecting traffic for SQL injection, trojans, cross-site scripting, path traversal and many other types of attack..">   

<span>   <i className="fa-regular fa-circle-check"></i> Web Application Firewall
</span>
</Tooltip>

                    
                            </ul>
                        </div>
                        <div className="table-pricing">
                            <h3>Back Up Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                            <Tooltip title="Restore direct from your control panel ">   

                    <span>  <i className="fa-regular fa-circle-check"></i>
                    Self Restore


                    </span>
                    </Tooltip>
                                <Tooltip title="We keep backups of your site in a remote location so you can restore back to any time in the last 30 days safely.">   

                            <span>  <i className="fa-regular fa-circle-check"></i>

                            Daily Snapshot Backups


</span>
                            </Tooltip>
                           
                          
                    
                            </ul>
                        </div>

                        {/* Security Features*/}
                        <div className="table-pricing">
                            <h3>Domains & IP
</h3>
                        </div> 
                      <div className="added-more-data">
                        <ul>
                            <li>    <i class="fa-regular fa-circle-check"></i> Sub Domains

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>Google DNS


</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Global CDN


</li>
                          
                          
                        </ul>
                      </div>

                      {/* Web Hosting Software
 */}    
                        <div className="table-pricing">
                            <h3>Wordpress Hosting Features</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i>  WordPress Staging
</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Backup and Restore
</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited Subdomains


</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited FTP/SFTP accounts

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Online File Manager</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>SSH Access w/ Google 2FA

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Directory Indexing

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>One Click G Suite Setup

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Access/Error/Bandwidth Logs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Custom Errors

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Sitemap Generator

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Migrate Using FTP/SFTP

</li>
                            </ul>
                        </div>

                        {/* Web Hosting Features
 */}
                        <div className="table-pricing">
                            <h3>Security and Data Centre</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Network Level Firewall

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Server Level Firewall



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cloud Technology



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Data Centre Location



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Multiple 10GB Connections



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Hosted On Dell Superservers



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Load Balanced Storage



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>PHP Version Switcher





</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Popular Modules



</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  PHP Ioncube Loader



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>phpMyAdmin



</li>
                            </ul>
                        </div>
                        {/* Auto Installers
 */}    
                     <div className="table-pricing">
                            <h3>Benefits</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> 30 Day Money Back Guarantee

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  UK Based Servers



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Cancel Any Time



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  24/7 x 365 Onsite Engineers



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> No Monthly Contract

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Free Pre Sales Support



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
                        <h5>WP Professional</h5>
                        <img src={th2} alt="img" />
                        <p>Only</p>
                        <h3>$14.99</h3>
                        <p>Per Month</p>
                        <span>($17.99 including VAT)</span>
                        <Link className=" table-btn" to="/">Buy Now</Link>
                       
                    </div> 
                    <div className="all-data">
                    <div className="table-data some-added">
                            <ul> 
                            <Tooltip title="The number of websites you can host on your account. This quota can be allocated to domains hosted with Certa Hosting or with other domain registrars.">   

<span>   <i className="fa-regular fa-circle-check"></i> 10 x Unique Websites

</span>
</Tooltip>
                                <Tooltip title="Website files are stored on hybrid SAS/SSD storage clusters. We already have many hundreds of terabytes of storage deployed – and this can scale instantly as our client base grows">   

                            <span>   <i className="fa-regular fa-circle-check"></i>Unlimited SSD Disk Space


</span>
                            </Tooltip>
                            <Tooltip title="No limits bandwidth. ">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Unlimited Bandwidth

 </span>
                            </Tooltip>
                            <Tooltip title="Secure your site and subdomains with ‘https’, for free. ">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  10 × Free Wildcard SSL Certificate


</span>
                    </Tooltip>

                    <Tooltip title="The number of personalised email addresses you can create with your Domain Name. Mail boxes are limited to 10GB per mailbox">   

                    <span>   <i className="fa-regular fa-circle-check"></i> 10 Mail Accounts

</span>
                    </Tooltip>
                   
                    <Tooltip title="Free daily backups of your website and store them off-server for up to 30 days. When needed you can simply restore a backup from within your control panel.">   

<span>   <i className="fa-regular fa-circle-check"></i>Daily Back Ups

 </span>
</Tooltip>
                            </ul>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                               
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
                            <h3>Cloud Platform</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Protect your site from distributed denial of service attacks. 'Bad' traffic is routed away from your site, while genuine users carry on as normal.">   

                            <span>  <i class="fa-regular fa-circle-check"></i>1 Tbps+ DDoS Protection

</span>
                            </Tooltip>
                            <Tooltip title="You can password protect areas or complete sites in a single click via our control panel.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Website Password Manager


 </span>
                            </Tooltip>
                   
   <Tooltip title="All FTP accounts all fully secured thanks to our FTP Lock. You can Unlock FTP for unrestricted access for a period of time or restrict access to one or more IP addresses for even better protection.">   

<span>   <i className="fa-regular fa-circle-check"></i> FTP Security Lock
</span>
</Tooltip>
<Tooltip title="Our RarProtect application will block attempts to brute-force WordPress admin passwords.">   

<span>   <i className="fa-regular fa-circle-check"></i> Brute Force Login Protection

</span>
</Tooltip>
<Tooltip title="Use 2-factor authentication to add an extra layer of security to your control panel login(s).">   

<span>   <i className="fa-regular fa-circle-check"></i> Two-Factor Authentication (2FA)


</span>
</Tooltip>
<Tooltip title="Block single IP addresses, entire subnets or even countries from your site via our control panel.">   

<span>   <i className="fa-regular fa-circle-check"></i> Block visitors by IP or Country

</span>
</Tooltip>
<Tooltip title="Our File Permissions Checker ensures that mistakes haven't been made with file permissions, and you can fix them in bulk if there are any.">   

<span>   <i className="fa-regular fa-circle-check"></i> File Permissions Checker
</span>
</Tooltip>
<Tooltip title="Prevent others from stealing your images with our inbuilt hotlink protection.">   

<span>   <i className="fa-regular fa-circle-check"></i> Hotlink Protection

</span>
</Tooltip>
<Tooltip title="The Rar WAF helps protect your site from malware and security breaches by inspecting traffic for SQL injection, trojans, cross-site scripting, path traversal and many other types of attack..">   

<span>   <i className="fa-regular fa-circle-check"></i> Web Application Firewall
</span>
</Tooltip>

                    
                            </ul>
                        </div>
                        <div className="table-pricing">
                            <h3>Back Up Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                            <Tooltip title="Restore direct from your control panel ">   

                    <span>  <i className="fa-regular fa-circle-check"></i>
                    Self Restore


                    </span>
                    </Tooltip>
                                <Tooltip title="We keep backups of your site in a remote location so you can restore back to any time in the last 30 days safely.">   

                            <span>  <i className="fa-regular fa-circle-check"></i>

                            Daily Snapshot Backups


</span>
                            </Tooltip>
                           
                          
                    
                            </ul>
                        </div>

                        {/* Security Features*/}
                        <div className="table-pricing">
                            <h3>Domains & IP
</h3>
                        </div> 
                      <div className="added-more-data">
                        <ul>
                            <li>    <i class="fa-regular fa-circle-check"></i> Sub Domains

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>Google DNS


</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Global CDN


</li>
                          
                          
                        </ul>
                      </div>

                      {/* Web Hosting Software
 */}    
                        <div className="table-pricing">
                            <h3>Wordpress Hosting Features</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i>  WordPress Staging
</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Backup and Restore
</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited Subdomains


</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited FTP/SFTP accounts

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Online File Manager</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>SSH Access w/ Google 2FA

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Directory Indexing

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>One Click G Suite Setup

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Access/Error/Bandwidth Logs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Custom Errors

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Sitemap Generator

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Migrate Using FTP/SFTP

</li>
                            </ul>
                        </div>

                        {/* Web Hosting Features
 */}
                        <div className="table-pricing">
                            <h3>Security and Data Centre</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Network Level Firewall

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Server Level Firewall



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cloud Technology



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Data Centre Location



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Multiple 10GB Connections



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Hosted On Dell Superservers



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Load Balanced Storage



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>PHP Version Switcher





</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Popular Modules



</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  PHP Ioncube Loader



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>phpMyAdmin



</li>
                            </ul>
                        </div>
                        {/* Auto Installers
 */}    
                     <div className="table-pricing">
                            <h3>Benefits</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> 30 Day Money Back Guarantee

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  UK Based Servers



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Cancel Any Time



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  24/7 x 365 Onsite Engineers



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> No Monthly Contract

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Free Pre Sales Support



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
                        <h5>WP Unlimited</h5>
                        <img src={th3} alt="img" />
                        <p>Only</p>
                        <h3>$34.99</h3>
                        <p>Per Month</p>
                        <span>($41.99 including VAT)</span>
                        <Link className=" table-btn" to="/">Buy Now</Link>
                       
                    </div> 
                    <div className="all-data">
                    <div className="table-data some-added">
                            <ul> 
                            <Tooltip title="the number of websites you can host on your account. This quota can be allocated to domains hosted with Certa Hosting or with other domain registrars.">   

<span>   <i className="fa-regular fa-circle-check"></i> Unlimited Unique Websites


</span>
</Tooltip>
                                <Tooltip title="Website files are stored on hybrid SAS/SSD storage clusters. We already have many hundreds of terabytes of storage deployed – and this can scale instantly as our client base grows.">   

                            <span>   <i className="fa-regular fa-circle-check"></i>Unlimited SSD Disk Space


</span>
                            </Tooltip>
                            <Tooltip title="Your monthly bandwidth allocation determines how much visitor activity hosted websites can receive. ">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Unlimited Bandwidth

 </span>
                            </Tooltip>
                            <Tooltip title="Free SSL cert providing the name servers are pointing to our name servers.  ">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Unlimited Wildcard SSL Certificate


</span>
                    </Tooltip>

                    <Tooltip title="The number of personalised email addresses you can create with your Domain Name.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Unlimited Mail Accounts


</span>
                    </Tooltip>
                   
                    <Tooltip title="Free daily backups of your website and store them off-server for up to 30 days. When needed you can simply restore a backup from within your control panel.">   

<span>   <i className="fa-regular fa-circle-check"></i>Daily Back Ups

 </span>
</Tooltip>
                            </ul>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                               
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
                            <h3>Cloud Platform</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Protect your site from distributed denial of service attacks. 'Bad' traffic is routed away from your site, while genuine users carry on as normal.">   

                            <span>  <i class="fa-regular fa-circle-check"></i>1 Tbps+ DDoS Protection

</span>
                            </Tooltip>
                            <Tooltip title="You can password protect areas or complete sites in a single click via our control panel.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Website Password Manager


 </span>
                            </Tooltip>
                   
   <Tooltip title="All FTP accounts all fully secured thanks to our FTP Lock. You can Unlock FTP for unrestricted access for a period of time or restrict access to one or more IP addresses for even better protection.">   

<span>   <i className="fa-regular fa-circle-check"></i> FTP Security Lock
</span>
</Tooltip>
<Tooltip title="Our RarProtect application will block attempts to brute-force WordPress admin passwords.">   

<span>   <i className="fa-regular fa-circle-check"></i> Brute Force Login Protection

</span>
</Tooltip>
<Tooltip title="Use 2-factor authentication to add an extra layer of security to your control panel login(s).">   

<span>   <i className="fa-regular fa-circle-check"></i> Two-Factor Authentication (2FA)


</span>
</Tooltip>
<Tooltip title="Block single IP addresses, entire subnets or even countries from your site via our control panel.">   

<span>   <i className="fa-regular fa-circle-check"></i> Block visitors by IP or Country

</span>
</Tooltip>
<Tooltip title="Our File Permissions Checker ensures that mistakes haven't been made with file permissions, and you can fix them in bulk if there are any.">   

<span>   <i className="fa-regular fa-circle-check"></i> File Permissions Checker
</span>
</Tooltip>
<Tooltip title="Prevent others from stealing your images with our inbuilt hotlink protection.">   

<span>   <i className="fa-regular fa-circle-check"></i> Hotlink Protection

</span>
</Tooltip>
<Tooltip title="The Rar WAF helps protect your site from malware and security breaches by inspecting traffic for SQL injection, trojans, cross-site scripting, path traversal and many other types of attack..">   

<span>   <i className="fa-regular fa-circle-check"></i> Web Application Firewall
</span>
</Tooltip>

                    
                            </ul>
                        </div>
                        <div className="table-pricing">
                            <h3>Back Up Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                            <Tooltip title="Restore direct from your control panel ">   

                    <span>  <i className="fa-regular fa-circle-check"></i>
                    Self Restore


                    </span>
                    </Tooltip>
                                <Tooltip title="We keep backups of your site in a remote location so you can restore back to any time in the last 30 days safely.">   

                            <span>  <i className="fa-regular fa-circle-check"></i>

                            Daily Snapshot Backups


</span>
                            </Tooltip>
                           
                          
                    
                            </ul>
                        </div>

                        {/* Security Features*/}
                        <div className="table-pricing">
                            <h3>Domains & IP
</h3>
                        </div> 
                      <div className="added-more-data">
                        <ul>
                            <li>    <i class="fa-regular fa-circle-check"></i> Sub Domains

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>Google DNS


</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Global CDN


</li>
                          
                          
                        </ul>
                      </div>

                      {/* Web Hosting Software
 */}    
                        <div className="table-pricing">
                            <h3>Wordpress Hosting Features</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i>  WordPress Staging
</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Backup and Restore
</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited Subdomains


</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Unlimited FTP/SFTP accounts

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Online File Manager</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>SSH Access w/ Google 2FA

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Directory Indexing

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>One Click G Suite Setup

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Access/Error/Bandwidth Logs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Custom Errors

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Sitemap Generator

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Migrate Using FTP/SFTP

</li>
                            </ul>
                        </div>

                        {/* Web Hosting Features
 */}
                        <div className="table-pricing">
                            <h3>Security and Data Centre</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Network Level Firewall

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Server Level Firewall



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cloud Technology



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Data Centre Location



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Multiple 10GB Connections



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Hosted On Dell Superservers



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Load Balanced Storage



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>PHP Version Switcher





</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Popular Modules



</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  PHP Ioncube Loader



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>phpMyAdmin



</li>
                            </ul>
                        </div>
                        {/* Auto Installers
 */}    
                     <div className="table-pricing">
                            <h3>Benefits</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> 30 Day Money Back Guarantee

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  UK Based Servers



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>Cancel Any Time



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  24/7 x 365 Onsite Engineers



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> No Monthly Contract

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Free Pre Sales Support



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


{/* optomize section */}


<section className="optomize">
    <div className="container">
        <div className="row">
            <div className="col-xl-4">
                <div className="optomize-img">
                    <img src={optomize} alt="img" />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="optomize-content">
                    <h2>Optimised for speed and reliability.</h2>
                    <p>Don’t just take our word for it.....
</p>
<p>Independent tests have demonstrated that typical WordPress pages that are hosted on the Certa web hosting platform load in just a quarter of a second. Other UK web hosts can take up to 11.92 seconds. That shows Certa Hosting is up to 48x faster.
</p>
<p>These tests were carried out by LoadImpact.com, using 55 concurrent requests. They demonstrated that Certa Hosting are up to 48x faster than other web hosts. Page speed is a must for better search engine rankings and happy visitors.

</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* opmise section 2 */}
<section className="optomize">
    <div className="container">
        <div className="row">
            <div className="col-xl-8">
                <div className="optomize-img">
                <div className="optomize-content">
                    <h2>WordPress Staging</h2>
                    <p>Staging allows you to create an exact clone of your current live site, where you can make modifications or experiment with new features and make live as and when you wish.

</p>
<p>You can deploy changes over to the live site effortlessly. A WordPress staging site is an exact clone of your site, created independently on Certa's staging servers. Staging will allow you to test the changes – whether that’s WordPress hosting themes, plugins, code snippets – or any other kind of change.

</p>
<p>Develop or fault find without having an effect on the live site. As all web designers and developers know to well, a plugin addition could have disastrous consequences. You don’t ever want to be acquainted with the infamous ‘white screen of death’ on a live WordPress website…

</p>
<p>Create a replica of your site with a single click. Carry out testing or add new content or code. Send your staging site to anyone and get feedback by giving them the ‘.staging’ URL. Once happy with the changes, you can easily migrate to the live site effortlessly. Your changes will then overwrite your old content – and you’re done!

</p>
                </div>
                  
                </div>
            </div>
            <div className="col-xl-4">
            <img src={optomize2} alt="img" />
            </div>
        </div>
    </div>
</section>
   {/* hosting special */}

   <section className="hosting-special bgexs">
    <div className="container">
        <div className="row">
            <div className="col">
            <div className="table-title">
                    <h2>Global CDN, bullet-proof security & free daily backups

</h2>
                    </div>
            </div>

        </div>
        <div className="row">
            <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={wp1} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>The Certa hosting platform

</h4>
                        <p>All our servers use autoscaling tech unique to Certa: instead of your site being limited to the resources of a <Link to="/dedicated-server">single server</Link> it has access to the entire hosting platform. We make use of branded hardware, load balancing and 100% SSD storage. Our proprietary PHP optimisation makes your sites faster than light speed!



</p>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={wp2} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Super-fast edge cache engine
</h4>
                        <p>Our WordPress platform sits behind a NGINX edge cache system: It’s configured to speed up page loading for users. Although it works straight out of the box, advanced users might want to manage the cached content themselves. The CertaCache plugin interface inside WordPress makes this simple.


</p>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={wp3} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Global CDN and Acceleration Suite

</h4>
                        <p>All managed WordPress hosting plans include a free fully-featured Content Delivery Network (CDN). Your content will be stored at data centres located close to the user, all over the world. Our Website Acceleration Suite will optimises images and code to improve the sites loading speed.
</p>
                    </div>
                </div>
                
            </div>
             <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={wp4} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>WordPress Themes​</h4>
                        <p>Having unused WordPress themes can affect site performance. Quickly see what themes are installed, update them in bulk, activate or deactivate them. Tidy your website and maybe cut a few milliseconds in loading time too.
</p>
                    </div>
                </div>
                
            </div> 
         <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={wp5} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>WordPress Plugins
</h4>
                        <p>Sometimes it’s better to start afresh, don’t struggle with a broken website. Start with a clean install on either your live or staging site.
</p>
                    </div>
                </div>
                
            </div>  
            
        <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={wp6} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>WordPress Security
</h4>
                        <p>WordPress Tools will let you know if there’s something strange about your code. It’s an extra level of protection on top of our malware scans & other hosting security features
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


    {/* what make section */}
    <section className="what-makes">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="what-title">
                        <h2>WordPress Hosting Features</h2>

                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={wpf1} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Fast 100% SSD</h4>
                                <p>SBuilt on SolidFire platform, our <Link to="/web-hosting">best UK unlimited web hosting</Link> is 100% SSD-powered. Three separate layers ensure there is no single point of failure and data is secure and protected
</p>
                            </div>
                        </div>
                    </div>
                    
              

                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={wpf2} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Compress code & images</h4>
                                <p>Optimises all the things you may get warned-about within page speed scoring. All images are resized & compressed, and HTML, CSS and JavaScript is minified at the click of a button.
</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={wpf3} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Latest WordPress</h4>
                                <p>WordPress updates are automatically installed and applied to your WordPress installation. This ensures your core WordPress website is kept secure and up to date.
</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={wpf4} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Host Blog Sites</h4>
                                <p>Our managed WordPress hosting plans allow you to host your WordPress site & blogs under one account – at no extra cost.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={wpf5} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>WordPress Toolkit</h4>
                                <p>The WordPress Toolkit provides all the tools you'll ever need; including backup, updates, and cloning/staging your site.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={wpf6} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Free Daily Backups</h4>
                                <p>Relax. We take daily backups to ensure your WordPress hosting Installation, website files and database remains safe and secure.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={wpf7} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>100% Network Uptime​</h4>
                                <p>The uptime of your WordPress website is as important to us, as it is to you . So we provide 100% network uptime; guaranteed as standard.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={wpf8} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Free LetsEncrypt SSL</h4>
                                <p>As a <Link to="/">Rar hosting</Link>  customer you will receive a free SSL certificate for every domain on our platform; always keeping your visitor's data secure.


</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={wpf9} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4> WordPress Experts
</h4>
                                <p>Our  WordPress hosting support team are highly trained in all aspects of WordPress and available to chat with you around the clock.
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
            <div className="row ">
                <div className="col">
                    <div className="sub-title">
                        <h3>Our comprehensive toolkit</h3>
                        <p>Our comprehensive toolkit for WordPress hosting helps you to build, secure & run your websites.

</p>
                    </div>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="sub-box">
                        <div className="sub-icon">
                            <span><img src={sb1} alt="sub img" /></span>
                        </div>
                        <div className="sub-data">
                            <h1>One Dashboard</h1>
                            <p>The WordPress toolkit that offers a centralised dashboard to manage multiple instances from one account.

</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="sub-box">
                        <div className="sub-icon">
                            <span><img src={sb2} alt="sub img" /></span>
                        </div>
                        
                        <div className="sub-data">
                            <h1>Management</h1>
                            <p>One-click management - easily install, update, enable or remove themes and plugins across multiple WordPress installations.

</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="sub-box">
                        <div className="sub-icon">
                            <span><img src={sb3} alt="sub img" /></span>
                        </div>
                        
                        <div className="sub-data">
                            <h1>1-Click Security</h1>
                            <p>The WordPress Toolkit provides 1-click hardening; secure your website at the touch of a button.

</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="sub-box">
                        <div className="sub-icon">
                            <span><img src={sb4} alt="sub img" /></span>
                        </div>
                        <div className="sub-data">
                            <h1>Staging Clones</h1>
                            <p>Don’t make changes on your live website. With Certa you can easily create a clone of your site in minutes.

</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="sub-box">
                        <div className="sub-icon">
                            <span><img src={sb5} alt="sub img" /></span>
                        </div>
                        
                        <div className="sub-data">
                            <h1>Automatic Updates</h1>
                            <p>The WordPress Toolkit ensures your website is always updated, and you are running the latest, most secure version of WordPress.

</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="sub-box">
                        <div className="sub-icon">
                            <span><img src={sb6} alt="sub img" /></span>
                        </div>
                        
                        <div className="sub-data">
                            <h1>Synchronise Changes</h1>
                            <p>Synchronise data amongst your WordPress instances. If you have several WP instances on your server; sync data between them all at the click of a button.
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
                    <div className="web-boxed web-height">
                        <img src={sh1} alt="web" />
                        <h3>A WordPress hosting environment that is second to non

</h3>
                        <p>Rar offers a managed WordPress hosting environment that is second to none. When you host your WordPress website with us, you'll get access to a highly optimised hosting plan that can be scaled to suit your growing needs.


</p>        
    <p className={moreText ? " show-now" : " show-off"}>
        <p>WordPress is the world’s leading free, open source content management system (CMS). Originally designed for blogging, it has evolved to become the driving force behind many larger-scale websites and the CMS of choice for small and large organisations...

</p>
    </p>
    <button onClick={showNow}>{ moreText ?  <span> Less <i class="fa-solid fa-arrow-up"></i> </span> : <span>Load More <i class="fa-solid fa-arrow-down"></i></span>}</button>

     </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed web-height">
                        <img src={sh2} alt="web" />
                        <h3>WordPress is the world’s leading free, open source content management system
</h3>
                        <p>WordPress is the world’s leading free, open source content management system (CMS). Originally designed for blogging, it has evolved to become the driving force behind many larger-scale websites and the CMS of choice for small and large organisations...

</p>        
    <p className={moreText1 ? " show-now1" : " show-off1"}>
        <p>Rar Hosting offers the best WordPress hosting service the UK has to offer. We are proud of the fact that we are WordPress experts who can help you determine just what it is you are looking for so that you can begin hosting your site within a single afternoon.
</p>
    </p>
    <button onClick={showNow1}>{ moreText1 ?  <span> Less <i class="fa-solid fa-arrow-up"></i> </span> : <span>Load More <i class="fa-solid fa-arrow-down"></i></span>}</button>

     </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed web-height">
                        <img src={sh3} alt="web" />
                        <h3>WordPress hosting experts
</h3>
                        <p>Rar web hosting offers the best WordPress hosting service the UK has to offer. We are proud of the fact that we are WordPress experts who can help you determine just what it is you are looking for so that you can begin hosting your site within a single afternoon.
</p>        
    <p className={moreText2 ? " show-now2" : " show-off2"}>
        <p>WordPress is the world’s leading free, open source content management system (CMS). Originally designed for blogging, it has evolved to become the driving force behind many larger-scale websites and the CMS of choice for small and large organisations...


</p>
    </p>
    <button onClick={showNow2}>{ moreText2 ?  <span> Less <i class="fa-solid fa-arrow-up"></i> </span> : <span>Load More <i class="fa-solid fa-arrow-down"></i></span>}</button>


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
      Should I buy WordPress Hosting or Linux Hosting?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      If you want the best performance for your WordPress website, we’d recommend our WordPress Hosting. It’s optimised to ensure WordPress works at its absolute best. We also provide Linux hosting which can be used for WordPress. But it won’t benefit from the exclusive performance optimisation that you get with Certa-Cache.




      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What security features do you offer?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      We don’t believe in charging you extra for security. Full protection is included in every WordPress package at no extra charge. <br />

Your site is scanned for malware daily, and we’ll help if anything suspicious is revealed. You can also scan on-demand. Our WordPress checksum tool can also protect you against malicious code. You’ll always have daily backups to fall back on, should the worst happen. <br />

We operate a robust Web Application Firewall to prevent hackers inserting code in to your site, and Certa-Protect covers you against brute-force login attacks. You get a free SSL to cover the data that your users enter, and 1 Tbs+ DDoS protection. Two-factor authentication is included with My Certa and we even give you a strong password generator. We also scan and filter your emails, and our data centres are Payment Card Industry compliant.
<br />
Although our WordPress hosting includes the most comprehensive security package available, a web host can’t cover you against every security threat out there.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What are the email sending limits?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
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
                <div className="col-xl-6">
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne4">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4">
      Affordable, professional websites with WordPress ?
      </button>
    </h2>
    <div id="collapseOne4" class="accordion-collapse collapse " aria-labelledby="headingOne4" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      WordPress is easy enough for beginners to manage and technical enough for even the biggest web development companies to use on many of the sites they design. The WordPress platform enables you to quickly customise a template – one of thousands that are freely available – and have a website launched the very same day. No matter how big or small the website you are hosting, WordPress has all the features you could ever need to make your site a huge success. On top of that, WordPress is SEO friendly and the software is designed in such a way as to be easily seen and ranked by the search engines.



      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
      Do you offer WordPress CLI?
      </button>
    </h2>
    <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes,you can code using the WordPress Command Line Interface (CLI). It’s included with all WP installs.



      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
      How does your WordPress Staging tool work?
      </button>
    </h2>
    <div id="collapseThree3" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Trying a small design tweak or something major like a new theme? Being able to test out your changes in a safe, non ‘live’ environment is a blessing. WordPress Staging clones your website to a safe staging environment that only you can see. You can then make a change and watch everything break...without worrying! Once it’s all fixed and you’re happy with the site in staging, just click ‘clone to live’ and your site gets updated. No one will need to know about your development hell…



      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    </section>

    {/* wp extra images */}


    <section className="wp-extra py-5">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="tt-s">
                        <h3>Managed WordPress Hosting With Rar
</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                     <div className="table-data  wp-tb">
                          
                          <ul>
                            <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>The worlds</b> most friendly CMS
                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>Extensive</b>  selection of widgets
                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>One-click</b> installs and upgrades


                    </li>
                    <li className=''><i className="fa-regular fa-circle-check"></i><b>Separate</b>  user and admin accounts

                    </li>
                          </ul>
                        </div>
                </div>
                  <div className="col-xl-4">
                     <div className="table-data wp-tb ">
                          
                          <ul>
                            <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>Flexible</b>  and easy to customise

                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>The ultimate</b>   in SEO

                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>Tens of thousands</b>  of free themes


                    </li>
                    <li className=''><i className="fa-regular fa-circle-check"></i><b>Multi-</b>   language support

                    </li>
                          </ul>
                        </div>
                </div>
                <div className="col-xl-4">
                     <div className="table-data  wp-tb">
                          
                          <ul>
                            <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>Multitude</b>   of plugins


                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>Publishing</b>   tools

                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>Scheduling</b>   publishing tools



                    </li>
                    <li className=''><i className="fa-regular fa-circle-check"></i><b> language support</b>  media management tools

                    </li>
                          </ul>
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
                        <div className="page"> <Link className="links" to="/">Home</Link>   »   WordPress Hosting</div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}
