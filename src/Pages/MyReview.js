import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../contexts/AuthProvider";

const MyReview = () => {
  const [userReview, setUserReview] = useState([]);
  const { user } = useContext(Authcontext);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserReview(data);
      });
  }, [user?.email]);
  return (
    <div>
      {userReview.length === 0 ? (
        <p>No reviews were added</p>
      ) : (
        <>
          {" "}
          <div>
            <h2>Reviews found: {userReview.length}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReview;
