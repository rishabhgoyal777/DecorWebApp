import React from "react";
import logo1 from "../../images/logo1.jpg";
import logo2 from "../../images/logo2.jpg";

const About = () => {
  return (
    <div className="body-container mybg">
      <section class="text-gray-600 body-font">
        <div
          style={{ backgroundColor: "white" }}
          class="container px-5 py-16 mx-auto flex flex-col"
        >
          <div class="lg:w-4/6 mx-auto">
            <div style={{ height: "18rem" }} class="rounded-lg overflow-hidden">
              <img
                style={{ objectFit: "contain", margin: "auto" }}
                alt="content"
                class="object-cover object-center h-full"
                src={logo1}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-2/3 text-center sm:pr-8 sm:py-8">
                <img src={logo2} alt="" />
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  Purple Maze is a premier home furnishing brand offering wide
                  collections of designs, artistic textures and vibrant colours.
                  We are growing strength to strength with are in house
                  manufacturing facilities. Purple Maze personifies quality and
                  style with its wide range of curtains and upholstery products.
                  As our tagline says
                  <strong> "what your home dreams about"</strong> we truly
                  strive to make our products unique and beautiful giving your
                  home a dream makeover.
                </p>
                {/* <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
