import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Authcontext } from "../contexts/AuthProvider";
import ReviewRow from "./ReviewRow";
import { Helmet } from "react-helmet-async";

const MyReview = () => {
  const [userReviews, setUserReviews] = useState([]);
  const { user, logOut } = useContext(Authcontext);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUserReviews(data);
      });
  }, [user?.email, logOut, setUserReviews]);
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
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedReview: updatedReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remainingReviews = userReviews.filter(
            (userReview) => userReview._id !== id
          );
          const reviewToUpdate = userReviews.find(
            (userReview) => userReview._id === id
          );
          reviewToUpdate.reviewText = updatedReview;
          const newUserReviews = [reviewToUpdate, ...remainingReviews];
          setUserReviews(newUserReviews);
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>My reviews</title>
      </Helmet>
      {userReviews?.length === 0 ? (
        <p className="text-3xl my-5">No reviews were added</p>
      ) : (
        <>
          {" "}
          <div>
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
                  {userReviews?.map((userReview) => (
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
