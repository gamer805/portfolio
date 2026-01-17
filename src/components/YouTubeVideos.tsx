import { useState, useEffect } from 'react'

interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
}

// Helper function to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  // Create a temporary element to decode HTML entities
  if (typeof document !== 'undefined') {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = text
    return textarea.value
  }
  // Fallback: manually decode common entities
  return text
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
}

const YouTubeVideos = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Note: This requires a YouTube Data API v3 key
    // You'll need to set this in your environment variables or use a backend proxy
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
    const CHANNEL_HANDLE = 'RinkyDinkGamer'

    if (!API_KEY) {
      setError('YouTube API key not configured')
      setLoading(false)
      return
    }

    const fetchVideos = async () => {
      try {
        // Search for the channel by handle
        const channelSearchResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=@${CHANNEL_HANDLE}&key=${API_KEY}`
        )
        
        if (!channelSearchResponse.ok) {
          const errorData = await channelSearchResponse.json()
          throw new Error(`Failed to find channel: ${errorData.error?.message || 'Unknown error'}`)
        }

        const channelSearchData = await channelSearchResponse.json()
        
        if (!channelSearchData.items || channelSearchData.items.length === 0) {
          throw new Error('Channel not found')
        }
        
        // Extract the channel ID from the search result
        // The id field in search results is an object with kind and channelId
        const channelId = channelSearchData.items[0].id?.channelId
        
        if (!channelId || typeof channelId !== 'string') {
          throw new Error('Could not extract channel ID from search results')
        }
        
        // Get videos directly from the channel using the channel ID
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=9&key=${API_KEY}`
        )
        
        if (!videosResponse.ok) {
          const errorData = await videosResponse.json()
          throw new Error(`Failed to fetch videos: ${errorData.error?.message || 'Unknown error'}`)
        }
        
        const videosData = await videosResponse.json()
        
        if (!videosData.items || videosData.items.length === 0) {
          setVideos([])
          return
        }
        
        const videoList: YouTubeVideo[] = videosData.items.map((item: any) => ({
          id: item.id.videoId,
          title: decodeHtmlEntities(item.snippet.title),
          thumbnail: item.snippet.thumbnails.medium.url,
          publishedAt: item.snippet.publishedAt
        }))
        
        setVideos(videoList)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load videos')
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Loading videos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">
          {error === 'YouTube API key not configured' 
            ? 'YouTube videos will appear here once API key is configured'
            : `Error loading videos: ${error}`}
        </p>
      </div>
    )
  }

  if (videos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No videos found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-accent transition-all duration-200 hover:scale-105 group"
        >
          <div className="relative aspect-video">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <svg
                className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-white font-semibold line-clamp-2 group-hover:text-accent transition-colors">
              {video.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              {new Date(video.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default YouTubeVideos
