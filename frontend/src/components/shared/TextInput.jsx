const TextInput = ({ label, placeholder, className }) => {
  return (
    <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
      <label className="font-bold text-xs" for={label}>{label}</label>
      <input
        id={label}
        type="text"
        placeholder={placeholder}
        className="p-2 border border-solid border-grey-400 rounded placeholder-grey-500"
      ></input>
    </div>
  );
};

export default TextInput;
