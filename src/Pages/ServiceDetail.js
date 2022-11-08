import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
  const serviceData = useLoaderData();
  const { _id, title, image, description, price, rating } = serviceData;

  return <div></div>;
};

export default ServiceDetail;
