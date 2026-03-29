import { HeroSection } from "@/components/HeroSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ProjectLibrary } from "@/components/ProjectLibrary";
import { CategoryOverview } from "@/components/CategoryOverview";
import { HowToUseSection } from "@/components/HowToUseSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedProjects />
      <CategoryOverview />
      <ProjectLibrary />
      <HowToUseSection />
      <Footer />
    </div>
  );
};

export default Index;
