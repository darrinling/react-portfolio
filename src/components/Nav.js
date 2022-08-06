import React from "react";

const Nav = ({ currentPage, changePage }) => {
  return (
    <header>
      <h1 id="me">Darrin Ling</h1>
      <div className="header-right">
        <a
          className={
            currentPage === "About"
              ? "hover:opacity-75 focus:border-b"
              : "hover:opacity-75"
          }
          href="#About"
          onClick={function () {
            changePage("About");
          }}
        >
          About
        </a>
        <a
          className={
            currentPage === "About"
              ? "hover:opacity-75 focus:border-b"
              : "hover:opacity-75"
          }
          href="#Projects"
          onClick={function () {
            changePage("Projects");
          }}
        >
          Projects
        </a>
        <a
          className={
            currentPage === "About"
              ? "hover:opacity-75 focus:border-b"
              : "hover:opacity-75"
          }
          href="#Contact"
          onClick={function () {
            changePage("Contact");
          }}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Nav;
