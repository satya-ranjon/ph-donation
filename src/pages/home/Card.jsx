import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ donate }) => {
  const { id, title, picture, category_bg, category, card_bg, text_btn_bg } =
    donate || {};

  return (
    <Link to={`/donation-details/${id}`}>
      <div
        style={{ backgroundColor: card_bg }}
        className={`flex flex-col gap-4 rounded-md overflow-hidden cursor-pointer lg:h-[23.2rem]`}>
        <img src={picture} alt={title} className="w-full h-56" />
        <div
          style={{ backgroundColor: category_bg, color: text_btn_bg }}
          className={`px-4 py-2 w-fit mx-4 font-semibold`}>
          {category}
        </div>
        <h1
          style={{ color: text_btn_bg }}
          className={`mx-4 mb-4 font-bold text-2xl`}>
          {title}
        </h1>
      </div>
    </Link>
  );
};

Card.propTypes = {
  donate: PropTypes.object.isRequired,
};

export default Card;
