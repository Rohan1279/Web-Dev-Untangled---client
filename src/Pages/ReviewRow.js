import React from "react";
import { FaTrash } from "react-icons/fa";

const ReviewRow = ({ userReview }) => {
  console.log(userReview);
  const { date, reviewText, service_name } = userReview;
  return (
    <tr className="">
      <td>{service_name}</td>
      <td>{reviewText}</td>
      <td>{date}</td>
      <td className="flex justify-center items-center">
        <button className="">Update</button>
        <div className="divider lg:divider-horizontal"></div>
        <FaTrash  className="text-white mx-2" />
      </td>
    </tr>
  );
};

export default ReviewRow;
