import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            <br/>
            Moksha Restaurant offers a delightful blend of traditional and modern Indian cuisine in a serene and elegant setting. 
            The cozy atmosphere, with its soft lighting and tasteful decor, creates a perfect backdrop for both intimate dinners and lively gatherings.
            Our menu features a rich variety of dishes, from aromatic curries and tandoori specialties to delicious vegetarian options and delectable desserts. 
            Signature dishes like Mughlai Murgh, Paneer Tikka Masala, and Biryani showcase the chef's skill and creativity.
            The beverage menu includes fine wines, handcrafted cocktails, and refreshing non-alcoholic drinks. 
            Our attentive staff is dedicated to providing excellent service, ensuring an exceptional dining experience for every guest.
            Moksha also offers private dining and catering services for special occasions and events. 
            Come and enjoy a culinary journey that celebrates the essence of Indian flavors at Moksha Restaurant.
           
            </p>
            <br/>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
