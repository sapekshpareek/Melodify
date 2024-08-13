import { Icon } from "@iconify/react";

const IconText = ({ iconName, text, active }) => {
  return (
    <div className="flex items-center justify-start text-2xl py-2 cursor-pointer">
      <div className={`${iconName?"px-4": ""}`}>
        <Icon icon={iconName} color={active?"white":"gray"} fontSize={25}/>
      </div>
      <div className={`${active?"text-white":"text-gray-400"} font-semibold hover:text-white`}>{text}</div>
    </div>
  );
};

export default IconText;
