import { useState, useEffect } from 'react'

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  caption?: string
  timestamp: string
  media_type: string
}

const InstagramPosts = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Instagram Basic Display API requires an access token
    // You'll need to set this in your environment variables
    const ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN
    const USER_ID = import.meta.env.VITE_INSTAGRAM_USER_ID

    if (!ACCESS_TOKEN || !USER_ID) {
      setError('Instagram API credentials not configured')
      setLoading(false)
      return
    }

    const fetchPosts = async () => {
      try {
        // Fetch user's media using Instagram Basic Display API
        const response = await fetch(
          `https://graph.instagram.com/${USER_ID}/media?fields=id,media_url,permalink,caption,timestamp,media_type&access_token=${ACCESS_TOKEN}&limit=9`
        )
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(`Failed to fetch posts: ${errorData.error?.message || 'Unknown error'}`)
        }

        const data = await response.json()
        
        if (!data.data || data.data.length === 0) {
          setPosts([])
          return
        }
        
        setPosts(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-400 text-sm">Loading Instagram posts...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-400 text-sm">
          {error === 'Instagram API credentials not configured' 
            ? 'Instagram posts will appear here once API credentials are configured'
            : `Error loading posts: ${error}`}
        </p>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-400 text-sm">No posts found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden rounded-lg border border-gray-700 hover:border-accent transition-all duration-200 hover:scale-105 group"
        >
          {post.media_type === 'VIDEO' ? (
            <video
              src={post.media_url}
              className="w-full h-full object-cover"
              muted
              playsInline
            />
          ) : (
            <img
              src={post.media_url}
              alt={post.caption || 'Instagram post'}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            {post.media_type === 'VIDEO' && (
              <svg
                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}

export default InstagramPosts
