import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { Authcontext } from "../contexts/AuthProvider";
import ServiceReviews from "./ServiceReview";

const ServiceDetail = () => {
  const location = useLocation();
  const [review, setReview] = useState({});
  const [allreviews, setAllreviews] = useState([]);
  const serviceData = useLoaderData();
  const { _id, title, image, description, price, rating } = serviceData;
  const { user } = useContext(Authcontext);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service_id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllreviews(data);
      });
    return () => {};
  }, [_id]);
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
          e.target.reset();
        }
      });
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newReview = {
      user_email: user?.email,
      user_name: user?.displayName,
      user_photoURL: user?.photoURL,
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

      <form className="grid grid-cols-6 px-10" onSubmit={handleSubmitReview}>
        {user && user?.email ? (
          <>
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

            <button className="btn btn-outline col-span-full mx-auto">
              <FaPlus className="mr-3" /> Add review
            </button>
          </>
        ) : (
          <div className="col-span-full ">
            <p className="text-xl text-red-300">Please login to add a review</p>
            <Link to={"/login"}>
              <button className="btn my-5">login</button>
            </Link>
          </div>
        )}
      </form>
      <ServiceReviews allreviews={allreviews} />
    </div>
  );
};

export default ServiceDetail;
