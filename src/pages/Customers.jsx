import React, { useEffect, useState } from "react";
import Search from "../assets/images/magnifying-glass 1.png";
import Pencil from "../assets/images/pencil 1.png";
import Trash from "../assets/images/trash (1) 1.png";
import { useSelector } from "react-redux";
import { getCustomerList } from "../api/customerApi";
const Customers = () => {
  const { user, loading, token, nameList } = useSelector((state) => state.auth);
  const { businessId } = useSelector((state) => state.business);

  const [customerList, setCustomerList] = useState([]);
  const [message, setMessage] = useState("");

  const handleGetCustomerList = async () => {
    const response = await getCustomerList(token, businessId);
    if (response) {
      setCustomerList(response.data.customerList);
    }
  };

  useEffect(() => {
    if (user && businessId) {
      handleGetCustomerList();
    }
  }, [user, businessId]);

  const getUserName = (id) => {
    if (nameList) {
      const user = nameList.find((item) => item._id === id);
      return user?.fullName ? user?.fullName : "";
    } else {
      return "";
    }
  };

  return (
    <>
      <div className=" flex justify-between mt-4 mb-4 px-8">
        <h1 className=" text-[#232323] text-3xl font-medium">Customers</h1>
        <div className="flex gap-2">
          <div className=" bg-black rounded-full  p-3 flex justify-center items-center">
            <img src={Search} alt="no image" className=" h-4 w-4 " />
          </div>
        </div>
      </div>
      <div className=" flex-1  overflow-y-auto rounded-lg mx-8 pr-3">
        <div className=" sticky top-0 bg-white grid grid-cols-8 border-b">
          <div className=" pl-8 pr-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Name
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Email
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Mobile
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Gender
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Created By
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Active
          </div>
        </div>
        {customerList.length > 0 &&
          customerList.map((customer) => (
            <div className=" grid grid-cols-8 bg-white" key={customer._id}>
              <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2 whitespace-nowrap overflow-clip text-ellipsis">
                {customer.fullName}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] col-span-2 whitespace-nowrap overflow-clip text-ellipsis">
                {customer.email}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {customer.mobile}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {customer.gender}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {getUserName(customer.createdBy)}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {customer.isActive.toString()}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Customers;
