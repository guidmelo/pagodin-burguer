import HeroSection from "@/components/HeroSection";
import FloatingButtons from "@/components/FloatingButtons";
import EssenceSection from "@/components/EssenceSection";
import MenuSection from "@/components/MenuSection";
import GalleryMarquee from "@/components/GalleryMarquee";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import EmberEffect from "@/components/EmberEffect";

export default function Home() {
  return (
    <main>
      <EmberEffect />
      <HeroSection />
      <EssenceSection />
      <MenuSection />
      <GalleryMarquee />
      <LocationSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
