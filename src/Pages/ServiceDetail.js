import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
  const serviceData = useLoaderData();
  console.log(serviceData);

  return <div></div>;
};

export default ServiceDetail;
