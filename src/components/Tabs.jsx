import React from 'react'
import { Link } from 'react-router-dom'
import tabs1 from "../images/01/tabs1.webp"
import tabsBg from  "../images/01/tabsbg.jpg"

export const Tabs = () => {
  return (
    <>
        <section className="tabs-area" style={{background: `url(${tabsBg})`}} >
          <div className="container">
            <div className="row">
              <div className="col">
              <div class="d-flex align-items-start">
      <div class="nav tabs flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Reliable cPanel hosting</button>
        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Powerful VPS Servers</button>
        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">The Journey starts here</button>
        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Professional email packages</button>
        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">True Cloud hosting</button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
          <div className="tabs-content">
              <div className="tabs-head">
                <div className="tabs-img">
                  <img src={tabs1} alt="img" />
                </div>
                <div className="tabs-data">
                  <h3>Reliable cPanel hosting

    </h3>
                </div>
              </div>
              <p>Reliability comes as standard with Certa, that’s why we use cPanel; the industry’s most trusted hosting control panel. Intuitive and extremely user-friendly, cPanel hosting is used by hobbyists and website developers alike to give complete control over their cPanel hosting environment.

    </p> 
    <p>Choose from our three cPanel hosting plans above to get your business online today.

    </p> <p>Our UK tech team are on standby to move you across to Certa with a no downtime guarantee.

    </p>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">

        <div className="tabs-content">
              <div className="tabs-head">
                <div className="tabs-img">
                  <img src={tabs1} alt="img" />
                </div>
                <div className="tabs-data">
                  <h3>Powerful VPS Servers

    </h3>
                </div>
              </div>
              <p>Focus on growing your business while and we will look after your online presence. Certa provide powerful Virtual Private Servers for businesses, developers, designers and web host resellers.

    </p> 
    <p>Our service is FULLY managed - leave the performance, security and updating the server to us and in return you can expect HIGH PERFORMANCE, FAST PAGE LOADING TIMES.

    </p> <p>Relax in the knowledge that we have a 99.9% uptime guarantee – keeping you and your clients online. Our <Link to="/">super-fast SSD VPS</Link> RAID10 storage technology further enhances the performance of your sites.


    </p>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex="0">
        <div className="tabs-content">
              <div className="tabs-head">
                <div className="tabs-img">
                  <img src={tabs1} alt="img" />
                </div>
                <div className="tabs-data">
                  <h3>The Journey starts here

    </h3>
                </div>
              </div>
              <p>From domain name registration to website and email hosts, with technical support every step of the way, Certa is a solution you can count on.


    </p> 
    <p>Start with our domain names; we’ll find you a high-level SEO domain name that works at an affordable price and can be secured in minutes.


    </p> <p>You can manage multiple domain names within an easy-to-use control panel and, when it’s time to renew, you can rest assured our renewal prices are consistently low.

    </p>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
        <div className="tabs-content">
              <div className="tabs-head">
                <div className="tabs-img">
                  <img src={tabs1} alt="img" />
                </div>
                <div className="tabs-data">
                  <h3>An Email package


    </h3>
                </div>
              </div>
              <p>Use your domain name to create a business email address you can be proud of. Our hosted <Link to="premium-email-hosting">email packages </Link>include mailboxes for multiple users, protection from spam and antivirus software as standard.


    </p> 
    <p>Call us on 4304930493493 to find out which package we recommend for your business.


    </p> 
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
    </>
  )
}
