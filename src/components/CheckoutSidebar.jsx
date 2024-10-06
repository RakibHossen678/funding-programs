import tazapay from "../assets/tazapy.png";
import proceed from "../assets/proceed.png";
import PropTypes from "prop-types";
const CheckoutSidebar = ({
  handleCreateAccountChange,
  handleTermsChange,
  handleChange,
  formData,
  isTermsChecked,
  isCreateAccountChecked,
  handleSubmit,
}) => {
  return (
    <div className="space-y-8">
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
              checked={formData.addon.name === "7 day payouts vs 14 Days +5%"}
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
              checked={formData.addon.name === "90% profit split vs 85% +0%"}
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
            <span>${formData.totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bg-[#050907] p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <img src={tazapay} alt="" />
          <span className="font-poppins">Tazapay</span>
        </h2>
        <p className="text-sm mb-4">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our <span className="text-[#78ffd6]">privacy policy</span>.
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
  );
};

CheckoutSidebar.propTypes = {
  handleTermsChange: PropTypes.func,
  handleCreateAccountChange: PropTypes.func,
  formData: PropTypes.object,
  handleChange: PropTypes.func,
  isCreateAccountChecked: PropTypes.bool,
  isTermsChecked: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default CheckoutSidebar;
