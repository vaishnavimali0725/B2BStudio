import React, { useState } from 'react';

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      category: "Studio Space",
      images: [
        { id: 1, title: "Main Dance Hall", description: "Spacious studio with mirror walls" },
        { id: 2, title: "Practice Room", description: "Intimate space for focused training" },
        { id: 3, title: "Premium Suite", description: "Professional setup with lighting" },
        { id: 4, title: "Reception Area", description: "Welcoming entrance space" }
      ]
    },
    {
      id: 2,
      category: "Events & Performances",
      images: [
        { id: 5, title: "Annual Show", description: "Grand stage performances" },
        { id: 6, title: "Workshop Sessions", description: "Interactive learning environment" },
        { id: 7, title: "Competition Prep", description: "Students preparing for events" },
        { id: 8, title: "Cultural Events", description: "Traditional dance performances" }
      ]
    },
    {
      id: 3,
      category: "Team & Training",
      images: [
        { id: 9, title: "Instructor Team", description: "Our professional teaching staff" },
        { id: 10, title: "Dance Classes", description: "Students in training sessions" },
        { id: 11, title: "Yoga Sessions", description: "Wellness and fitness programs" },
        { id: 12, title: "Zumba Fitness", description: "Energetic group sessions" }
      ]
    }
  ];

  const allImages = galleryImages.flatMap(category => category.images);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Image Gallery</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our studio spaces, events, and the vibrant community at BeatToBeat Studio
          </p>
        </div>

        {/* Gallery Categories */}
        {galleryImages.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.images.map((image) => (
                <div
                  key={image.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-6xl">
                    🖼️
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Achievements Gallery */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🏆 Achievement Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "G20 Summit", description: "Program design and choreography" },
              { title: "President Event", description: "Civic felicitation ceremony" },
              { title: "Japan Workshop", description: "International cultural exchange" },
              { title: "University Gold", description: "Inter-university competitions" },
              { title: "TV Shows", description: "Television performances" },
              { title: "Corporate Events", description: "Major company collaborations" }
            ].map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="text-4xl mb-4">🏅</div>
                <h3 className="font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {allImages.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="h-96 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-8xl mb-4 rounded-lg">
                  🖼️
                </div>
                <p className="text-gray-600 text-center">
                  {allImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;