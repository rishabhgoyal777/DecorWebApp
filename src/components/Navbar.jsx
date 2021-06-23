import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";

const Navbar = () => {
  // document.addEventListener("DOMContentLoaded", function () {
  //   var elems = document.querySelectorAll(".sidenav");
  //   var instances = M.Sidenav.init(elems, options);
  // });

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md bg-primary navbar-dark justify-content-between mynav">
          <div className="container-fluid">
            <Link
              style={{
                fontFamily: "Satisfy",
                color: "whitesmoke",
                fontSize: "2.5rem",
              }}
              to="/"
            >
              Purple Maze
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              style={{ justifyContent: "flex-end" }}
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="nav navbar-nav">
                <ul className="mynavli">
                  <li>
                    <button className="button3">
                      <Link to="/">
                        <span>Home</span>
                      </Link>
                    </button>
                  </li>
                  <li>
                    <button className="button3">
                      <Link to="/collections">
                        <span>Collections</span>
                      </Link>
                    </button>
                  </li>

                  <li>
                    <button className="button3">
                      <Link to="/about">
                        <span>About Us</span>
                      </Link>
                    </button>
                  </li>
                  <li>
                    <button className="button3">
                      <Link to="/contact">
                        <span>Contact Us</span>
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* <nav>
          <div className="nav-wrapper #424242 grey darken-3 mynav">
            <Link to="/" className="brand-logo">
              Purple Maze
            </Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul> */}
        {/* <nav>
          <div className="nav-wrapper #424242 grey darken-3 mynav">
            <Link to="/" className="brand-logo left">
              Purple Maze
            </Link>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav> */}
      </header>
    </div>
  );
};

export default Navbar;
