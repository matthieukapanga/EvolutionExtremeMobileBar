import { Users, Award, Clock, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "1000+",
      label: "Events Served"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "100%",
      label: "Satisfaction Rate"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: "5+ Years",
      label: "Experience"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      value: "50+",
      label: "Signature Drinks"
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">About Us</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Bringing exceptional mobile bar experiences to your special events
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Evolution Extreme Mobile Bar was born from a passion for crafting exceptional drink experiences and a vision to revolutionize event bartending. What started as a dream has evolved into the region's premier mobile bar service.
              </p>
              <p>
                Our journey began with a simple idea: to bring professional, stylish, and memorable bar services directly to our clients. Today, we're proud to be the trusted choice for weddings, corporate events, and private celebrations throughout the area.
              </p>
              <p>
                We believe that every event deserves more than just drinks – it deserves an experience. That's why we combine expert mixology, stunning presentation, and impeccable service to create unforgettable moments for our clients and their guests.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To elevate every celebration with exceptional mobile bar service, innovative cocktails, and unforgettable experiences that bring people together and create lasting memories.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
              <ul className="space-y-4 text-gray-600">
                <li>• Excellence in every detail</li>
                <li>• Creativity in our craft</li>
                <li>• Reliability you can count on</li>
                <li>• Personalized service for every client</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center service-card">
              <div className="text-pink-500 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}