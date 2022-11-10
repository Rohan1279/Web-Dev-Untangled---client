import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  if (services.length === 0) {
    return (
      <div className="flex items-center justify-center space-x-2 my-10">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white-400"></div>
      </div>
    );
  } else {
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
  }
};

export default Services;
