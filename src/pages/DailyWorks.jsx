import React, { useEffect, useState } from "react";
import Search from "../assets/images/magnifying-glass 1.png";
import Pencil from "../assets/images/pencil 1.png";
import Trash from "../assets/images/trash (1) 1.png";
import { useSelector } from "react-redux";
import {
  createDailyWork,
  editDailyWork,
  getDailyWorkList,
} from "../api/dailyWorkApi";
const DailyWorks = () => {
  const { user, loading, token, nameList, reportees } = useSelector(
    (state) => state.auth
  );
  const { businessId } = useSelector((state) => state.business);
  const initDailyWorkData = {
    title: "",
    startTime: "",
    endTime: "",
    description: "",
  };
  const [popupOpen, setPopupOpen] = useState(false);
  const [dailyWorkFromData, setDailyWorkFromData] = useState(initDailyWorkData);
  const [dailyWorkList, setDailyWorkList] = useState([]);
  const [createdBy, setCreatedBy] = useState("");
  const [openMode, setOpenMode] = useState("add");
  const [message, setMessage] = useState("");

  const handleGetDailyWorkList = async () => {
    const response = await getDailyWorkList(token, createdBy);
    if (response) {
      setDailyWorkList(response.data.dailyWorkList);
    }
  };
  useEffect(() => {
    if (user) {
      setCreatedBy(user._id);
    }
  }, [user]);
  useEffect(() => {
    if (user && createdBy) {
      handleGetDailyWorkList();
    }
  }, [createdBy]);
  const getCreatedBy = (id) => {
    const user = nameList.find((item) => item._id === id);
    if (user) {
      return user.fullName;
    } else {
      return "";
    }
  };
  const handleCreatedByChange = (e) => {
    setCreatedBy(e.target.value);
  };
  const handleDailyWorkSubmit = async (e) => {
    e.preventDefault();
    if (openMode === "add") {
      const result = await createDailyWork(token, dailyWorkFromData);
      if (!result.error) {
        handleGetDailyWorkList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    } else {
      const result = await editDailyWork(
        token,
        dailyWorkFromData._id,
        dailyWorkFromData
      );
      if (!result.error) {
        handleGetDailyWorkList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    }
  };
  const handleValueChange = (e) => {
    setDailyWorkFromData({
      ...dailyWorkFromData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePopupOpen = (mode, data = null) => {
    setOpenMode(mode);
    setPopupOpen(true);
    if (data) {
      setDailyWorkFromData(data);
    }
  };
  const handlePopupClose = () => {
    setMessage("");
    setDailyWorkFromData(initDailyWorkData);
    setPopupOpen(false);
  };
  return (
    <>
      <div className=" flex justify-between mt-4 mb-4 px-8">
        <h1 className=" text-[#232323] text-3xl font-medium">Daily Works</h1>
        <div className="flex gap-2">
          <div className=" bg-black rounded-full  p-3 flex justify-center items-center">
            <img src={Search} alt="no image" className=" h-4 w-4 " />
          </div>
          <div className=" relative flex gap-2">
            {user && (
              <select
                name="createdBy"
                id=""
                value={createdBy ? createdBy : ""}
                onChange={(e) => handleCreatedByChange(e)}
                className=" py-2 px-4 rounded-lg shadow-inner-dropdown outline-none w-40 appearance-none cursor-pointer"
              >
                <option value={user._id}>{user.fullName}</option>
                <option value="all">All Reportees</option>
                {reportees &&
                  reportees.map((user) => (
                    <option value={user._id} key={user._id}>
                      {user.fullName}
                    </option>
                  ))}
              </select>
            )}

            <div className=" absolute top-1 right-1">
              <svg
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_103_1108)">
                  <path
                    d="M23.1837 13.2326L12.6688 22.3023L2.15381 13.2326L4.02021 11.6227L12.6688 19.0826L21.3173 11.6227L23.1837 13.2326Z"
                    fill="#ADADAD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_103_1108">
                    <rect
                      width="21.7674"
                      height="25.2359"
                      fill="white"
                      transform="matrix(0 -1 1 0 0.0507812 22.3023)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <button
            className=" text-white font-semibold bg-[#3F6FFF] rounded-l-full rounded-r-full px-5 py-1 text-lg "
            onClick={() => handlePopupOpen("add")}
          >
            Add Work
          </button>
        </div>
      </div>
      <div className=" flex-1  overflow-y-auto rounded-lg mx-8 pr-3">
        <div className=" sticky top-0 bg-white grid grid-cols-8 border-b">
          <div className=" pl-8 pr-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Title
          </div>
          {/* <div className=" pl-8 pr-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Description
          </div> */}
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Start Time
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            End TIme
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Created by
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Actions
          </div>
        </div>
        {dailyWorkList.length > 0 &&
          dailyWorkList.map((work) => (
            <div className=" grid grid-cols-8 bg-white" key={work._id}>
              <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2">
                {work.title}
              </div>
              {/* <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2">
                {work.description}
              </div> */}
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] col-span-2">
                {new Date(work.startTime).toLocaleString()}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] col-span-2">
                {new Date(work.endTime).toLocaleString()}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {getCreatedBy(work.createdBy)}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] flex gap-2">
                <div
                  className=" bg-[#8AA7FF] rounded-full h-9 w-9 flex justify-center items-center cursor-pointer"
                  onClick={() => handlePopupOpen("edit", work)}
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
              {openMode === "add" ? "Add New Work" : "Edit Work"}
            </h1>
            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="title" className=" pr-5 font-medium">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={dailyWorkFromData.title}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>
            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="startTime" className=" pr-5 font-medium">
                Start Time
              </label>
              <input
                type="datetime-local"
                id="startTime"
                name="startTime"
                value={dailyWorkFromData.startTime}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>
            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="endTime" className=" pr-5 font-medium">
                End Time
              </label>
              <input
                type="datetime-local"
                id="endTime"
                name="endTime"
                value={dailyWorkFromData.endTime}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3 font-medium">
              <label htmlFor="description" className=" pr-5">
                Description:
              </label>
              <textarea
                name="description"
                id="description"
                value={dailyWorkFromData.description}
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
                  onClick={(e) => handleDailyWorkSubmit(e)}
                >
                  Add
                </button>
              ) : (
                <button
                  className=" bg-[#3F6FFF] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                  onClick={(e) => handleDailyWorkSubmit(e)}
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

export default DailyWorks;
