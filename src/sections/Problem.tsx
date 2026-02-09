import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MessageCircleWarning, FileX, MessageSquareOff, NotebookPen } from 'lucide-react';

const problems = [
  {
    icon: MessageCircleWarning,
    title: '"Quanto custa?" toda hora no Direct',
    description:
      'Você responde o mesmo preço 50 vezes por dia. Clientes perguntam, somem, e você perde tempo com conversas que não viram venda.',
  },
  {
    icon: FileX,
    title: 'Catálogo em PDF que ninguém entende',
    description:
      'Mandou o PDF, o cliente não achou o produto, pediu foto, perguntou preço de novo. É um vai-e-vira que cansa.',
  },
  {
    icon: MessageSquareOff,
    title: 'Pedidos se perdendo no WhatsApp',
    description:
      'Mensagens somem, clientes mandam áudio de 5 minutos, você anota no caderno e depois não acha. É caos.',
  },
  {
    icon: NotebookPen,
    title: 'Vendeu o mesmo item duas vezes',
    description:
      'Achava que tinha estoque, vendeu, e descobriu que já tinha vendido pro outro cliente. Agora tem que pedir desculpas.',
  },
];

export function Problem() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-[#f8f8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-[#2c273e] leading-tight mb-4">
            Se você vende pelo Instagram,{' '}
            <span className="text-[#00d085]">já passou por isso</span>
          </h2>
          <p className="text-lg text-[#6b6785] max-w-2xl mx-auto">
            A gente sabe como é. Por isso criamos algo que resolve de verdade.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-[#e9e9e9] transition-all duration-300 hover:shadow-lg hover:shadow-[#00d085]/5 hover:-translate-y-1 hover:border-[#00d085]/20">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-medium text-[#2c273e] mb-3 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-[#6b6785] text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
