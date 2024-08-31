import SongCard from "./shared/SongCard";

const Content = () => {
  return (
    <div className="content p-8 text-white">
      <div className="font-semibold text-xl mb-2">Focus</div>
      <div className="w-full flex">
        <SongCard title={"Peaceful Piano"} description={"Relax and indulge with beautiful piano pieces"} image={"https://images.unsplash.com/photo-1593697972679-c4041d132a46?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <SongCard title={"Relaxing Guitar"} description={"Relax and indulge with beautiful piano pieces"} />
        

      </div>
    </div>
  );
};

export default Content;
