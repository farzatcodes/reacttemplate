import React, { useState, useEffect } from 'react';
import { ShoppingCart, PawPrint, Heart, Search, Menu, Star, ShieldCheck, Truck, Clock, ArrowRight, Trash2, CheckCircle2, Award, Users, MapPin, Mail, Phone } from 'lucide-react';

// --- MOCK DATA ---
const ALL_DOGS = [
  { id: 1, breed: "Golden Retriever", name: "Buddy", age: "2 Months", price: 850, image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=500", rating: 5, tag: "Popular" },
  { id: 2, breed: "French Bulldog", name: "Luna", age: "3 Months", price: 1200, image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500", rating: 4.8 },
  { id: 3, breed: "Pembroke Welsh Corgi", name: "Winston", age: "10 Weeks", price: 950, image: "https://images.unsplash.com/photo-1612536057832-2ce7ea8c890a?auto=format&fit=crop&q=80&w=500", rating: 4.9, tag: "New" },
  { id: 4, breed: "Beagle", name: "Cooper", age: "4 Months", price: 600, image: "https://images.unsplash.com/photo-1537151608804-ea2d119e09d5?auto=format&fit=crop&q=80&w=500", rating: 4.7 },
  { id: 5, breed: "Siberian Husky", name: "Sky", age: "8 Weeks", price: 1100, image: "https://images.unsplash.com/photo-1605568420105-440bf10fc652?auto=format&fit=crop&q=80&w=500", rating: 5 },
  { id: 6, breed: "Poodle", name: "Bella", age: "12 Weeks", price: 750, image: "https://images.unsplash.com/photo-1516366479603-5d51d45904de?auto=format&fit=crop&q=80&w=500", rating: 4.6 }
];

const FEATURES = [
  { icon: <ShieldCheck className="w-8 h-8 text-amber-500" />, title: "Health Guarantee", desc: "All our pups come with a 1-year health guarantee." },
  { icon: <Truck className="w-8 h-8 text-amber-500" />, title: "Safe Delivery", desc: "Door-to-door safe and stress-free delivery options." },
  { icon: <Clock className="w-8 h-8 text-amber-500" />, title: "24/7 Support", desc: "Our vet experts are available around the clock." }
];

// ============================================================================
// 📁 File: src/pages/About.jsx (EXPANDED)
// Locally, you would save this function in its own file and export it.
// ============================================================================
export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-stone-900 py-24 border-b-8 border-amber-500">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200" 
            alt="Dogs playing" 
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 font-semibold text-sm mb-6 border border-amber-500/30">
            <PawPrint className="w-4 h-4 mr-2" />
            Our Mission & Story
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            More Than Just A Pet Store.
          </h1>
          <p className="text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
            We are a passionate team of animal lovers dedicated to connecting families with their perfect furry companions, ensuring health, happiness, and ethical practices every step of the way.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">How We Started</h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                Founded in 2020 by a group of passionate veterinarians and breeders, Paws&Play started with a simple, unwavering mission: to create a safe, transparent, and joyful experience for families looking to add a dog to their home.
              </p>
              <p>
                We grew tired of the unethical practices often found in the pet industry. We wanted to build a sanctuary where the welfare of the dogs came first. Today, we partner strictly with certified, licensed breeders who pass our rigorous multi-point ethical standards test. 
              </p>
              <p className="font-semibold text-stone-800 border-l-4 border-amber-500 pl-4">
                "This means no puppy mills, no backyard breeders—just loving homes raising healthy, socialized pups ready for their forever families."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-amber-200 rounded-[2rem] transform rotate-3 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1601758228041-f3b279ce7bec?auto=format&fit=crop&q=80&w=800" 
              alt="Veterinarian with a puppy" 
              className="rounded-[2rem] shadow-xl w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-stone-900 mb-4">Our Core Values</h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg">Everything we do is guided by these four pillars of excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="w-8 h-8 text-amber-500" />, title: "Compassion", desc: "Every animal deserves love, respect, and a nurturing environment from day one." },
              { icon: <ShieldCheck className="w-8 h-8 text-amber-500" />, title: "Transparency", desc: "Full medical histories and breeder backgrounds are provided for every single pup." },
              { icon: <Award className="w-8 h-8 text-amber-500" />, title: "Excellence", desc: "We adhere strictly to AKC standards and top-tier veterinary protocols." },
              { icon: <Users className="w-8 h-8 text-amber-500" />, title: "Community", desc: "We support you long after adoption day with lifelong resources and advice." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow text-center">
                <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{value.title}</h3>
                <p className="text-stone-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Standards Checklist */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-stone-100">
        <div className="bg-stone-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 opacity-10">
            <PawPrint className="w-96 h-96 text-white" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">The Paws&Play Standard</h2>
            <ul className="space-y-6">
              {[
                "Comprehensive Vet Check before leaving for home",
                "Up-to-date on all required vaccinations and deworming",
                "Microchipped for their safety and your peace of mind",
                "Early neurological stimulation and socialization",
                "1-Year Genetic Health Guarantee"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-stone-300">
                  <CheckCircle2 className="w-8 h-8 text-amber-500 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-stone-900 mb-4">Get In Touch</h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">Have questions about our process or a specific puppy? Our team is here to help.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <MapPin className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-stone-900">Visit Us</h3>
            <p className="text-stone-500">123 Puppy Lane<br/>Dogwood City, NY 10001</p>
          </div>
          <div className="p-6">
            <Phone className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-stone-900">Call Us</h3>
            <p className="text-stone-500">1-800-PAWS-PLAY<br/>Mon-Fri, 9am - 6pm EST</p>
          </div>
          <div className="p-6">
            <Mail className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-stone-900">Email Us</h3>
            <p className="text-stone-500">hello@pawsandplay.com<br/>We reply within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// OTHER COMPONENTS (Cart, Home, Dogs, Main App Router)
// ============================================================================

export function DogCard({ dog, onAdd }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/3]">
        {dog.tag && (
          <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
            {dog.tag}
          </div>
        )}
        <button className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-stone-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm">
          <Heart className="w-5 h-5" />
        </button>
        <img src={dog.image} alt={dog.breed} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
          <button onClick={onAdd} className="bg-stone-900 hover:bg-amber-500 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-md">
            <ShoppingCart className="w-4 h-4" /> Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export function HomePage({ navigateTo, handleAddToCart }) {
  const featuredDogs = ALL_DOGS.slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-semibold text-sm mb-6">
                <PawPrint className="w-4 h-4 mr-2" /> Your New Best Friend Awaits
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
                Find the <span className="text-amber-500 relative">Perfect
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" /></svg>
                </span> Companion.
              </h1>
              <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                Discover healthy, happy, and well-socialized puppies ready to bring endless joy and unconditional love to your family home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('/dogs')} className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl shadow-sm text-white bg-amber-500 hover:bg-amber-600 hover:shadow-lg transition-all hover:-translate-y-1">
                  Meet Our Puppies
                </button>
                <button onClick={() => navigateTo('/about')} className="inline-flex justify-center items-center px-8 py-4 border-2 border-stone-200 text-base font-bold rounded-xl text-stone-700 bg-white hover:border-amber-500 hover:text-amber-500 transition-all">
                  Learn Our Process
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-200 rounded-[3rem] transform rotate-3 scale-105 -z-10 opacity-50"></div>
              <div className="absolute inset-0 bg-stone-200 rounded-[3rem] transform -rotate-2 scale-105 -z-20 opacity-50"></div>
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" alt="Happy dogs playing" className="w-full h-auto rounded-[3rem] shadow-2xl object-cover border-8 border-white" style={{ aspectRatio: '4/3' }} />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="bg-green-100 p-3 rounded-full text-green-600"><ShieldCheck className="w-8 h-8" /></div>
                <div><p className="text-xs text-stone-500 font-bold uppercase">Certified</p><p className="font-bold text-stone-900">100% Healthy</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-50 p-3 rounded-xl">{feature.icon}</div>
                <div><h3 className="font-bold text-xl mb-2 text-stone-800">{feature.title}</h3><p className="text-stone-500 leading-relaxed">{feature.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-4">Trending Pups</h2>
              <p className="text-lg text-stone-500 max-w-2xl">Find your new best friend from our most popular recent arrivals.</p>
            </div>
            <button onClick={() => navigateTo('/dogs')} className="hidden md:flex items-center text-amber-500 font-bold hover:text-amber-600 transition-colors group">
              See All Puppies <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDogs.map((dog) => (<DogCard key={dog.id} dog={dog} onAdd={() => handleAddToCart(dog)} />))}
          </div>
          <button onClick={() => navigateTo('/dogs')} className="mt-10 w-full md:hidden flex justify-center items-center px-8 py-4 bg-amber-100 text-amber-700 font-bold rounded-xl hover:bg-amber-200 transition-colors">
            View All Dogs
          </button>
        </div>
      </section>
    </>
  );
}

export function DogsPage({ handleAddToCart }) {
  return (
    <div className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-4">All Available Puppies</h1>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">Browse our complete family of current available puppies. Use the filters to find the perfect match for your home.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_DOGS.map((dog) => (<DogCard key={dog.id} dog={dog} onAdd={() => handleAddToCart(dog)} />))}
        </div>
      </div>
    </div>
  );
}

export function CartPage({ cart, removeFromCart, navigateTo }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-extrabold text-stone-900 mb-10">Your Adoption Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center py-20 bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm"><Heart className="w-10 h-10 text-stone-300" /></div>
          <h2 className="text-2xl font-bold text-stone-700 mb-4">Your cart is empty</h2>
          <p className="text-stone-500 mb-8">It looks like you haven't selected a furry friend yet.</p>
          <button onClick={() => navigateTo('/dogs')} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">Browse Puppies</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((dog) => (
              <div key={dog.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-stone-100 relative">
                <img src={dog.image} alt={dog.name} className="w-32 h-32 object-cover rounded-2xl shadow-sm" />
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-amber-500 font-bold text-sm mb-1">{dog.breed}</p>
                  <h3 className="text-2xl font-extrabold text-stone-900 mb-2">{dog.name}</h3>
                </div>
                <div className="flex flex-col items-center sm:items-end gap-4 mt-4 sm:mt-0">
                  <span className="text-2xl font-extrabold text-stone-900">${dog.price}</span>
                  <button onClick={() => removeFromCart(dog.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-bold"><Trash2 className="w-4 h-4" /> Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 h-fit sticky top-28">
            <h3 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-4">Adoption Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-stone-600"><span>Subtotal ({cart.length} dogs)</span><span className="font-semibold text-stone-900">${total}</span></div>
              <div className="flex justify-between text-stone-600"><span>Health Check</span><span className="font-semibold text-green-600">Free</span></div>
            </div>
            <div className="border-t border-stone-200 pt-6 mb-8">
              <div className="flex justify-between items-center"><span className="text-lg font-bold text-stone-900">Total</span><span className="text-3xl font-extrabold text-amber-500">${total}</span></div>
            </div>
            <button className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">Proceed to Checkout <ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MAIN APP ROUTER
// ============================================================================
export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (dog) => {
    if (cart.find(item => item.id === dog.id)) {
      setNotification(`${dog.name} is already in your cart!`);
    } else {
      setCart([...cart, dog]);
      setNotification(`Added ${dog.name} to your cart!`);
    }
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (dogId) => setCart(cart.filter(item => item.id !== dogId));

  const renderPage = () => {
    if (currentPath === '/about') return <AboutPage />;
    if (currentPath === '/dogs') return <DogsPage handleAddToCart={handleAddToCart} />;
    if (currentPath === '/cart') return <CartPage cart={cart} removeFromCart={removeFromCart} navigateTo={navigateTo} />;
    return <HomePage navigateTo={navigateTo} handleAddToCart={handleAddToCart} />;
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col">
      {notification && (
        <div className="fixed top-24 right-4 z-50 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
          <Heart className="w-5 h-5" fill="currentColor" /><span className="font-medium">{notification}</span>
        </div>
      )}

      <nav className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo('/')}>
              <div className="bg-amber-500 p-2 rounded-xl text-white mr-3 shadow-md"><PawPrint className="h-6 w-6" /></div>
              <span className="font-extrabold text-2xl tracking-tight text-stone-800">Paws<span className="text-amber-500">&</span>Play</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 font-medium text-stone-600">
              <button onClick={() => navigateTo('/')} className={`hover:text-amber-500 transition-colors py-2 ${currentPath === '/' || currentPath === '' ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Home</button>
              <button onClick={() => navigateTo('/dogs')} className={`hover:text-amber-500 transition-colors py-2 ${currentPath === '/dogs' ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Our Dogs</button>
              <button onClick={() => navigateTo('/about')} className={`hover:text-amber-500 transition-colors py-2 ${currentPath === '/about' ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>About Us</button>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-stone-500 hover:text-amber-500 transition-colors"><Search className="w-6 h-6" /></button>
              <button onClick={() => navigateTo('/cart')} className="relative text-stone-500 hover:text-amber-500 transition-colors group">
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:scale-110 transition-transform">{cart.length}</span>)}
              </button>
            </div>
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => navigateTo('/cart')} className="relative text-stone-500 hover:text-amber-500"><ShoppingCart className="w-6 h-6" />{cart.length > 0 && (<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cart.length}</span>)}</button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-500 hover:text-amber-500"><Menu className="h-7 w-7" /></button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <button onClick={() => navigateTo('/')} className={`text-left px-3 py-3 text-base font-medium rounded-lg ${currentPath === '/' ? 'text-amber-500 bg-amber-50' : 'text-stone-600 hover:bg-stone-50'}`}>Home</button>
              <button onClick={() => navigateTo('/dogs')} className={`text-left px-3 py-3 text-base font-medium rounded-lg ${currentPath === '/dogs' ? 'text-amber-500 bg-amber-50' : 'text-stone-600 hover:bg-stone-50'}`}>Our Dogs</button>
              <button onClick={() => navigateTo('/about')} className={`text-left px-3 py-3 text-base font-medium rounded-lg ${currentPath === '/about' ? 'text-amber-500 bg-amber-50' : 'text-stone-600 hover:bg-stone-50'}`}>About Us</button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">{renderPage()}</main>

      <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t-4 border-amber-500 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 p-2 rounded-xl text-white mr-3"><PawPrint className="h-6 w-6" /></div>
                <span className="font-extrabold text-2xl tracking-tight text-white">Paws<span className="text-amber-500">&</span>Play</span>
              </div>
              <p className="text-stone-400 leading-relaxed">Connecting loving families with healthy, happy, and adorable puppies. Your new best friend is just a click away.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => navigateTo('/')} className="hover:text-amber-500 transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('/dogs')} className="hover:text-amber-500 transition-colors">Our Puppies</button></li>
                <li><button onClick={() => navigateTo('/about')} className="hover:text-amber-500 transition-colors">About Us</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-stone-400 mb-4 text-sm">Subscribe to get updates on new litters and special offers!</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" className="bg-stone-800 text-white px-4 py-2 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-amber-500 w-full" />
                <button type="submit" className="bg-amber-500 text-stone-900 px-4 py-2 rounded-r-xl font-bold hover:bg-amber-600 transition-colors">Join</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
