import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const RoundedButton = ({ placeholder, className, path, iconName }) => {
  return (
    <button
      className={`border border-solid rounded-full py-3 my-2 text-base font-semibold ${className}`}
    >
      <Link to={path}>
        <div className="flex items-center justify-center px-2">
          <div className={`${iconName?"pr-2":"pr-0"}`}>
            <Icon icon={iconName} />
          </div>
          {placeholder}
        </div>
      </Link>
    </button>
  );
};

export default RoundedButton;
