import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Authcontext } from "../contexts/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  const [userReviews, setUserReviews] = useState([]);
  const { user } = useContext(Authcontext);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserReviews(data);
      });
  }, [user?.email]);
  const handleDeleteReview = (id) => {
    const proceed = window.confirm("Delete the review?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
            const remainingReviews = userReviews.filter(
              (userReview) => userReview._id !== id
            );
            setUserReviews(remainingReviews);
          }
        });
    }
  };
  const handleUpdateReview = (id, updatedReview) => {
    console.log("inside update");
    console.log(updatedReview);
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedReview: updatedReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        const remainingReviews = userReviews.filter(userReview=> userReview._id !== id)
        const reviewToUpdate = userReviews.find(userReview=> userReview._id === id)
        reviewToUpdate.reviewText = updatedReview;
        const newUserReviews  = [reviewToUpdate, ...remainingReviews]
        setUserReviews(newUserReviews)
      });
  };
  return (
    <div>
      {userReviews.length === 0 ? (
        <p className="text-3xl my-5">No reviews were added</p>
      ) : (
        <>
          {" "}
          <div>
            <h2>Reviews found: {userReviews.length}</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Service name</th>
                    <th>Review</th>
                    <th>Date</th>
                    <th className="text-center">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {userReviews.map((userReview) => (
                    <ReviewRow
                      key={userReview._id}
                      userReview={userReview}
                      handleDeleteReview={handleDeleteReview}
                      handleUpdateReview={handleUpdateReview}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReview;
