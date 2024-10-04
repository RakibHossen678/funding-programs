import Funding_Program_sidebar from "./Funding_Program_sidebar";

const Funding_Program_Table = ({ FundingData }) => {
  console.log(FundingData);

  return (
    <div className="lg:flex items-center gap-10 flex-col lg:flex-row my-10">
      {/* Table */}
      <div className="overflow-x-auto lg:w-8/12 w-full bg-[#050907] py-4 rounded-xl">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className=" text-white font-poppins text-lg font-medium ">
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2 pb-3">Challenge</th>
              <th className="px-4 py-2 pb-3">Funded Trader</th>
              <th className="px-4 py-2 pb-3">Verification</th>
            </tr>
          </thead>
          <tbody>
            {FundingData.length > 0 &&
              FundingData.map((data, index) => (
                <tr key={index} className="text-white font-inter text-[16px] ">
                  <td className="px-4 py-4 border-t text-start border-t-[#162d26]">
                    {data.name}
                  </td>
                  <td className="px-4 py-4 border-t border-t-[#162d26]">
                    {data.challenge}
                  </td>
                  <td className="px-4 py-4 border-t border-t-[#162d26]">
                    {data.FundedTrader}
                  </td>
                  <td className="px-4 py-4 border-t border-t-[#162d26]">
                    {data.Verification}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* sidebar */}
      <div className="lg:w-[27%] w-full">
        <Funding_Program_sidebar />
      </div>
    </div>
  );
};

export default Funding_Program_Table;
