import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Found services: {services.length}</p>
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