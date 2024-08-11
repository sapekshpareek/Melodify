import { Link } from "react-router-dom";

const RoundedButton = ({placeholder, className, path}) => {
    return <button className={`border border-solid border-gray-500 rounded-full w-full py-3 my-2 text-base text-gray-500 font-semibold ${className}`}>
        <Link to={path}>
        {placeholder}
        </Link>
    </button>;
};

export default RoundedButton;