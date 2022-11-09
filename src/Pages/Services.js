import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard";

const Services = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Services;
