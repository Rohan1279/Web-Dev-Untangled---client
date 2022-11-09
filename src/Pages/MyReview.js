import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../contexts/AuthProvider";

const MyReview = () => {
  const [userReview, setUserReview] = useState([]);
  const { user } = useContext(Authcontext);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h2>My review page</h2>
    </div>
  );
};

export default MyReview;
