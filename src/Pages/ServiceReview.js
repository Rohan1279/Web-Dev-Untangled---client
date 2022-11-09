import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../contexts/AuthProvider";
import { FaPlus } from "react-icons/fa";

const ServiceReview = () => {
  const [review, setReview] = useState({});
  const serviceData = useLoaderData();
  const { user } = useContext(Authcontext);

  
  return (
    <div className="card w-full bg-base-100 shadow-xl my-6 px-7">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl text-left">Customer reviews</h2>
        <button className="btn btn-outline">
          <FaPlus className="mr-3" /> Add review
        </button>
      </div>
      <div className="my-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa eos ipsum, labore odio eius maiores provident. Veritatis, provident dolores.</p>
      </div>
    </div>
  );
};

export default ServiceReview;
