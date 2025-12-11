import { useEffect, useRef } from "react";

const stats = [
  { number: "15+", label: "Years of Excellence" },
  { number: "500+", label: "Enterprise Clients" },
  { number: "2000+", label: "Global Experts" },
  { number: "99.9%", label: "Uptime SLA" },
];

export function CompanyStatsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll(".stat-item");
            statItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-in-up");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item opacity-0 translate-y-8 duration-1000 ease-out text-center p-8 rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 hover:border-white/20 hover:bg-white/10 transition-all cursor-target"
            >
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
