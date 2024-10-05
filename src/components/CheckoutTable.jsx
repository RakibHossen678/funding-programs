import { useEffect, useState } from "react";
import tazapay from "../assets/tazapy.png";
import proceed from "../assets/proceed.png";
import toast from "react-hot-toast";
import axios from "axios";

const CheckoutPage = () => {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCreateAccountChecked, setIsCreateAccountChecked] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    addon: {
      name: "7 day payouts vs 14 Days +5%",
      percentage: 5,
    },
    totalPrice,
  });

  useEffect(() => {
    const newTotalPrice = (299 * formData.addon.percentage) / 100 + 299;
    setTotalPrice(newTotalPrice);
    setFormData((prevData) => ({
      ...prevData,
      totalPrice: newTotalPrice,
    }));
  }, [formData.addon.percentage]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(value, id);
    if (id === "addon") {
      setFormData({
        ...formData,
        addon: {
          name: value,
          percentage: value === "7 day payouts vs 14 Days +5%" ? 5 : 0,
        },
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  const handleCreateAccountChange = (e) => {
    setIsCreateAccountChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isTermsChecked || !isCreateAccountChecked) {
      toast.error(
        "Please check the terms and conditions and create an account"
      );
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/payment",
        formData
      );
      // Log the response to see the payment URL
      console.log("Response Data:", data);
    } catch (error) {
      console.error(
        "Error in payment submission:",
        error.response ? error.response.data : error.message
      );
      toast.error("An error occurred while processing the payment.");
    }
  };

  return (
    <div className="min-h-screen  text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        <div className="bg-[#050907] p-8 rounded-lg font-poppins">
          <h2 className="text-2xl  font-semibold mb-4">Billing Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-3">
              <div>
                <label htmlFor="first-name" className="block text-sm pb-2">
                  First Name *
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-[#a2a2a2]"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm pb-2">
                  Last Name *
                </label>
                <input
                  required
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="pb-3">
              <label htmlFor="company-name" className="block text-sm p-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                placeholder="Company Name"
              />
            </div>
            <div className="pb-3">
              <label htmlFor="country" className="block text-sm pb-2">
                Country / Region *
              </label>
              <select
                required
                id="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
              >
                <option value="" disabled className="text-[#a2a2a2]">
                  Select a country / region
                </option>
                <option value="bangladesh" className="text-[#a2a2a2]">
                  Bangladesh
                </option>
                <option value="india" className="text-[#a2a2a2]">
                  India
                </option>
                <option value="pakistan" className="text-[#a2a2a2]">
                  Pakistan
                </option>
              </select>
            </div>
            <div className="pb-3">
              <label htmlFor="street-address" className="block text-sm pb-2">
                Street Address *
              </label>
              <input
                required
                type="text"
                id="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                placeholder="Street Address"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-3">
              <div>
                <label htmlFor="city" className="block text-sm pb-2">
                  Town / City *
                </label>
                <input
                  required
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                  placeholder="City"
                />
              </div>
              <div>
                <label htmlFor="postcode" className="block text-sm pb-2 ">
                  Postcode / ZIP *
                </label>
                <input
                  required
                  type="text"
                  id="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                  placeholder="ZIP"
                />
              </div>
            </div>
            <div className="pb-3">
              <label htmlFor="phone" className="block text-sm pb-2">
                Phone *
              </label>
              <input
                required
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                placeholder="Phone"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm pb-2">
                Email *
              </label>
              <input
                required
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                placeholder="Email address"
              />
            </div>
          </form>
        </div>

        {/* Order Summary and Payment */}
        <div className="space-y-8">
          {/* Available Addons */}
          <div className="bg-[#050907] p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Available Addons</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="addons"
                  id="addon"
                  className="mr-2"
                  value="7 day payouts vs 14 Days +5%"
                  onChange={handleChange}
                  checked={
                    formData.addon.name === "7 day payouts vs 14 Days +5%"
                  }
                />
                <label htmlFor="addon1" className="text-sm">
                  7 day payouts vs 14 Days +5%
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="addons"
                  id="addon"
                  className="mr-2"
                  value="90% profit split vs 85% +0%"
                  onChange={handleChange}
                  checked={
                    formData.addon.name === "90% profit split vs 85% +0%"
                  }
                />
                <label htmlFor="addon2" className="text-sm">
                  90% profit split vs 85% +0%
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="addons"
                  id="addon"
                  className="mr-2"
                  value="Both (Save 5%) +0%"
                  onChange={handleChange}
                  checked={formData.addon.name === "Both (Save 5%) +0%"}
                />
                <label htmlFor="addon3" className="text-sm">
                  Both (Save 5%) +0%
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-[#050907] p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="flex justify-between">
                <span>2 Step - Power Challenge (100K) × 1</span>
                <span>$299.00</span>
              </div>
              <div className="flex justify-between">
                <span>{formData.addon.name}</span>
                <span>+${formData.addon.percentage}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-[#050907] p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <img src={tazapay} alt="" />
              <span className="font-poppins">Tazapay</span>
            </h2>
            <p className="text-sm mb-4">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <span className="text-[#78ffd6]">privacy policy</span>.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isTermsChecked}
                  onChange={handleTermsChange}
                  id="agree-terms"
                  className="mr-2"
                />
                <label htmlFor="agree-terms" className="text-sm">
                  I have read and agree to the website terms and conditions.
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isCreateAccountChecked}
                  onChange={handleCreateAccountChange}
                  id="create-account"
                  className="mr-2"
                />
                <label htmlFor="create-account" className="text-sm">
                  Create a new Account with these information
                </label>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg flex  items-center justify-center space-x-2"
            >
              <img className="pr-2" src={proceed} alt="" />
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
