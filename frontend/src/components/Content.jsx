import PlaylistView from "./shared/PlaylistView";

const playlist = [
  {
    title: "Chill Vibes",
    description:
      "Relax and unwind with this collection of mellow tunes and chill beats.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
  {
    title: "Workout Pump",
    description:
      "High-energy tracks to keep you motivated during your workouts.",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
    title: "Throwback Hits",
    description:
      "A nostalgic mix of classic hits from the '80s, '90s, and early 2000s.",
    imageUrl: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5",
  },
  {
    title: "Focus Beats",
    description:
      "Instrumental and ambient music to help you concentrate and stay productive.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Party Anthems",
    description: "Get the party started with this upbeat and fun playlist.",
    imageUrl: "https://images.unsplash.com/photo-1737047119483-1ddb4cb13540?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const indianClassicalPlaylist = [
  {
    title: "Morning Ragas",
    description:
      "Start your day with serene and uplifting morning ragas that set a positive tone.",
    imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  },
  {
    title: "Evening Melodies",
    description:
      "Relax with soothing evening ragas, perfect for unwinding after a long day.",
    imageUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
  },
  {
    title: "Instrumental Bliss",
    description:
      "Experience the magic of Indian classical instruments like sitar, tabla, and veena.",
    imageUrl: "https://images.unsplash.com/photo-1737142928492-13e7b0efe912?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Vocal Classics",
    description:
      "Dive into the soul-stirring vocal performances of Indian classical maestros.",
    imageUrl: "https://images.unsplash.com/photo-1505245208761-ba872912fac0",
  },
  {
    title: "Meditative Ragas",
    description:
      "Calm your mind and body with meditative ragas for deep relaxation.",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
  }
];

const Content = () => {
  return (
    <div className="content overflow-auto">
      <PlaylistView titleText={"Focus"} cardsData={playlist}/>
      <PlaylistView titleText={"Indian Classical"} cardsData={indianClassicalPlaylist}/>
      <PlaylistView titleText={"Focus"} cardsData={playlist}/>
    </div>
  );
};

export default Content;
