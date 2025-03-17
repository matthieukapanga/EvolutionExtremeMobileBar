import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Contact Us</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Get in touch to start planning your perfect event
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white neon-border">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-pink-500" />
                  <span>+27 81 807 4871</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-pink-500" />
                  <span>contact@evolutionbar.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-pink-500" />
                  <span>Serving the greater metropolitan area</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-pink-500" />
                  <span>Available 7 days a week</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-pink-500 hover:text-pink-600">Instagram</a>
                <a href="#" className="text-pink-500 hover:text-pink-600">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}