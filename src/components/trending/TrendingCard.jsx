import { Link } from "react-router-dom";

import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

const TrendingCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 "
    >
      <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
        <div>
          <h1 className="text-xl xs:text-base sm:text-xl font-bold">
            {product.name}
          </h1>
        </div>
        <div className="flex flex-col items-start ">
          <div className="flex items-center justify-between">
            <h1 className=" text-lg xs:text-base sm:text-lg font-bold">
              ₹{product.price}
            </h1>
            <button className="p-0.5 custom-bg-gradient rounded-md ms-2">
              {product.inCart ? (
                <AiOutlineCheck className="text-white font-bold text-sm" />
              ) : (
                <AiOutlinePlus className="text-white font-bold text-sm" />
              )}
            </button>
          </div>
          <p className="text-gray-600 text-sm text-end">{product.category}</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-48 xs:w-56 xs:h-40 sm:w-64 sm:h-48 py-2 object-contain hover:scale-110 transition"        />
      </div>
    </Link>
  );
};

export default TrendingCard;
