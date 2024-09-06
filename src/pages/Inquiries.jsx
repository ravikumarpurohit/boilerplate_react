import React, { useEffect, useState } from "react";
import Search from "../assets/images/magnifying-glass 1.png";
import Pencil from "../assets/images/pencil 1.png";
import Trash from "../assets/images/trash (1) 1.png";
import { getInquiryList } from "../api/inquiryApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCustomerList, getCustomerNameList } from "../api/customerApi";
const Inquiries = () => {
  const { user, loading, token, nameList, reportees } = useSelector(
    (state) => state.auth
  );
  const { businessId } = useSelector((state) => state.business);
  const [inquiryList, setInquiryList] = useState([]);
  const [customerList, setCustomerList] = useState([]);

  const [message, setMessage] = useState("");

  const handleGetInquiryList = async () => {
    const response = await getInquiryList(token, businessId);
    if (response) {
      setInquiryList(response.data.inquiryList);
    }
  };
  const handleGetCustomerList = async () => {
    const response = await getCustomerNameList(token, businessId);

    if (response) {
      setCustomerList(response.data.customerNameList);
    }
  };

  useEffect(() => {
    if (user && businessId) {
      handleGetInquiryList();
      handleGetCustomerList();
    }
  }, [user, businessId]);
  const getCreatedBy = (id) => {
    const user = nameList.find((item) => item._id === id);
    if (user) {
      return user.fullName;
    } else {
      return "";
    }
  };
  const getCustomerName = (id) => {
    const user = customerList && customerList.find((item) => item._id === id);
    if (user) {
      return user.fullName;
    } else {
      return "";
    }
  };

  return (
    <>
      <div className=" flex justify-between mt-4 mb-4 px-8">
        <h1 className=" text-[#232323] text-3xl font-medium">Inquiries</h1>
        <div className="flex gap-2">
          <div className=" bg-black rounded-full  p-3 flex justify-center items-center">
            <img src={Search} alt="no image" className=" h-4 w-4 " />
          </div>
        </div>
      </div>
      <div className=" flex-1  overflow-y-auto rounded-lg mx-8 pr-3">
        <div className=" sticky top-0 bg-white grid grid-cols-9 border-b">
          <div className=" pl-8 pr-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Name
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Quantity
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Offered Price
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Customer
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Created by
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Status
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Date
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Quotations
          </div>
        </div>
        {inquiryList.length > 0 &&
          inquiryList.map((inquiry) => (
            <div className=" grid grid-cols-9 bg-white">
              <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2">
                {inquiry.productName}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {inquiry.quantity}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {inquiry.quotation[inquiry.quotation.length - 1].price}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {getCustomerName(inquiry.customerId)}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {getCreatedBy(inquiry.createdBy)}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {inquiry.status}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {new Date(inquiry.createdDate).toLocaleDateString()}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {inquiry.quotation.length} ,{" "}
                <Link
                  to={`/quotations/${inquiry._id}`}
                  className=" mx-2 text-white font-semibold bg-[#3F6FFF] rounded-l-full rounded-r-full px-3 py-[2px] text-sm"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Inquiries;
