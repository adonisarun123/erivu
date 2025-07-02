import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  User, 
  ShoppingCart, 
  Play,
  Heart,
  Shield,
  Users,
  Heart as HeartSolid,
  MapPin,
  Send
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Malabar Black Pepper",
      description: "The \"Black Gold\" of Kerala, known for its bold flavor and aromatic intensity",
      price: "₹850",
      image: "/kerala-spices-1.jpg",
      badge: "GI Tagged",
      badgeColor: "bg-red-500"
    },
    {
      id: 2,
      name: "Alleppey Green Cardamom",
      description: "Premium grade cardamom with intense aroma and sweet flavor notes",
      price: "₹1,200",
      image: "/kerala-spices-1.jpg",
      badge: "Queen of Spices",
      badgeColor: "bg-green-500"
    },
    {
      id: 3,
      name: "Kerala Golden Turmeric",
      description: "Pure, high-curcumin turmeric with vibrant color and earthy flavor",
      price: "₹450",
      image: "/kerala-spices-1.jpg",
      badge: "Golden Spice",
      badgeColor: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-2xl font-serif font-bold text-gray-900">Erivu</span>
              <Badge className="bg-green-500 text-white text-xs px-2 py-1">
                GI Tagged
              </Badge>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#spices" className="text-gray-700 hover:text-gray-900 font-medium">Our Spices</a>
              <a href="#stories" className="text-gray-700 hover:text-gray-900 font-medium">Stories</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute top-60 right-10 w-12 h-12 bg-pink-200 rounded-full opacity-60"></div>

        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex items-center space-x-4 mb-8">
            <Badge className="bg-green-100 text-green-700 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              GI Tagged Authentic
            </Badge>
            <Badge className="bg-yellow-100 text-yellow-700 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Kerala, India
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Where Every Spice
          </h1>
          <h2 className="text-5xl md:text-6xl font-script font-bold text-red-500 mb-8 leading-tight">
            Tells a Story
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-4 max-w-2xl leading-relaxed">
            Discover the authentic taste of Kerala with our premium collection of
          </p>
          <p className="text-xl mb-8 max-w-2xl leading-relaxed">
            <span className="text-yellow-600 font-semibold">GI-tagged spices</span>
            <span className="text-gray-600">, sourced directly from the monsoon-blessed Western Ghats.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Explore Our Spices
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg border-gray-300">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-gray-600">GI Certified Quality</span>
            </div>
            <div className="flex items-center">
              <span className="w-5 h-5 text-yellow-500 mr-2">📦</span>
              <span className="text-gray-600">Free Shipping Over ₹999</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-gray-600">10,000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-4">Our Premium Collection</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            GI Tagged <span className="text-red-500">Kerala Spices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each spice carries the essence of Kerala's rich soil and centuries of traditional cultivation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <Button variant="outline" className="group">
                    <Heart className="w-4 h-4 mr-2 group-hover:fill-current" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Heritage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-pink-100 text-pink-700 px-4 py-2 mb-8">
              Heritage & Tradition
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              From Ancient <span className="text-red-500 font-script">Spice Routes</span> to Your Kitchen
            </h2>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              For centuries, Kerala has been the heart of the global spice trade. Our spices carry the legacy of monsoon-blessed soil, traditional farming wisdom, and the geographical uniqueness that makes them truly special.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Monsoon Magic</h3>
                  <p className="text-gray-600">Western Ghats' unique climate creates the perfect terroir for exceptional spices</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generational Wisdom</h3>
                  <p className="text-gray-600">Traditional cultivation methods passed down through farming families</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">GI Tag Authenticity</h3>
                  <p className="text-gray-600">Certified geographical indication ensures origin authenticity and quality</p>
                </div>
              </div>
            </div>

            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
              Discover Our Heritage →
            </Button>
          </div>

          <div className="relative">
            <img 
              src="/kerala-plantation.jpg" 
              alt="Traditional Kerala Spice Market"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-900">Traditional Kerala Spice Market</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Erivu Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Why <span className="text-red-500 font-script">Erivu</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than just spices - we deliver authenticity, heritage, and the true taste of Kerala
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-0 bg-red-50/50">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">GI Tag Certified</h3>
            <p className="text-gray-600 leading-relaxed">
              Every spice comes with geographical indication certification, guaranteeing authenticity and origin.
            </p>
          </Card>

          <Card className="text-center p-8 border-0 bg-green-50/50">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct from Farmers</h3>
            <p className="text-gray-600 leading-relaxed">
              We work directly with traditional spice farmers, ensuring fair trade and the freshest quality.
            </p>
          </Card>

          <Card className="text-center p-8 border-0 bg-yellow-50/50">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartSolid className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Heritage Stories</h3>
            <p className="text-gray-600 leading-relaxed">
              Each spice comes with its unique story, connecting you to Kerala's rich cultural heritage.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-2xl font-serif font-bold">Erivu</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Authentic Kerala spices with GI tag certification, bringing heritage and flavor to your kitchen.
              </p>
              <Send className="w-5 h-5 text-gray-400" />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Our Spices</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Heritage Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Erivu</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Customer Care</a></li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3 text-gray-400">
                <p>Kerala, India</p>
                <p>hello@erivu.com</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Erivu. All rights reserved. Made with ❤️ in Kerala.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">GI Certification</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
