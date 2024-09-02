import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/actions/authActions";

import BGImage from "../assets/images/76 1.png"
import Logo from "../assets/images/Group 1 (1).png"

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });

  // redirect authenticated user to profile screen
  useEffect(() => {
    console.log(`user data ${JSON.stringify(user)}`);
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const handleChange = (e) => {
    console.log(userData);
    setUserData(Object.assign({}, userData, { [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(userLogin(userData));
  };

  return (
    <div className="bg-[#3F6FFF] min-h-screen">
      <div className=" relative flex justify-center items-center bg-gradient-to-t from-[#081129e6] via-[#08112985]   to-[#0811291a]  min-h-screen">
        <img src={BGImage} className=" h-screen w-screen mix-blend-multiply" alt="no image" />
        

      <div className="absolute bg-white p-10 rounded-3xl w-[500px]">
        <div className=" flex flex-col items-center justify-center">
          <img src={Logo} alt="Oswal chemical" className=" h-16 w-16" />
          <h1 className=" text-[#29166F] text-[45px] leading-[20px]   font-medium tracking-wide">Oswal</h1>
          <h1 className=" text-[#6C55BF] text-sm font-medium leading-[40px] tracking-[6px] uppercase pl-1">Chemicals</h1>

        </div>
        <form className=" mt-6">
          <div className="mb-4">
            
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-[#DCE5FF] shadow-inner-custom rounded-r-full rounded-l-full px-5 py-2 outline-none"
              required
            />
          </div>
          <div className="">
            
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
              className="w-full bg-[#DCE5FF] shadow-inner-custom rounded-r-full rounded-l-full px-5 py-2 outline-none"

              required
            />
          </div>
          <div className=" text-end text-xs mt-1 text-black opacity-50 font-medium">Forgot Password ?</div>
          <div className="mb-6 mt-6 flex justify-center">
            <button
              type="button"
              className=" bg-[#3F6FFF] text-white font-medium text-lg rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  py-1 px-12"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </button>
          </div>
          
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
