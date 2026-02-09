import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';

interface CTAFinalProps {
  onOpenModal: () => void;
}

const trustItems = [
  '7 dias grátis',
  'Cancele quando quiser',
  'Setup em 5 min',
];

export function CTAFinal({ onOpenModal }: CTAFinalProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section ref={ref} id="cta" className="py-20 lg:py-24 bg-[#2c273e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-gradient-green flex items-center justify-center mx-auto mb-6"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6"
        >
          Seu atendimento no WhatsApp{' '}
          <span className="text-[#00d085]">organizado</span>, 24h por dia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
        >
          Junte-se a centenas de vendedores que já deixaram de perder pedidos 
          e economizam horas todos os dias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-8"
        >
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-gradient-green hover:opacity-90 text-white rounded-full px-10 py-7 text-lg font-medium transition-all hover:scale-105 group animate-pulse-glow"
          >
            Agendar demonstração grátis
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-white/60">
              <div className="w-5 h-5 rounded-full bg-[#00d085]/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#00d085]" />
              </div>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
