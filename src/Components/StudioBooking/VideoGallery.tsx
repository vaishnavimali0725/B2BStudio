import React from 'react';

const VideoGallery: React.FC = () => {
  const videoCategories = [
    {
      category: "Performance Videos",
      videos: [
        {
          id: 1,
          title: "G20 Summit Performance",
          description: "Cultural performance at G20 Summit India",
          duration: "3:45",
          views: "15K"
        },
        {
          id: 2,
          title: "Annual Dance Festival 2024",
          description: "Grand annual showcase of student talents",
          duration: "12:30",
          views: "25K"
        },
        {
          id: 3,
          title: "Traditional Folk Dance",
          description: "Preserving Indian cultural heritage",
          duration: "4:20",
          views: "8K"
        },
        {
          id: 4,
          title: "HipHop Battle Competition",
          description: "Inter-studio dance competition",
          duration: "6:15",
          views: "12K"
        }
      ]
    },
    {
      category: "Training & Workshops",
      videos: [
        {
          id: 5,
          title: "Beginner Dance Tutorial",
          description: "Basic steps for new students",
          duration: "8:45",
          views: "35K"
        },
        {
          id: 6,
          title: "Yoga for Dancers",
          description: "Flexibility and strength training",
          duration: "15:20",
          views: "18K"
        },
        {
          id: 7,
          title: "Zumba Fitness Session",
          description: "Energetic group workout",
          duration: "10:30",
          views: "22K"
        },
        {
          id: 8,
          title: "Choreography Workshop",
          description: "Learn to create your own dances",
          duration: "20:15",
          views: "14K"
        }
      ]
    },
    {
      category: "Event Highlights",
      videos: [
        {
          id: 9,
          title: "Wedding Sangeet Performance",
          description: "Custom choreography for weddings",
          duration: "5:40",
          views: "30K"
        },
        {
          id: 10,
          title: "Corporate Event Showcase",
          description: "Team building through dance",
          duration: "7:25",
          views: "11K"
        },
        {
          id: 11,
          title: "School Annual Day",
          description: "Student performances and awards",
          duration: "18:30",
          views: "45K"
        },
        {
          id: 12,
          title: "International Workshop Japan",
          description: "Bollywood dance in Kobe, Japan",
          duration: "9:15",
          views: "50K"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Video Gallery</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our performances, training sessions, and event highlights from BeatToBeat Studio
          </p>
        </div>

        {/* Video Categories */}
        {videoCategories.map((category) => (
          <div key={category.category} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  {/* Video Thumbnail */}
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-6xl">
                      ▶️
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>👁️ {video.views} views</span>
                      <button className="bg-pink-500 text-white px-3 py-1 rounded-full hover:bg-pink-600 transition duration-200">
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Featured Video Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🎬 Featured Performance</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-pink-400 to-rose-500 h-64 md:h-96 rounded-2xl flex items-center justify-center text-white text-8xl">
              ▶️
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">G20 Summit Cultural Performance</h3>
              <p className="text-gray-600 mb-4">
                BeatToBeat Studio proudly presenting Indian cultural dance at the G20 Summit 2023
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <span>⏱️ 15:30 minutes</span>
                <span>👁️ 150K views</span>
                <span>📅 December 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Channel Promotion */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">📺 Subscribe to Our Channel</h2>
          <p className="text-xl mb-6">Watch more amazing performances and tutorials on our YouTube channel</p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              { count: "500+", label: "Videos" },
              { count: "1M+", label: "Views" },
              { count: "50K+", label: "Subscribers" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold">{stat.count}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition duration-300">
            Visit YouTube Channel
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;