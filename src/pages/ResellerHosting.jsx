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
import reseller from "../images/03/reseller.webp"
import cpanel from "../images/03/cpanel.png"
import whm from "../images/03/whm.webp"
import c1 from "../images/03/cp1.webp"
import c2 from "../images/03/cp2.webp"
import c3 from "../images/03/cp3.webp"
import c4 from "../images/03/cp4.webp"
import c5 from "../images/03/p5.webp"
import c6 from "../images/03/cp6.webp"
import ss from "../images/03/ss.webp"
import rs1 from "../images/03/rs1.webp"
import rs2 from "../images/03/rs2.webp"
import rs3 from "../images/03/rs3.webp"
import rs4 from "../images/03/rs4.webp"
import rs5 from "../images/03/rs5.webp"
import rs6 from "../images/03/rs6.webp"
import rs7 from "../images/03/rs7.webp"
import rs8 from "../images/03/rs8.webp"
import rs9 from "../images/03/rs9.webp"
import sb1 from "../images/03/sb1.png"
import sb2 from "../images/03/sb2.png"
import sb3 from "../images/03/sb3.png"
import sb4 from "../images/03/sb4.png"
import sb5 from "../images/03/sb5.webp"
import sb6 from "../images/03/sb6.png"
import time1 from "../images/03/time1.webp"
import time2 from "../images/03/time2.webp"
import time3 from "../images/03/time3.webp"
import time4 from "../images/03/time4.webp"
import time5 from "../images/03/time5.webp"
import time6 from "../images/03/time6.webp"
import un1 from "../images/03/un1.png"
import un2 from "../images/03/un2.png"
import un3 from "../images/03/un3.png"
import un4 from "../images/03/un4.webp"
import un5 from "../images/03/un5.png"
import un6 from "../images/03/un6.webp"
import un7 from "../images/03/un7.png"
import un8 from "../images/03/un8.webp"
import un9 from "../images/03/un9.webp"
import un10 from "../images/03/un10.webp"
import un11 from "../images/03/un11.png"
import un12 from "../images/03/un12.png"
import payment from "../images/03/payment.webp"

export const ResellerHosting = () => {

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
                        <h2>Reseller Hosting</h2>
                        <h3>UK Web Hosting</h3>
                        <p className='py-2'>Get your reseller business on track with a white label <br /> plan powered by cPanel & WHM


</p>
                    </div>
                    <div className="content-box">
                        <div className="box pr-2">
                            <li><span><i class="fa-regular fa-circle-check"></i></span><b>Free</b>  SSL Certificates


</li>
                            <li><span><i class="fa-regular fa-circle-check"></i></span><b>Live 24/7 </b>support

</li>
                            <li><span><i class="fa-regular fa-circle-check"></i></span><b>Award-winning</b> 5 star service

</li>
                           
                           
                        </div>
                        <div className="box">
                        <li><span><i class="fa-regular fa-circle-check"></i></span><b>Free</b> Daily Backups

</li>                    <li><span><i class="fa-regular fa-circle-check"></i></span><b>Ultra-fast</b>  SSD Web Hosting

</li>
                   <li><span><i class="fa-regular fa-circle-check"></i></span><b>30-day </b>money-back guarantee

</li>
                        </div>
                        
                    </div>
                    <Link to="#" className=" links my-btn">get started now</Link>

                </div>
                <div className="col-xl-5">
                   <div className="home-img">
                    <img src={reseller} alt="img" />
                   </div>
                </div>
            </div>
        </div>
    </div>


{/* web hosting service */}

<section className="hosting-s " style={{background: `url(${webRock})`}}>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="host-title">
                    <h2><b>Super-Fast </b>Reseller Hosting</h2>
                </div>
                <div className="host-extra">
                    <div className="extra-data">
                        <h4>UK-based data centres</h4>
                        <p>Our Resller hosting With cPanel and WHM</p>
                        <div className="d-flex whm-cpanel">
                            <img src={cpanel}  classsName="p-2 d-block" alt="img" />
                            <img src={whm} alt="img" className='ml-2 d-block' />
                        </div>
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

<section className="host-pricing  py-5">
    <div className="container">
    <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="host-pricing">
                    <div className="host-head">
                        <h5>Reseller Lite</h5>
                        <img src={host1} alt="img" />
                        <p>Only</p>
                        <h3>$12.99</h3>
                        <p>Per Month</p>
                        <span>($15.59 including VAT)</span>
                        <Link className=" table-btn" to="/">Buy Now</Link>
                       
                    </div> 
                    <div className="all-data">
                    <div className="table-data some-added">
                            <ul> 
                            <Tooltip title="Website files are stored on hybrid SAS/SSD storage clusters. We already have many hundreds of terabytes of storage deployed – and this can scale instantly as our client base grows">   

<span>   <i className="fa-regular fa-circle-check"></i> 50GB SSD SSD Disc Space 

</span>
</Tooltip>
                                <Tooltip title="We use the industry leading control panel, cPanel.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> 30 cPanel Accounts 
</span>
                            </Tooltip>
                            <Tooltip title="WHM saves you time by automating server management tasks. The control panel can be fully customised to match your branding. ">   

                            <span>   <i className="fa-regular fa-circle-check"></i> WHM Access 
 </span>
                            </Tooltip>
                            <Tooltip title="Your monthly bandwidth allocation determines how much visitor activity hosted websites can receive.  ">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Unlimited Bandwidth 
</span>
                    </Tooltip>

                    <Tooltip title="Free daily backups of your website and store them off-server for up to 30 days. When needed you can simply restore a backup from within your control panel.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Daily Back Ups 
</span>
                    </Tooltip>
                   
                    <Tooltip title="The ability to self install leading software applications with the click of a mouse including Wordpress, Prestshop and Magento.">   

<span>   <i className="fa-regular fa-circle-check"></i> One Click Installs 
 </span>
</Tooltip>       

<Tooltip title="">   

<span>   <i className="fa-regular fa-circle-check"></i> Easy Branding 
 </span>
</Tooltip>
<Tooltip title="">   

<span>   <i className="fa-regular fa-circle-check"></i> R1Soft Self Restore

 </span>
</Tooltip>
                
                    
                   
                    
                            </ul>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                               
                            <Tooltip title="Easily create product names for the services that you wish to offer.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Brand Your Products 


 </span>
                            </Tooltip>
                            <Tooltip title="Completely resell our product offering under your own brand. You do the selling and we will keep your services running.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> White Label 

</span>
                    </Tooltip>

                    <Tooltip title="Generate your own custom name servers. Resell products and your customers wont even know we exist.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Custom Nameservers 

</span>
                    </Tooltip>
                   
                    <Tooltip title="Integrate our reseller API technology into your existing software or storefront.">   

<span>   <i className="fa-regular fa-circle-check"></i> Reseller API 


 </span>
</Tooltip>
<Tooltip title="256-bit SSL Certificate. Remain safe and Google friendly.">   

<span>   <i className="fa-regular fa-circle-check"></i> Free 256-bit SSL Certificate 

 </span>
</Tooltip>
<Tooltip title="A glue record is the IP address of a name server held at the. Domain Name registry. Glue records are required when you wish to set the name servers of a domain name to a hostname under the domain name itself..">   

<span>   <i className="fa-regular fa-circle-check"></i> Glue Records 

 </span>
</Tooltip>
<Tooltip title="Brand your own 404 error pages..">   

<span>   <i className="fa-regular fa-circle-check"></i> Custom 404 Error Pages 

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
                                
                            <Tooltip title="Built in filtering system to keep your inbox virus free, use our suggested setting or set your own threshold.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Mail Virus Filtering 


 </span>
                            </Tooltip>
                            <Tooltip title="Built in filtering system to keep your inbox spam free, use our suggested setting or set your own threshold.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Mail Spam Filtering 


</span>
                    </Tooltip>

                    <Tooltip title="A mailing list is a collection of names and addresses used by an individual or an organization to send material to multiple recipients.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Mailing Lists

</span>
                    </Tooltip>
                   
                    <Tooltip title="Filters your email to make sure it goes straight into the receivers inbox rather than the junk mail.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Out Bound Mail Filitering 

</span>
                    </Tooltip>
                      <Tooltip title="All our reseller services are fully POP 3 and IMAP ready both with and without SSL encryption.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Pop3 / IMAP 

</span>
                    </Tooltip>
                    
                    <Tooltip title="Quickly set up customised auto responder. You can set the subject main text and the duration you would like it to run for.">   

<span>   <i className="fa-regular fa-circle-check"></i> Auto Responders 

</span>
    </Tooltip>
    <Tooltip title="Access your email securely through a web mail client from anywhere that has an internet connection.">   

<span>   <i className="fa-regular fa-circle-check"></i> Secure Webmail 

</span>
    </Tooltip>
    <Tooltip title="Manage your emails though our service with all of our excellent easy to use features.">   

<span>   <i className="fa-regular fa-circle-check"></i> Email Management 

</span>
    </Tooltip>
           
    </ul>
                        </div>
                        {/* table-title */}
                        <div className="table-pricing">
                            <h3>WHM Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Add new users to existing databases, grant specific permissions to each user, change passwords – and more – using our intuitive MySQL User Manager tool.">   

                            <span>  <i class="fa-regular fa-circle-check"></i>Jailed SSH 


</span>
                            </Tooltip>
                            <Tooltip title="A 'shell' like environment where you are locked within a certain directory.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> FTP Control 


 </span>
                            </Tooltip>
                   
                      <Tooltip title="Mod_rewrite manipulates browser-submitted URLs and translates them to deliver content to the browser.">   

<span>   <i className="fa-regular fa-circle-check"></i> Mod_Rewrite Support 


</span>
</Tooltip>         
<Tooltip title="Control of your email">   

<span>   <i className="fa-regular fa-circle-check"></i> Email Control 


</span>
</Tooltip>       <Tooltip title="Control of your database">   

<span>   <i className="fa-regular fa-circle-check"></i> Database Control 


</span>
</Tooltip>       <Tooltip title="Reseller can suspend a customer if any issues arise.">   

<span>   <i className="fa-regular fa-circle-check"></i> Suspension Control 


</span>
</Tooltip>             
                   
                    
                            </ul>
                        </div>
                        <div className="table-pricing">
                            <h3>Back Up Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Instantly restore your own website direct from your cPanel account">   

                            <span>  <i className="fa-regular fa-circle-check"></i>

                            Self Restore 

</span>
                            </Tooltip>
                            <Tooltip title="">   

                            <span>  <i className="fa-regular fa-circle-check"></i>
                            Stored Off-Server 


</span>
                            </Tooltip>
                          
                    
                            </ul>
                        </div>

                        {/* Security Features*/}
                        <div className="table-pricing">
                            <h3>Software</h3>
                        </div> 
                      <div className="added-more-data">
                        <ul>
                            <li>    <i class="fa-regular fa-circle-check"></i> Zend Guard Loader

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Mcrypt

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  ionCube

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Linux One Click Installers

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Git

</li>
            </ul>
                      </div>

                      {/* Web Hosting Software
 */}    
                        <div className="table-pricing">
                            <h3>Network</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Uptime Guarantee


</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> 100% SSD

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> $2.49 pm Dedicated IP Addresses



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Secure UK Data Centre



</li>
  </ul>
                        </div>

                        {/* Web Hosting Features
 */}
                        <div className="table-pricing">
                            <h3>Support
</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Ticket/Email Support


</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Live Chat Support



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Telephone Support



</li>
              </ul>
                        </div>
                        {/* Auto Installers
 */}    
                     <div className="table-pricing">
                            <h3>FTP Accounts</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Full DNS Management

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

                        <div className="table-pricing">
                            <h3>Security Features</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Comprehensive Firewall
</li>
<li>    <i className="fa-regular fa-circle-check"></i> Real Time File Scanning


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Apache Mod_Security


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Cloud Linux


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Password Protected Directories


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Restrict Access By IP


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Hotline / Leech Protection


</li>
<li>    <i className="fa-regular fa-circle-check"></i> SMTP Outbound Filtering


</li>
           </ul>
                            
                        </div>
                       
                        <div className="table-pricing">
                            <h3>Jailed Resources</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> 1 CPU (per cPanel account)
</li>
 <li>    <i className="fa-regular fa-circle-check"></i> 25 Entry Processes (per cPanel account)

</li>
           </ul>
                            
                        </div>
            <div className="table-pricing">
                            <h3>Benefits</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-solid fa-xmark"></i> Free Site Builder</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Up Time Guarantee

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Money Back Guarantee

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> UK Based Servers

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cancel Any Time
 
</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> 24/7 x 365 Onsite Engineers

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cron Jobs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Mcrypt and IonCube PHP

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Mod Sec Application Firewall

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cloud Linux Protected

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> No Monthly Contract

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Online Help Guides

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Tutorial Videos

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Free Pre Sales Support

</li>
                            <li>    <i className="fa-solid fa-xmark"></i> Litespeed</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Reviews

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
                        <h5>Reseller Pro</h5>
                        <img src={host2} alt="img" />
                        <p>Only</p>
                        <h3>$19.99</h3>
                        <p>Per Month</p>
                        <span>($23.99 including VAT)</span>
                        <Link className=" table-btn" to="/">Buy Now</Link>
                       
                    </div> 
                    <div className="all-data">
                    <div className="table-data some-added">
                            <ul> 
                            <Tooltip title="Website files are stored on hybrid SAS/SSD storage clusters. We already have many hundreds of terabytes of storage deployed – and this can scale instantly as our client base grows">   

<span>   <i className="fa-regular fa-circle-check"></i> 100GB SSD SSD Disc Space 

</span>
</Tooltip>
                                <Tooltip title="We use the industry leading control panel, cPanel.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> 60 cPanel Accounts 
</span>
                            </Tooltip>
                            <Tooltip title="WHM saves you time by automating server management tasks. The control panel can be fully customised to match your branding. ">   

                            <span>   <i className="fa-regular fa-circle-check"></i> WHM Access 
 </span>
                            </Tooltip>
                            <Tooltip title="Your monthly bandwidth allocation determines how much visitor activity hosted websites can receive.  ">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Unlimited Bandwidth 
</span>
                    </Tooltip>

                    <Tooltip title="Free daily backups of your website and store them off-server for up to 30 days. When needed you can simply restore a backup from within your control panel.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Daily Back Ups 
</span>
                    </Tooltip>
                   
                    <Tooltip title="The ability to self install leading software applications with the click of a mouse including Wordpress, Prestshop and Magento.">   

<span>   <i className="fa-regular fa-circle-check"></i> One Click Installs 
 </span>
</Tooltip>       

<Tooltip title="">   

<span>   <i className="fa-regular fa-circle-check"></i> Easy Branding 
 </span>
</Tooltip>
<Tooltip title="">   

<span>   <i className="fa-regular fa-circle-check"></i> R1Soft Self Restore

 </span>
</Tooltip>
                
                    
                   
                    
                            </ul>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                               
                            <Tooltip title="Easily create product names for the services that you wish to offer.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Brand Your Products 


 </span>
                            </Tooltip>
                            <Tooltip title="Completely resell our product offering under your own brand. You do the selling and we will keep your services running.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> White Label 

</span>
                    </Tooltip>

                    <Tooltip title="Generate your own custom name servers. Resell products and your customers wont even know we exist.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Custom Nameservers 

</span>
                    </Tooltip>
                   
                    <Tooltip title="Integrate our reseller API technology into your existing software or storefront.">   

<span>   <i className="fa-regular fa-circle-check"></i> Reseller API 


 </span>
</Tooltip>
<Tooltip title="256-bit SSL Certificate. Remain safe and Google friendly.">   

<span>   <i className="fa-regular fa-circle-check"></i> Free 256-bit SSL Certificate 

 </span>
</Tooltip>
<Tooltip title="A glue record is the IP address of a name server held at the. Domain Name registry. Glue records are required when you wish to set the name servers of a domain name to a hostname under the domain name itself..">   

<span>   <i className="fa-regular fa-circle-check"></i> Glue Records 

 </span>
</Tooltip>
<Tooltip title="Brand your own 404 error pages..">   

<span>   <i className="fa-regular fa-circle-check"></i> Custom 404 Error Pages 

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
                                
                            <Tooltip title="Built in filtering system to keep your inbox virus free, use our suggested setting or set your own threshold.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Mail Virus Filtering 


 </span>
                            </Tooltip>
                            <Tooltip title="Built in filtering system to keep your inbox spam free, use our suggested setting or set your own threshold.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Mail Spam Filtering 


</span>
                    </Tooltip>

                    <Tooltip title="A mailing list is a collection of names and addresses used by an individual or an organization to send material to multiple recipients.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Mailing Lists

</span>
                    </Tooltip>
                   
                    <Tooltip title="Filters your email to make sure it goes straight into the receivers inbox rather than the junk mail.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Out Bound Mail Filitering 

</span>
                    </Tooltip>
                      <Tooltip title="All our reseller services are fully POP 3 and IMAP ready both with and without SSL encryption.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Pop3 / IMAP 

</span>
                    </Tooltip>
                    
                    <Tooltip title="Quickly set up customised auto responder. You can set the subject main text and the duration you would like it to run for.">   

<span>   <i className="fa-regular fa-circle-check"></i> Auto Responders 

</span>
    </Tooltip>
    <Tooltip title="Access your email securely through a web mail client from anywhere that has an internet connection.">   

<span>   <i className="fa-regular fa-circle-check"></i> Secure Webmail 

</span>
    </Tooltip>
    <Tooltip title="Manage your emails though our service with all of our excellent easy to use features.">   

<span>   <i className="fa-regular fa-circle-check"></i> Email Management 

</span>
    </Tooltip>
           
    </ul>
                        </div>
                        {/* table-title */}
                        <div className="table-pricing">
                            <h3>WHM Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Add new users to existing databases, grant specific permissions to each user, change passwords – and more – using our intuitive MySQL User Manager tool.">   

                            <span>  <i class="fa-regular fa-circle-check"></i>Jailed SSH 


</span>
                            </Tooltip>
                            <Tooltip title="A 'shell' like environment where you are locked within a certain directory.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> FTP Control 


 </span>
                            </Tooltip>
                   
                      <Tooltip title="Mod_rewrite manipulates browser-submitted URLs and translates them to deliver content to the browser.">   

<span>   <i className="fa-regular fa-circle-check"></i> Mod_Rewrite Support 


</span>
</Tooltip>         
<Tooltip title="Control of your email">   

<span>   <i className="fa-regular fa-circle-check"></i> Email Control 


</span>
</Tooltip>       <Tooltip title="Control of your database">   

<span>   <i className="fa-regular fa-circle-check"></i> Database Control 


</span>
</Tooltip>       <Tooltip title="Reseller can suspend a customer if any issues arise.">   

<span>   <i className="fa-regular fa-circle-check"></i> Suspension Control 


</span>
</Tooltip>             
                   
                    
                            </ul>
                        </div>
                        <div className="table-pricing">
                            <h3>Back Up Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Instantly restore your own website direct from your cPanel account">   

                            <span>  <i className="fa-regular fa-circle-check"></i>

                            Self Restore 

</span>
                            </Tooltip>
                            <Tooltip title="">   

                            <span>  <i className="fa-regular fa-circle-check"></i>
                            Stored Off-Server 


</span>
                            </Tooltip>
                          
                    
                            </ul>
                        </div>

                        {/* Security Features*/}
                        <div className="table-pricing">
                            <h3>Software</h3>
                        </div> 
                      <div className="added-more-data">
                        <ul>
                            <li>    <i class="fa-regular fa-circle-check"></i> Zend Guard Loader

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Mcrypt

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  ionCube

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Linux One Click Installers

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Git

</li>
            </ul>
                      </div>

                      {/* Web Hosting Software
 */}    
                        <div className="table-pricing">
                            <h3>Network</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Uptime Guarantee


</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> 100% SSD

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> $2.49 pm Dedicated IP Addresses



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Secure UK Data Centre



</li>
  </ul>
                        </div>

                        {/* Web Hosting Features
 */}
                        <div className="table-pricing">
                            <h3>Support
</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Ticket/Email Support


</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Live Chat Support



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Telephone Support



</li>
              </ul>
                        </div>
                        {/* Auto Installers
 */}    
                     <div className="table-pricing">
                            <h3>FTP Accounts</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Full DNS Management

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

                        <div className="table-pricing">
                            <h3>Security Features</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Comprehensive Firewall
</li>
<li>    <i className="fa-regular fa-circle-check"></i> Real Time File Scanning


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Apache Mod_Security


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Cloud Linux


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Password Protected Directories


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Restrict Access By IP


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Hotline / Leech Protection


</li>
<li>    <i className="fa-regular fa-circle-check"></i> SMTP Outbound Filtering


</li>
           </ul>
                            
                        </div>
                       
                        <div className="table-pricing">
                            <h3>Jailed Resources</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> 1 CPU (per cPanel account)
</li>
 <li>    <i className="fa-regular fa-circle-check"></i> 25 Entry Processes (per cPanel account)

</li>
           </ul>
                            
                        </div>
            <div className="table-pricing">
                            <h3>Benefits</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-solid fa-xmark"></i> Free Site Builder</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Up Time Guarantee

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Money Back Guarantee

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> UK Based Servers

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cancel Any Time
 
</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> 24/7 x 365 Onsite Engineers

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cron Jobs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Mcrypt and IonCube PHP

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Mod Sec Application Firewall

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cloud Linux Protected

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> No Monthly Contract

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Online Help Guides

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Tutorial Videos

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Free Pre Sales Support

</li>
                            <li>    <i className="fa-solid fa-xmark"></i> Litespeed</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Reviews

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
                        <h5>Reseller Max</h5>
                        <img src={host3} alt="img" />
                        <p>Only</p>
                        <h3>$29.99</h3>
                        <p>Per Month</p>
                        <span>($35.99 including VAT)</span>
                        <Link className=" table-btn" to="/">Buy Now</Link>
                       
                    </div> 
                    <div className="all-data">
                    <div className="table-data some-added">
                            <ul> 
                            <Tooltip title="Website files are stored on hybrid SAS/SSD storage clusters. We already have many hundreds of terabytes of storage deployed – and this can scale instantly as our client base grows">   

<span>   <i className="fa-regular fa-circle-check"></i> Unlimited  SSD SSD Disc Space 

</span>
</Tooltip>
                                <Tooltip title="We use the industry leading control panel, cPanel.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> 100 cPanel Accounts 
</span>
                            </Tooltip>
                            <Tooltip title="WHM saves you time by automating server management tasks. The control panel can be fully customised to match your branding. ">   

                            <span>   <i className="fa-regular fa-circle-check"></i> WHM Access 
 </span>
                            </Tooltip>
                            <Tooltip title="Your monthly bandwidth allocation determines how much visitor activity hosted websites can receive.  ">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Unlimited Bandwidth 
</span>
                    </Tooltip>

                    <Tooltip title="Free daily backups of your website and store them off-server for up to 30 days. When needed you can simply restore a backup from within your control panel.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Daily Back Ups 
</span>
                    </Tooltip>
                   
                    <Tooltip title="The ability to self install leading software applications with the click of a mouse including Wordpress, Prestshop and Magento.">   

<span>   <i className="fa-regular fa-circle-check"></i> One Click Installs 
 </span>
</Tooltip>       

<Tooltip title="">   

<span>   <i className="fa-regular fa-circle-check"></i> Easy Branding 
 </span>
</Tooltip>
<Tooltip title="">   

<span>   <i className="fa-regular fa-circle-check"></i> R1Soft Self Restore

 </span>
</Tooltip>
                
                    
                   
                    
                            </ul>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                               
                            <Tooltip title="Easily create product names for the services that you wish to offer.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Brand Your Products 


 </span>
                            </Tooltip>
                            <Tooltip title="Completely resell our product offering under your own brand. You do the selling and we will keep your services running.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> White Label 

</span>
                    </Tooltip>

                    <Tooltip title="Generate your own custom name servers. Resell products and your customers wont even know we exist.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Custom Nameservers 

</span>
                    </Tooltip>
                   
                    <Tooltip title="Integrate our reseller API technology into your existing software or storefront.">   

<span>   <i className="fa-regular fa-circle-check"></i> Reseller API 


 </span>
</Tooltip>
<Tooltip title="256-bit SSL Certificate. Remain safe and Google friendly.">   

<span>   <i className="fa-regular fa-circle-check"></i> Free 256-bit SSL Certificate 

 </span>
</Tooltip>
<Tooltip title="A glue record is the IP address of a name server held at the. Domain Name registry. Glue records are required when you wish to set the name servers of a domain name to a hostname under the domain name itself..">   

<span>   <i className="fa-regular fa-circle-check"></i> Glue Records 

 </span>
</Tooltip>
<Tooltip title="Brand your own 404 error pages..">   

<span>   <i className="fa-regular fa-circle-check"></i> Custom 404 Error Pages 

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
                                
                            <Tooltip title="Built in filtering system to keep your inbox virus free, use our suggested setting or set your own threshold.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> Mail Virus Filtering 


 </span>
                            </Tooltip>
                            <Tooltip title="Built in filtering system to keep your inbox spam free, use our suggested setting or set your own threshold.">   

                    <span>   <i className="fa-regular fa-circle-check"></i> Mail Spam Filtering 


</span>
                    </Tooltip>

                    <Tooltip title="A mailing list is a collection of names and addresses used by an individual or an organization to send material to multiple recipients.">   

                    <span>   <i className="fa-regular fa-circle-check"></i>  Mailing Lists

</span>
                    </Tooltip>
                   
                    <Tooltip title="Filters your email to make sure it goes straight into the receivers inbox rather than the junk mail.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Out Bound Mail Filitering 

</span>
                    </Tooltip>
                      <Tooltip title="All our reseller services are fully POP 3 and IMAP ready both with and without SSL encryption.">   

                <span>   <i className="fa-regular fa-circle-check"></i> Pop3 / IMAP 

</span>
                    </Tooltip>
                    
                    <Tooltip title="Quickly set up customised auto responder. You can set the subject main text and the duration you would like it to run for.">   

<span>   <i className="fa-regular fa-circle-check"></i> Auto Responders 

</span>
    </Tooltip>
    <Tooltip title="Access your email securely through a web mail client from anywhere that has an internet connection.">   

<span>   <i className="fa-regular fa-circle-check"></i> Secure Webmail 

</span>
    </Tooltip>
    <Tooltip title="Manage your emails though our service with all of our excellent easy to use features.">   

<span>   <i className="fa-regular fa-circle-check"></i> Email Management 

</span>
    </Tooltip>
           
    </ul>
                        </div>
                        {/* table-title */}
                        <div className="table-pricing">
                            <h3>WHM Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Add new users to existing databases, grant specific permissions to each user, change passwords – and more – using our intuitive MySQL User Manager tool.">   

                            <span>  <i class="fa-regular fa-circle-check"></i>Jailed SSH 


</span>
                            </Tooltip>
                            <Tooltip title="A 'shell' like environment where you are locked within a certain directory.">   

                            <span>   <i className="fa-regular fa-circle-check"></i> FTP Control 


 </span>
                            </Tooltip>
                   
                      <Tooltip title="Mod_rewrite manipulates browser-submitted URLs and translates them to deliver content to the browser.">   

<span>   <i className="fa-regular fa-circle-check"></i> Mod_Rewrite Support 


</span>
</Tooltip>         
<Tooltip title="Control of your email">   

<span>   <i className="fa-regular fa-circle-check"></i> Email Control 


</span>
</Tooltip>       <Tooltip title="Control of your database">   

<span>   <i className="fa-regular fa-circle-check"></i> Database Control 


</span>
</Tooltip>       <Tooltip title="Reseller can suspend a customer if any issues arise.">   

<span>   <i className="fa-regular fa-circle-check"></i> Suspension Control 


</span>
</Tooltip>             
                   
                    
                            </ul>
                        </div>
                        <div className="table-pricing">
                            <h3>Back Up Features</h3>
                        </div>
                        <div className="table-data some-added br-extra">
                            <ul> 
                                <Tooltip title="Instantly restore your own website direct from your cPanel account">   

                            <span>  <i className="fa-regular fa-circle-check"></i>

                            Self Restore 

</span>
                            </Tooltip>
                            <Tooltip title="">   

                            <span>  <i className="fa-regular fa-circle-check"></i>
                            Stored Off-Server 


</span>
                            </Tooltip>
                          
                    
                            </ul>
                        </div>

                        {/* Security Features*/}
                        <div className="table-pricing">
                            <h3>Software</h3>
                        </div> 
                      <div className="added-more-data">
                        <ul>
                            <li>    <i class="fa-regular fa-circle-check"></i> Zend Guard Loader

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Mcrypt

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  ionCube

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i>  Linux One Click Installers

</li>
                            <li>    <i class="fa-regular fa-circle-check"></i> Git

</li>
            </ul>
                      </div>

                      {/* Web Hosting Software
 */}    
                        <div className="table-pricing">
                            <h3>Network</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Uptime Guarantee


</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> 100% SSD

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> $2.49 pm Dedicated IP Addresses



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Secure UK Data Centre



</li>
  </ul>
                        </div>

                        {/* Web Hosting Features
 */}
                        <div className="table-pricing">
                            <h3>Support
</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Ticket/Email Support


</li>
                            <li>    <i className="fa-regular fa-circle-check"></i>  Live Chat Support



</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Telephone Support



</li>
              </ul>
                        </div>
                        {/* Auto Installers
 */}    
                     <div className="table-pricing">
                            <h3>FTP Accounts</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Full DNS Management

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

                        <div className="table-pricing">
                            <h3>Security Features</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> Comprehensive Firewall
</li>
<li>    <i className="fa-regular fa-circle-check"></i> Real Time File Scanning


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Apache Mod_Security


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Cloud Linux


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Password Protected Directories


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Restrict Access By IP


</li>
<li>    <i className="fa-regular fa-circle-check"></i> Hotline / Leech Protection


</li>
<li>    <i className="fa-regular fa-circle-check"></i> SMTP Outbound Filtering


</li>
           </ul>
                            
                        </div>
                       
                        <div className="table-pricing">
                            <h3>Jailed Resources</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-regular fa-circle-check"></i> 1 CPU (per cPanel account)
</li>
 <li>    <i className="fa-regular fa-circle-check"></i> 25 Entry Processes (per cPanel account)

</li>
           </ul>
                            
                        </div>
            <div className="table-pricing">
                            <h3>Benefits</h3>
                        </div> 
                        <div className="added-more-data">
                            <ul>
                            <li>    <i className="fa-solid fa-xmark"></i> Free Site Builder</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Up Time Guarantee

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Money Back Guarantee

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> UK Based Servers

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cancel Any Time
 
</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> 24/7 x 365 Onsite Engineers

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cron Jobs

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Mcrypt and IonCube PHP

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Mod Sec Application Firewall

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Cloud Linux Protected

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> No Monthly Contract

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Online Help Guides

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Tutorial Videos

</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Free Pre Sales Support

</li>
                            <li>    <i className="fa-solid fa-xmark"></i> Litespeed</li>
                            <li>    <i className="fa-regular fa-circle-check"></i> Reviews

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
                    <h2>What makes Rar Reseller Hosting special?</h2>
                    </div>
            </div>

        </div>
        <div className="row">
            <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={c1} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Layered SSD storage
</h4>
                        <p>Three layers of <Link to="/cloud-vps-hosting">100% SSD powered hosting</Link> is provided through our SolidFire platform. Our reseller hosting is UK based and ensures data security and protection, without risk of failure.

</p>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={c2} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Ultra-fast hosting for resellers

</h4>
                        <p>The best reseller hosting is fast, reliable and performs impeccably. We can provide this through WHM and cPanel, giving your clients the service they deserve. Why settle for anything else?
</p>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={c3} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>cPanel accounts for all
</h4>
                        <p>Each individual user can login to their own <Link to="/cpanel-hosting"> reseller cPanel account</Link>. You can activate, modift and suspend accounts as needed through a robust and innovative WHM platform.
</p>
                    </div>
                </div>
                
            </div>
             <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={c4} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Monitored and Managed 24/7​</h4>
                        <p>Our UK-based tech support team offer round the clock monitoring, support and security, providing timely response and updates when needed. With our service, you'll provide seamless services to your clients.
</p>
                    </div>
                </div>
                
            </div> 
         <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={c5} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>30-day guarantee
</h4>
                        <p>We aim to provided services that blow you away. It's unlikely, but if you're not completely happy with our service, we offer a 30-day money back guarantee. No quibble.

</p>
                    </div>
                </div>
                
            </div>  
            
        <div className="col-xl-6">
                <div className="special">
                    <div className="special-img">
                        <img src={c6} alt="img" />
                    </div>
                    <div className="special-data">
                        <h4>Offsite backups every day
</h4>
                        <p>Our offsite datacentres securely hold daily backups of all your databases and files. We offer quick recovery directly from your cPanel, allowing you to overcome any issues you may be havinng.
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
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">WHM Control </button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Industry leading Security</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Robust network</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Unlimited email accounts</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">WHM & cPanel access</button>
   
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
      <div className="tabs-content">
          <div className="tabs-head d-block">
            <div className="tabs-img">
              <img src={ss} alt="img" />
            </div>
            <div className="tabs-data mt-2">
                <div className="web-host-tab">
               <p>Automatic weekly security scans will protect your site's files from bad scripts and malware, while our comprehensive firewall will take your security to the next level. Your unlimited reseller hosting sites are protected by Cloud Linux and Apache ModSecurity, protecting the cPanel and WHM accounts from hackers, keeping your data safe. <br />
 
The Best unlimited UK reseller hosting relies on LiteSpeed for scalability and stability to perform certain functions faster than known previously when using Apache.</p>
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
                <h6>Reliable industry leading Security

</h6>
<p>Automatic weekly security scans will protect your site's files from bad scripts and malware, while our comprehensive firewall will take your security to the next level. Your unlimited reseller hosting sites are protected by Cloud Linux and Apache ModSecurity, protecting the cPanel and WHM accounts from hackers, keeping your data safe. <br />

The Best unlimited UK reseller hosting relies on LiteSpeed for scalability and stability to perform certain functions faster than known previously when using Apache.

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
                <h6>Robust network
</h6>
<p>Covered by our 100% cheap reseller hosting cloud network, you can assure your customers of a fast, reliable and secure connection.
</p>
        
        <p>You can offer them a 99.9% uptime guarantee, hosted in our secure UK data centres, with the option of a dedicated IP address using cPanel & WHM.

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
                <h6>Unlimited email accounts
</h6>
<p>All accounts offer unlimited mail boxes. Mail accounts can be set up using POP3, IMAP or accessed by webmail direct from a cPanel account. We also include mail virus and spam filtering and autoresponders as standard.

<br />
<p>Already in business and would like to expand your product line? We've got the perfect solution. The UK's best Reseller hosting with Certa gives you all the benefits of running your own business, but with our built-in infrastructure and support available 24/7.

</p>

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
              <h3>WHM & cPanel access
</h3>
            </div>
          </div>
          <p>With every unlimited UK reseller hosting account with Certa benefit from WHM access - allowing you to easily automate server management tasks, create and manage multiple UK cPanels and configure your own customers' support requests. The control panel can be fully customised to your own brand.
</p> 
<p>Your cPanel can be changed to match your company's branding and user experience. We reduce your efforts in setting up the best hosting business with an easy to use cPanel. Create customisable packages by setting limits such as disk space and exchange email hosting accounts, to sell to your clients.

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
                    <div className="what-title text-center">
                        <h2>Reseller Hosting Features</h2>
                        <p>UK reseller web hosting you can trust. With auto scaling capabilities.

</p>

                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={rs1} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Autoscaling cPanel Accounts</h4>
                                <p>Your plan will include a number of cPanel accounts dependant on the package chosen.

</p>
                            </div>
                        </div>
                    </div>
                    
              

                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={rs2} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Your Branding</h4>
                                <p>Our white label hosting means your name is the only one your client will ever see. You can use our white label branding, or opt for your own.
</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={rs3} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Super-Fast Intel® SSD</h4>
                                <p>Our hosting platform comes with LiteSpeed API and OPcache, offering super fast SSD storage to speed-seeking clients.
</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={rs4} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>WHMCS Licence (Addon)</h4>
                                <p>Add WHMCS licensing to your plan and automate billing services, support tools and more.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={rs5} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Free SSL Certificates</h4>
                                <p>Unlimited FREEE LetsEncrypt SSL certificates help you secure your clients' sites.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={rs6} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>200+ One-Click Apps</h4>
                                <p>Magento, Joomla, <Link to="/wordpress-hosting">WordPress</Link> and more. Over 200 one-click installations; one handy installer.

</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={rs7} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Free Website Builder​</h4>
                                <p>Help your clients build user-friendly responsive sites in just a few clicks with our drag and drop builder.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={rs8} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Anti-Spam Protection</h4>
                                <p>Protect your clients' sites from spam and malware. Robust anti-spam protection for every mailbox.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4 col-md-6">
                        <div className="what-make-box">
                            <div className="what-make-icon">
                                <img src={rs9} alt="what makes" />
                            </div>
                            <div className="what-make-data">
                                <h4>Free Daily Backups</h4>
                                <p>Help your clients access backups and restore lost data for up to 30 days for free.

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
                    <div className="sub-title text-center">
                        <h3>Reseller Hosting Features</h3>
                        <p >Feature rich DDoS protected reseller web hosting plus many other features.
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
                            <h1>Multiple User Accounts</h1>
                            <p>Your clients can have their own hosting accounts with unique login credentials.
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
                            <h1>High Security</h1>
                            <p>Offer highly-secure hosting services through cPanel that are automatically updated.
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
                            <h1>Powerful API</h1>
                            <p>A robust and powerful API helps you to easily manage your client’s accounts.
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
                            <h1>Ease of Use</h1>
                            <p>We have an easy to use intuitive interface that makes handling your account a breeze.
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
                            <h1>CloudLinux & CageFS</h1>
                            <p>CloudLinux’s CageFS technology isolates customer accounts, preventing disclosure.

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
                            <h1>Improved Stability</h1>
                            <p>Disruption of other server users is avoided with LVE technology, even in times of high usage.
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
                <div className="col">
                    <div className="what-title text-center">
                        <h2>Easy every day automation with WHMCS</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={time1} alt="web" />
                        <h3>Time-Saving</h3>
                        <p>Our automated services makes helps you to provide a quality service to your customers, while leaving you with less to do, saving you both time and money.
</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={time2} alt="web" />
                        <h3>Automatic Billing</h3>
                        <p>With automatic billing, you’ll never miss out on a payment again. Our seamless automated payment processing and billing service ensures you get paid.
</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={time3} alt="web" />
                        <h3>Websites & Domains</h3>
                        <p>Easily integrate with a variety of domain registrars and web hosting control panels to provide automation beyond compare.
</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={time4} alt="web" />
                        <h3>Client Support Tools</h3>
                        <p>Offer the ultimate in support in a cleverly designed client area that includes tools such as downloads, ticketing and more.
</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={time5} alt="web" />
                        <h3>Developer Friendly</h3>
                        <p>With flexibility to install and integrate custom templates and modules, and APIs that are documented keenly, you’ll never find a more developer friendly service.
</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="web-boxed">
                        <img src={time6} alt="web" />
                        <h3>Secure & Scalable</h3>
                        <p>No matter what the business size or niche, WHMCS offers a scalable secure solution that is sure to fit your needs.

</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

   

   {/* unlimited ssd */}

   <section className="unlimited-ssd">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="what-title">
                    <h2>UK Unlimited Reseller Hosting with 100% SSD</h2>
                </div>
            </div>
           <div className="ssd">
                        <div className="row">
                            <div className="col-xl-7">
                            <div className="round-">
                            <div className="row pt-4">
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un1} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>100%</h4>
                                            <p>SSD Web Space</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un2} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Unlimited</h4>
                                            <p>MySQL Databases</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un3} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Advanced</h4>
                                            <p>cPanel API Access</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                           <div className="row pt-4">
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un4} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Unlimited</h4>
                                            <p>Bandwidth Transfer</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un5} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Unlimited</h4>
                                            <p>Email Accounts</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un6} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Free</h4>
                                            <p>Daily Backups</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="row pt-4">
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un7} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Autoscaling</h4>
                                            <p>Client Accounts</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un8} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Free</h4>
                                            <p>SSL Certificates</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un9} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Power full</h4>
                                            <p>Malware Scanning</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="row pt-4">
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un10} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Autoscaling</h4>
                                            <p>Websites & Domains</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un11} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>Free</h4>
                                            <p>Website Builder</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4">
                                <div className="ssd-feature ">
                                    <div className="feature ">
                                        <div className="icon-f">
                                            <img src={un12} alt="img" />
                                        </div>
                                        <div className="icon-text">
                                            <h4>WhiteLabel</h4>
                                            <p>Hosting Platform</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="payment-reseller">
                                    <h6>Payment options</h6>
                                    <img src={payment} alt="img" className="d-block" />
                                    <h3>First Month: <b> $12.99</b></h3>
                                    <p>Renews at $12.99 per month, inc. 50 accounts. $0.15/additional account (400 maximum).

</p>                                <Link to="/" className='table-btn'>Get Started Now </Link>
                                </div>
                            </div>
                        </div>
           </div>
        </div>
    </div>
   </section>
   

{/* extra section */}

<section className="wp-extra py-5">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="tt-s">
                        <h3>Why Choose Rar Reseller Hosting</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                     <div className="table-data  wp-tb">
                          
                          <ul>
                            <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>Over 250 </b> one-click Installs.

                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>99.9%</b>   uptime guarantee

                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>WHM/cPanel</b>  control panel.
  </li>
                    <li className=''><i className="fa-regular fa-circle-check"></i><b>SpamExperts</b>   email filter

                    </li>
                          </ul>
                        </div>
                </div>
                  <div className="col-xl-4">
                     <div className="table-data wp-tb ">
                          
                          <ul>
                            <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>SSD</b>   disk space.


                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>Let's Encrypt SSL</b> certificates.

                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>Reseller hosting </b>  migrations.

                    </li>
                    <li className=''><i className="fa-regular fa-circle-check"></i><b>No contracts</b>   or setup fees

                    </li>
                          </ul>
                        </div>
                </div>
                <div className="col-xl-4">
                     <div className="table-data  wp-tb">
                          
                          <ul>
                            <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>100%</b>    cloud network

                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>bit SSL</b>  Free 256  Certificate

                    </li>
                    <li className='some-added'><i className="fa-regular fa-circle-check"></i><b>R1soft</b>    daily backups.


                    </li>
                    <li className=''><i className="fa-regular fa-circle-check"></i><b> 24/7</b>  support.

                    </li>
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
      Are my accounts securely contained on Reseller hosting?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      All accounts are isolated from each other, providing a private and contained environment using CloudLinux.

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
      Yes! You can create packages and accounts that exceed your overall limits.


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
      Can you migrate my sites for me?
      </button>
    </h2>
    <div id="collapseOne4" class="accordion-collapse collapse " aria-labelledby="headingOne4" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     
      Yes, we can almost always help with this! If you have any questions then please contact support.



      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
      What are the email sending limits?
      </button>
    </h2>
    <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample">
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
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
      What are the contract lengths of your service
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
                        <div className="page"> <Link className="links" to="/">Home</Link>   » Reseller Hosting</div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}
