import React, { useEffect, useState } from "react";
import Search from "../assets/images/magnifying-glass 1.png";
import Pencil from "../assets/images/pencil 1.png";
import Trash from "../assets/images/trash (1) 1.png";
import { useSelector } from "react-redux";
import {
  approveExpense,
  createExpense,
  editExpense,
  getExpenseList,
} from "../api/expenseApi";
const Expenses = () => {
  const { user, loading, token, nameList, reportees } = useSelector(
    (state) => state.auth
  );
  // const { businessId } = useSelector((state) => state.business);
  const initExpenseData = {
    date: "",
    amount: "",
    // approvedBy: "",
    // createdBy: "",
    description: "",
    title: "",
    // status: "Pending",
    attachments: [],
  };
  const [popupOpen, setPopupOpen] = useState(false);
  const [approvePopupOpen, setApprovePopupOpen] = useState(false);
  const [expenseFromData, setExpenseFromData] = useState(initExpenseData);
  const [expenseList, setExpenseList] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [openMode, setOpenMode] = useState("add");
  const [createdById, setCreatedById] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("approved");
  const [id, setId] = useState("");

  const handleGetExpenseList = async () => {
    const response = await getExpenseList(token, createdById);
    if (response) {
      setExpenseList(response.data.expenseList);
    }
  };
  useEffect(() => {
    if (user) {
      setCreatedById(user._id);
      // handleGetExpenseList();
    }
  }, [user]);
  useEffect(() => {
    if (user && createdById) {
      handleGetExpenseList();
    }
  }, [createdById]);
  const getName = (id) => {
    const user = nameList.find((item) => item._id === id);
    return user ? user.fullName : "";
  };
  const handleCreatedByIdChange = (e) => {
    setCreatedById(e.target.value);
  };
  const handleExpenseSubmit = async (e) => {
    e.preventDefault();
    if (openMode === "add") {
      const data = new FormData();
      data.append("title", expenseFromData.title);
      data.append("description", expenseFromData.description);
      data.append("date", expenseFromData.date);
      data.append("amount", expenseFromData.amount);
      for (let i = 0; i < attachments.length; i++) {
        data.append("attachments", attachments[i]);
      }
      const result = await createExpense(token, data);
      if (!result.error) {
        handleGetExpenseList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    } else {
      const result = await editExpense(
        token,
        expenseFromData._id,
        expenseFromData
      );
      if (!result.error) {
        handleGetExpenseList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    }
  };
  const handleExpenseStatusChange = async (e) => {
    e.preventDefault();

    const data = {
      status: status,
    };

    const result = await approveExpense(token, id, data);
    if (!result.error) {
      handleGetExpenseList();
      handleApprovePopupClose();
    } else {
      result.message
        ? setMessage(result.message)
        : setMessage("Unexpected error occurred.");
    }
  };
  const handleValueChange = (e) => {
    setExpenseFromData({ ...expenseFromData, [e.target.name]: e.target.value });
  };
  const handlePopupOpen = (mode, data = null) => {
    setOpenMode(mode);
    setPopupOpen(true);
    if (data) {
      setExpenseFromData(data);
    }
  };
  const handlePopupClose = () => {
    setMessage("");
    setExpenseFromData(initExpenseData);
    setPopupOpen(false);
  };
  const handleApprovePopupOpen = (id) => {
    setId(id);
    setApprovePopupOpen(true);
  };
  const handleApprovePopupClose = () => {
    setMessage("");
    setId("");
    setStatus("approved");
    setApprovePopupOpen(false);
  };
  return (
    <>
      <div className=" flex justify-between mt-4 mb-4 px-8">
        <h1 className=" text-[#232323] text-3xl font-medium">Products</h1>
        <div className="flex gap-2">
          <div className=" bg-black rounded-full  p-3 flex justify-center items-center">
            <img src={Search} alt="no image" className=" h-4 w-4 " />
          </div>
          <div className=" relative flex gap-2">
            {user && (
              <select
                name="createdById"
                id="createdById"
                value={createdById ? createdById : ""}
                onChange={(e) => handleCreatedByIdChange(e)}
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
            Add Expense
          </button>
        </div>
      </div>
      <div className=" flex-1  overflow-y-auto rounded-lg mx-8 pr-3">
        <div className=" sticky top-0 bg-white grid grid-cols-8 border-b">
          <div className=" pl-8 pr-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Title
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Amount
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Date
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Status
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Created By
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Approved By
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Actions
          </div>
        </div>
        {expenseList.length > 0 &&
          expenseList.map((expense) => (
            <div className=" grid grid-cols-8 bg-white">
              <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2 whitespace-nowrap overflow-clip text-ellipsis">
                {expense.title}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                ₹{expense.amount}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {expense.date
                  ? new Date(expense.date).toLocaleDateString()
                  : ""}
              </div>
              <div
                className=" py-2 px-3 text-lg font-medium text-[#343434] cursor-pointer"
                onClick={() => handleApprovePopupOpen(expense._id)}
              >
                {expense.status}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {getName(expense.createdBy)}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {getName(expense.approvedBy)}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] flex gap-2">
                <div
                  className=" bg-[#8AA7FF] rounded-full h-9 w-9 flex justify-center items-center cursor-pointer"
                  onClick={() => handlePopupOpen("edit", expense)}
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
              {openMode === "add" ? "Add Task" : "Edit Task"}
            </h1>
            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="title" className=" pr-5 font-medium">
                Expense Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={expenseFromData.title}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="date" className=" pr-5 font-medium">
                Expense Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={expenseFromData.date}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="amount" className=" pr-5 font-medium">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={expenseFromData.amount}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="attachments" className=" pr-5 font-medium">
                Attachments
              </label>
              <input
                type="file"
                id="attachments"
                name="attachments"
                onChange={(e) => setAttachments(e.target.files)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
                accept=".jpg, .jpeg, .png"
                multiple={true}
              />
            </div>

            <div className=" py-3 grid grid-cols-3 font-medium">
              <label htmlFor="description" className=" pr-5">
                Expense Description:
              </label>
              <textarea
                name="description"
                id="description"
                value={expenseFromData.description}
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
                  onClick={(e) => handleExpenseSubmit(e)}
                >
                  Add
                </button>
              ) : (
                <button
                  className=" bg-[#3F6FFF] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                  onClick={(e) => handleExpenseSubmit(e)}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {approvePopupOpen && (
        <div className=" absolute left-0 top-0 right-0 bottom-0  flex  justify-center items-center bg-black bg-opacity-75">
          <div className=" bg-white rounded-3xl py-5 px-8">
            <h1 className=" text-3xl font-semibold text-center mb-6">
              Change Expense Status
            </h1>
            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="status" className=" pr-5 font-medium">
                Status:
              </label>
              <select
                type="text"
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              >
                <option value="approved">Approve</option>
                <option value="disapproved">Disapprove</option>
              </select>
            </div>

            {message && (
              <div className=" my-2 text-base text-red-500 font-medium text-center">
                {message}
              </div>
            )}

            <div className=" flex justify-center gap-6 my-5">
              <button
                className=" bg-[#B05454] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                onClick={handleApprovePopupClose}
              >
                Cancel
              </button>

              <button
                className=" bg-[#3F6FFF] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                onClick={(e) => handleExpenseStatusChange(e)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Expenses;
