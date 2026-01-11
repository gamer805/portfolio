import { useState } from 'react'
import DraggableWindow from '../components/DraggableWindow'
import { AboutContent, LinksContent, WorkContent, FAQContent, ContactContent } from '../components/WindowContent'

const Home = () => {
  const [openWindows, setOpenWindows] = useState<Record<string, boolean>>({})

  const links = [
    { id: 'about', label: 'About', icon: 'about.png' },
    { id: 'links', label: 'Links', icon: 'links.png' },
    { id: 'work', label: 'Work', icon: 'work.png' },
    { id: 'faq', label: 'FAQ', icon: 'FAQ.png' },
    { id: 'contact', label: 'Contact', icon: 'contact.png' },
  ]

  const openWindow = (id: string) => {
    setOpenWindows(prev => ({ ...prev, [id]: true }))
  }

  const closeWindow = (id: string) => {
    setOpenWindows(prev => ({ ...prev, [id]: false }))
  }

  const getWindowContent = (id: string) => {
    switch (id) {
      case 'about':
        return <AboutContent />
      case 'links':
        return <LinksContent />
      case 'work':
        return <WorkContent />
      case 'faq':
        return <FAQContent />
      case 'contact':
        return <ContactContent />
      default:
        return null
    }
  }

  const getInitialPosition = () => {
    // Center the window in the viewport
    const windowWidth = 700
    const windowHeight = 550
    return {
      x: (window.innerWidth - windowWidth) / 2,
      y: (window.innerHeight - windowHeight) / 2
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-white mb-6">
                Hi! I'm <span className="text-accent">Jude</span>!
              </h1>
              <h2 className="text-xl text-gray-300 mb-6">Computer Engineer, Developer, Pixel Artist, and Streamer</h2>
              <div className="flex justify-center mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}animations/self-portrait.gif`}
                  alt="Jude Downing"
                  className="w-48 h-48 object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => openWindow(link.id)}
                    className="flex flex-col items-center gap-2 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}assets/page-icons/${link.icon}`}
                      alt={link.label}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-white font-medium text-sm">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render open windows */}
      {links.map((link) => 
        openWindows[link.id] && (
          <DraggableWindow
            key={link.id}
            title={link.label}
            onClose={() => closeWindow(link.id)}
            initialPosition={getInitialPosition()}
            initialSize={{ width: 700, height: 550 }}
          >
            {getWindowContent(link.id)}
          </DraggableWindow>
        )
      ).filter(Boolean)}
    </div>
  )
}

export default Home
