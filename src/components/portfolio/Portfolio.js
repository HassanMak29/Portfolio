import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/portfolio9.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="ProShop" />
          </div>
          <h3>ProShop eCommerce Website</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HassanMak29/MERN-ProShop-eCommerce"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://proshop-hassan.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Cloudsbay" />
          </div>
          <h3>Cloudsbay eCommerce Website</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HassanMak29/Cloudsbay-ecommerce-front"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://cloudsbay-hassan.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Natours" />
          </div>
          <h3>Natours Website - Book tours and explore the world</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HassanMak29/natours-backend"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://natours-backend-hassan.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Weather app" />
          </div>
          <h3>Weather App</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HassanMak29/javascript-weatherapp"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://javascript-weatherapp-hassan.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Forkify App" />
          </div>
          <h3>Forkify - Find your favourite recipes </h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HassanMak29/forkify-course-project"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://forkify-course-project-hassan.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Omnifood landing page" />
          </div>
          <h3>
            Omnifood - Food that you love, cooked and delivered to your door
            (landing page)
          </h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HassanMak29/Omnifood-course-project"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://omnifood-hassan.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="Natours landing page" />
          </div>
          <h3>Natours - Tours in Nature (landing page)</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HassanMak29/natours-css"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://natours-css-hassan.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="Trillo landing page" />
          </div>
          <h3>Trillo - Your booking app (landing page)</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HassanMak29/trillo-css"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://trillo-hassan.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG9} alt="Bankist app" />
          </div>
          <h3>Bankist App</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/HassanMak29/javascript-bankist-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://javascript-bankist-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
