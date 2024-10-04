import sidebar from "../assets/sidebar.png";
import btn from "../assets/challenge.png";
import { Link } from "react-router-dom";
const Funding_Program_sidebar = () => {
  return (
    <div className="border-2 bg-[#050907] rounded-xl border-[#78ffd6] p-5 text-start">
      <h2 className="font-vietnam text-xl font-semibold pb-2">
        Pick Challenge
      </h2>
      <p className="text-[#9ea9b2] text-[16px] pb-3">
        The Challenge is your initial dive into the becoming an Titan Trader.
        Prove your trading skills, hit the profit target, maintain discipline,
        and showcase responsible risk management.
      </p>
      <img className="w-full lg:h-[180px]" src={sidebar} alt="" />
      <p className="text-lg font-medium py-2">
        <span>Total: </span>
        <span>$299</span>
      </p>
      <Link
        to={"/checkout"}
        className="flex items-center space-x-2 justify-center bg-gradient-to-r from-[#007991] to-[#78ffd6] w-full py-3 rounded-lg"
      >
        <img src={btn} alt="" />
        <span className="font-vietnam font-semibold">Start Challenge</span>
      </Link>
    </div>
  );
};

export default Funding_Program_sidebar;
