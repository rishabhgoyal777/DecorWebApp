import React from "react";

const Footer = () => {
  return (
    <div className="myfoot">
      <footer className="page-footer #424242 grey darken-3">
        <div className="container">
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col col-md-4 col-sm-12 col-12">
              <h5 className="white-text">Purple Maze</h5>
              <p className="grey-text text-lighten-4">
                What your home dreams about
              </p>
              <span style={{ margin: "5px" }} class="inline-flex">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
            <div className="col col-md-4 col-sm-12 col-12">
              <h5 className="white-text">Company</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Home
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Collections
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-md-4 col-sm-12 col-12">
              <h5>Location</h5>
              <p>
                4001-02, New Sardar Traders Market, Puna Kumbharia Road, Surat
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright #212121 grey darken-4">
          <div className="container">
            © 2021 Copyright Purple Maze
            {/* <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
