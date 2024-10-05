import Funding_Program_Table from "./Funding_Program_Table";
import PropTypes from "prop-types";

const Funding_Program = ({ fundingPrograms, setFundingPrograms }) => {
  return (
    <div>
      <Funding_Program_Table
        fundingPrograms={fundingPrograms}
        setFundingPrograms={setFundingPrograms}
      />
    </div>
  );
};
Funding_Program.propTypes = {
  setFundingPrograms: PropTypes.func,
  fundingPrograms: PropTypes.array,
};
export default Funding_Program;
