import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="h-full w-full flex">
      <Sidebar/>
      <div className="h-full w-full bg-app-black overflow-auto">
        <Navbar/>
        <Content/>
      </div>
    </div>
  );
};

export default Home;
