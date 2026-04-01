import { HeroSection } from "@/components/HeroSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ProjectIndex } from "@/components/ProjectIndex";
import { HowToUseSection } from "@/components/HowToUseSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedProjects />
      <ProjectIndex />
      <HowToUseSection />
      <Footer />
    </div>
  );
};

export default Index;
