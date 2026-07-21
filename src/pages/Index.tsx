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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">ABOUT AGENCY</p>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                Empowering your digital growth, <span className="text-gradient-orange">one click at a time</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Founded in 2021 in Mumbai with 8+ years of industry expertise, we've collaborated with 10+ international brands and partnered with 5+ associate digital marketing agencies across India.
              </p>
              <Link to="/contact" className="mt-8 inline-flex px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="lg:w-1/2 space-y-8">
              {[
                { title: "Your Success is Our Mission", desc: "We measure our value by the growth of our clients. With a focus on sharp results and a dedication to quality." },
                { title: "Creators Of Digital Excellence", desc: "At the core of our agency is a commitment to excellence and creativity in crafting digital solutions." },
                { title: "Helping Brands Thrive Online", desc: "Our purpose is simple: to help brands succeed in the digital age with strong client relationships." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients / Trusted By */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <p className="section-label text-center mb-2">OUR CLIENTS</p>
          <h3 className="font-display text-xl md:text-2xl font-bold text-center mb-10">
            Your growth is our <span className="text-gradient-orange">greatest achievement</span>
          </h3>
          <div className="relative overflow-hidden group [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-4 animate-marquee w-max group-hover:[animation-play-state:paused]">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="border-holo shrink-0 w-56 rounded-2xl bg-background/60 backdrop-blur-sm p-5 flex flex-col items-center text-center gap-2 hover:bg-background transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-orange flex items-center justify-center font-display font-bold text-primary-foreground text-lg shadow-[0_8px_24px_-8px_hsl(24,95%,53%,0.6)]">
                    {client.name.split(" ").filter(w => /[A-Za-z]/.test(w[0])).slice(0, 2).map(w => w[0]).join("")}
                  </div>
                  <p className="font-display font-semibold text-sm leading-tight mt-1 line-clamp-2">{client.name}</p>
                  <p className="text-primary text-xs font-medium tracking-wide">{client.category}</p>
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
          <div className="grid md:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <TiltCard className="group h-full rounded-2xl" radar>
                  <div className="border-holo relative p-8 rounded-2xl bg-surface-dark text-surface-dark-foreground transition-all duration-300 cursor-pointer h-full neon-glow group-hover:bg-gradient-orange scanlines overflow-hidden">
                    <s.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground mb-6 drop-shadow-[0_0_12px_hsl(24,95%,53%,0.6)]" />
                    <h3 className="font-display font-semibold text-xl mb-3">{s.title}</h3>
                    <p className="text-surface-dark-foreground/80 group-hover:text-primary-foreground/90 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-surface-dark">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">EXPERTISE</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-dark-foreground mb-16">
            Expertise that drives <span className="text-gradient-orange">digital success</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ perspective: 1200 }}>
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <TiltCard className="group h-full" intensity={12}>
                  <div className="border-holo rounded-2xl p-6 text-center h-full bg-surface-dark/40 backdrop-blur-sm neon-glow animate-holo-float" style={{ animationDelay: `${i * 0.4}s` }}>
                    <p className="font-display text-5xl md:text-6xl font-extrabold text-extrude-dark mb-3 leading-none">{s.value}</p>
                    <p className="text-surface-dark-foreground/85 text-sm">{s.label}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">WHY CHOOSE</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Run With <span className="text-gradient-orange">The Digital Coyotes?</span></h2>
          <p className="text-muted-foreground max-w-2xl mb-12">Our dedicated team is committed to understanding your unique needs, ensuring innovative strategies that drive results.</p>
          <div className="grid md:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
            {whyChoose.map((w, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <TiltCard className="group h-full" intensity={10}>
                  <div className="border-holo p-8 rounded-2xl bg-card transition-all duration-300 h-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-[0_25px_60px_-15px_hsl(24,95%,53%,0.35)]">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <w.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-3">{w.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </TiltCard>
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">FEATURES</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Innovative features for your <span className="text-gradient-orange">digital success</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="border-holo p-8 rounded-2xl bg-surface-dark text-surface-dark-foreground neon-glow scanlines overflow-hidden relative">
                <f.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-display font-semibold text-xl mb-3">{f.title}</h3>
                <p className="text-surface-dark-foreground/80 text-sm leading-relaxed">{f.desc}</p>
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
      <section className="py-24 bg-surface-dark">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">ADS RESULTS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-dark-foreground mb-4">
            Real campaign <span className="text-gradient-orange">performance metrics</span>
          </h2>
          <p className="text-surface-dark-foreground/60 max-w-2xl mb-12">Data-driven results from our recent ad campaigns across social and search platforms.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" style={{ perspective: 1200 }}>
            {adsResults.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <TiltCard className="group h-full" intensity={16}>
                  <div className="border-holo p-6 rounded-2xl text-center h-full bg-surface-dark/50 backdrop-blur-sm neon-glow scanlines overflow-hidden">
                    <p className="font-display text-4xl md:text-5xl font-extrabold text-extrude-dark mb-2 leading-none">{a.metric}</p>
                    <p className="text-surface-dark-foreground font-semibold text-sm mb-1">{a.label}</p>
                    <p className="text-surface-dark-foreground/50 text-xs">{a.detail}</p>
                  </div>
                </TiltCard>
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
