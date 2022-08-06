import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // Render page based on state with About page as the default
  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Projects") {
      return <Projects />;
    } else if (currentPage === "About") {
      return <About />;
    }
  };

  const changePage = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} changePage={changePage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
