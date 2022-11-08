import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
  const serviceData = useLoaderData();
  const { _id, title, image, description, price, rating } = serviceData;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl my-6">
        <figure>
          <img src={image} alt="" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p className="text-left">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-primary p-3">Price: ${price}</div>
            <div className="badge badge-secondary p-3">Rating: {rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
