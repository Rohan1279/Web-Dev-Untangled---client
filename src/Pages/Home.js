import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../contexts/AuthProvider";
import ServiceCard from "../Shared/ServiceCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://b6a11-service-review-server-side-rohan1279.vercel.app/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Web Dev Untangled</title>
      </Helmet>
      {/* Hero section starts */}
      <section className="my-12">
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Hi there. Welcome to my platform.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              This is a simple website for online tutors made with React JS and
              uses mongoDB in server side
            </p>
            <div className="flex flex-wrap justify-center">
              <Link to={"/services"}>
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
                >
                  Get started
                </button>
              </Link>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section ends */}
      <section className="dark:bg-gray-800 dark:text-gray-100 my-12">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Learnings
              <span className="dark:text-violet-400">Made</span>Easy write in
              front
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Discover your quests now!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to={"/login"}
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Login
              </Link>
              <Link
                rel="noopener noreferrer"
                to={"/register"}
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="assets/svg/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      <h2 className="text-5xl my-5 text-white">Services I provide</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}{" "}
      </div>
      <button className="my-5 btn">
        <Link to={"/services"}>See all</Link>
      </button>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl my-5">
            Become a member ?
          </h1>
          
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Get started
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
