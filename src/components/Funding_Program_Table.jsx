import { useContext, useEffect, useState } from "react";
import Funding_Program_sidebar from "./Funding_Program_sidebar";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const Funding_Program_Table = ({ fundingPrograms, setFundingPrograms }) => {
  const { user } = useContext(AuthContext);
  const [getUser, setGetUser] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      if (user?.email) {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/getUser/${user.email}`
          );
          setGetUser(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    getUsers();
  }, [user?.email]);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/program/${id}`
      );
      if (data.deletedCount > 0) {
        const updatedPrograms = fundingPrograms.filter(
          (program) => program._id !== id
        );
        setFundingPrograms(updatedPrograms);

        toast.success("Program deleted successfully!");
      }
    } catch (error) {
      toast.error("Failed to delete the program.");
    }
  };

  return (
    <div className="lg:flex  gap-10 flex-col lg:flex-row my-10">
      {/* Table */}
      <div className="overflow-x-auto lg:w-8/12 w-full bg-[#050907] py-4 rounded-xl">
        {fundingPrograms.length > 0 ? (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className=" text-white font-poppins text-lg font-medium ">
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2 pb-3">Challenge</th>
                <th className="px-4 py-2 pb-3">Funded Trader</th>
                <th className="px-4 py-2 pb-3">Verification</th>
                {getUser?.role === "admin" && (
                  <th className="px-4 py-2 pb-3">Action</th>
                )}
              </tr>
            </thead>
            <tbody>
              {fundingPrograms.map((data, index) => (
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
                  {getUser?.role === "admin" && (
                    <td className="px-4 py-4 flex space-x-2 border-t border-t-[#162d26]">
                      <span>
                        <AiFillDelete
                          onClick={() => handleDelete(data._id)}
                          className="hover:scale-105 cursor-pointer"
                          size={21}
                        />
                      </span>
                      <span>
                        <FaEdit
                          className="hover:scale-105 cursor-pointer"
                          size={21}
                        />
                      </span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center h-64 ">
            <h1 className="text-white text-xl font-semibold">
              There don't have any data
            </h1>
          </div>
        )}
      </div>
      {/* sidebar */}
      <div className="lg:w-[27%] w-full">
        <Funding_Program_sidebar />
      </div>
    </div>
  );
};

Funding_Program_Table.propTypes = {
  setFundingPrograms: PropTypes.func,
  fundingPrograms: PropTypes.array,
};

export default Funding_Program_Table;
