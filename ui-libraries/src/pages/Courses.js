import React from "react";
import Footer from "../component/Footer.js";
import NavbarComponent from "../component/Navbar.js";
import TableComponent from "../component/Table.js";
import CourseCards from "../component/CourseCards.js";

const Courses = () => {
  return (
    <div>
      <NavbarComponent />
      <CourseCards/>
      <Footer />
    </div>
  );
};

export default Courses;
