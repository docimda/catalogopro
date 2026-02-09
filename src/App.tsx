import { useState } from 'react';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Solution } from '@/sections/Solution';
import { HowItWorks } from '@/sections/HowItWorks';
import { Features } from '@/sections/Features';
import { Pricing } from '@/sections/Pricing';
import { SocialProof } from '@/sections/SocialProof';
import { CTAMiddle } from '@/sections/CTAMiddle';
import { FAQ } from '@/sections/FAQ';
import { CTAFinal } from '@/sections/CTAFinal';
import { Footer } from '@/sections/Footer';
import { DemoModal } from '@/components/DemoModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenModal = (planName?: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Problem />
        <Solution onOpenModal={handleOpenModal} />
        <HowItWorks />
        <Features />
        <Pricing onOpenModal={handleOpenModal} />
        <SocialProof />
        <CTAMiddle onOpenModal={handleOpenModal} />
        <FAQ />
        <CTAFinal onOpenModal={handleOpenModal} />
      </main>
      <Footer onOpenModal={handleOpenModal} />
      <WhatsAppButton onClick={() => handleOpenModal()} />
      <DemoModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        planName={selectedPlan}
      />
    </div>
  );
}

export default App;
