const Games = () => {
  const games = [
    {
      id: 'reawaken',
      title: 'Reawaken Demo',
      embedId: '711394',
      url: 'https://fancy-dog-games.itch.io/reawaken',
      slug: 'reawaken',
      imageUrl: 'https://img.itch.zone/aW1nLzM5MzkxNDIucG5n/315x250%23c/R%2FTqT8.png'
    },
    {
      id: 'tennis-wars',
      title: 'Tennis Wars',
      embedId: '751885',
      url: 'https://fancy-dog-games.itch.io/tennis-wars',
      slug: 'tennis-wars',
      imageUrl: 'https://img.itch.zone/aW1nLzc4MzM3NzYucG5n/315x250%23c/7DMd4%2B.png'
    },
    {
      id: 'slime-hunter',
      title: 'Slime Hunter',
      embedId: '1344152',
      url: 'https://fancy-dog-games.itch.io/slime-hunter',
      slug: 'slime-hunter',
      imageUrl: 'https://img.itch.zone/aW1nLzc4MzM3MDQucG5n/315x250%23c/%2Fl3woO.png'
    },
    {
      id: 'furious-fowls',
      title: 'Furious Fowls',
      embedId: '954131',
      url: 'https://fancy-dog-games.itch.io/furious-fowls',
      slug: 'furious-fowls',
      imageUrl: 'https://img.itch.zone/aW1nLzE3NTk1MzYxLnBuZw==/315x250%23c/kMNl%2B5.png'
    },
    {
      id: 'bloobert',
      title: 'Bloobert',
      embedId: '1354623',
      url: 'https://fancy-dog-games.itch.io/bloobert',
      slug: 'bloobert',
      imageUrl: 'https://img.itch.zone/aW1nLzc4OTE3MDYucG5n/315x250%23c/u3zhOT.png'
    },
    {
      id: 'duck-a-day',
      title: 'Duck: A Day In The Life',
      embedId: '1547650',
      url: 'https://fancy-dog-games.itch.io/duck-a-day-in-the-life',
      slug: 'duck-a-day-in-the-life',
      imageUrl: 'https://img.itch.zone/aW1nLzkwMjkwNzAucG5n/315x250%23c/bL7mZS.png'
    },
    {
      id: 'magiblade',
      title: 'MagiBlade',
      embedId: '1340339',
      url: 'https://fancy-dog-games.itch.io/magiblade',
      slug: 'magiblade',
      imageUrl: 'https://img.itch.zone/aW1nLzEwNjIxNzkyLnBuZw==/315x250%23c/Ezz91a.png'
    },
    {
      id: 'ghostly-melee',
      title: 'Ghostly Melee',
      embedId: '1505655',
      url: 'https://fancy-dog-games.itch.io/ghostly-melee',
      slug: 'ghostly-melee',
      imageUrl: 'https://img.itch.zone/aW1nLzg3NzY1OTgucG5n/315x250%23c/nGaCn%2F.png'
    }
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-gray-800/30 rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700 hover:border-accent shadow-lg hover:shadow-accent/20"
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
            <div className="w-full max-w-[552px] mx-auto">
              <iframe
                frameBorder="0"
                src={`https://itch.io/embed/${game.embedId}?bg_color=1a1a1a&fg_color=ffffff&border_color=363636`}
                width="100%"
                height="167"
                className="rounded-lg w-full"
                title={game.title}
              >
                <a href={game.url}>{game.title} by Fancy Dog Games</a>
              </iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
