import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Store, PackagePlus, MessageCircle, Clock } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Crie seu catálogo',
    description:
      'Cadastre seus produtos com foto, preço e descrição. Ou importe de uma planilha. Leva 5 minutos.',
    icon: Store,
    time: '5 minutos',
  },
  {
    number: '02',
    title: 'Coloque o link na bio',
    description:
      'Copie seu link único e coloque na bio do Instagram. Clientes clicam e veem tudo organizado.',
    icon: PackagePlus,
    time: '1 minuto',
  },
  {
    number: '03',
    title: 'Receba pedidos no WhatsApp',
    description:
      'O cliente escolhe, faz pedido, e você recebe tudo organizado no seu WhatsApp. Pronto pra produzir.',
    icon: MessageCircle,
    time: 'Automático',
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} id="como-funciona" className="py-20 lg:py-24 bg-[#f8f8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-[#2c273e] leading-tight mb-4">
            Comece a vender em{' '}
            <span className="text-[#00d085]">3 passos simples</span>
          </h2>
          <p className="text-lg text-[#6b6785] max-w-2xl mx-auto">
            Não precisa saber tecnologia. Se você usa Instagram, consegue usar.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
              className="h-full bg-gradient-to-r from-[#00d085]/30 via-[#00d085] to-[#00d085]/30 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-[#e9e9e9] transition-all duration-300 hover:shadow-xl hover:shadow-[#00d085]/5 hover:-translate-y-2 group">
                  {/* Step number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.15,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="absolute -top-4 left-8 w-12 h-12 rounded-xl bg-gradient-green flex items-center justify-center shadow-lg shadow-[#00d085]/30"
                  >
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </motion.div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#00d085]/10 flex items-center justify-center mb-6 mt-4 group-hover:scale-110 group-hover:bg-[#00d085]/20 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-[#00d085]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-medium text-[#2c273e] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6b6785] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Time badge */}
                  <div className="flex items-center gap-2 text-sm text-[#00d085] font-medium">
                    <Clock className="w-4 h-4" />
                    {step.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
