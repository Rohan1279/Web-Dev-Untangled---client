import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../contexts/AuthProvider";
import ServiceReviews from "./ServiceReview";

const ServiceDetail = () => {
  const [review, setReview] = useState({});
  const serviceData = useLoaderData();
  const { _id, title, image, description, price, rating } = serviceData;
  const { user } = useContext(Authcontext);
  const { displayName, email, photoURL } = user;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review added successfully");
          console.log(data);
          e.target.reset();
        }
      });
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newReview = {
      user_email: email,
      user_name: displayName,
      user_photoURL: photoURL,
      service_id: _id,
      service_name: title,
      ...review,
    };
    newReview[field] = value;
    setReview(newReview);
  };
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
      <ServiceReviews />
      <form className="grid grid-cols-6" onSubmit={handleSubmitReview}>
        <textarea
          onChange={handleInputChange}
          type="text"
          src=""
          alt=""
          name="reviewText"
          placeholder="your review"
          className="input input-bordered  mb-5 mr-3 col-span-5 h-24 p-3"
          required
        />
        <input
          onChange={handleInputChange}
          type="number"
          src=""
          alt=""
          placeholder="rating"
          name="serviceRating"
          className="input input-bordered mb-5 text-center"
          required
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
