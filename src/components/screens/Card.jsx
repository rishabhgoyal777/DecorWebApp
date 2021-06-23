import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-11 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            style={{ width: "100%", height: "35vh", objectFit: "cover" }}
            className="card-img-top"
            alt={props.imgsrc}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              {props.desc} and make up the bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary mt-2">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>

    // <div className="lg:w-1/3 m:w-1/2 p-4">
    //   <div className="flex relative">
    //     <Link to="/collections">
    //       <img
    //         alt="gallery"
    //         className="absolute inset-0 w-full h-full object-cover object-center"
    //         src="https://images.unsplash.com/photo-1566569533404-51030438440e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXBob2xzdGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    //       />
    //       <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //         <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //           THE SUBTITLE
    //         </h2>
    //         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
    //           Shooting Stars
    //         </h1>
    //         <p className="leading-relaxed">
    //           Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
    //           microdosing tousled waistcoat.
    //         </p>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Card;
