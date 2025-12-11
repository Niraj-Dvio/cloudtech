import PageBackground from "../components/PageBackground";
import TargetCursor from "../components/TargetCursor";
import { GlassmorphismNav } from "../components/GlassMorphismNav";
import { Footer } from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div className="relative z-10">
        <GlassmorphismNav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
