import spotify_logo from "../assets/spotify_logo_white.svg";
import IconText from "./shared/IconText";
import RoundedButton from "./shared/RoundedButton";
const Sidebar = () => {
  return (
    <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-8">
      <div>
        <div className="p-6">
          <img src={spotify_logo} alt="logo" width={125} />
        </div>
        <div className="py-5">
          <IconText iconName={"material-symbols:home"} text={"Home"} active />
          <IconText
            iconName={"material-symbols:search-rounded"}
            text={"Search"}
          />
          <IconText iconName={"icomoon-free:books"} text={"Library"} />
        </div>
        <div className="pt-5">
          <IconText
            iconName={"material-symbols:add-box"}
            text={"Create Playlist"}
          />
          <IconText iconName={"mdi:cards-heart"} text={"Liked Songs"} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-1/2 text-white justify-center items-center cursor-pointer">
          <RoundedButton
            iconName={"carbon:earth-europe-africa"}
            className={
              "text-sm font-semibold text-white hover:border-white hover:text-white"
            }
            placeholder={"English"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
