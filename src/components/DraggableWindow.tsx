import { useState, useRef, useEffect, ReactNode } from 'react'

interface DraggableWindowProps {
  title: string
  children: ReactNode
  onClose: () => void
  initialPosition?: { x: number; y: number }
  initialSize?: { width: number; height: number }
}

const DraggableWindow = ({ 
  title, 
  children, 
  onClose,
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 800, height: 600 }
}: DraggableWindowProps) => {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setIsDragging(true)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect()
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y
      
      // Constrain to viewport
      const maxX = window.innerWidth - rect.width
      const maxY = window.innerHeight - rect.height
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  return (
    <div
      ref={windowRef}
      className="fixed bg-gray-800 border border-gray-700 rounded-lg shadow-2xl z-50 flex flex-col"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${initialSize.width}px`,
        height: `${initialSize.height}px`,
        maxWidth: '90vw',
        maxHeight: '90vh',
      }}
    >
      {/* Title Bar */}
      <div
        className="bg-gray-700 px-4 py-2 rounded-t-lg flex items-center justify-between cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <h2 className="text-white font-semibold text-sm">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white hover:bg-gray-600 rounded px-2 py-1 transition-colors"
          aria-label="Close window"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-gray-900 rounded-b-lg">
        {children}
      </div>
    </div>
  )
}

export default DraggableWindow
