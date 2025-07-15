import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const PhotoAlbum = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      src: "/lovable-uploads/d78919a5-5db4-4cb9-b269-968515666d2a.png",
      alt: "Bishop Samuel Ingói preaching",
      category: "Leadership"
    },
    {
      src: "/lovable-uploads/6907f40d-cc5f-4a7f-97d4-1db937ce2604.png",
      alt: "Church leadership team",
      category: "Leadership"
    },
    {
      src: "/lovable-uploads/992d7874-04c0-425f-bc75-208dae7d4bd3.png",
      alt: "Congregation worship service",
      category: "Worship"
    },
    {
      src: "/lovable-uploads/88484743-1a2b-4e3a-81c6-a7456ffe74d7.png",
      alt: "Bishop and Pastor Everlyne together",
      category: "Leadership"
    },
    {
      src: "/lovable-uploads/7579d505-5074-436f-afc1-76c85bfa3aab.png",
      alt: "Congregation in worship",
      category: "Worship"
    },
    {
      src: "/lovable-uploads/df1776cf-107f-4ef7-a1d9-83f335a85f79.png",
      alt: "Church gathering",
      category: "Community"
    },
    {
      src: "/lovable-uploads/e25291ca-2cf6-43e1-88d7-fdfece5c0ed5.png",
      alt: "Praise and worship",
      category: "Worship"
    },
    {
      src: "/lovable-uploads/949ac9ed-faef-4f1d-b74b-bea4b2653053.png",
      alt: "Ministry partners",
      category: "Community"
    },
    {
      src: "/lovable-uploads/62faf9ce-d3cd-4481-8e11-d83b7a732748.png",
      alt: "Large congregation gathering",
      category: "Events"
    },
    {
      src: "/lovable-uploads/02991747-b0c6-4631-8340-9fabb1761332.png",
      alt: "Church service",
      category: "Worship"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-heavenly-light to-spiritual-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-spiritual-blue mb-6">
            Photo Album
          </h2>
          <div className="w-24 h-1 bg-divine-gold mx-auto mb-6"></div>
          <p className="text-lg text-spiritual-blue/80 max-w-2xl mx-auto">
            Capturing precious moments of our church family, worship services, and community gatherings
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-divine transition-all duration-300 cursor-pointer"
              onClick={() => openModal(photo.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-spiritual-blue/0 group-hover:bg-spiritual-blue/20 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-divine-gold text-spiritual-blue px-3 py-1 rounded-full text-xs font-semibold">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-divine-gold transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged photo"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-divine-gold/10 backdrop-blur-sm border border-divine-gold/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="font-serif text-lg text-spiritual-blue italic">
              "These images capture the heart of our ministry - a vibrant community united in faith, 
              worship, and the shared mission to reach the reached and unreached with God's love."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoAlbum;