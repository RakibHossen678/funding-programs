import CheckoutTable from "../components/CheckoutTable";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import axios from "axios";

const Checkout = () => {
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
  console.log(formData);
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
        "https://funding-programs-server.vercel.app/payment",
        formData
      );
      toast.success("Payment Successful! ✔");
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
    <div>
      <div>
        <CheckoutTable
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

export default Checkout;
