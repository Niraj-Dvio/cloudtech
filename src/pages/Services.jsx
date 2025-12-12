import { Code, Cloud, BarChart3, Share2, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";
const servicesDetail = [
  {
    title: "Digital Engineering",
    icon: Code,
    items: [
      "Web Development",
      "Mobile App Development",
      "Quality Engineering",
      "UI/UX Design",
      "Site Reliability Engineering",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "Cloud Strategy & Consulting",
      "Cloud Migration",
      "DevOps as a Service",
      "24x7 Managed Services",
      "Multi-Cloud Support (AWS, Azure, GCP)",
    ],
  },
  {
    title: "Data Analytics & AI",
    icon: BarChart3,
    items: [
      "Generative AI Solutions",
      "Data Engineering",
      "BI & Data Analysis",
      "Data Science",
      "Snowflake & Databricks Services",
    ],
  },
  {
    title: "Digital Marketing",
    icon: Share2,
    items: [
      "B2B Marketing",
      "Marketing Automation",
      "Video Production",
      "Social Media Marketing",
      "SEO Optimization",
    ],
  },
  {
    title: "Staffing & Recruiting",
    icon: Users,
    items: [
      "Executive Recruitment",
      "Technical Staffing",
      "Contract Staffing",
      "Permanent Placement",
      "Team Augmentation",
    ],
  },
  {
    title: "CX & Content",
    icon: Code,
    items: [
      "Adobe Experience Cloud",
      "Drupal Development & Consulting",
      "UI/UX Design",
      "Content Strategy",
      "Customer Journey Mapping",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader title="Our Services">
          <p className="text-lg text-white/70">
            Comprehensive cloud and technology solutions designed to transform
            your enterprise and drive growth.
          </p>
        </PageHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesDetail.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-linear-to-br from-blue-400 to-purple-500 text-white">
                    <Icon size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mt-2">
                    {service.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-white/70">
                      <span className="text-blue-200 mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
