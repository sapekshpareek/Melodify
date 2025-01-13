import SongCard from "./SongCard";

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="content p-4 text-white overflow-auto">
      <div className="font-semibold text-xl mb-2 pb-4">{titleText}</div>
      <div className="w-full flex justify-around space-x-2">
        {console.log(cardsData)}
        {cardsData.map((card) => {
          return (
            <SongCard
              title={card.title}
              description={card.description}
              image={card.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlaylistView;
