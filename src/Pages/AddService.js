import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const [service, setService] = useState({});
  const nameRef = useRef("");
  const priceRef = useRef("");
  const descriptionRef = useRef("");
  const photoRef = useRef("");
  const handleAddService = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service added successfully");
          e.target.reset();
        }
      });
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);
    nameRef.current.innerText = newService?.name || "Name";
    priceRef.current.innerText = newService?.price || "";
    descriptionRef.current.innerText = newService?.description || "";
    photoRef.current.src =
      newService?.photoURL || "https://placeimg.com/400/225/arch";
  };

  return (
    <div className=" max-h-screen">
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <div className="lg:flex h-screen justify-center items-center">
        <div className="w-1/3 h-96">
          <div className="card card-compact w-80 h-full bg-base-100 shadow-xl mx-auto">
            <figure className="max-w-xl h-60">
              <img
                ref={photoRef}
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                className="h-full"
              />
            </figure>
            <div className="card-body overflow-y-scroll">
              <h2 ref={nameRef} className="card-title mx-auto">
                Service name
              </h2>
              <p ref={descriptionRef}>Service description</p>
              <div className="text-center">
                <p className="badge badge-warning font-semibold inline-block my-1">
                  Price: $<span ref={priceRef}></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3  m-2">
          <form onSubmit={handleAddService} className=" grid grid-cols-2">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="service name"
              name="name"
              className="input input-bordered  m-2"
            />

            <input
              onChange={handleInputChange}
              type="text"
              placeholder="service price"
              name="price"
              className="input input-bordered m-2"
            />
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="photo url"
              name="photoURL"
              className="input input-bordered m-2 col-span-full"
            />
            <textarea
              onChange={handleInputChange}
              name="description"
              className="textarea textarea-bordered m-2 col-span-full h-28"
              placeholder="service description"
            ></textarea>
            <div className="col-span-full">
              <input type="submit" value="Insert" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
