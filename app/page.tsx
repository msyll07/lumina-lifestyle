import About from "@/components/About";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Products/>
      <Features/>
      <Testimonials/>
      <CTA/>
    </main>
  );
}