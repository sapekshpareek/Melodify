import spotify_logo from "../assets/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";

const Home = () => {
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/5 bg-black">
        <div className="p-6">
          <img src={spotify_logo} alt="logo" width={125} />
        </div>
        <div>
          <IconText 
          iconName={"material-symbols:home"}
          text={"Home"}
          active/>
          <IconText 
          iconName={"material-symbols:search-rounded"}
          text={"Search"}/>
          <IconText 
          iconName={"icomoon-free:books"}
          text={"Library"}/>
        </div>
      </div>
      <div className="h-full">sdf</div>
    </div>
  );
};

export default Home;
