import React from 'react'
import Gallery1 from "../../assets/Gallery1-bg.png"
import Gallery2 from "../../assets/Galley2-bg.png"
import Gallery4 from "../../assets/Gallery4.jpg"
import Gallery5 from "../../assets/Gallery5.jpg"
import Gallery6 from "../../assets/Gallery6.jpg"
import Gallery7 from "../../assets/Gallery7.jpg"

const GallerySection = () => {
  const galleryImages = [
    Gallery1, Gallery2, Gallery4, Gallery5, Gallery6, Gallery7,
    Gallery1, Gallery2, Gallery4, Gallery5, Gallery6, Gallery7, // duplicated for fullness
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Gallery</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          A glimpse into the moments and memories that define our mission.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
