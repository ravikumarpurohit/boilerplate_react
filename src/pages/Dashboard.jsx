import { useDispatch, useSelector } from "react-redux";
import DashboardLogo from "../assets/images/chemistry 1.png";
import { setBusinessId } from "../redux/slices/businessStoreSlices";

const Dashboard = () => {
  // const { user } = useSelector((state) => state.auth);
  // const { businessId } = useSelector((state) => state.business);
  // const dispatch = useDispatch();
  // console.log(" user in dashboard ", user);
  // const handleBusinessIdChange = (e) => {
  //   dispatch(setBusinessId(e.target.value));
  // };
  return (
    <>
      <div className=" flex justify-between items-center mt-4 mb-4 px-8">
        <div className=" flex items-center gap-2">
          <img src={DashboardLogo} alt="no logo" className=" w-16 h-16" />
          <div>
            <h1 className=" text-black text-3xl font-semibold">Hello Bhavya</h1>
            <h1 className=" text-black opacity-45 text-sm font-semibold">
              Welcome to your dashboard.
            </h1>
          </div>
        </div>
        {/* <div className=" relative flex gap-2">
          <select
            name="businessId"
            id=""
            value={businessId ? businessId : ""}
            onChange={(e) => handleBusinessIdChange(e)}
            className=" py-2 px-4 rounded-lg shadow-inner-dropdown outline-none w-40 appearance-none cursor-pointer"
          >
            {user &&
              user.business.map((business) => (
                <option value={business._id} key={business._id}>
                  {business.businessName}
                </option>
              ))}
          </select>
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
          </div> */}
        {/* <button
            className=" text-white font-semibold bg-[#3F6FFF] rounded-l-full rounded-r-full px-5 py-1 text-lg "
            // onClick={handlePopupOpen}
          >
            Add Product
          </button> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Dashboard;
