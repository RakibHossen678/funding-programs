import { useState } from "react";

const CheckoutPage = () => {
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
    addons: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add logic to handle form submission, such as making an API call
  };

  return (
    <div className="min-h-screen  text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        <div className="bg-[#050907] p-8 rounded-lg font-poppins">
          <h2 className="text-2xl  font-semibold mb-4">Billing Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div>
              <label htmlFor="company-name" className="block text-sm p-2">
                Company Name (Optional)
              </label>
              <input
                required
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                placeholder="Company Name"
              />
            </div>
            <div>
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
                <option className="text-[#a2a2a2]">
                  Select a country / region
                </option>
                {/* Add more country options */}
              </select>
            </div>
            <div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div>
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
                  id="addon1"
                  className="mr-2"
                  value="addon1"
                  // onChange={handleChange}
                />
                <label htmlFor="addon1" className="text-sm">
                  7 day payouts vs 14 Days +5%
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="addons"
                  id="addon2"
                  className="mr-2"
                  value="addon2"
                  // onChange={handleChange}
                />
                <label htmlFor="addon2" className="text-sm">
                  90% profit split vs 85% +0%
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="addons"
                  id="addon3"
                  className="mr-2"
                  value="addon3"
                  // onChange={handleChange}
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
                <span>$400.00</span>
              </div>
              <div className="flex justify-between">
                <span>7 day payouts vs 14 Days</span>
                <span>+$20.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$420.00</span>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-[#050907] p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Tazapay</h2>
            <p className="text-sm mb-4">
              Your personal data will be used to process your order and support
              your experience throughout this website.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="agree-terms" className="mr-2" />
                <label htmlFor="agree-terms" className="text-sm">
                  I have read and agree to the website terms and conditions.
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="create-account" className="mr-2" />
                <label htmlFor="create-account" className="text-sm">
                  Create a new Account with these information
                </label>
              </div>
            </div>
            <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
