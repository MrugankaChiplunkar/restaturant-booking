import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container ">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is Good Food.</p>
            </div>
            <p className="mid">
            Welcome to The Yellow Chilli, where culinary excellence meets sophisticated ambiance. Nestled in the heart of Pune, our fine dining establishment offers a harmonious blend of impeccable service, exquisite flavors, and luxurious surroundings to elevate every dining experience.At The Yellow Chilli, we believe that dining is more than just a meal; it's an indulgent journey through gastronomic delights. Our talented team of chefs meticulously crafts each dish, sourcing the finest ingredients to create culinary masterpieces that tantalize the palate and ignite the senses.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
