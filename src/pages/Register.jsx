import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/authApi";

const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    role: "",
    isActive: true,
    address: {
      address1: "",
      address2: "",
      address3: "",
      city: "",
      state: "",
      country: "",
      postcode: "",
    },
  });

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const mobileRegex = /^[0-9]{10,15}$/;

    if (!userData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(userData.firstName)) {
      newErrors.firstName = "First name should contain only letters";
    }

    if (!userData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(userData.lastName)) {
      newErrors.lastName = "Last name should contain only letters";
    }

    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(userData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // if (!userData.password) {
    //   newErrors.password = "Password is required";
    // } else if (!passwordRegex.test(userData.password)) {
    //   newErrors.password = "Password must be at least 8 characters with at least one letter and one number";
    // }

    if (!userData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(userData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number (10-15 digits)";
    }

    if (!userData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!userData.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    console.log("Submitting:", userData);

    try {
      const response = await signUp(userData);
      console.log("✅ Registered:", response);
      navigate("/login");
    } catch (error) {
      console.error("❌ Registration failed:", error);

      // Handle server-side errors
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert(error?.message || "Something went wrong");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" from-gray-100  flex  px-4">
      <div className=" p-10  w-full max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* First Name */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              className={`w-full border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              placeholder="John"
              required
            />
            {errors.firstName && (
              <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              className={`w-full border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              placeholder="Doe"
              required
            />
            {errors.lastName && (
              <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              placeholder="example@email.com"
              required
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className={`w-full border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              required
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Mobile */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              value={userData.mobile}
              onChange={handleChange}
              className={`w-full border ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              required
            />
            {errors.mobile && (
              <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Gender */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              className={`w-full border ${
                errors.gender ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-sm text-red-500 mt-1">{errors.gender}</p>
            )}
          </div>

          {/* Role */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              name="role"
              value={userData.role}
              onChange={handleChange}
              className={`w-full border ${
                errors.role ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.role && (
              <p className="text-sm text-red-500 mt-1">{errors.role}</p>
            )}
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address 1
            </label>
            <input
              type="text"
              name="address1"
              value={userData.address.address1}
              onChange={handleChange}
              className={`w-full border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              placeholder="Address Line 1"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              value={userData.address.address2}
              onChange={handleChange}
              className={`w-full border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              placeholder="Address Line 2"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address 3
            </label>
            <input
              type="text"
              name="address3"
              value={userData.address.address3}
              onChange={handleChange}
              className={`w-full border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              placeholder="Address Line 3"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={userData.address.city}
              onChange={handleChange}
              className={`w-full border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              placeholder="city"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              country
            </label>
            <input
              type="text"
              name="country"
              value={userData.address.country}
              onChange={handleChange}
              className={`w-full border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              placeholder="country"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postcode
            </label>
            <input
              type="text"
              name="postcode"
              value={userData.address.postcode}
              onChange={handleChange}
              className={`w-full border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#129990]`}
              placeholder="postcode"
              required
            />
          </div>
          {/* Is Active */}
          <div className="col-span-1 flex items-center space-x-2">
            <input
              type="checkbox"
              name="isActive"
              checked={userData.isActive}
              onChange={handleChange}
              className="h-4 w-4 text-[#129990] border-gray-300 rounded focus:ring-[#129990]"
            />
            <label className="text-sm text-gray-700">Active Account</label>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#129990] text-white py-3 rounded-lg text-lg font-semibold transition ${
                isSubmitting
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-[#0e827e]"
              }`}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </div>

          <div className="col-span-1 md:col-span-2 text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#129990] font-medium hover:underline"
            >
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
