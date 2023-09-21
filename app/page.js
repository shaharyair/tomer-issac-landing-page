import AboutTomer from "@/components/aboutTomer";
import ContactTomer from "@/components/contactTomer";
import HeroCarousel from "@/components/heroCarousel";
import ShowcaseCarousel from "@/components/showcaseCarousel";

export default function Page() {
  return (
    <>
      <div>
        <HeroCarousel />
        <ShowcaseCarousel />
        <AboutTomer />
        <ContactTomer />
      </div>
    </>
  );
}
