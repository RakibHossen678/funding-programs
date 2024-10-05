import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

const UpdateModal = ({ setFundingPrograms, fundingPrograms, id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef(null);
  const modal = useRef(null);
  console.log(id);
  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Close if the escape key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const filteredProgram = fundingPrograms.filter(
    (program) => program.id === id
  );

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.desc.value;
    const price = form.price.value;
    const updatedService = {
      name,
      description,
      price,
    };

    setModalOpen(false);
    form.reset();
  };

  return (
    <>
      <div className="">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className="flex items-center  transition duration-300 ease-in-out"
        >
          <FaEdit className="mr-2" size={21} />
        </button>

        {modalOpen && (
          <div className="fixed inset-0 z-50 flex  justify-center bg-black bg-opacity-70 px-4 py-5">
            <div
              ref={modal}
              className="w-full max-w-lg rounded-lg bg-[#050907] px-8 py-10 shadow-lg md:px-12"
            >
              <h1 className="text-3xl font-bold  text-gray-800 mb-6">
                Update Service
              </h1>
              <form onSubmit={handleForm}>
                <div className="mb-4">
                  <label className="block text-start text-white font-medium mb-1">
                    Name
                  </label>
                  <input
                    defaultValue={filteredProgram?.name}
                    name="name"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter program Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-start  text-white font-medium mb-1">
                    Challenge
                  </label>
                  <input
                    defaultValue={filteredProgram.challenge}
                    name="desc"
                    type="number"
                    required
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter challenge"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-white text-start font-medium mb-1">
                    Funded Trader
                  </label>
                  <input
                    defaultValue={filteredProgram.FundedTrader}
                    name="price"
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter FundedTrader"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white text-start font-medium mb-1">
                    Verification
                  </label>
                  <input
                    defaultValue={filteredProgram.Verification}
                    name="verification"
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter verification"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#007991] to-[#78ffd6] text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Update Service
                </button>
              </form>
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setModalOpen(false)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

UpdateModal.propTypes = {
  id: PropTypes.string,
  fundingPrograms: PropTypes.array,
  setFundingPrograms: PropTypes.func,
};

export default UpdateModal;
