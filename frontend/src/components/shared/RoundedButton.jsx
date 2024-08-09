const RoundedButton = ({placeholder, className}) => {
    return <button className={`border border-solid rounded-full w-full py-3 my-2 text-base text-grey-400 font-semibold ${className}`}>
        {placeholder}
    </button>;
};

export default RoundedButton;