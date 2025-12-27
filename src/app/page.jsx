import AboutSection from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import TestimonialsSection from "@/components/Home/Testimonials";
import Image from "next/image";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <ServicesPage />
      </section>
      <section>
        <TestimonialsSection />
      </section>
    </div>
  );
}
