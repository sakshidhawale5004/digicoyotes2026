import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";


const clients = [
  { name: "CRUST", logo: "/THE DIGITAL COYOTES/crust.png", category: "Electronics" },
  { name: "Rajkamal", logo: "/THE DIGITAL COYOTES/rajkamal.png", category: "Lifestyle" },
  { name: "iTUDE", logo: "/THE DIGITAL COYOTES/itude.png", category: "Technology" },
  { name: "ORRO", logo: "/THE DIGITAL COYOTES/orro.png", category: "Luxury" },
  { name: "Culinary Creations", logo: "/THE DIGITAL COYOTES/culinary creations.png", category: "Food & Beverage" },
  { name: "RISA NX", logo: "/THE DIGITAL COYOTES/risenx.png", category: "Fashion" },
  { name: "Joy Movers", logo: "/THE DIGITAL COYOTES/joymovers.png", category: "Logistics" },
  { name: "Vinshar Integrated Services", logo: "/THE DIGITAL COYOTES/vinshar.png", category: "Services" },
  { name: "Trillium Real Estate", logo: "/THE DIGITAL COYOTES/trillium.png", category: "Real Estate" },
  { name: "SH Productions", logo: "/THE DIGITAL COYOTES/saiproductions.png", category: "Media" },
  { name: "RISA by Rinkesh & Sanchi", logo: "/THE DIGITAL COYOTES/risabyrinkeshandsanchi.png", category: "Fashion" },
  { name: "SAR Venture Pvt Ltd", logo: "/THE DIGITAL COYOTES/sarventurepvtltd.png", category: "Finance" },
  { name: "Athena Global Logistics", logo: "/THE DIGITAL COYOTES/athenagloballogistics.jpeg", category: "Logistics" },
  { name: "Bakelette", logo: "/THE DIGITAL COYOTES/bakelette-logo-0LT-_flN.png", category: "Food & Beverage" },
  { name: "Clickcab", logo: "/THE DIGITAL COYOTES/clickcab.jpeg", category: "Transport" },
  { name: "Dermatiqua", logo: "/THE DIGITAL COYOTES/dermatiqua-logo-v2-MPqXf_62.webp", category: "Health & Beauty" },
  { name: "Espoir", logo: "/THE DIGITAL COYOTES/espoir.jpeg", category: "Lifestyle" },
  { name: "Jadha Hospital", logo: "/THE DIGITAL COYOTES/jadhahospital.webp", category: "Healthcare" },
  { name: "La Aesthstique", logo: "/THE DIGITAL COYOTES/laaesthstique.webp", category: "Health & Beauty" },
  { name: "Nayesha Childcare", logo: "/THE DIGITAL COYOTES/nayeshachildcare.png", category: "Healthcare" },
  { name: "Scientech", logo: "/THE DIGITAL COYOTES/scientech.jpeg", category: "Technology" },
  { name: "Shree Hospital", logo: "/THE DIGITAL COYOTES/shreehospital.png", category: "Healthcare" },
  { name: "Shreevallabh Ayurveda", logo: "/THE DIGITAL COYOTES/shreevallabh ayurveda.webp", category: "Healthcare" },
];

const categories = ["All", ...Array.from(new Set(clients.map(c => c.category)))];

const ClientsPage = () => {
  return (
    <Layout>
      <HeroSlider
        label="OUR CLIENTS"
        title="Your growth is our"
        rotatingWords={["Greatest Achievement", "Top Priority", "Shared Success", "Driving Force"]}
        description="We've had the privilege of partnering with 28+ brands across diverse industries — from finance to fashion, food to real estate."
        ctaText="Become a Client"
        ctaLink="/contact"
        backgroundImage={heroHome}
      />

      {/* Stats */}
      <section className="py-12 bg-surface-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-orange">28+</p>
              <p className="text-surface-dark-foreground/60 text-sm">Trusted Clients</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-orange">10+</p>
              <p className="text-surface-dark-foreground/60 text-sm">International Brands</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-orange">12+</p>
              <p className="text-surface-dark-foreground/60 text-sm">Industries Served</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-orange">400+</p>
              <p className="text-surface-dark-foreground/60 text-sm">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">OUR CLIENTS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Brands that <span className="text-gradient-orange">trust us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            From startups to established enterprises, we've helped brands across industries build their digital presence and achieve measurable growth.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {clients.map((client, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center aspect-square"
              >
                <div className="w-full h-28 flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300 mix-blend-multiply group-hover:scale-105"
                    loading="lazy"
                    width={160}
                    height={112}
                  />
                </div>
                <p className="font-display font-semibold text-sm text-center leading-tight">{client.name}</p>
                <span className="text-xs text-muted-foreground mt-1">{client.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">INDUSTRIES WE SERVE</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Expertise across <span className="text-gradient-orange">diverse sectors</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {categories.filter(c => c !== "All").map((cat, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full border border-border font-display font-semibold text-sm hover:border-primary/40 hover:bg-primary/5 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient-orange">join our client roster?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss how we can take your brand to the next level with our proven digital strategies.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-4 bg-gradient-orange text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ClientsPage;
