import { useEffect, useRef } from "react";
import {
  Code,
  Cloud,
  BarChart3,
  Share2,
  Users,
  ArrowRight,
  DraftingCompass,
} from "lucide-react";
import { Link } from "react-router";
import SectionDot from "./SectionDot";

const services = [
  {
    title: "Digital Engineering",
    description:
      "Web Development | Mobile App Development | Quality Engineering | UI/UX | SRE",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud Strategy and Consulting | Cloud Migration | DevOps as a Service | 24x7 Managed Services | AWS, Azure, GCP",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Data Analytics & AI",
    description:
      "GenAI | Data Engineering | BI & Data Analysis | Data Science | Snowflake Data Cloud Services | Databricks",
    icon: BarChart3,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "CX & Content",
    description:
      "Adobe Experience Cloud | Drupal Development & Consulting | UI/UX",
    icon: DraftingCompass,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Digital Marketing",
    description:
      "B2B Marketing | Marketing Automation & Analytics | Video Production | Social Media Marketing | SEO",
    icon: Share2,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Staffing & Recruiting",
    description:
      "Expert talent acquisition and placement solutions for your enterprise needs",
    icon: Users,
    color: "from-violet-500 to-blue-500",
  },
];

export function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 cursor-target">
            <SectionDot /> Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Comprehensive Solutions for Enterprise Success
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From digital transformation to data-driven insights, we provide
            end-to-end services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card opacity-0 translate-y-8 transition-all duration-1000 ease-out group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/5 p-8 hover:border-white/20 hover:bg-white/10 cursor-target"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-linear-to-br ${service.color}`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-lg mb-6 bg-linear-to-br ${service.color} text-white`}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-semibold text-blue-300 hover:text-blue-200 group/link"
                  >
                    Learn more
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
