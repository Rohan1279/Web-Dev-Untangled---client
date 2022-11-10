import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewRow = ({ userReview, handleDeleteReview, handleUpdateReview }) => {
  const { _id, date, reviewText, service_name } = userReview;
  const [updatedReview, setupdatedReview] = useState(reviewText);

  return (
    <tr className="">
      <td>{service_name}</td>
      <td>{reviewText}</td>
      <td>{date}</td>
      <td className="flex justify-center items-center">
        <a
          href="#my-modal-2"
          className="bg-gray-400 text-black px-2 rounded-md active:scale-95 active:bg-blue-300"
        >
          Update
        </a>
        {/* modal starts */}
        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit your review</h3>
            <input
              className="p-4 my-5 text-center w-full  border-b-2 bg-inherit"
              defaultValue={`${reviewText}`}
              name="editedReview"
              onChange={(e) => setupdatedReview(e.target.value)}
            ></input>
            <div className="modal-action">
              <a
                onClick={() => handleUpdateReview(_id, updatedReview)}
                href="#"
                className="btn mx-auto"
              >
                Update
              </a>
            </div>
          </div>
        </div>
        {/* modal ends */}
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
