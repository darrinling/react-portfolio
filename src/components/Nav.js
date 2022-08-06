import React from "react";

const Nav = ({ currentPage, changePage }) => {
  return (
    <div>
      Darrin Ling
      <a
        href="#About"
        onClick={function () {
          changePage("About");
        }}
      >
        About
      </a>
      <a
        href="#Projects"
        onClick={function () {
          changePage("Projects");
        }}
      >
        Projects
      </a>
      <a
        href="#Contact"
        onClick={function () {
          changePage("Contact");
        }}
      >
        Contact
      </a>
    </div>
  );
};

export default Nav;
