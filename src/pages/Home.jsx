import Funding_Program from "../components/Funding_Program";

const Home = () => {
  return (
    <div className="text-center mt-28 text-white">
      <h1 className="capitalized text-[40px] font-semibold  font-vietnam ">
        Pick Your funding programs
      </h1>
      <div className="space-x-5 my-6 flex justify-center items-center flex-wrap">
        <button className="border-2 w-[360px] py-3 rounded-full text-[#78ffd6] border-[#78ffd6] hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] hover:border-none hover:text-white">
          Standard Challenge
        </button>
        <button className="border-2 w-[360px] py-3 rounded-full text-[#78ffd6] border-[#78ffd6] hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] hover:border-none hover:text-white">
          Instant Funding
        </button>
      </div>
      <div className="space-x-5 flex justify-center items-center flex-wrap">
        <button className="py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] hover:border-none hover:text-white border-2 px-2">
          $10,000
        </button>
        <button className="py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] hover:border-none hover:text-white border-2 px-2">
          $20,000
        </button>
        <button className="py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] hover:border-none hover:text-white border-2 px-2">
          $30,000
        </button>
        <button className="py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] hover:border-none hover:text-white border-2 px-2">
          $40,000
        </button>
        <button className="py-2 w-28 rounded-full text-[#78ffd6] border-[#78ffd6] hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] hover:border-none hover:text-white border-2 px-2">
          $50,000
        </button>
      </div>
      <div>
        <Funding_Program/>
      </div>
    </div>
  );
};

export default Home;
