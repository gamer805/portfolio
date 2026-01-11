import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠', isEmoji: true },
    { path: '/about', label: 'About', icon: 'about.png', isEmoji: false },
    { path: '/links', label: 'Links', icon: 'links.png', isEmoji: false },
    { path: '/work', label: 'Work', icon: 'work.png', isEmoji: false },
    { path: '/faq', label: 'FAQ', icon: 'FAQ.png', isEmoji: false },
    { path: '/contact', label: 'Contact', icon: 'contact.png', isEmoji: false },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center py-3 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 min-w-[60px] ${
                  isActive
                    ? 'text-accent bg-gray-700'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                title={item.label}
              >
                {item.isEmoji ? (
                  <span className="text-2xl">{item.icon}</span>
                ) : (
                  <img
                    src={`${import.meta.env.BASE_URL}assets/page-icons/${item.icon}`}
                    alt={item.label}
                    className="w-8 h-8 object-contain"
                  />
                )}
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
