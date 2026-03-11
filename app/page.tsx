'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  MessageSquare, 
  HardHat, 
  Leaf, 
  Truck, 
  Users, 
  Settings, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Send,
  ImageOff
} from 'lucide-react';

// --- Types ---
interface Product {
  name: string;
  description: string;
  price: string;
  image_url: string;
}

interface Testimonial {
  name: string;
  text: string;
  role: string;
}

// --- Components ---

const SafeImage = ({ src, alt, fill, width, height, className, priority }: any) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`flex items-center justify-center bg-zinc-800 ${className}`}>
        <ImageOff size={32} className="text-white/20" />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? (width ?? 800) : undefined}
      height={!fill ? (height ?? 600) : undefined}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
};

const useScrollReveal = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
};

export default function Website() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Data from Brief
  const brand = {
    name: "Makgromart Agro Services",
    tagline: "Fueling Nigeria's Next Harvest",
    description: "Connecting customers to quality farm products, machinery, and expert agro services across Nigeria with a focus on reliability and direct ordering.",
    industry: "agro-services",
    region: "Nigeria",
    currency: "₦"
  };

  const images = {
    hero: "https://images.unsplash.com/photo-1758608951483-0cbeef303869?auto=format&fit=crop&w=1920&q=80",
    about: "https://images.unsplash.com/photo-1718218722121-5b15e91aef8e?auto=format&fit=crop&w=1080&q=80"
  };

  const products: Product[] = [
    { name: "Premium Fertiliser Blend (50kg)", description: "High-N-P-K blend optimized for Nigerian soil conditions.", price: "₦18,500", image_url: "https://images.unsplash.com/photo-1758608951483-0cbeef303869?auto=format&fit=crop&w=800&q=80" },
    { name: "Mechanized Water Pump (Diesel)", description: "Durable, high-flow pump for irrigation systems.", price: "₦210,000", image_url: "https://images.unsplash.com/photo-1718218722121-5b15e91aef8e?auto=format&fit=crop&w=800&q=80" },
    { name: "Bag of Quality Maize (100kg)", description: "Clean, dry, and sorted maize grain from our partner farms.", price: "₦45,000", image_url: "https://images.unsplash.com/photo-1758608951483-0cbeef303869?auto=format&fit=crop&w=800&q=80" },
    { name: "Agro Consulting Package", description: "Personalized consultation on crop rotation, pest control, and yield optimization.", price: "₦75,000", image_url: "https://images.unsplash.com/photo-1718218722121-5b15e91aef8e?auto=format&fit=crop&w=800&q=80" }
  ];

  const features = [
    { title: "Direct Order Flow", description: "Streamlined ordering process directly via WhatsApp for speed and confirmation.", icon: MessageSquare },
    { title: "Equipment Sourcing", description: "Access to hard-to-find agricultural machinery, tools, and spare parts.", icon: HardHat },
    { title: "Produce Connection", description: "Reliable supply chain for grains, poultry, fresh vegetables, and tubers.", icon: Leaf },
    { title: "Reliable Supply Network", description: "Nationwide logistics ensuring your supplies reach any location in Nigeria promptly.", icon: Truck }
  ];

  const testimonials: Testimonial[] = [
    { name: "Mrs. Adebayo", text: "The fertilizer blend was exactly what my yam crop needed. Fast delivery to Ogun State!", role: "Lead Farmer, Oyo" },
    { name: "Mr. Chinedu", text: "Sourcing our new tractor parts through Makgromart saved us months of searching. Truly professional.", role: "Agro-Dealer, Abia" }
  ];

  const stats = [
    { number: "500+", label: "Farms Connected", icon: Users },
    { number: "200+", label: "Machinery Deployed", icon: Settings },
    { number: "98%", label: "On-Time Delivery", icon: CheckCircle }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <main className="relative">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center group-hover:rotate-12 transition-transform">
              <span className="text-black font-black text-xl leading-none">M</span>
            </div>
            <span className="font-heading font-black text-white text-xl tracking-tight hidden sm:block">
              MAKGROMART
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/2347037981091" target="_blank" className="bg-accent text-black px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2">
              Order Now <ArrowRight size={16} />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-primary p-8 transition-transform duration-500 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
            <span className="font-heading font-black text-white text-xl">MAKGROMART</span>
            <button onClick={() => setMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-bold text-white/90">
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/2347037981091" className="mt-8 bg-accent text-black p-4 rounded-xl font-black text-center text-lg">
              ORDER NOW
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <SafeImage 
          src={images.hero} 
          alt="Makgromart Agro" 
          fill 
          priority 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/20" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/40 rounded-full blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="font-heading text-5xl md:text-8xl font-black text-white leading-none tracking-tighter animate-fade-in">
            FUELING NIGERIA&apos;S <span className="text-accent">NEXT HARVEST</span>
          </h1>
          <p className="text-white/70 mt-8 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200">
            The reliable bridge between farm needs and quality supply. Machinery, Produce, and Expert Services delivered sharp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-slide-up delay-300">
            <a href="https://wa.me/2347037981091" target="_blank" className="bg-accent text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl shadow-accent/20">
              ORDER VIA WHATSAPP
            </a>
            <a href="#products" className="border-2 border-white/30 text-white backdrop-blur-md px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-black transition-all">
              EXPLORE SUPPLIES
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-zinc-950">
        {(() => {
          const { ref, isVisible } = useScrollReveal();
          return (
            <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-6xl font-black mb-4 uppercase">Why Makgromart?</h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">Efficiency, Quality, and Direct Connection are our core promises to the Nigerian agro sector.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((f, i) => (
                  <div key={i} className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:rotate-12 transition-all duration-500">
                      <f.icon className="text-accent group-hover:text-black" size={32} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4">{f.title}</h3>
                    <p className="text-white/40 leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Stat Strip */}
      <div className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <s.icon className="text-black/30 mb-4" size={40} />
              <p className="text-5xl font-black text-black tracking-tight">{s.number}</p>
              <p className="text-black/60 font-bold uppercase tracking-widest text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="section-padding bg-[#0d0d0d]">
        {(() => {
          const { ref, isVisible } = useScrollReveal();
          return (
            <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h2 className="font-heading text-4xl md:text-6xl font-black uppercase">Core Offerings</h2>
                  <p className="text-white/50 mt-4 text-lg">Essential supplies and machinery ready for immediate deployment.</p>
                </div>
                <div className="h-px flex-1 bg-white/10 mx-8 hidden lg:block" />
                <a href="https://wa.me/2347037981091" className="text-accent font-bold hover:gap-4 transition-all flex items-center gap-2">
                  VIEW FULL CATALOG <ArrowRight size={20} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((p, i) => (
                  <div key={i} className="group relative bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/5 hover:bg-zinc-800 transition-all duration-500">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <SafeImage src={p.image_url} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-8">
                      <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors">{p.name}</h3>
                      <p className="text-white/40 text-sm line-clamp-2 mb-6">{p.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-white">{p.price}</span>
                        <a href="https://wa.me/2347037981091" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all">
                          <MessageSquare size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {(() => {
            const { ref, isVisible } = useScrollReveal();
            return (
              <div ref={ref} className={`relative aspect-square rounded-[3rem] overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <SafeImage src={images.about} alt="Agricultural network" fill className="object-cover" />
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10">
                  <p className="text-accent font-black text-3xl mb-1">Quality Wey Go Loud</p>
                  <p className="text-white/60">Delivering excellence from the farm gate to your location.</p>
                </div>
              </div>
            );
          })()}

          {(() => {
            const { ref, isVisible } = useScrollReveal();
            return (
              <div ref={ref} className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                <h2 className="font-heading text-4xl md:text-6xl font-black uppercase mb-8">The Makgromart Network</h2>
                <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                  <p>
                    Founded on the principle of empowering local agriculture, Makgromart Agro Services has built a robust network connecting farmers directly to essential inputs and the end consumer market.
                  </p>
                  <p>
                    We invest in reliable logistics to ensure the integrity of the supply chain from field to final destination. Whether you are a smallholder farmer or a commercial estate, our tools and services are designed for your growth.
                  </p>
                </div>
                <div className="mt-12 pt-12 border-t border-white/10">
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-14 h-14 rounded-full border-4 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden">
                           <Users size={24} className="text-accent" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-white font-bold text-xl">Trusted by 500+ Farmers</p>
                      <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Nationwide Logistics</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-4 uppercase">Testimonials</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-950 border border-white/5 relative group hover:border-accent/50 transition-all duration-500">
                <Star className="absolute top-10 right-10 text-accent/20 group-hover:text-accent transition-colors" size={40} fill="currentColor" />
                <p className="text-white/80 text-2xl italic leading-relaxed mb-8">
                   &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center font-black text-black text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                    <p className="text-accent text-sm font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary/20 rounded-[3rem] border border-white/10 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20">
                <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 uppercase">Ready to Grow?</h2>
                <p className="text-white/60 text-xl mb-12">Contact us today to arrange supply for your farm or source the best machinery in Nigeria.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Call / WhatsApp</p>
                      <p className="text-white font-bold text-xl">+234 7037981091</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-white font-bold text-xl">info@makgromartagro.ng</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                      <p className="text-white font-bold text-lg">22 Road D Close, Block 1, Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-12 md:p-20 border-l border-white/10 relative overflow-hidden">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-scaleIn">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-black" />
                    </div>
                    <h3 className="text-3xl font-heading font-black mb-4">Message Sent!</h3>
                    <p className="text-white/60 text-lg mb-8">We will get back to you shortly. Sharp delivery is our promise.</p>
                    <button onClick={() => setFormSubmitted(false)} className="text-accent font-bold underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                        <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                        <input required type="tel" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                      <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                      <textarea required rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent outline-none transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-accent text-black p-5 rounded-xl font-black text-xl hover:brightness-110 transition-all flex items-center justify-center gap-3">
                      SEND MESSAGE <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-black font-black text-xl">M</span>
                </div>
                <span className="font-heading font-black text-white text-2xl tracking-tighter">MAKGROMART</span>
              </div>
              <p className="text-white/40 text-lg max-w-sm mb-8 leading-relaxed">
                Empowering Nigeria through superior agro-services, reliable machinery sourcing, and direct farm-to-consumer links.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/makgromartagro" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/2347037981091" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 text-white/40 font-medium">
                {navLinks.map(l => (
                  <li key={l.name}><a href={l.href} className="hover:text-accent transition-colors">{l.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Our Focus</h4>
              <ul className="space-y-4 text-white/40 font-medium">
                <li>Farm Machinery</li>
                <li>Grains & Tubers</li>
                <li>Irrigation Systems</li>
                <li>Agro Consulting</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-sm">© {new Date().getFullYear()} Makgromart Agro Services. All rights reserved.</p>
            <div className="flex gap-8">
               <span className="text-white/20 text-xs font-mono uppercase tracking-[0.3em]">Sharp Delivery Guaranteed</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}