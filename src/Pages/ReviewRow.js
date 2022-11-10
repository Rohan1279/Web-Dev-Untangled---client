import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewRow = ({ userReview, handleDeleteReview, handleUpdateReview }) => {
  const { _id, date, reviewText, service_name } = userReview;
  const [updatedReview, setupdatedReview] = useState(reviewText);

  const demoFunc = (id) => {
    console.log(id);
  };
  return (
    <tr className="">
      {/* <td>{service_name}</td> */}
      <td>{_id}</td>
      <td>{reviewText}</td>
      <td>{date}</td>
      <td className="flex justify-center items-center">
        {/* <a
          href="#my-modal-2"
          className="bg-gray-400 text-black px-2 rounded-md active:scale-95 active:bg-blue-300"
        >
          Update
        </a> */}
        {/* modal starts */}

        {/* The button to open modal */}
        <label
          htmlFor={`my-modal-${_id}`}
          className="bg-gray-400 text-black px-2 rounded-md active:scale-95 active:bg-blue-300"
        >
          Update
        </label>

        {/* Put this part before </body> tag */}
        <input
          type="checkbox"
          id={`my-modal-${_id}`}
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit your review</h3>
            <input
              className="p-4 my-5 text-center w-full  border-b-2 bg-inherit"
              defaultValue={`${reviewText}`}
              onChange={(e) => setupdatedReview(e.target.value)}
            ></input>
            <div className="modal-action">
              <label
                onClick={() => handleUpdateReview(_id, updatedReview)}
                htmlFor={`my-modal-${_id}`}
                className="btn"
              >
                Update
              </label>
            </div>
          </div>
        </div>

        {/* <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit your review</h3>
            <input
              className="p-4 my-5 text-center w-full  border-b-2 bg-inherit"
              //   defaultValue={`${reviewText}`}
              onChange={(e) => setupdatedReview(e.target.value)}
            ></input>
            <div className="modal-action">
              <a
                // onClick={() => handleUpdateReview(_id, updatedReview)}
                onClick={() => demoFunc(_id)}
                href="#"
                className="btn mx-auto"
              >
                Update
              </a>
            </div>
          </div>
        </div> */}
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
