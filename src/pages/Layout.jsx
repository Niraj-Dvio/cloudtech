import PageBackground from "../components/PageBackground";
import { GlassmorphismNav } from "../components/GlassMorphismNav";
import { Footer } from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <div className="relative z-10">
        <GlassmorphismNav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
