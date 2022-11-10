import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, image, description, price, rating } = service;
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
      <figure className="max-w-xl max-h-52 ">
        <PhotoProvider>
          <div className="foo">
            <PhotoView src={image}>
              <img src={image} alt="" />
            </PhotoView>
          </div>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-between items-center">
          <div className="text-center">
            <p className="badge badge-warning font-semibold inline-block my-1">
              Price: $<span>{price}</span>
            </p>
          </div>
          <Link to={`/service/${_id}`}>
            <button className="btn btn-primary">View detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
