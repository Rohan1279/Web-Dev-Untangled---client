import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../contexts/AuthProvider";
import ServiceCard from "../Shared/ServiceCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Web Dev Untangled</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}{" "}
      </div>
      <button className="my-5 btn">
        <Link to={"/services"}>See all</Link>
      </button>
    </div>
  );
};

export default Home;
