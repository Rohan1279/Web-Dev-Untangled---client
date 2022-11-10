import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Services;
