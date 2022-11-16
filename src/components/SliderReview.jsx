import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import stars from "../images/01/starswebp.webp"


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const SliderReview = () => {
    
  return (
    <>
   <section className="review-section">
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="text-white text-center pb-5">
          We're rated excellent by our customers.


          </h3>
        <Carousel responsive={responsive}>
        <div>
          <div className="review-item">
            <img src={stars} alt="img" />
            <div className="review-item-data">
              <h4>Always really good hosting </h4>
              <p>Always really good hosting and only a few issues that were sortedm out by a excellent customer service.</p>
              <span>Dale</span>
            </div>
          </div>
        </div>
        <div>
          <div className="review-item">
            <img src={stars} alt="img" />
            <div className="review-item-data">
              <h4>Outstanding service and exceptional support </h4>
              <p>Super supportive, helpful, friendly service. Special shout out to Ash and Darren for helping me today. Thank you for your clear explanations and exceptional customer service.</p>
              <span>Alie</span>
            </div>
          </div>
        </div>
        <div>
          <div className="review-item">
            <img src={stars} alt="img" />
            <div className="review-item-data">
              <h4>Excellent service! </h4>
              <p>Absolute flawless, fast, solid, and friendly support from the team at Certa who migrated my 20 accounts from another host.</p>
              <span>F.K</span>
            </div>
          </div>
        </div>
        <div>
          <div className="review-item">
            <img src={stars} alt="img" />
            <div className="review-item-data">
              <h4>amazing support from Joel and the team </h4>
              <p>amazing support from Joel and the team. Been with Certa for over 6 months and can honestly say I have only ever had to contact support twice through my own doings. Cant ask for better</p>
              <span>Derek Dick </span>
            </div>
          </div>
        </div>
        <div>
          <div className="review-item">
            <img src={stars} alt="img" />
            <div className="review-item-data">
              <h4>I migrated from a reliable provider </h4>
              <p>I migrated from a reliable provider who decided to change their business model. Certa Hosting were good to deal with in getting set up and as far as I can tell have maintained good up-time of my sites.</p>
              <span>Chris P </span>
            </div>
          </div>
        </div>
        <div>
          <div className="review-item">
            <img src={stars} alt="img" />
            <div className="review-item-data">
              <h4>Very helpful </h4>
              <p>Very helpful, whenever I've had an issue they have resolved it quickly. Even with technical questions they are great, answer instantly and continue support until the answer is found. </p>
              <span>Mya Wood</span>
            </div>
          </div>
        </div>
        <div>
          <div className="review-item">
            <img src={stars} alt="img" />
            <div className="review-item-data">
              <h4>Outstanding Technical Support </h4>
              <p>Outstanding Technical Support, great service at a great price. I've used many hosts for websites over the years, Certainly is definitely my favourite. Warmly recommend these guys.. </p>
              <span>Peter Bruce</span>
            </div>
          </div>
        </div>
</Carousel>
        </div>
      </div>
    </div>
   </section>
    </>
  )
}
