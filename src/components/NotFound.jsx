import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const pathname = decodeURIComponent(location.pathname);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold text-white pb-4 capitalize">{pathname.replace("/", " ")}</h1>
      <p className="text-lg text-white mb-6">
        More information about {pathname.replace("/", " ")} page  will  be available soon!
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-[#007991] to-[#78ffd6] text-white py-2 px-4 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
