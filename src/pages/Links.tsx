const Links = () => {
  const links = [
    {
      name: "Art Instagram",
      url: "https://www.instagram.com/your-art-instagram",
      icon: "📷",
      description: "Follow my pixel art and creative work"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@RinkyDinkGamer",
      icon: "📺",
      description: "Watch my game development tutorials and project showcases"
    },
    {
      name: "GitHub",
      url: "https://github.com/your-github",
      icon: "💻",
      description: "View my code repositories and open source contributions"
    },
    {
      name: "itch.io",
      url: "https://fancy-dog-games.itch.io",
      icon: "🎮",
      description: "Play my games and check out my game development projects"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/your-linkedin",
      icon: "💼",
      description: "Connect with me professionally"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-2">
            <span className="text-accent">Links</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 hover:border-accent rounded-lg p-6 transition-all duration-200 hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{link.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links
