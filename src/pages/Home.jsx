import { useEffect, useState } from "react";
import Funding_Program from "../components/Funding_Program";
import axios from "axios";

const Home = () => {
  const [fundingPrograms, setFundingPrograms] = useState([]);
  const [getType, setGetType] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/programs?type=${getType}&price=${price}`
        );
        setFundingPrograms(data);
      } catch (error) {
        console.error("Error fetching funding programs:", error);
      }
    };

    fetchPrograms();
  }, [price, getType]);

  return (
    <div className="text-center mt-28 text-white">
      <h1 className="capitalized text-[40px] font-semibold  font-vietnam ">
        Pick Your funding programs
      </h1>
      <div className="space-x-5 space-y-4 lg:space-y-0 mx-3 lg:mx-0 my-6 flex justify-center items-center flex-wrap">
        <button
          onClick={() => setGetType("Standard Challenge")}
          className={`border-2 w-[360px] py-3 rounded-full text-[#78ffd6] border-[#78ffd6] ${
            getType === "Standard Challenge" &&
            "bg-gradient-to-r from-[#007991] to-[#78ffd6] border-none text-white"
          } `}
        >
          Standard Challenge
        </button>
        <button
          onClick={() => setGetType("Instant Funding")}
          className={`border-2 w-[360px] py-3 rounded-full text-[#78ffd6] border-[#78ffd6] ${
            getType === "Instant Funding" &&
            "bg-gradient-to-r from-[#007991] to-[#78ffd6] border-none text-white"
          } `}
        >
          Instant Funding
        </button>
      </div>
      <div className="space-x-5 space-y-4 lg:space-y-0 flex justify-center items-center flex-wrap">
        <button
          onClick={() => setPrice(100000)}
          className={`py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] ${
            price === 100000 &&
            "bg-gradient-to-r from-[#007991] to-[#78ffd6] border-none text-white"
          }  border-2 px-2`}
        >
          $10,000
        </button>
        <button
          onClick={() => setPrice(200000)}
          className={`py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] ${
            price === 200000 &&
            "bg-gradient-to-r from-[#007991] to-[#78ffd6] border-none text-white"
          }  border-2 px-2`}
        >
          $20,000
        </button>
        <button
          onClick={() => setPrice(300000)}
          className={`py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] ${
            price === 300000 &&
            "bg-gradient-to-r from-[#007991] to-[#78ffd6] border-none text-white"
          }  border-2 px-2`}
        >
          $30,000
        </button>
        <button
          onClick={() => setPrice(400000)}
          className={`py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] ${
            price === 400000 &&
            "bg-gradient-to-r from-[#007991] to-[#78ffd6] border-none text-white"
          }  border-2 px-2`}
        >
          $40,000
        </button>
        <button
          onClick={() => setPrice(500000)}
          className={`py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] ${
            price === 500000 &&
            "bg-gradient-to-r from-[#007991] to-[#78ffd6] border-none text-white"
          }  border-2 px-2`}
        >
          $50,000
        </button>
      </div>
      <div>
        <Funding_Program
          fundingPrograms={fundingPrograms}
          setFundingPrograms={setFundingPrograms}
        />
      </div>
    </div>
  );
};

export default Home;
