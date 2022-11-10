import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../contexts/AuthProvider";
import { FaPlus } from "react-icons/fa";
import ReviewCard from "./ReviewCard";

const ServiceReviews = ({ allreviews }) => {
  const serviceData = useLoaderData();
  const { user } = useContext(Authcontext);

  return (
    <div className="card w-full bg-base-100 shadow-xl my-6 px-7">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl text-left">Customer reviews</h2>
      </div>
      <div className="my-5 w-full">
        {allreviews.map((allreview) => (
          <ReviewCard allreview={allreview} key={allreview._id} />
        ))}
      </div>
    </div>
  );
};

export default ServiceReviews;
