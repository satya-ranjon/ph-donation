import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleDonationCard = ({ donate }) => {
  const {
    id,
    picture,
    title,
    price,
    category,
    category_bg,
    card_bg,
    text_btn_bg,
  } = donate || {};
  return (
    <div
      style={{ backgroundColor: card_bg }}
      className="flex justify-start items-center rounded-md overflow-hidden">
      <div className="h-40 lg:h-48 w-64">
        <img src={picture} alt="img" className="h-40 lg:h-48 w-64" />
      </div>
      <div className=" w-full  h-full p-3 flex flex-col justify-between items-start">
        <div
          style={{ backgroundColor: category_bg, color: text_btn_bg }}
          className=" px-2 py-1 font-normal text-xs w-fit rounded-sm ">
          {category}
        </div>
        <h1 className=" text-lg lg:text-2xl font-bold text-zinc-800 ">
          {title}
        </h1>
        <p style={{ color: text_btn_bg }} className=" font-semibold text-sm">
          {price}
        </p>
        <Link to={`/donation-details/${id}`}>
          <button
            style={{ backgroundColor: text_btn_bg }}
            className="px-2 py-1 font-semibold text-white text-sm rounded-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

SingleDonationCard.propTypes = {
  donate: PropTypes.shape({
    id: PropTypes.number,
    picture: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    category: PropTypes.string,
    category_bg: PropTypes.string,
    card_bg: PropTypes.string,
    text_btn_bg: PropTypes.string,
  }),
};

export default SingleDonationCard;
