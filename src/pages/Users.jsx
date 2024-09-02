import React, { useState } from "react";
import Search from "../assets/images/magnifying-glass 1.png";
import Pencil from "../assets/images/pencil 1.png";
import Trash from "../assets/images/trash (1) 1.png";
const Users = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = (mode, data = null) => {
    setPopupOpen(true);
  };
  return (
    <>
      <div className=" flex justify-between mt-4 mb-4 px-8">
        <h1 className=" text-[#232323] text-3xl font-medium">Products</h1>
        <div className="flex gap-2">
          <div className=" bg-black rounded-full  p-3 flex justify-center items-center">
            <img src={Search} alt="no image" className=" h-4 w-4 " />
          </div>
          <button
            className=" text-white font-semibold bg-[#3F6FFF] rounded-l-full rounded-r-full px-5 py-1 text-lg "
            onClick={handlePopupOpen}
          >
            Add Product
          </button>
        </div>
      </div>
      <div className=" flex-1  overflow-y-auto rounded-lg mx-8 pr-3">
        <div className=" sticky top-0 bg-white grid grid-cols-6 border-b">
          <div className=" pl-8 pr-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Name
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Price
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Created by
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Status
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Actions
          </div>
        </div>
        <div className=" grid grid-cols-6 bg-white">
          <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2">
            Acetone Solvent
          </div>
          <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
            ₹5780
          </div>
          <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
            Bhavya
          </div>
          <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
            Active
          </div>
          <div className=" py-2 px-3 text-lg font-medium text-[#343434] flex gap-2">
            <div className=" bg-[#8AA7FF] rounded-full h-9 w-9 flex justify-center items-center">
              <img src={Pencil} alt="no pencil" className=" h-4 w-4" />
            </div>
            <div className=" bg-[#B05454] rounded-full h-9 w-9 flex justify-center items-center">
              <img src={Trash} alt="no pencil" className=" h-5 w-5" />
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-6 bg-white">
          <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2">
            Acetone Solvent
          </div>
          <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
            ₹5780
          </div>
          <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
            Bhavya
          </div>
          <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
            Active
          </div>
          <div className=" py-2 px-3 text-lg font-medium text-[#343434] flex gap-2">
            <div className=" bg-[#8AA7FF] rounded-full h-9 w-9 flex justify-center items-center">
              <img src={Pencil} alt="no pencil" className=" h-4 w-4" />
            </div>
            <div className=" bg-[#B05454] rounded-full h-9 w-9 flex justify-center items-center">
              <img src={Trash} alt="no pencil" className=" h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {popupOpen && (
        <div className=" absolute left-0 top-0 right-0 bottom-0  flex  justify-center items-center bg-black bg-opacity-75">
          <div className=" bg-white rounded-3xl py-5 px-8">
            <h1 className=" text-3xl font-semibold text-center mb-6">
              Add New Product
            </h1>
            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="name" className=" pr-5 font-medium">
                Product Name:
              </label>
              <input
                type="text"
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="name" className=" pr-5 font-medium">
                Price:
              </label>
              <input
                type="text"
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="name" className=" pr-5 font-medium">
                SKU:
              </label>
              <input
                type="text"
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3 font-medium">
              <label htmlFor="name" className=" pr-5">
                Product Description:
              </label>
              <textarea
                name=""
                id=""
                rows={4}
                className="col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              ></textarea>
            </div>

            <div className=" flex justify-center gap-6 my-5">
              <button className=" bg-[#B05454] py-1 px-7 rounded-lg text-white font-semibold text-lg">
                Cancel
              </button>
              <button className=" bg-[#3F6FFF] py-1 px-7 rounded-lg text-white font-semibold text-lg">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
