import { Link } from "react-router-dom";
import sideImg from "../assets/sidebar.png";
const SignUp = () => {
  return (
    <div className="my-10">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-[#050907] rounded-lg shadow-lg  lg:max-w-4xl">
        <div className="hidden  lg:block lg:w-1/2">
          <img
            className="w-full h-full bg-cover object-cover"
            src={sideImg}
            alt=""
          />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto mb-4">
            <h2 className="text-3xl bg-gradient-to-r from-[#007991] to-[#78ffd6] bg-clip-text text-transparent font-semibold pb-2 font-pt">
              FundingTrail
            </h2>
          </div>

          <form className="font-poppins">
            <div className="mt-4">
              <label className="block mb-2 text-[16px]  text-white">
                Name*
              </label>
              <input
                required
                className="block w-full px-4 py-2 bg-[#222624] border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Enter your name "
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-[16px]  text-white">
                Email Address*
              </label>
              <input
                required
                className="block w-full px-4 py-2 bg-[#222624] border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Enter email address"
              />
            </div>

            <div className="mt-4">
              <div className="">
                <label className="block mb-2 text-[16px]  text-white">
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 bg-[#222624] border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#007991] to-[#78ffd6] rounded-lg  ">
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to={"/signIn"}
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign In
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
