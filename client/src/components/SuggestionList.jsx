import PropTypes from "prop-types";
import { formatDate } from "../helpers";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const SuggestionList = ({ technology, title, desc, created_at }) => {
  return (
    <div className="border rounded flex  justify-between items-center p-2">
      <div className="flex gap-x-2">
        <img
          src={`https://ui-avatars.com/api/?name=${technology}&background=random&size=512&length=3&font-size=0.22&bold=true`}
          alt={technology}
          className="w-24"
        />
        <div className="">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{desc}</p>
          <time className="text-xs text-gray-500 font-medium">
            {formatDate(created_at)}
          </time>
        </div>
      </div>
      <div>
        <div>
          <button className="text-teal-500 px-4 py-1   rounded text-xl  font-semibold  hover:text-teal-600 transition-all duration-300"><FaEdit /></button>
          <button className="text-red-500 px-4 py-1   rounded  text-xl font-semibold  hover:text-red-600 transition-all duration-300"><MdDelete /></button>
        </div>
      </div>
    </div>
  );
};

SuggestionList.propTypes = {
  technology: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  created_at: PropTypes.string,
};

export default SuggestionList;
