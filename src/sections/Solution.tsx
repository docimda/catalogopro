import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface SolutionProps {
  onOpenModal: () => void;
}

const benefits = [
  'Responde preço e disponibilidade automaticamente',
  'Organiza todos os pedidos em um só lugar',
  'Mostra seu catálogo bonito no celular do cliente',
  'Controla estoque pra não vender o que não tem',
  'Envia tudo prontinho pro seu WhatsApp',
  'Funciona 24h, mesmo quando você está ocupado',
];

export function Solution({ onOpenModal }: SolutionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <Badge className="bg-[#00d085]/10 text-[#00d085] hover:bg-[#00d085]/20 px-4 py-1.5 text-sm font-medium rounded-full mb-6 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Como funciona
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-[#2c273e] leading-tight mb-6">
              Ajuda você a vender mais,{' '}
              <span className="text-[#00d085]">respondendo clientes e organizando pedidos</span>
            </h2>

            <p className="text-lg text-[#6b6785] leading-relaxed mb-8">
              Você cria seu catálogo digital com um link único. O cliente acessa, 
              vê seus produtos organizados, e faz pedido direto no seu WhatsApp. 
              Tudo isso funciona com um Agente de Inteligência Artificial que 
              acelera seu atendimento 24h por dia.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.08,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + index * 0.08,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="w-6 h-6 rounded-full bg-[#00d085]/10 flex items-center justify-center flex-shrink-0"
                  >
                    <Check className="w-4 h-4 text-[#00d085]" />
                  </motion.div>
                  <span className="text-[#2c273e] font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => onOpenModal()}
              size="lg"
              className="bg-gradient-green hover:opacity-90 text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#00d085]/30 group"
            >
              Ver como isso funciona na prática
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d085]/10 to-[#00b874]/10 rounded-3xl blur-2xl transform scale-95" />
              
              <img
                src="/solution-mockup.jpg"
                alt="Dashboard do Catálogo Pro"
                className="relative w-full rounded-3xl shadow-2xl"
              />

              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d085]/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#00d085]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2c273e]">Pedidos organizados</p>
                  <p className="text-xs text-[#6b6785]">Nada se perde mais</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
