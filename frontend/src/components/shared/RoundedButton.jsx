import { Link } from "react-router-dom";

const RoundedButton = ({placeholder, className, path}) => {
    return <button className={`border border-solid rounded-full w-full py-3 my-2 text-base text-grey-400 font-semibold ${className}`}>
        <Link to={path}>
        {placeholder}
        </Link>
    </button>;
};

export default RoundedButton;