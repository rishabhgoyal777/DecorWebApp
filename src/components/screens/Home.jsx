import React from "react";
import { Link } from "react-router-dom";
// import Categories from "./Card";

const Home = () => {
  return (
    <div className="body-container">
      <ul class="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div>
            <div className="flex flex-col text-center w-full mb-20">
              <h2
                style={{
                  color: "white",
                  textShadow: "-4px 1px 9px purple",
                  fontWeight: "500",
                }}
                // className="sm:text-5xl text-2xl font-medium title-font mb-4 white-text"
              >
                Interiors Inspired By Innovation
              </h2>
              <h5
                style={{
                  color: "white",
                  textShadow: "-4px 1px 6px black",
                  fontWeight: "bold",
                }}
                className="lg:w-2/3 mx-auto leading-relaxed"
              >
                Wide range of Imported Upholstries, Velvets, Digital Print with
                Multiple Base Options, Budget to Premium Trendy Jacquard fabrics
                and many more... At the best prices with lower MOQ
              </h5>
            </div>
            <div
              style={{
                color: "white",
                textShadow: "-4px 1px 6px black",
                fontWeight: "bold",
              }}
              className="text-center "
            >
              <h5>
                Amazing Designs{" "}
                <span style={{ marginLeft: "7px" }}> Attractive Prices </span>
                <div>Highest Quality</div>
              </h5>
              {/* <h5>Highest Quality</h5> */}
            </div>
            <div className="text-center white-text">
              <a href="/collections">
                <button className="home-button mybtn">All collections</button>
              </a>
            </div>
          </div>
          {/* <div className="flex flex-wrap -m-4">
            <Categories />
            <Categories />
            <Categories />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
