import { HeroSection } from "@/components/hero";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className='max-w-7xl h-full mx-auto'>
        <HeroSection />
      </div>
    </PageTransition>
  );
}
