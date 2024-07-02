/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/images.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Question Paper Management Application",
    description:
      "Question Paper Management Application is an Android app made for easy access to previous year question papers by students.",
    Technologies_Used: " Python, Java, Flask, Android Studio.",
    url: "https://github.com/cbitosc/SkillUp-Team-03.git",
  },
  {
    title: "CBIT Binder - Book selling web application",
    description:
      "A user-friendly online bookstore project in which users can log-in or register, view the available books, select books along with their quantity and buy them.",
    Technologies_Used: "Java, JDBC, Servlets,MySQL, HTML,CSS.",
    url: "https://drive.google.com/file/d/1hGpT7VRkwPwYK3tanchFXGM6DGF6pppo/view?usp=share_link",
  },
  {
    title: "Detection and Prevention of Phishing attacks using classification models ",
    description:
      "A detection model based on Machine learning classification models that can categorise a URL into different types, showcasing if it is safe or not is proposed here.",
    Technologies_Used:" Python involving all the basic concepts of feature engineering, model building, testing, and training.",
    url: "https://colab.research.google.com/drive/1b5spuRW1svkjFf4f2olxqnLi9Tngq94t?usp=share_link",
  },
  {
    title: "GitHub Repositories Listing Page ",
    description:
      "An Angular 14+ single-page application (SPA) that takes a GitHub username as input and displays the public GitHub repositories belonging to the user. It also provides a link to the said repositories.",
    Technologies_Used: " Angular 14+ framework, Tailwind, TypeScript, HTML.",
    url: "https://github.com/Juwairiyyah147/fyle-internship-challenge-23.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
