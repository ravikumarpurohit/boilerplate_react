import React, { useEffect, useState } from "react";
import Search from "../assets/images/magnifying-glass 1.png";
import Pencil from "../assets/images/pencil 1.png";
import Trash from "../assets/images/trash (1) 1.png";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuotationList } from "../api/quotationApi";
const Quotations = () => {
  const { user, loading, token, nameList, reportees } = useSelector(
    (state) => state.auth
  );
  const { businessId } = useSelector((state) => state.business);
  const { orderId } = useParams();
  
  const [quotationList, setQuotationList] = useState([]);

  const [message, setMessage] = useState("");

  const handleGetQuotationList = async () => {
    const response = await getQuotationList(token, orderId);
    if (response) {

      setQuotationList(response.data.quotationList);
    }
  };

  useEffect(() => {
    if (user && orderId) {
      handleGetQuotationList();
    }
  }, [user]);
 
  return (
    <>
      <div className=" flex justify-between mt-4 mb-4 px-8">
        <h1 className=" text-[#232323] text-3xl font-medium">Quotations</h1>
        <div className="flex gap-2">
          <div className=" bg-black rounded-full  p-3 flex justify-center items-center">
            <img src={Search} alt="no image" className=" h-4 w-4 " />
          </div>
        </div>
      </div>
      <div className=" flex-1  overflow-y-auto rounded-lg mx-8 pr-3">
        <div className=" sticky top-0 bg-white grid grid-cols-8 border-b">
          <div className=" pl-8 pr-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Price
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Freight
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Date
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-4">
            Payment Terms
          </div>
        </div>
        {quotationList.length > 0 &&
          quotationList.map((quotation) => (
            <div className=" grid grid-cols-8 bg-white" key={quotation._id}>
              <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434]">
                {quotation.price}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {quotation.freight}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] col-span-2">
                {new Date(quotation.date).toLocaleString()}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] col-span-4 whitespace-nowrap overflow-clip text-ellipsis">
                {quotation.paymentTerms}
              </div>
              
            </div>
          ))}
      </div>
    </>
  );
};

export default Quotations;
