import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../contexts/AuthProvider";
import ServiceReview from "./ServiceReview";

const ServiceDetail = () => {
  const serviceData = useLoaderData();
  const { _id, title, image, description, price, rating } = serviceData;
  const { user } = useContext(Authcontext);

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
      <ServiceReview />
      <form className="grid grid-cols-6">
        <textarea
          type="text"
          src=""
          alt=""
          placeholder="your review"
          className="input input-bordered  mb-5 mr-3 col-span-5 h-24 p-3
        "
        />
        <input
          type="number"
          src=""
          alt=""
          placeholder="rating"
          className="input input-bordered mb-5 text-center
        "
        />
        <input
          type="submit"
          value="Submit review"
          className={`btn btn-accent btn-outline col-span-full w-36 mx-auto  ${
            user?.email ? "" : "btn-disabled"
          }`}
        />
      </form>
    </div>
  );
};

export default ServiceDetail;
