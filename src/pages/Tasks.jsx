import React, { useEffect, useState } from "react";
import Search from "../assets/images/magnifying-glass 1.png";
import Pencil from "../assets/images/pencil 1.png";
import Trash from "../assets/images/trash (1) 1.png";
import { useSelector } from "react-redux";
import {
  changeTaskStatus,
  createTask,
  editTask,
  getTaskList,
} from "../api/taskApi";
const Tasks = () => {
  const { user, loading, token, nameList, reportees } = useSelector(
    (state) => state.auth
  );
  // const { businessId } = useSelector((state) => state.business);
  const initTaskData = {
    priority: "Medium",
    status: "Pending",
    assigningTo: "",
    createdBy: "",
    taskDescription: "",
    taskTitle: "",
    taskDate: "",
  };
  const [popupOpen, setPopupOpen] = useState(false);
  const [statusPopupOpen, setStatusPopupOpen] = useState(false);
  const [taskFromData, setTaskFromData] = useState(initTaskData);
  const [taskList, setTaskList] = useState([]);
  const [openMode, setOpenMode] = useState("add");
  const [assigneeId, setAssigneeId] = useState("");
  const [status, setStatus] = useState("Completed");
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleGetTaskList = async () => {
    const response = await getTaskList(token, assigneeId);
    if (response) {
      setTaskList(response.data.taskList);
    }
  };
  useEffect(() => {
    if (user && assigneeId) {
      handleGetTaskList();
    }
  }, [assigneeId]);
  useEffect(() => {
    if (user) {
      setAssigneeId(user._id);
      // handleGetTaskList();
    }
  }, [user]);
  const getName = (id) => {
    const user = nameList.find((item) => item._id === id);
    return user.fullName;
  };
  const handleAssigneeIdChange = (e) => {
    setAssigneeId(e.target.value);
  };
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    if (openMode === "add") {
      const result = await createTask(token, taskFromData);
      if (!result.error) {
        handleGetTaskList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    } else {
      const result = await editTask(token, taskFromData._id, taskFromData);
      if (!result.error) {
        handleGetTaskList();
        handlePopupClose();
      } else {
        result.message
          ? setMessage(result.message)
          : setMessage("Unexpected error occurred.");
      }
    }
  };
  const handleChangeStatusSubmit = async (e) => {
    e.preventDefault();

    const result = await changeTaskStatus(token, id, { status: status });
    if (!result.error) {
      handleGetTaskList();
      handleStatusPopupClose();
    } else {
      result.message
        ? setMessage(result.message)
        : setMessage("Unexpected error occurred.");
    }
  };
  const handleValueChange = (e) => {
    setTaskFromData({ ...taskFromData, [e.target.name]: e.target.value });
  };
  const handlePopupOpen = (mode, data = null) => {
    setOpenMode(mode);
    setPopupOpen(true);
    if (data) {
      setTaskFromData(data);
    }
  };
  const handlePopupClose = () => {
    setMessage("");
    setTaskFromData(initTaskData);
    setPopupOpen(false);
  };
  const handleStatusPopupOpen = (id) => {
    setId(id);
    setStatusPopupOpen(true);
  };
  const handleStatusPopupClose = () => {
    setMessage("");
    setId("");
    setStatus("Completed");
    setStatusPopupOpen(false);
  };
  return (
    <>
      <div className=" flex justify-between mt-4 mb-4 px-8">
        <h1 className=" text-[#232323] text-3xl font-medium">Tasks</h1>
        <div className="flex gap-2">
          <div className=" bg-black rounded-full  p-3 flex justify-center items-center">
            <img src={Search} alt="no image" className=" h-4 w-4 " />
          </div>
          <div className=" relative flex gap-2">
            {user && (
              <select
                name="assigneeId"
                id=""
                value={assigneeId ? assigneeId : ""}
                onChange={(e) => handleAssigneeIdChange(e)}
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
            Add Task
          </button>
        </div>
      </div>
      <div className=" flex-1  overflow-y-auto rounded-lg mx-8 pr-3">
        <div className=" sticky top-0 bg-white grid grid-cols-8 border-b">
          <div className=" pl-8 pr-3 py-2 text-lg font-semibold text-[#BAC0D1] col-span-2">
            Title
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Date
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Assigning To
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Created by
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Status
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Priority
          </div>
          <div className=" px-3 py-2 text-lg font-semibold text-[#BAC0D1]">
            Actions
          </div>
        </div>
        {taskList.length > 0 &&
          taskList.map((task) => (
            <div className=" grid grid-cols-8 bg-white" key={task._id}>
              <div className=" py-2 pl-8 pr-3 text-lg font-medium text-[#343434] col-span-2 whitespace-nowrap overflow-hidden text-ellipsis">
                {task.taskTitle}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {new Date(task.taskDate).toLocaleDateString()}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {getName(task.assigningTo)}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {getName(task.createdBy)}
              </div>
              <div
                className="flex gap-1 py-2 px-3 text-lg font-medium text-[#343434] cursor-pointer"
                onClick={() => handleStatusPopupOpen(task._id)}
              >
                {task.status}{" "}
                <svg
                  width="20"
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
              <div className=" py-2 px-3 text-lg font-medium text-[#343434]">
                {task.priority}
              </div>
              <div className=" py-2 px-3 text-lg font-medium text-[#343434] flex gap-2">
                <div
                  className=" bg-[#8AA7FF] rounded-full h-9 w-9 flex justify-center items-center cursor-pointer"
                  onClick={() => handlePopupOpen("edit", task)}
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
              <label htmlFor="taskTitle" className=" pr-5 font-medium">
                Task Title:
              </label>
              <input
                type="text"
                id="taskTitle"
                name="taskTitle"
                value={taskFromData.taskTitle}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="taskDate" className=" pr-5 font-medium">
                Task Date:
              </label>
              <input
                type="date"
                id="taskDate"
                name="taskDate"
                value={taskFromData.taskDate}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              />
            </div>

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="status" className=" pr-5 font-medium">
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={taskFromData.status}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              >
                <option value="Pending">Pending</option>
                <option value="In_Progress">In_Progress</option>
                <option value="Completed">Completed</option>
                <option value="ON_Hold">ON_Hold</option>
              </select>
            </div>
            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="priority" className=" pr-5 font-medium">
                Priority:
              </label>
              <select
                id="priority"
                name="priority"
                value={taskFromData.priority}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="assigningTo" className=" pr-5 font-medium">
                Assign To:
              </label>
              <select
                id="assigningTo"
                name="assigningTo"
                value={taskFromData.assigningTo}
                onChange={(e) => handleValueChange(e)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              >
                <option value="">---Select Assignee---</option>
                <option value={user._id}>{user.fullName}</option>
                {reportees &&
                  reportees.map((user) => (
                    <option value={user._id} key={user._id}>
                      {user.fullName}
                    </option>
                  ))}
              </select>
            </div>

            <div className=" py-3 grid grid-cols-3 font-medium">
              <label htmlFor="taskDescription" className=" pr-5">
                Task Description:
              </label>
              <textarea
                name="taskDescription"
                id="taskDescription"
                value={taskFromData.taskDescription}
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
                  onClick={(e) => handleTaskSubmit(e)}
                >
                  Add
                </button>
              ) : (
                <button
                  className=" bg-[#3F6FFF] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                  onClick={(e) => handleTaskSubmit(e)}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {statusPopupOpen && (
        <div className=" absolute left-0 top-0 right-0 bottom-0  flex  justify-center items-center bg-black bg-opacity-75">
          <div className=" bg-white rounded-3xl py-5 px-8">
            <h1 className=" text-3xl font-semibold text-center mb-6">
              Add Task Status
            </h1>

            <div className=" py-3 grid grid-cols-3">
              <label htmlFor="status" className=" pr-5 font-medium">
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className=" col-span-2 bg-[#DCE5FF] rounded-lg py-1 shadow-inner-custom outline-none px-3"
              >
                <option value="Pending">Pending</option>
                <option value="In_Progress">In_Progress</option>
                <option value="Completed">Completed</option>
                <option value="ON_Hold">ON_Hold</option>
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
                onClick={handleStatusPopupClose}
              >
                Cancel
              </button>

              <button
                className=" bg-[#3F6FFF] py-1 px-7 rounded-lg text-white font-semibold text-lg"
                onClick={(e) => handleChangeStatusSubmit(e)}
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

export default Tasks;
