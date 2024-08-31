import IconText from "./shared/IconText";
import RoundedButton from "./shared/RoundedButton";
import TextwithHover from "./shared/TextwithHover";

const Navbar = () => {
  return (
    <div className="navbar w-full h-1/10 bg-black bg-opacity-40 flex">
      <div className="w-1/2 flex"></div>
      <div className="w-1/2 flex justify-around">
        <TextwithHover displayText={"Premium"} />
        <TextwithHover displayText={"Support"} />
        <TextwithHover displayText={"Download"} />
        <IconText text={"|"} active />
        <TextwithHover displayText={"Sign Up"} />
        <RoundedButton
          placeholder={"Log In"}
          className={"bg-white text-black border-white px-3 my-4"}
        />
      </div>
    </div>
  );
};

export default Navbar;
