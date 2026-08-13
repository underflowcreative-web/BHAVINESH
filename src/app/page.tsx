import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { About } from "@/components/sections/about";
import { PortfolioCategories } from "@/components/sections/portfolio-categories";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Collections } from "@/components/sections/collections";
import { FAQ } from "@/components/sections/faq";
import { PreFooterCTA } from "@/components/sections/pre-footer-cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { SectionDivider } from "@/components/section-divider";

export default function Home() {
  return (
    <>
      <Hero />

      <SectionDivider variant="quote" content="Every frame tells a story" />

      <FeaturedWork />

      <SectionDivider variant="number" content="02" />

      <About />

      <PortfolioCategories />

      <SectionDivider variant="text" content="ARTISTRY" />

      <Services />

      <SectionDivider variant="quote" content="The art of seeing what others overlook" />

      <Testimonials />

      <SectionDivider variant="number" content="05" />

      <Collections />

      <FAQ />

      <PreFooterCTA />

      <Contact />

      <Footer />
    </>
  );
}
