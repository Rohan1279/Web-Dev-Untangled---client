import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, image, description, price, rating } = service;
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
      <figure className="max-w-xl max-h-52 ">
        <img src={image} alt="Shoes" className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}>
            <button className="btn btn-primary">View detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
