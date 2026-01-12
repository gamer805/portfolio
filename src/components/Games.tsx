const Games = () => {
  const games = [
    {
      id: 'reawaken',
      title: 'Reawaken Demo',
      embedId: '711394',
      url: 'https://fancy-dog-games.itch.io/reawaken',
      slug: 'reawaken',
      imageUrl: 'https://img.itch.zone/aW1nLzM5MzkxNDIucG5n/315x250%23c/R%2FTqT8.png',
      description: 'A Legend of Zelda-inspired action-adventure game I made in Unity for the UCLA Game Lab in 2020.'
    },
    {
      id: 'tennis-wars',
      title: 'Tennis Wars',
      embedId: '751885',
      url: 'https://fancy-dog-games.itch.io/tennis-wars',
      slug: 'tennis-wars',
      imageUrl: 'https://img.itch.zone/aW1nLzc4MzM3NzYucG5n/315x250%23c/7DMd4%2B.png',
      description: 'A 2D pong-like game I adapted from an older HTML5 game I made in middle school.'
    },
    {
      id: 'slime-hunter',
      title: 'Slime Hunter',
      embedId: '1344152',
      url: 'https://fancy-dog-games.itch.io/slime-hunter',
      slug: 'slime-hunter',
      imageUrl: 'https://img.itch.zone/aW1nLzc4MzM3MDQucG5n/315x250%23c/%2Fl3woO.png',
      description: 'A top-down action game I made as my first foray into Unity3D.'
    },
    {
      id: 'furious-fowls',
      title: 'Furious Fowls',
      embedId: '954131',
      url: 'https://fancy-dog-games.itch.io/furious-fowls',
      slug: 'furious-fowls',
      imageUrl: 'https://img.itch.zone/aW1nLzE3NTk1MzYxLnBuZw==/315x250%23c/kMNl%2B5.png',
      description: 'A demake of Angry Birds I made in 2021 for a game jam.'
    },
    {
      id: 'bloobert',
      title: 'Bloobert',
      embedId: '1354623',
      url: 'https://fancy-dog-games.itch.io/bloobert',
      slug: 'bloobert',
      imageUrl: 'https://img.itch.zone/aW1nLzc4OTE3MDYucG5n/315x250%23c/u3zhOT.png',
      description: 'A 2D platformer I made in 2022 for Trijam #152.'
    },
    {
      id: 'duck-a-day',
      title: 'Duck: A Day In The Life',
      embedId: '1547650',
      url: 'https://fancy-dog-games.itch.io/duck-a-day-in-the-life',
      slug: 'duck-a-day-in-the-life',
      imageUrl: 'https://img.itch.zone/aW1nLzkwMjkwNzAucG5n/315x250%23c/bL7mZS.png',
      description: 'A mini-RPG I made in 2022 for the Bitsy Jam.'
    },
    {
      id: 'magiblade',
      title: 'MagiBlade',
      embedId: '1340339',
      url: 'https://fancy-dog-games.itch.io/magiblade',
      slug: 'magiblade',
      imageUrl: 'https://img.itch.zone/aW1nLzEwNjIxNzkyLnBuZw==/315x250%23c/Ezz91a.png',
      description: "A 2D action platformer I started work on in 2022."
    },
    {
      id: 'ghostly-melee',
      title: 'Ghostly Melee',
      embedId: '1505655',
      url: 'https://fancy-dog-games.itch.io/ghostly-melee',
      slug: 'ghostly-melee',
      imageUrl: 'https://img.itch.zone/aW1nLzg3NzY1OTgucG5n/315x250%23c/nGaCn%2F.png',
      description: "A 2D platformer I made in 2022 for the Weekly Game Jam - Week 250."
    }
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-gray-800/30 rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700 shadow-lg"
          >
            <a 
              href={game.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mb-3 group"
            >
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-auto rounded-lg shadow-lg group-hover:shadow-accent/30 transition-all duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </a>
            <h1 className="text-lg font-bold text-accent mb-2">{game.title}</h1>
            <p className="text-gray-300 text-sm">{game.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
