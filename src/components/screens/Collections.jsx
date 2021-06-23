import React from "react";
import carddata from "../../data/db";
import Card from "./Card";

const Collections = () => {
  return (
    <div>
      <div className="my-5">
        <h3 className="text-center">Our Collections</h3>
        <p className="text-center col-8 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo
          eligendi voluptatum veritatis doloribus amet dolore quaerat est omnis
          qui maxime, quisquam aliquid ullam fugiat.
        </p>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {carddata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    desc={val.desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="body-container mybg">
    //   <section class="text-gray-600 body-font">
    //     <div
    //       style={{ backgroundColor: "white" }}
    //       class="container px-5 py-24 mx-auto"
    //     >
    //       <div class="flex flex-col text-center w-full mb-20">
    //         <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
    //           Master Cleanse Reliac Heirloom
    //         </h1>
    //         <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
    //           Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
    //           gentrify, subway tile poke farm-to-table. Franzen you probably
    //           haven't heard of them man bun deep jianbing selfies heirloom.
    //         </p>
    //       </div>
    //       <div class="flex flex-wrap -m-4">
    //         <div class="lg:w-1/3 sm:w-1/2 p-4">
    //           <div class="flex relative">
    //             <img
    //               style={{ objectFit: "fill" }}
    //               alt="gallery"
    //               class="absolute inset-0 w-full h-full object-cover object-center"
    //               src={image1}
    //             />
    //             <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //               <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //                 THE SUBTITLE
    //               </h2>
    //               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                 Shooting Stars
    //               </h1>
    //               <p class="leading-relaxed">
    //                 Photo booth fam kinfolk cold-pressed sriracha leggings
    //                 jianbing microdosing tousled waistcoat.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/3 sm:w-1/2 p-4">
    //           <div class="flex relative">
    //             <img
    //               style={{ objectFit: "fill" }}
    //               alt="gallery"
    //               class="absolute inset-0 w-full h-full object-cover object-center"
    //               src={image2}
    //             />
    //             <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //               <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //                 THE SUBTITLE
    //               </h2>
    //               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                 The Catalyzer
    //               </h1>
    //               <p class="leading-relaxed">
    //                 Photo booth fam kinfolk cold-pressed sriracha leggings
    //                 jianbing microdosing tousled waistcoat.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/3 sm:w-1/2 p-4">
    //           <div class="flex relative">
    //             <img
    //               style={{ objectFit: "fill" }}
    //               alt="gallery"
    //               class="absolute inset-0 w-full h-full object-cover object-center"
    //               src={image3}
    //             />
    //             <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //               <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //                 THE SUBTITLE
    //               </h2>
    //               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                 The 400 Blows
    //               </h1>
    //               <p class="leading-relaxed">
    //                 Photo booth fam kinfolk cold-pressed sriracha leggings
    //                 jianbing microdosing tousled waistcoat.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/3 sm:w-1/2 p-4">
    //           <div class="flex relative">
    //             <img
    //               style={{ objectFit: "fill" }}
    //               alt="gallery"
    //               class="absolute inset-0 w-full h-full object-cover object-center"
    //               src={image4}
    //             />
    //             <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //               <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //                 THE SUBTITLE
    //               </h2>
    //               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                 Neptune
    //               </h1>
    //               <p class="leading-relaxed">
    //                 Photo booth fam kinfolk cold-pressed sriracha leggings
    //                 jianbing microdosing tousled waistcoat.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/3 sm:w-1/2 p-4">
    //           <div class="flex relative">
    //             <img
    //               style={{ objectFit: "fill" }}
    //               alt="gallery"
    //               class="absolute inset-0 w-full h-full object-cover object-center"
    //               src={image5}
    //             />
    //             <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //               <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //                 THE SUBTITLE
    //               </h2>
    //               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                 Holden Caulfield
    //               </h1>
    //               <p class="leading-relaxed">
    //                 Photo booth fam kinfolk cold-pressed sriracha leggings
    //                 jianbing microdosing tousled waistcoat.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/3 sm:w-1/2 p-4">
    //           <div class="flex relative">
    //             <img
    //               style={{ objectFit: "fill" }}
    //               alt="gallery"
    //               class="absolute inset-0 w-full h-full object-cover object-center"
    //               src={image6}
    //             />
    //             <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //               <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //                 THE SUBTITLE
    //               </h2>
    //               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                 Alper Kamu
    //               </h1>
    //               <p class="leading-relaxed">
    //                 Photo booth fam kinfolk cold-pressed sriracha leggings
    //                 jianbing microdosing tousled waistcoat.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Collections;
