import React, { useState } from 'react';
import { ShoppingCart, PawPrint, Heart, Search, Menu, Star, ShieldCheck, Truck, Clock } from 'lucide-react';

// --- MOCK DATA ---
const featuredDogs = [
  {
    id: 1,
    breed: "Golden Retriever",
    name: "Buddy",
    age: "2 Months",
    price: 850,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=500",
    rating: 5,
    tag: "Popular"
  },
  {
    id: 2,
    breed: "French Bulldog",
    name: "Luna",
    age: "3 Months",
    price: 1200,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500",
    rating: 4.8,
  },
  {
    id: 3,
    breed: "Pembroke Welsh Corgi",
    name: "Winston",
    age: "10 Weeks",
    price: 950,
    image: "https://images.unsplash.com/photo-1612536057832-2ce7ea8c890a?auto=format&fit=crop&q=80&w=500",
    rating: 4.9,
    tag: "New"
  },
  {
    id: 4,
    breed: "Beagle",
    name: "Cooper",
    age: "4 Months",
    price: 600,
    image: "https://images.unsplash.com/photo-1537151608804-ea2d119e09d5?auto=format&fit=crop&q=80&w=500",
    rating: 4.7,
  },
  {
    id: 5,
    breed: "Siberian Husky",
    name: "Sky",
    age: "8 Weeks",
    price: 1100,
    image: "https://images.unsplash.com/photo-1605568420105-440bf10fc652?auto=format&fit=crop&q=80&w=500",
    rating: 5,
  },
  {
    id: 6,
    breed: "Poodle",
    name: "Bella",
    age: "12 Weeks",
    price: 750,
    image: "https://images.unsplash.com/photo-1516366479603-5d51d45904de?auto=format&fit=crop&q=80&w=500",
    rating: 4.6,
  }
];

const features = [
  { icon: <ShieldCheck className="w-8 h-8 text-amber-500" />, title: "Health Guarantee", desc: "All our pups come with a 1-year health guarantee." },
  { icon: <Truck className="w-8 h-8 text-amber-500" />, title: "Safe Delivery", desc: "Door-to-door safe and stress-free delivery options." },
  { icon: <Clock className="w-8 h-8 text-amber-500" />, title: "24/7 Support", desc: "Our vet experts are available around the clock." }
];

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (dogName) => {
    setCartCount(prev => prev + 1);
    setNotification(`Added ${dogName} to your cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
          <Heart className="w-5 h-5" fill="currentColor" />
          <span className="font-medium">{notification}</span>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
              <div className="bg-amber-500 p-2 rounded-xl text-white mr-3 shadow-md">
                <PawPrint className="h-6 w-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-stone-800">
                Paws<span className="text-amber-500">&</span>Play
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-medium text-stone-600">
              <a href="#" className="hover:text-amber-500 transition-colors text-amber-500 border-b-2 border-amber-500 py-2">Home</a>
              <a href="#dogs" className="hover:text-amber-500 transition-colors py-2">Our Dogs</a>
              <a href="#services" className="hover:text-amber-500 transition-colors py-2">Services</a>
              <a href="#about" className="hover:text-amber-500 transition-colors py-2">About Us</a>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-stone-500 hover:text-amber-500 transition-colors">
                <Search className="w-6 h-6" />
              </button>
              <button className="relative text-stone-500 hover:text-amber-500 transition-colors group">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button className="relative text-stone-500">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-500 hover:text-amber-500">
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" className="block px-3 py-3 text-base font-medium text-amber-500 bg-amber-50 rounded-lg">Home</a>
              <a href="#dogs" className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-amber-500 hover:bg-stone-50 rounded-lg">Our Dogs</a>
              <a href="#services" className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-amber-500 hover:bg-stone-50 rounded-lg">Services</a>
              <a href="#about" className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-amber-500 hover:bg-stone-50 rounded-lg">About Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-semibold text-sm mb-6">
                <PawPrint className="w-4 h-4 mr-2" />
                Your New Best Friend Awaits
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
                Find the <span className="text-amber-500 relative">
                  Perfect
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                  </svg>
                </span> Companion.
              </h1>
              <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                Discover healthy, happy, and well-socialized puppies ready to bring endless joy and unconditional love to your family home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#dogs" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl shadow-sm text-white bg-amber-500 hover:bg-amber-600 hover:shadow-lg transition-all hover:-translate-y-1">
                  Meet Our Puppies
                </a>
                <a href="#about" className="inline-flex justify-center items-center px-8 py-4 border-2 border-stone-200 text-base font-bold rounded-xl text-stone-700 bg-white hover:border-amber-500 hover:text-amber-500 transition-all">
                  Learn Our Process
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-amber-200 rounded-[3rem] transform rotate-3 scale-105 -z-10 opacity-50"></div>
              <div className="absolute inset-0 bg-stone-200 rounded-[3rem] transform -rotate-2 scale-105 -z-20 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" 
                alt="Happy dogs playing" 
                className="w-full h-auto rounded-[3rem] shadow-2xl object-cover border-8 border-white"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-bold uppercase">Certified</p>
                  <p className="font-bold text-stone-900">100% Healthy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-50 p-3 rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-stone-800">{feature.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dogs Grid */}
      <section id="dogs" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-4">Our Furry Friends</h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Browse our current available puppies. Each one is waiting for a loving forever home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDogs.map((dog) => (
              <div key={dog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3]">
                  {dog.tag && (
                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {dog.tag}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-stone-400 hover:text-red-500 hover:bg-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <img 
                    src={dog.image} 
                    alt={dog.breed} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm font-semibold text-amber-500 mb-1">{dog.breed}</p>
                      <h3 className="text-2xl font-bold text-stone-800">{dog.name}</h3>
                    </div>
                    <div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
                      <span className="text-sm font-bold text-stone-700">{dog.rating}</span>
                    </div>
                  </div>
                  
                  <div className="text-stone-500 text-sm mb-6 flex items-center gap-4">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {dog.age}</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                    <span>Vaccinated</span>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
                    <div className="flex flex-col">
                      <span className="text-xs text-stone-400 uppercase font-bold">Price</span>
                      <span className="text-2xl font-extrabold text-stone-900">${dog.price}</span>
                    </div>
                    <button 
                      onClick={() => handleAddToCart(dog.name)}
                      className="bg-stone-900 hover:bg-amber-500 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Adopt
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="inline-flex justify-center items-center px-8 py-4 border-2 border-stone-300 text-lg font-bold rounded-xl text-stone-600 hover:border-amber-500 hover:text-amber-500 transition-colors">
              View All Puppies <PawPrint className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 p-2 rounded-xl text-white mr-3">
                  <PawPrint className="h-6 w-6" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  Paws<span className="text-amber-500">&</span>Play
                </span>
              </div>
              <p className="text-stone-400 leading-relaxed">
                Connecting loving families with healthy, happy, and adorable puppies. Your new best friend is just a click away.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#dogs" className="hover:text-amber-500 transition-colors">Our Puppies</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Breeds</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Golden Retrievers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">French Bulldogs</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Corgis</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Poodles</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-stone-400 mb-4 text-sm">Subscribe to get updates on new litters and special offers!</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-stone-800 text-white px-4 py-2 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-amber-500 w-full"
                />
                <button type="submit" className="bg-amber-500 text-stone-900 px-4 py-2 rounded-r-xl font-bold hover:bg-amber-600 transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>&copy; 2026 Paws&Play Pet Store. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
