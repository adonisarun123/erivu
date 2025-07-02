import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ShoppingCart, 
  Star, 
  Award, 
  Leaf, 
  MapPin, 
  Users, 
  Heart,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Menu,
  X,
  CheckCircle,
  Truck,
  Shield,
  Crown
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      name: "Cardamom (Elaichi)",
      description: "Premium GI-tagged cardamom from Idukki hills",
      price: "₹899",
      originalPrice: "₹1,199",
      rating: 4.9,
      image: "🌿",
      badge: "Best Seller"
    },
    {
      name: "Black Pepper (Kurumulaku)",
      description: "Authentic Malabar black pepper, the king of spices",
      price: "₹599",
      originalPrice: "₹799",
      rating: 4.8,
      image: "⚫",
      badge: "Premium"
    },
    {
      name: "Cinnamon (Karugapatta)",
      description: "True Ceylon cinnamon from Western Ghats",
      price: "₹449",
      originalPrice: "₹599",
      rating: 4.9,
      image: "🟤",
      badge: "Organic"
    },
    {
      name: "Nutmeg (Jathikka)",
      description: "Hand-picked nutmeg with rich aroma",
      price: "₹799",
      originalPrice: "₹999",
      rating: 4.7,
      image: "🟫",
      badge: "Rare"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "GI Certified",
      description: "Every spice comes with Geographical Indication certification"
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No artificial colors, preservatives, or additives"
    },
    {
      icon: Users,
      title: "Farm Direct",
      description: "Sourced directly from certified Kerala farmers"
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Packaged fresh and delivered within 3-5 days"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-serif font-bold spice-text">Erivu</div>
              <Badge variant="secondary" className="hidden sm:inline-flex">GI Certified</Badge>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#shop" className="text-foreground hover:text-primary transition-colors">Shop</a>
              <a href="#story" className="text-foreground hover:text-primary transition-colors">Our Story</a>
              <a href="#quality" className="text-foreground hover:text-primary transition-colors">Quality</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
                <a href="#shop" className="text-foreground hover:text-primary transition-colors">Shop</a>
                <a href="#story" className="text-foreground hover:text-primary transition-colors">Our Story</a>
                <a href="#quality" className="text-foreground hover:text-primary transition-colors">Quality</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
                <Button variant="outline" size="sm" className="w-fit">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-accent/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-kerala text-white">
                  <MapPin className="w-3 h-3 mr-1" />
                  From the Spice Gardens of Kerala
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                  Where Every 
                  <span className="spice-text"> Spice </span>
                  Tells a 
                  <span className="text-kerala"> Story</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From the misty hills of Idukki to your kitchen, Erivu brings you the authentic taste of Kerala's 2000-year spice heritage. Every spice is GI-certified, ensuring you get nothing but the finest quality that made Kerala the spice capital of the world.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group spice-gradient text-white">
                  Explore Our Spices
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn Our Story
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-kerala">15+</div>
                  <div className="text-sm text-muted-foreground">Premium Spices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-spice">100%</div>
                  <div className="text-sm text-muted-foreground">GI Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">2000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="floating-spice">
                <div className="text-9xl mb-4">🌶️</div>
              </div>
              <div className="absolute top-4 right-4 floating-spice" style={{animationDelay: '2s'}}>
                <div className="text-6xl">🌿</div>
              </div>
              <div className="absolute bottom-4 left-4 floating-spice" style={{animationDelay: '4s'}}>
                <div className="text-7xl">⚫</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <Crown className="w-3 h-3 mr-1" />
              Premium Collection
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Discover Kerala's 
              <span className="spice-text">Finest Spices</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each spice in our collection carries the story of Kerala's rich soil, traditional farming methods, and generations of expertise. GI certification guarantees authenticity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <Badge className="mb-2 w-fit mx-auto">{product.badge}</Badge>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">{product.rating}</span>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full spice-gradient text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Spices
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-kerala text-white">
                  <Heart className="w-3 h-3 mr-1" />
                  Our Heritage
                </Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold">
                  A <span className="text-kerala">2000-Year</span> Journey of 
                  <span className="spice-text">Flavor</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In the misty hills of Kerala, where the monsoons kiss the spice gardens and ancient trade routes once brought the world to India's shores, lies our story. Erivu isn't just a spice brand – we're the keepers of a tradition that shaped global cuisine.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Generational Expertise</h3>
                    <p className="text-muted-foreground">Our partner farmers represent 5+ generations of spice cultivation knowledge, passed down through families who've made these hills their home.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sacred Soil</h3>
                    <p className="text-muted-foreground">Kerala's unique climate and mineral-rich soil create spices with distinctive flavors that can't be replicated anywhere else in the world.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Modern Certification</h3>
                    <p className="text-muted-foreground">Every spice carries GI (Geographical Indication) certification, ensuring you receive authentic Kerala spices with verified origin and quality.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-8xl text-center">🏔️</div>
              <Card className="p-6 border-0 shadow-lg">
                <blockquote className="text-lg italic text-muted-foreground text-center">
                  "When you open a jar of Erivu spices, you're not just adding flavor to your food – you're adding centuries of tradition, the essence of Kerala's soil, and the passion of farmers who treat every harvest as sacred."
                </blockquote>
                <div className="text-center mt-4">
                  <div className="font-semibold">Ravi Menon</div>
                  <div className="text-sm text-muted-foreground">Founder, Erivu</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section id="quality" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              <Shield className="w-3 h-3 mr-1" />
              Quality Guarantee
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Promise of 
              <span className="text-kerala">Authenticity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every Erivu spice undergoes rigorous quality checks and comes with GI certification. We don't just sell spices – we deliver trust, tradition, and taste.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg card-hover">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-xl font-semibold mb-4">GI Certification</h3>
              <p className="text-muted-foreground">
                Geographical Indication certification ensures every spice is authentic and sourced from its traditional growing region in Kerala.
              </p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg card-hover">
              <div className="text-6xl mb-6">🔬</div>
              <h3 className="text-xl font-semibold mb-4">Lab Tested</h3>
              <p className="text-muted-foreground">
                Each batch undergoes comprehensive testing for purity, potency, and absence of adulterants in certified laboratories.
              </p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg card-hover">
              <div className="text-6xl mb-6">📦</div>
              <h3 className="text-xl font-semibold mb-4">Fresh Packaging</h3>
              <p className="text-muted-foreground">
                Vacuum-sealed, nitrogen-flushed packaging preserves freshness and aroma from our processing facility to your kitchen.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Connect with 
              <span className="spice-text">Erivu</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our spices? Want to know more about our story? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+91 9876 543 210</p>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">hello@erivu.com</p>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <Instagram className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-muted-foreground">@erivu_spices</p>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">erivu-authentic-spices</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-serif font-bold spice-text">Erivu</div>
              <p className="text-muted-foreground">
                Bringing you the authentic taste of Kerala's spice heritage since generations.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>All Spices</div>
                <div>Best Sellers</div>
                <div>Gift Sets</div>
                <div>Bulk Orders</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Our Story</div>
                <div>Spice Education</div>
                <div>Recipes</div>
                <div>Blog</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Contact Us</div>
                <div>Shipping Info</div>
                <div>Returns</div>
                <div>FAQs</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 Erivu. All rights reserved. | GI Certified Authentic Kerala Spices</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
