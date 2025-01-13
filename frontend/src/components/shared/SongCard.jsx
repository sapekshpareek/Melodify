const SongCard = ({title, description, image}) => {
    return(
        <div className="bg-black bg-opacity-40 w-1/6 p-4 rounded-lg">
            <div className=""><img className="rounded-lg w-full h-full" src={image} alt={title} /></div>
            <div className="text-white font-semibold py-2">{title}</div>
            <div className="text-gray-400 text-sm w-full mb-2">{description}</div>
        </div>
    );
};

export default SongCard;