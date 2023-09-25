import { useLoaderData } from "react-router-dom";
import Toast from "../../components/Toast";
import { useEffect, useState } from "react";
import useDonate from "../../hooks/useDonate";

const DonationDetails = () => {
  const data = useLoaderData();
  const { title, picture, description, text_btn_bg, price } = data || {};

  const [showToast, setShowToast] = useState({
    isOpen: false,
    message: "",
    status: "success",
  });

  const [donets, setDonate] = useDonate();

  const clearMessages = () => {
    setTimeout(() => {
      setShowToast({ isOpen: false, message: "" });
    }, 3000);
  };

  useEffect(() => {
    if (showToast.isOpen) {
      clearMessages();
    }
  }, [showToast]);

  const handleDonate = () => {
    const findDonate = donets?.find((item) => item.id === data.id);
    if (!findDonate) {
      setDonate(data);
      setShowToast({ isOpen: true, message: "Donate successfully complete" });
    }
    if (findDonate)
      setShowToast({
        isOpen: true,
        status: "error",
        message: "Already donated !",
      });
  };

  return (
    <div className="container mx-auto px-5 sm:px-10 my-10 mb-16">
      <Toast
        status={showToast.status}
        message={showToast.message}
        isOpen={showToast.isOpen}
      />
      <div className="w-full h-72 lg:h-[700px] relative">
        <img
          src={picture}
          alt={title}
          className="w-full h-72 lg:h-[700px] rounded-lg"
        />
        <div className="absolute bottom-0 bg-[#0B0B0B80] h-24 lg:h-32 w-full left-0 right-0 flex items-center">
          <button
            onClick={handleDonate}
            style={{ backgroundColor: text_btn_bg }}
            className=" ml-5 sm:ml-10 rounded-md cursor-pointer  px-3 py-2 font-semibold text-white">
            Donate {price}
          </button>
        </div>
      </div>
      <h1 className=" font-bold text-4xl my-4">{title}</h1>
      <p className=" text-base font-normal text-zinc-600">{description}</p>
    </div>
  );
};

export default DonationDetails;
