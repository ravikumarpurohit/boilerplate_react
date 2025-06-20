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
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    const mobileRegex = /^[0-9]{10,15}$/;
    const postcodeRegex = /^[a-zA-Z0-9\s-]{3,10}$/;

    // Personal Info Validation
    if (!userData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(userData.firstName)) {
      newErrors.firstName = "Minimum 2 letters required";
    }

    if (!userData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(userData.lastName)) {
      newErrors.lastName = "Minimum 2 letters required";
    }

    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(userData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(userData.password)) {
      newErrors.password = "Minimum 8 chars with letter and number";
    }

    if (!userData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(userData.mobile)) {
      newErrors.mobile = "10-15 digits required";
    }

    if (!userData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!userData.role) {
      newErrors.role = "Role is required";
    }

    // Address Validation
    if (!userData.address.address1.trim()) {
      newErrors.address1 = "Address line 1 is required";
    }

    if (!userData.address.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!userData.address.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!userData.address.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!userData.address.postcode.trim()) {
      newErrors.postcode = "Postcode is required";
    } else if (!postcodeRegex.test(userData.address.postcode)) {
      newErrors.postcode = "Invalid postcode format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
  
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1]; 
      setUserData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setUserData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await signUp(userData);
      console.log("✅ Registered:", response);
      navigate("/login", { state: { registered: true } });
    } catch (error) {
      console.error("❌ Registration failed:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ submit: error.message || "Registration failed. Please try again." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
        <p className="text-gray-600 mb-6">Please fill in all required fields</p>

        {errors.submit && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{errors.submit}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Personal Information</h3>
            
            {/* Personal info fields... (keep all your existing personal info fields) */}
            
          </div>

          {/* Address Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Address Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1 *</label>
              <input
                type="text"
                name="address.address1"
                value={userData.address.address1}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.address1 ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#129990]`}
                placeholder="Street address, P.O. box"
              />
              {errors.address1 && <p className="mt-1 text-sm text-red-600">{errors.address1}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
              <input
                type="text"
                name="address.address2"
                value={userData.address.address2}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#129990]"
                placeholder="Apartment, suite, unit, building, floor"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 3</label>
              <input
                type="text"
                name="address.address3"
                value={userData.address.address3}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#129990]"
                placeholder="Additional address info"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input
                  type="text"
                  name="address.city"
                  value={userData.address.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#129990]`}
                  placeholder="City"
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State/Province *</label>
                <input
                  type="text"
                  name="address.state"
                  value={userData.address.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.state ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#129990]`}
                  placeholder="State or Province"
                />
                {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                <input
                  type="text"
                  name="address.country"
                  value={userData.address.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.country ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#129990]`}
                  placeholder="Country"
                />
                {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
                <input
                  type="text"
                  name="address.postcode"
                  value={userData.address.postcode}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.postcode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#129990]`}
                  placeholder="Postal code"
                />
                {errors.postcode && <p className="mt-1 text-sm text-red-600">{errors.postcode}</p>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center py-3 px-4 rounded-md shadow-sm text-lg font-medium text-white bg-[#129990] hover:bg-[#0e827e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#129990] transition-colors ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registering...
                </>
              ) : (
                'Register'
              )}
            </button>
          </div>

          <div className="md:col-span-2 text-center text-sm text-gray-600 pt-2">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-[#129990] hover:text-[#0e827e]">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;