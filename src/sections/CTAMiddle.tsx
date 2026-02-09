import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTAMiddleProps {
  onOpenModal: () => void;
}

export function CTAMiddle({ onOpenModal }: CTAMiddleProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-green p-8 sm:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
              className="text-3xl sm:text-4xl font-medium text-white leading-tight mb-4"
            >
              Pronto para organizar suas vendas?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
              className="text-lg text-white/90 mb-8 max-w-xl mx-auto"
            >
              Agende uma demonstração gratuita e veja como nosso assistente pode 
              ajudar você a responder clientes e organizar pedidos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
            >
              <Button
                onClick={onOpenModal}
                size="lg"
                className="bg-white text-[#00d085] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 group shadow-xl shadow-black/10"
              >
                Agendar demonstração grátis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
