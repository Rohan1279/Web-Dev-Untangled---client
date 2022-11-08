import React, { useEffect, useState } from "react";

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
    </div>
  );
};

export default Home;
