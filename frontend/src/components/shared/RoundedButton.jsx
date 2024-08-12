import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const RoundedButton = ({ placeholder, className, path, iconName }) => {
  return (
    <button
      className={`border border-solid border-gray-500 rounded-full w-full py-3 my-2 text-base text-gray-500 font-semibold ${className}`}
    >
      <div className="flex items-center justify-center">
        <div className="px-2">
          <Icon icon={iconName} />
        </div>
        <Link to={path}>{placeholder}</Link>
      </div>
    </button>
  );
};

export default RoundedButton;
