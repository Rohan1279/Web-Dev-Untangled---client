import React from "react";
import { FaTrash } from "react-icons/fa";

const ReviewRow = ({ userReview, handleDeleteReview }) => {
  console.log(userReview);
  const { _id, date, reviewText, service_name } = userReview;
  return (
    <tr className="">
      <td>{service_name}</td>
      <td>{reviewText}</td>
      <td>{date}</td>
      <td className="flex justify-center items-center">
        <button className="bg-gray-400 text-black px-2 rounded-md active:scale-95 active:bg-blue-300">
          Update
        </button>
        <div className="divider lg:divider-horizontal"></div>
        <FaTrash
          onClick={() => handleDeleteReview(_id)}
          className="text-white mx-2 active:scale-95 active:text-red-400 transition-all"
        />
      </td>
    </tr>
  );
};

export default ReviewRow;
