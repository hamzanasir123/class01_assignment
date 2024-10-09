import React from "react";
import Styles from "./services.module.css";
import Link from "next/link";

function Page() {
  return (
    <>
      <div className={Styles.div}>
        <span className={Styles.span}>My Services</span>
        <br />
        I offer a range of services to help you build, design, and grow your
        digital presence. <br />
        Whether you’re looking for web development, AI solutions, or consulting,
        <br /> I’m here to provide expert assistance tailored to your needs.
        <br />
        <span className={Styles.span}>Web Development </span>
        <br />
        <h2 className={Styles.h2}>Custom Websites:</h2>
        <p>
          Responsive and modern websites built to reflect your brand and meet
          your business goals.
        </p>
        <h2 className={Styles.h2}>E-commerce Solutions:</h2>
        <p>
          Full e-commerce platforms, including shopping cart functionality,
          payment integration, and user-friendly designs.
        </p>
        <h2 className={Styles.h2}>Web Application Development</h2>
        <p>
          {" "}
          Scalable web applications using the latest technologies like React,
          Next.js, and Node.js.
        </p>
        <span className={Styles.span}>AI & Machine Learning Solutions</span>
        <br />
        <h2 className={Styles.h2}>AI Consulting:</h2>
        <p>Providing strategies to leverage AI in your business.</p>
        <h2 className={Styles.h2}>Custom AI Models: </h2>
        <p>
          {" "}
          Building AI models for predictive analytics, recommendation engines,
          or automation.
        </p>
        <h2 className={Styles.h2}>Natural Language Processing:</h2>
        <p>
          Implementing AI-powered solutions to understand and process human
          language.
        </p>
        <span className={Styles.span}>Consulting & Strategy</span>
        <br />
        <h2 className={Styles.h2}>Tech Consulting:</h2>
        <p>
          {" "}
          Helping businesses identify the right tools and technologies for
          digital transformation.
        </p>
        <h2 className={Styles.h2}>Project Management:</h2>
        <p>
          Guiding your projects from concept to completion with detailed
          planning, execution, and delivery.
        </p>
        <h2 className={Styles.h2}>UI/UX Design: </h2>
        <p>
          Designing intuitive user interfaces and delightful user experiences
          that improve user engagement.
        </p>
        <p>
          Let’s work together to turn your ideas into reality. Contact me for
          more details on how I can help with your next project!
        </p>
        <br />
        <Link href={'/'} className="bg-orange-400 rounded-sm">Go To Home </Link>
    <br/>
    <br/>
      </div>
    </>
  );
}

export default Page;
