import { GlassWater, Wine, Coffee, Sparkles, ShoppingBag, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <GlassWater className="h-12 w-12" />,
      title: "Mobile Bar Setup",
      description: "Our signature mobile bar setup comes complete with everything needed for a successful event. We provide elegant bar fixtures, premium glassware, and all necessary equipment."
    },
    {
      icon: <Wine className="h-12 w-12" />,
      title: "Premium Cocktails",
      description: "Expertly crafted cocktails using top-shelf spirits and fresh ingredients. We can create custom signature drinks for your special event."
    },
    {
      icon: <Coffee className="h-12 w-12" />,
      title: "Non-Alcoholic Options",
      description: "Extensive selection of mocktails, fresh juices, and specialty beverages for non-drinking guests."
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Custom Drink Menus",
      description: "Personalized drink menus designed to match your event theme and preferences. From classic cocktails to innovative creations."
    },
    {
      icon: <ShoppingBag className="h-12 w-12" />,
      title: "Full Service Packages",
      description: "Comprehensive packages including setup, service, and cleanup. We handle everything so you can enjoy your event."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Professional Staff",
      description: "Experienced, friendly, and professional bartenders and servers who ensure impeccable service throughout your event."
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover our comprehensive range of mobile bar services designed to make your event unforgettable
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-effect rounded-2xl p-8">
              <div className="text-pink-500 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}