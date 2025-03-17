import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
      alt: "Cocktail being mixed",
      caption: "Crafting signature cocktails"
    },
    {
      src: "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=800&q=80",
      alt: "Mobile bar setup",
      caption: "Our premium mobile bar setup"
    },
    {
      src: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800&q=80",
      alt: "Bartender serving",
      caption: "Professional service at corporate events"
    },
    {
      src: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&q=80",
      alt: "Cocktail presentation",
      caption: "Elegant drink presentations"
    },
    {
      src: "https://images.unsplash.com/photo-1578664182354-e3878469a7c6?w=800&q=80",
      alt: "Wedding bar service",
      caption: "Making wedding dreams come true"
    },
    {
      src: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80",
      alt: "Cocktail ingredients",
      caption: "Fresh ingredients for perfect drinks"
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Our Gallery</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Take a look at some of our favorite moments and setups from past events
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {images.map((image, index) => (
            <div key={index} className="glass-effect rounded-2xl p-4 service-card">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-600">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}