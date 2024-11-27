import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const price = e.target.price.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const newCoffee = { name, chef, supplier, taste, price, details, photo };
    fetch(`http://localhost:3000/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          console.log("successfully updated");
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="container mx-auto w-11/12 bg-[#864b34] rounded-3xl py-6 flex flex-col items-center gap-6 ">
      <h3 className="text-white font-bold text-3xl ">Update Coffee</h3>

      <form
        onSubmit={handleUpdateCoffee}
        className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 px-6"
      >
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white font-semibold">Name</span>
          </label>
          <input
            defaultValue={coffee.name}
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white font-semibold">Chef</span>
          </label>
          <input
            defaultValue={coffee.chef}
            name="chef"
            type="text"
            placeholder="Chef"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white font-semibold">
              Supplier
            </span>
          </label>
          <input
            defaultValue={coffee.supplier}
            name="supplier"
            type="text"
            placeholder="Supplier"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white font-semibold">Taste</span>
          </label>
          <input
            defaultValue={coffee.taste}
            name="taste"
            type="text"
            placeholder="Taste"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white font-semibold">Price</span>
          </label>
          <input
            defaultValue={coffee.price}
            name="price"
            type="text"
            placeholder="price"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text text-white font-semibold">Details</span>
          </label>
          <input
            defaultValue={coffee.details}
            name="details"
            type="text"
            placeholder="Details"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control col-span-2">
          <label className="label ">
            <span className="label-text text-white font-semibold">
              Photo Url
            </span>
          </label>
          <input
            defaultValue={coffee.photo}
            name="photo"
            type="text"
            placeholder="Photo Url"
            className="input input-bordered "
            required
          />
        </div>
        <button className="btn col-span-2 bg-[#d2b48c] border-yellow-900 border-2 text-xl font-bold">
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default Update;
