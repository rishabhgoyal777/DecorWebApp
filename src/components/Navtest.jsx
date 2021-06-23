import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navtest = () => {
  useEffect(() => {
    const M = window.M;
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  });

  return (
    <div>
      <nav>
        <div class="nav-wrapper #212121 grey darken-4 px-8">
          <Link to="/" class="brand-logo">
            Purple Maze
          </Link>
          <Link to="#" data-target="slide-out" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
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
      <ul id="slide-out" class="sidenav #e0e0e0 grey lighten-2">
        {/* <li>
          <div class="user-view">
            <div class="background">
              <img src="images/office.jpg" />
            </div>
            <Link to="#user">
              <img class="circle" src="images/yuna.jpg" />
            </Link>
            <Link to="#name">
              <span class="white-text name">John Doe</span>
            </Link>
            <Link to="#email">
              <span class="white-text email">jdandturk@gmail.com</span>
            </Link>
          </div>
        </li> */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        {/* <li>
          <div class="divider"></div>
        </li> */}
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navtest;
