import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen">
      <div className=" text-[200px] font-bold text-red-300 text-center">
        404{" "}
        <span className=" text-[70px] font-bold text-red-300 text-center">
          Not Found
        </span>
      </div>

      <Link to="/" className=" px-5 py-1 bg-red-500 text-white rounded-3xl ">
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
