import { useState } from "react";
import useDonate from "../../hooks/useDonate";
import SingleDonationCard from "./SingleDonationCard";
import { Link } from "react-router-dom";

const Donation = () => {
  const [showAll, setShowAll] = useState(4);
  const [donets] = useDonate();

  const handleShowAll = () => {
    setShowAll(donets.length);
  };

  if (donets?.length === 0) {
    return (
      <div className="mt-60 text-center flex flex-col justify-center items-center">
        <div className=" font-bold text-[80px] text-zinc-300">
          You have not made a donation
        </div>
        <Link
          to="/"
          className="bg-zinc-100 text-zinc-500 px-10 py-2 text-xl rounded-lg w-fit">
          Donate
        </Link>
      </div>
    );
  }

  return (
    <div className=" my-16 container mx-auto px-5 sm:px-10 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
        {donets?.slice(0, showAll).map((donate) => (
          <SingleDonationCard key={donate.id} donate={donate} />
        ))}
      </div>
      {showAll < donets.length && (
        <div className="flex justify-center w-full items-center my-10">
          <button
            onClick={handleShowAll}
            className=" text-sm font-normal text-white bg-[#009444] rounded-lg py-2 px-4">
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
