import PageHeader from "../components/PageHeader";
export default function AboutUsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-18">
      <div className="max-w-5xl mx-auto">
        <PageHeader title="About CloudTech">
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              CloudTech Solutions is a leading enterprise cloud services
              provider dedicated to transforming businesses through technology
              innovation and excellence.
            </p>

            <p>
              With over 15 years of experience serving Fortune 500 companies and
              innovative startups, we have established ourselves as trusted
              partners in digital transformation. Our global team of 2000+
              experts brings deep technical knowledge and industry insights to
              every engagement.
            </p>

            <p>
              We specialize in delivering comprehensive solutions across Digital
              Engineering, Cloud & DevOps, Data Analytics & AI, Digital
              Marketing, and Staffing Services. Our mission is to empower
              enterprises with cutting-edge technology and strategic guidance to
              achieve their business objectives.
            </p>
          </div>
        </PageHeader>
        <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              Our Values
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>• Innovation and Excellence</li>
              <li>• Client-Centric Approach</li>
              <li>• Integrity and Transparency</li>
              <li>• Continuous Learning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              Why Choose Us
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>• 15+ Years of Proven Excellence</li>
              <li>• Global Expertise and Reach</li>
              <li>• 99.9% Service Uptime</li>
              <li>• 24/7 Dedicated Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
