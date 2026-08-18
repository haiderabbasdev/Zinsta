import React from 'react'

const reelVideos = [
  {
    id: 1,
    title: 'Bamboo Bowl Co.',
    description:
      'Fresh plant-based bowls, handcrafted smoothies, and cozy café vibes for your afternoon reset.',
    videoUrl:
      'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4',
  },
  {
    id: 2,
    title: 'Cinder Kitchen',
    description:
      'Slow-cooked comfort food, signature sizzles, and chef specials served hot from the grill every evening.',
    videoUrl:
      'https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4',
  },
  {
    id: 3,
    title: 'Bloom & Bean',
    description:
      'Artisan coffee, light brunch plates, and floral desserts made to brighten up your day.',
    videoUrl:
      'https://www.pexels.com/download/video/38968049/',
  },
]

const Home = () => {
  return (
    <main className="home-reel" aria-label="Store video feed">
      {reelVideos.map((item) => (
        <section key={item.id} className="reel-slide">
          <video
            className="reel-video"
            src={item.videoUrl}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="reel-overlay">
            <div className="reel-content">
              <div className="reel-brand">{item.title}</div>
              <p className="reel-description">{item.description}</p>
              <button type="button" className="reel-button">
                Visit Store
              </button>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Home
