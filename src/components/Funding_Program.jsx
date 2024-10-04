import Funding_Program_Table from "./Funding_Program_Table";

const Funding_Program = ({ fundingPrograms }) => {
  return (
    <div>
      <Funding_Program_Table fundingPrograms={fundingPrograms} />
    </div>
  );
};

export default Funding_Program;
