import Funding_Program_Table from "./Funding_Program_Table";
import FundingData from "../../public/data.json";

const Funding_Program = () => {
  console.log(FundingData)
  return (
    <div>
      <Funding_Program_Table  FundingData={FundingData}/>
    </div>
  );
};

export default Funding_Program;
