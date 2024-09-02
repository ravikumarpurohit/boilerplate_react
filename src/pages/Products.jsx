import React, { useEffect, useState } from "react";
import Search from "../assets/images/magnifying-glass 1.png";
import Pencil from "../assets/images/pencil 1.png";
import Trash from "../assets/images/trash (1) 1.png";
import { useSelector } from "react-redux";
import { createProduct, editProduct, getProductList } from "../api/productApi";
const Products = () => {
  const { user, loading, token, nameList } = useSelector((state) => state.auth);
  const { businessId } = useSelector((state) => state.business);
  const initProductData = {
    name: "",
    price: "",
    sku: "",
    description: "",
    businessId: "",
    status: "",
  };
  const [popupOpen, setPopupOpen] = useState(false);
  const [productFromData, setProductFromData] = useState(initProductData);
  const [productList, setProductList] = useState([]);
  const [openMode, setOpenMode] = useState("add");
  const [message, setMessage] = useState("");

  const handleGetProductList = async () => {
    const response = await getProductList(token, businessId);
    if (response) {
      setProductList(response.data.productList);
    }
  };
  useEffect(() => {
    if (user && businessId) {
      handleGetProductList();
    }
  }, [user, businessId]);
  const getCreatedBy = (id) => {
    const user = nameList.find((item) => item._id === id);
    return user.fullName;
  };
  const handleProductSubmit = async (e) => {
    e.preventDefault();
    if (openMode === "add") {
      setProductFromData({ ...productFromData, businessId: businessId });
      const result = await createProduct(token, productFromData);
      if (!result.error) {
        handleGetProductList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    } else {
      const result = await editProduct(
        token,
        productFromData._id,
        productFromData
      );
      if (!result.error) {
        handleGetProductList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    }
  };
  const handleValueChange = (e) => {
    setProductFromData({ ...productFromData, [e.target.name]: e.target.value });
  };
  const handlePopupOpen = (mode, data = null) => {
    setOpenMode(mode);
    setPopupOpen(true);
    if (data) {
      setProductFromData(data);
    }
  };
  const handlePopupClose = () => {
    setMessage("");
    setProductFromData(initProductData);
    setPopupOpen(false);
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
            onClick={() => handlePopupOpen("add")}
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
        {productList.length > 0 &&
          productList.map((product) => (
            <div className=" grid grid-cols-6 bg-white" key={product._id}>
              <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2">
                {product.name}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                ₹{product.price}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] capitalize">
                {getCreatedBy(product.createdBy)}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] capitalize">
                {product.status}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] flex gap-2">
                <div
                  className=" bg-[#8AA7FF] rounded-full h-9 w-9 flex justify-center items-center cursor-pointer"
                  onClick={() => handlePopupOpen("edit", product)}
                >
                  <img src={Pencil} alt="no pencil" className=" h-4 w-4" />
                </div>
                <div className=" bg-[#B05454] rounded-full h-9 w-9 flex justify-center items-center cursor-pointer">
                  <img src={Trash} alt="no pencil" className=" h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
      </div>

      {popupOpen && (
        <div className=" absolute left-0 top-0 right-0 bottom-0  flex  justify-center items-center bg-black bg-opacity-75">
          <div className=" bg-white rounded-3xl py-5 px-8">
            <h1 className=" text-3xl font-semibold text-center mb-6">
              {openMode === "add" ? "Add New Product" : "Edit Product"}
            </h1>
            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="name" className=" pr-5 font-medium">
                Product Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={productFromData.name}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>
            {openMode === "add" ? (
              <div className=" py-3 grid grid-cols-3">
                <label htmlFor="price" className=" pr-5 font-medium">
                  Price:
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={productFromData.price}
                  onChange={(e) => handleValueChange(e)}
                  className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
                />
              </div>
            ) : (
              <div className=" py-3 grid grid-cols-3">
                <label htmlFor="status" className=" pr-5 font-medium">
                  Status:
                </label>
                <select
                  id="status"
                  name="status"
                  value={productFromData.status}
                  onChange={(e) => handleValueChange(e)}
                  className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="discontinued">Discontinued</option>
                </select>
              </div>
            )}

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="sku" className=" pr-5 font-medium">
                SKU:
              </label>
              <input
                type="text"
                id="sku"
                name="sku"
                value={productFromData.sku}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3 font-medium">
              <label htmlFor="description" className=" pr-5">
                Product Description:
              </label>
              <textarea
                name="description"
                id="description"
                value={productFromData.description}
                onChange={(e) => handleValueChange(e)}
                rows={4}
                className="col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              ></textarea>
            </div>

            {message && (
              <div className=" my-2 text-base text-red-500 font-medium text-center">
                {message}
              </div>
            )}

            <div className=" flex justify-center gap-6 my-5">
              <button
                className=" bg-[#B05454] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                onClick={handlePopupClose}
              >
                Cancel
              </button>
              {openMode === "add" ? (
                <button
                  className=" bg-[#3F6FFF] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                  onClick={(e) => handleProductSubmit(e)}
                >
                  Add
                </button>
              ) : (
                <button
                  className=" bg-[#3F6FFF] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                  onClick={(e) => handleProductSubmit(e)}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
