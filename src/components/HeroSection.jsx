import { ArrowRight, Cloud } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/Button";
import SectionDot from "./SectionDot";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12 animate-fade-in-badge cursor-target">
          <SectionDot /> Enterprise Cloud Solutions
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-balance mb-6 animate-fade-in-heading leading-tight">
          <span className="text-white">Transform Your Business with </span>
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-target">
            {/* <span className="bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent cursor-target"> */}
            Cloud Excellence
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 text-balance max-w-3xl mx-auto mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          We deliver world-class digital engineering, cloud infrastructure, data
          analytics, and staffing solutions that drive enterprise success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-buttons">
          <Link to="/contact-us" className="cursor-target">
            <Button
              size="lg"
              className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
            >
              <span className="mr-2">Get Started</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium border-white/30  text-white transition-all duration-200 hover:scale-105 group bg-transparent cursor-target"
          >
            <Cloud size={18} className="mr-2" />
            View Services
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="text-center px-4 animate-fade-in-trust">
          <p className="text-sm text-white/60 mb-6">
            Trusted by leading enterprises worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="text-sm font-semibold text-white/70">
              Fortune 500 Companies
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-sm font-semibold text-white/70">
              15+ Years Experience
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-sm font-semibold text-white/70">
              Global Coverage
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
