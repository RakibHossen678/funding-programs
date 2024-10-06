import CheckoutSidebar from "./CheckoutSidebar";
import PropTypes from "prop-types";

const CheckoutPage = ({
  handleTermsChange,
  handleCreateAccountChange,
  formData,
  handleChange,
  isTermsChecked,
  isCreateAccountChecked,
  handleSubmit,
}) => {
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
                <option value="BD" className="text-[#a2a2a2]">
                  Bangladesh
                </option>
                <option value="IN" className="text-[#a2a2a2]">
                  India
                </option>
                <option value="PK" className="text-[#a2a2a2]">
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

        <CheckoutSidebar
          handleTermsChange={handleTermsChange}
          handleCreateAccountChange={handleCreateAccountChange}
          formData={formData}
          handleChange={handleChange}
          isTermsChecked={isTermsChecked}
          isCreateAccountChecked={isCreateAccountChecked}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

CheckoutPage.propTypes = {
  handleTermsChange: PropTypes.func,
  handleCreateAccountChange: PropTypes.func,
  formData: PropTypes.object,
  handleChange: PropTypes.func,
  isCreateAccountChecked: PropTypes.bool,
  isTermsChecked: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default CheckoutPage;
