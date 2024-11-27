import React, { useEffect, useState } from "react";

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { PiChefHatFill } from "react-icons/pi";
import { FaCoffee, FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
const Home = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then(res => res.json())
    .then(data=>setData(data))
  },[data])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted",
                text: "Coffee deleted successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto w-11/12 bg-[#864b34] rounded-3xl py-16 flex flex-col items-center gap-6 mb-16">
      <h2 className="text-4xl font-bold text-white text-center ">
        Our Popular Product
      </h2>
      <button
        onClick={() => {
          navigate("/addCoffee");
        }}
        className="btn bg-yellow-950 text-white border-none rounded-full font-semibold "
      >
        <FaCoffee className="text-xl" />
        Add Coffee
      </button>

      <div className="border-b-4 border-yellow-950 w-full"></div>
      <section className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((coffee) => (
          <div
            className=" shadow-lg shadow-yellow-950    bg-opacity-50 "
            key={coffee._id}
          >
            <div className="bg-yellow-950 glass rounded-t-xl">
              <img className="mx-auto p-4" src={coffee.photo} alt="" />
            </div>
            <div className="glass rounded-b-xl">
              <h1 className="text-yellow-950 glass  text-2xl font-bold text-center py-1">
                {coffee.name}
              </h1>
              <div className="flex items-center justify-between px-4 pt-4">
                <h1 className=" flex items-center gap-1 text-xl font-semibold text-white">
                  <IoMdPricetags /> ${coffee.price}
                </h1>
                <h1 className=" flex items-center gap-1 text-xl font-semibold text-white">
                  <PiChefHatFill /> {coffee.chef}
                </h1>
              </div>
              <div className="flex justify-between items-center p-4 ">
                <Link to={`details/${coffee._id}`}>
                  <button className="btn btn-sm text-white text-xl bg-yellow-900 border-none">
                    <FaEye />
                  </button>
                </Link>
                <Link to={`update/${coffee._id}`}>
                  <button className="btn btn-sm text-white text-xl bg-yellow-950 border-none">
                    <MdEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(coffee._id)}
                  className="btn btn-sm text-white text-xl bg-red-700 border-none"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
