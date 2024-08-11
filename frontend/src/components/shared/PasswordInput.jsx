const PasswordInput = ({ label, placeholder, className }) => {
    return (
        <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
        <label className="font-bold text-xs" for={label}>{label}</label>
        <input
          id={label}
          type="password"
          placeholder={placeholder}
          className="p-2 border border-solid border-gray-400 rounded placeholder-gray-500"
        ></input>
      </div>
    );
  };
  
  export default PasswordInput;
  