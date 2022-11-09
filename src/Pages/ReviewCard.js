import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ allreview }) => {
  const { reviewText, serviceRating, date, user_name, user_photoURL } =
    allreview;
  return (
    <div className="container flex flex-col w-full p-6 mx-auto my-3 divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={user_photoURL}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{user_name}</h4>
            <span className="text-xs dark:text-gray-400">{date}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 dark:text-yellow-500">
          <FaStar className="w-5 h-5 fill-current" />
          <span className="text-xl font-bold">{serviceRating}</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
