import AboutTomer from "@/components/aboutTomer";
import HeroCarousel from "@/components/heroCarousel";
import ShowcaseCarousel from "@/components/showcaseCarousel";

export default function Page() {
  return (
    <>
      <div>
        <HeroCarousel />
        <ShowcaseCarousel />
        <ShowcaseCarousel />
        <ShowcaseCarousel />
        <AboutTomer />
      </div>
    </>
  );
}
