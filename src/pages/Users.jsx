import React, { useEffect, useState } from "react";
import Search from "../assets/images/magnifying-glass 1.png";
import Pencil from "../assets/images/pencil 1.png";
import Trash from "../assets/images/trash (1) 1.png";
import { useSelector } from "react-redux";
import { createUser, editUser, getUserList } from "../api/userApi";
import { getBusinessList } from "../api/businessApi";
const Users = () => {
  const { user, loading, token, nameList } = useSelector((state) => state.auth);
  const { businessId } = useSelector((state) => state.business);
  const initUserData = {
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    password: "",
    roleName: "Sales",
    parentId: "",
    // address: {},
    // address1: "",
    // address2: "",
    // address3: "",
    // city: "",
    // state: "",
    // country: "",
    postcode: "",
    business: [],
  };
  const [popupOpen, setPopupOpen] = useState(false);
  const [userFromData, setUserFromData] = useState(initUserData);
  const [userList, setUserList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  const [openMode, setOpenMode] = useState("add");
  const [message, setMessage] = useState("");
  const [selectedBusinessIds, setSelectedBusinessIds] = useState([]);

  const handleCheckValueChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedBusinessIds((prev) => [...prev, value]);
    } else {
      setSelectedBusinessIds((prev) => prev.filter((id) => id !== value));
    }
  };

  const handleGetUserList = async () => {
    const response = await getUserList(token);
    if (response) {
      setUserList(response.data.userList);
    }
  };
  const handleGetBusinessList = async () => {
    const response = await getBusinessList(token);
    if (response) {
      setBusinessList(response.data.businessList);
    }
  };
  useEffect(() => {
    if (user) {
      handleGetUserList();
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      handleGetBusinessList();
    }
  }, [user]);
  const getUserName = (id) => {
    const user = nameList.find((item) => item._id === id);
    return user?.fullName ? user?.fullName : "";
  };
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    if (openMode === "add") {
      const data = {
        fullName: userFromData.fullName,
        email: userFromData.email,
        mobile: userFromData.mobile,
        gender: userFromData.gender,
        password: userFromData.password,
        roleName: userFromData.roleName,
        parentId: userFromData.parentId,
        address: {
          address1: userFromData.address1,
          address2: userFromData.address2,
          address3: userFromData.address3,
          city: userFromData.city,
          state: userFromData.state,
          country: userFromData.country,
          postcode: userFromData.postcode,
        },
        business: selectedBusinessIds,
      };

      const result = await createUser(token, data);
      if (!result.error) {
        handleGetUserList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    } else {
      const data = {
        fullName: userFromData.fullName,
        email: userFromData.email,
        mobile: userFromData.mobile,
        gender: userFromData.gender,
        business: selectedBusinessIds,
        roleName: userFromData.roleName,
        parentId: userFromData.parentId,
        // address: {
        //   address1: userFromData.address1
        //     ? userFromData.address1
        //     : userFromData.address.address1,
        //   address2: userFromData.address2
        //     ? userFromData.address2
        //     : userFromData.address.address2,
        //   address3: userFromData.address3
        //     ? userFromData.address3
        //     : userFromData.address.address3,
        //   city: userFromData.city
        //     ? userFromData.city
        //     : userFromData.address.city,
        //   state: userFromData.state
        //     ? userFromData.state
        //     : userFromData.address.state,
        //   country: userFromData.country
        //     ? userFromData.country
        //     : userFromData.address.country,
        //   postcode: userFromData.postcode
        //     ? userFromData.postcode
        //     : userFromData.address.postcode,
        // },
      };
      const result = await editUser(token, userFromData._id, data);
      if (!result.error) {
        handleGetUserList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    }
  };
  const handleValueChange = (e) => {
    setUserFromData({ ...userFromData, [e.target.name]: e.target.value });
  };
  const handlePopupOpen = (mode, data = null) => {
    setOpenMode(mode);
    setPopupOpen(true);
    if (data) {
      setUserFromData(data);
      setSelectedBusinessIds(data.business);
    }
  };
  const handlePopupClose = () => {
    setMessage("");
    setUserFromData(initUserData);
    setPopupOpen(false);
  };
  return (
    <>
      <div className=" flex justify-between mt-4 mb-4 px-8">
        <h1 className=" text-[#232323] text-3xl font-medium">Users</h1>
        <div className="flex gap-2">
          <div className=" bg-black rounded-full  p-3 flex justify-center items-center">
            <img src={Search} alt="no image" className=" h-4 w-4 " />
          </div>
          <button
            className=" text-white font-semibold bg-[#3F6FFF] rounded-l-full rounded-r-full px-5 py-1 text-lg "
            onClick={() => handlePopupOpen("add")}
          >
            Add User
          </button>
        </div>
      </div>
      <div className=" flex-1  overflow-y-auto rounded-lg mx-8 pr-3">
        <div className=" sticky top-0 bg-white grid grid-cols-9 border-b">
          <div className=" pl-8 pr-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Full Name
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Email
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Mobile
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Role
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Parent
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Email Verify
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Actions
          </div>
        </div>
        {userList.length > 0 &&
          userList.map((user) => (
            <div className=" grid grid-cols-9 bg-white" key={user._id}>
              <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2 whitespace-nowrap overflow-clip text-ellipsis">
                {user.fullName}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] col-span-2 whitespace-nowrap overflow-clip text-ellipsis">
                {user.email}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {user.mobile}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {user.roleName}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {getUserName(user.parentId)}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {user.emailVerify.toString()}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] flex gap-2">
                <div
                  className=" bg-[#8AA7FF] rounded-full h-9 w-9 flex justify-center items-center cursor-pointer"
                  onClick={() => handlePopupOpen("edit", user)}
                >
                  <img src={Pencil} alt="no pencil" className=" h-4 w-4" />
                </div>
                <div className=" bg-[#B05454] rounded-full h-9 w-9 flex justify-center items-center">
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
              {openMode === "add" ? "Add New User" : "Edit User"}
            </h1>
            <div className=" py-3 grid grid-cols-6">
              <label htmlFor="fullName" className=" pr-5 font-medium">
                Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={userFromData.fullName}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
              <label htmlFor="email" className=" px-5 font-medium">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={userFromData.email}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-6">
              <label htmlFor="mobile" className=" pr-5 font-medium">
                Mobile:
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={userFromData.mobile}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />

              <label htmlFor="password" className=" px-5 font-medium">
                Password:
              </label>
              <input
                type="text"
                id="password"
                name="password"
                value={userFromData.password}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-6">
              <label htmlFor="roleName" className=" pr-5 font-medium">
                Role:
              </label>
              <select
                id="roleName"
                name="roleName"
                value={userFromData.roleName}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              >
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="SalesHead">Sales Head</option>
              </select>
              <label htmlFor="parentId" className=" px-5 font-medium">
                Parent:
              </label>
              <select
                id="parentId"
                name="parentId"
                value={userFromData.parentId}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              >
                <option value="">--Select Parent--</option>
                {nameList &&
                  nameList.map((name) => (
                    <option value={name._id} key={name._id}>
                      {name.fullName}
                    </option>
                  ))}
              </select>
            </div>

            <div className=" py-3 grid grid-cols-6">
              <div className=" font-medium">Business</div>
              <div className="flex items-center col-span-2">
                {businessList.length > 0 &&
                  businessList.map((business) => (
                    <div
                      className=" flex items-center gap-1 px-2"
                      key={business._id}
                    >
                      <input
                        type="checkbox"
                        id="business"
                        name="business"
                        value={business._id}
                        checked={selectedBusinessIds.includes(business._id)}
                        onChange={(e) => handleCheckValueChange(e)}
                        className=" bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
                      />
                      <label
                        htmlFor={business._id}
                        className=" pr-5 font-medium"
                      >
                        {business.businessName}
                      </label>
                    </div>
                  ))}
              </div>

              <label htmlFor="gender" className=" px-5 font-medium">
                Gender:
              </label>
              <div className=" col-span-2 flex items-center gap-1">
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value={"Male"}
                  checked={userFromData.gender === "Male"}
                  onChange={(e) => handleValueChange(e)}
                  className=" bg-[#DCE5FF]  outline-none"
                />
                <h1 className=" pr-5">Male</h1>

                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value={"Female"}
                  checked={userFromData.gender === "Female"}
                  onChange={(e) => handleValueChange(e)}
                  className=" bg-[#DCE5FF] outline-none "
                />
                <h1>Female</h1>
              </div>
            </div>
            {/* <div className=" py-3 grid grid-cols-9 ">
              <label htmlFor="address1" className=" pr-3 font-medium">
              Address 1:
              </label>
              <input
              type="text"
                id="address1"
                name="address1"
                value={
                  userFromData.address1
                    ? userFromData.address1
                    : userFromData.address.address1
                }
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              /> */}

            {/* <label htmlFor="address2" className=" px-3 font-medium">
                Address 2:
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={
                  userFromData.address2
                    ? userFromData.address2
                    : userFromData.address.address2
                }
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />

              <label htmlFor="address3" className=" px-3 font-medium">
                Address 3:
              </label>
              <input
                type="address3"
                id="address3"
                name="address3"
                value={
                  userFromData.address3
                    ? userFromData.address3
                    : userFromData.address.address3
                }
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>
            <div className=" py-3 grid grid-cols-9 ">
              <label htmlFor="city" className=" pr-3 font-medium">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={
                  userFromData.city
                    ? userFromData.city
                    : userFromData.address.city
                }
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />

              <label htmlFor="state" className=" col-span-1 px-3 font-medium">
                State:
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={
                  userFromData.state
                    ? userFromData.state
                    : userFromData.address.state
                }
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />

              <label htmlFor="country" className=" px-3 font-medium">
                Country:
              </label>
              <input
                type="address3"
                id="country"
                name="country"
                value={
                  userFromData.country
                    ? userFromData.country
                    : userFromData.address.country
                }
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div> */}

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
                  onClick={(e) => handleUserSubmit(e)}
                >
                  Add
                </button>
              ) : (
                <button
                  className=" bg-[#3F6FFF] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                  onClick={(e) => handleUserSubmit(e)}
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

export default Users;
