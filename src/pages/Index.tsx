import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import { Link } from "react-router-dom";
import { ArrowUpRight, Star, Shield, BarChart3, Users, Zap, Target, TrendingUp, Headphones, Code, Palette, Globe, Megaphone } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";

const marqueeItems = [
  "Sharp Branding", "Stealth SEO", "Alpha Web Design", "Content Hunting",
  "Data-Driven Strategy", "Social Media Pack Management", "Lead Generation", "Digital Territory Expansion"
];

import img1 from "@/assets/portfolio/Dynamic E-Commerce Platform.webp";
import img2 from "@/assets/portfolio/Innovative design identity.webp";
import img3 from "@/assets/portfolio/Dynamic Digital Campaign.webp";
import img4 from "@/assets/portfolio/Impactful Content Creation.webp";
import img5 from "@/assets/portfolio/Visionary Growth Strategy.webp";
import img6 from "@/assets/portfolio/Interactive Website Redesign.webp";

const portfolioItems = [
  { title: "Dynamic E-Commerce Platform", category: "Branding & Identity", image: img1 },
  { title: "Innovative Identity Design", category: "Digital Marketing", image: img2 },
  { title: "Dynamic Digital Campaign", category: "Branding & Identity", image: img3 },
  { title: "Impactful Content Creation", category: "Branding & Identity", image: img4 },
  { title: "Visionary Growth Strategy", category: "Web Design", image: img5 },
  { title: "Interactive Website Redesign", category: "Branding & Identity", image: img6 },
];

const services = [
  { title: "Alpha Branding & Identity", desc: "We build a visual DNA that demands attention and builds fierce customer loyalty.", icon: Star },
  { title: "Digital Hunting (Marketing)", desc: "Strategic SEO and PPC campaigns designed to track down your ideal audience.", icon: Target },
  { title: "High-Impact Content", desc: "We produce sharp, engaging stories and visuals that cut through the noise.", icon: Zap },
];

const stats = [
  { value: "400+", label: "Websites built with precision and creativity" },
  { value: "60+", label: "Unique brand designs crafted to inspire" },
  { value: "50+", label: "Social media accounts managed and amplified" },
  { value: "10+", label: "International brands served worldwide" },
];

const whyChoose = [
  { title: "Data-Driven Hunting", desc: "We use cold, hard data to inform every move, ensuring your budget is never wasted.", icon: BarChart3 },
  { title: "Lean & Agile Pricing", desc: "Get top-tier agency results without the bloated corporate overhead.", icon: TrendingUp },
  { title: "Pack Integrity", desc: "We maintain the highest level of transparency and ethics in every partnership.", icon: Shield },
];

const process = [
  { step: "01", title: "The Scout (Discovery)", desc: "We analyze your brand, your rivals, and your terrain to find the best path forward." },
  { step: "02", title: "The Hunt (Implementation)", desc: "Our team deploys custom blueprints across web and social to capture your market." },
  { step: "03", title: "Collaboration", desc: "We monitor, optimize, and scale your brand to ensure you stay ahead of the competition." },
];

const features = [
  { title: "Custom Branding Solutions", desc: "Unique brand identity development, including logos, color palettes, and visual systems designed to make your brand unforgettable.", icon: Star },
  { title: "Data-Driven Digital Marketing", desc: "Strategies combining SEO, PPC, content marketing, and analytics to drive measurable growth and maximize your ROI.", icon: BarChart3 },
];

const benefits = [
  { step: "01", title: "Personalized Approach", desc: "We customize strategies to fit your brand's specific needs, ensuring alignment." },
  { step: "02", title: "Experienced Team", desc: "8+ years of industry knowledge and creativity to deliver exceptional results." },
  { step: "03", title: "Data-Driven Decisions", desc: "We utilize data insights to refine strategies, optimize and ensure impactful results." },
  { step: "04", title: "Ongoing Support", desc: "We provide continuous support and maintenance to keep your digital assets at their best." },
];

const clients = [
  { name: "Xenovia Capital", category: "Finance" },
  { name: "Shivaji Aappa Saraf & Sons", category: "Jewelry" },
  { name: "Hexa TP", category: "Technology" },
  { name: "Hexa GP", category: "Technology" },
  { name: "SSDF", category: "Foundation" },
  { name: "Neesham Grande", category: "Real Estate" },
  { name: "CRUST", category: "Electronics" },
  { name: "Rajkamal", category: "Lifestyle" },
  { name: "Todi's Mouthfreshners", category: "Food & Beverage" },
  { name: "Territory 29 Foods", category: "Food & Beverage" },
  { name: "MoskMan India", category: "Fashion" },
  { name: "Farmer's Tiffin", category: "Food & Beverage" },
  { name: "iTUDE", category: "Technology" },
  { name: "ORRO", category: "Luxury" },
  { name: "Culinary Creations", category: "Food & Beverage" },
  { name: "SMIX India", category: "Brand" },
  { name: "Nagraj Print & Pack", category: "Printing" },
  { name: "Sudhir Shukla Insurance", category: "Finance" },
  { name: "Balaji Creatives", category: "Creative" },
  { name: "Lelog", category: "Brand" },
  { name: "RISA NX", category: "Fashion" },
  { name: "Ram Institute", category: "Education" },
  { name: "Joy Movers", category: "Logistics" },
  { name: "Vinshar Integrated Services", category: "Services" },
  { name: "Trillium Real Estate", category: "Real Estate" },
  { name: "SH Productions", category: "Media" },
  { name: "RISA by Rinkesh & Sanchi", category: "Fashion" },
  { name: "SAR Venture Pvt Ltd", category: "Finance" },
];

const testimonials = [
  {
    text: "Digital Coyotes transformed our entire online presence. Their SEO strategies increased our organic traffic by 300% in just 6 months. Truly a pack that delivers!",
    name: "Rahul Sharma",
    role: "CEO, TechVista Solutions",
  },
  {
    text: "Working with Suraj and his team was a game-changer. They understood our brand vision perfectly and delivered a website that exceeded all expectations. Highly recommended!",
    name: "Priya Mehta",
    role: "Marketing Head, NovaBrand",
  },
  {
    text: "The team's creativity and attention to detail is unmatched. They managed our social media presence across 5 platforms and our engagement grew by 250%.",
    name: "Amit Patel",
    role: "Founder, GrowthEdge Digital",
  },
];

const adsResults = [
  { metric: "88", label: "Leads Generated", detail: "₹693/lead" },
  { metric: "290", label: "Messaging Conversations", detail: "₹39.58/conversation" },
  { metric: "56,270", label: "Reach", detail: "Across platforms" },
  { metric: "185,002", label: "Impressions", detail: "Maximum exposure" },
  { metric: "1,677", label: "Unique Clicks", detail: "₹15.68 CPC" },
  { metric: "3.29", label: "Frequency", detail: "Optimal repetition" },
];

const footerFeatures = [
  { title: "Lean Operations", desc: "High-efficiency strategies at competitive rates", icon: Zap },
  { title: "Open Integration", desc: "Seamlessly connect your existing tools to our den", icon: Users },
  { title: "Coyote Security", desc: "360-degree data protection to keep your assets safe", icon: Shield },
  { title: "24/7 Vigilance", desc: "Our support pack is always awake and ready to assist", icon: Headphones },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider
        label="DIGITAL AGENCY"
        title="Innovative solutions for"
        rotatingWords={["Social Marketing", "Art & Design", "Digital World", "Brand Strategy"]}
        description="At The Digital Coyotes, we don't just follow the trail—we blaze it. We craft high-impact digital experiences that help your brand lead the pack."
        ctaText="Get In Touch"
        ctaLink="/contact"
        backgroundImage={heroHome}
      />

      {/* Marquee */}
      <div className="bg-primary py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-sm font-semibold text-primary-foreground flex items-center gap-2">
              <span className="text-primary-foreground/60">✦</span> {item}
            </span>
          ))}
        </div>
      </div>


      {/* About Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Video */}
        <video 
          src="/video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Light Overlay for Readability */}
        <div className="absolute inset-0 bg-white/90 z-10" />

        <div className="container relative z-20 mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff5a1f] mb-4">ABOUT AGENCY</p>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-[#0a0a0a]">
                Empowering your digital growth, <span className="text-[#ff5a1f]">one click at a time</span>
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed text-lg">
                Founded in 2021 in Mumbai with 8+ years of industry expertise, we've collaborated with 10+ international brands and partnered with 5+ associate digital marketing agencies across India.
              </p>
              <Link to="/contact" className="mt-8 inline-flex px-8 py-4 bg-transparent border-2 border-[#0a0a0a] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#0a0a0a] hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="lg:w-1/2 space-y-6">
              {[
                { title: "Your Success is Our Mission", desc: "We measure our value by the growth of our clients. With a focus on sharp results and a dedication to quality." },
                { title: "Creators Of Digital Excellence", desc: "At the core of our agency is a commitment to excellence and creativity in crafting digital solutions." },
                { title: "Helping Brands Thrive Online", desc: "Our purpose is simple: to help brands succeed in the digital age with strong client relationships." },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-[#ff5a1f]/40 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display font-semibold text-xl mb-3 text-[#0a0a0a]">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients / Trusted By */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <p className="section-label text-center mb-3">OUR CLIENTS</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
            Your growth is our <span className="text-gradient-orange">greatest achievement</span>
          </h3>
          <div className="relative overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-6 animate-marquee w-max py-4 group-hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[220px] rounded-2xl bg-background border border-border p-6 flex flex-col items-center text-center gap-4 hover:border-primary/40 hover:shadow-[0_12px_30px_-15px_hsl(24,95%,53%,0.4)] transition-all duration-300 cursor-pointer group/card"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center font-display font-bold text-primary text-xl group-hover/card:bg-gradient-orange group-hover/card:text-primary-foreground group-hover/card:shadow-[0_8px_20px_-8px_hsl(24,95%,53%,0.6)] transition-all duration-300">
                    {client.name.split(" ").filter(w => /[A-Za-z]/.test(w[0])).slice(0, 2).map(w => w[0]).join("")}
                  </div>
                  <div className="flex flex-col w-full">
                    <p className="font-display font-semibold text-base leading-tight line-clamp-2 text-foreground group-hover/card:text-primary transition-colors">{client.name}</p>
                    <p className="text-muted-foreground text-sm font-medium mt-1.5">{client.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="section-label mb-4">OUR SERVICES</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Our digital services to <span className="text-gradient-orange">grow your brand</span></h2>
            </div>
            <Link to="/services/branding-and-identity" className="hidden md:inline-flex px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
              All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-10 rounded-2xl bg-white border border-gray-200 text-[#0a0a0a] transition-all duration-300 cursor-pointer h-full group hover:-translate-y-2 hover:shadow-xl hover:border-[#ff5a1f]/50">
                  <s.icon className="w-12 h-12 text-[#ff5a1f] mb-8" />
                  <h3 className="font-display font-semibold text-2xl mb-4">{s.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="py-24 bg-white text-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff5a1f] mb-4 text-center">OUR PORTFOLIO</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
            Our recent <span className="text-[#ff5a1f]">projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => {
              const slug = item.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Link to={`/services/${slug}`} className="group flex flex-col gap-5 cursor-pointer h-full">
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-gray-100">
                      <motion.img 
                        src={item.image} 
                        alt={item.title}
                        initial={{ clipPath: "circle(0% at 50% 50%)", scale: 1.1 }}
                        whileInView={{ clipPath: "circle(150% at 50% 50%)", scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md text-[#0a0a0a] text-xs font-semibold px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        {item.category}
                      </div>
                      {/* Hover Circle Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center backdrop-blur-sm bg-black/20">
                          <ArrowUpRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-display font-semibold text-2xl text-center text-[#0a0a0a] group-hover:text-[#ff5a1f] transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gray-50 text-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff5a1f] mb-4">EXPERTISE</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            Expertise that drives <span className="text-[#ff5a1f]">digital success</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-6 border-l-2 border-[#ff5a1f]/30 pl-8">
                  <p className="font-display text-5xl md:text-6xl font-extrabold text-[#0a0a0a] mb-4 leading-none">{s.value}</p>
                  <p className="text-gray-600 text-base">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff5a1f] mb-4">WHY CHOOSE</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Why Run With <span className="text-[#ff5a1f]">The Digital Coyotes?</span></h2>
          <p className="text-gray-600 max-w-2xl mb-16 text-lg">Our dedicated team is committed to understanding your unique needs, ensuring innovative strategies that drive results.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {whyChoose.map((w, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="h-full">
                  <div className="w-16 h-16 bg-gray-50 border border-gray-100 flex items-center justify-center mb-8">
                    <w.icon className="w-8 h-8 text-[#ff5a1f]" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl mb-4">{w.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">HOW IT WORKS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16">Our proven process for <span className="text-gradient-orange">achieving success</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <span className="font-display text-6xl font-bold text-primary">{p.step}</span>
                <h3 className="font-display font-semibold text-xl mt-2 mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50 text-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff5a1f] mb-4">FEATURES</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">Innovative features for your <span className="text-[#ff5a1f]">digital success</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-10 border border-gray-200 bg-white hover:border-[#ff5a1f]/50 hover:shadow-lg transition-all duration-300">
                <f.icon className="w-12 h-12 text-[#ff5a1f] mb-8" />
                <h3 className="font-display font-semibold text-3xl mb-4">{f.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">KEY BENEFITS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16">Discover the benefits of <span className="text-gradient-orange">choosing us today</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i}>
                <span className="font-display text-5xl font-bold text-primary">{b.step}</span>
                <h3 className="font-display font-semibold text-lg mt-2 mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">TESTIMONIALS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Read what they have to say about <span className="text-gradient-orange">working with us</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border hover:border-primary/20 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ads Results */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ff5a1f] mb-4">ADS RESULTS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Real campaign <span className="text-[#ff5a1f]">performance metrics</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mb-16 text-lg">Data-driven results from our recent ad campaigns across social and search platforms.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {adsResults.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="text-left h-full border-t-2 border-[#ff5a1f]/30 pt-6">
                  <p className="font-display text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4 leading-none">{a.metric}</p>
                  <p className="text-gray-800 font-semibold text-base mb-2">{a.label}</p>
                  <p className="text-gray-500 text-sm">{a.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {footerFeatures.map((f, i) => (
            <div key={i} className="text-center p-6">
              <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-display font-semibold text-sm mb-1">{f.title}</h4>
              <p className="text-muted-foreground text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
