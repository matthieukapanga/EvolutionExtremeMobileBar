import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { GlassWater, Calendar, Users, Sparkles, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=1600&q=80)',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Evolution Extreme Mobile Bar
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Elevate your events with our premium mobile bartending experience
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg neon-border">
                Book Your Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-pink-50/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GlassWater className="h-8 w-8" />,
                title: "Mobile Bar Setup",
                description: "Fully equipped, beautifully designed bar delivered to your event location"
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Custom Drink Menus",
                description: "Tailored drink selections that reflect your event's theme and personality"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Professional Staff",
                description: "Experienced bartenders and waitstaff ensuring smooth service"
              }
            ].map((service, index) => (
              <div key={index} className="service-card glass-effect rounded-2xl p-8">
                <div className="text-pink-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Perfect For Any Event</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Weddings",
              "Corporate Events",
              "Private Parties",
              "Festivals"
            ].map((event, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center neon-border">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-pink-500" />
                <h3 className="text-xl font-semibold">{event}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-pink-500" />
                <span className="text-lg">(XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-pink-500" />
                <span className="text-lg">contact@evolutionbar.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Instagram className="h-6 w-6 text-pink-500" />
                <span className="text-lg">@evolutionextremebar</span>
              </div>
              <div className="flex items-center space-x-4">
                <Facebook className="h-6 w-6 text-pink-500" />
                <span className="text-lg">Evolution Extreme Bar</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}