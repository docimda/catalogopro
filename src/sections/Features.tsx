import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  LayoutGrid,
  MessageCircle,
  PackageCheck,
  ClipboardList,
  BarChart3,
  Smartphone,
  Link,
  SwatchBook,
  Bot,
} from 'lucide-react';

const features = [
  {
    icon: LayoutGrid,
    title: 'Catálogo Digital Organizado',
    description:
      'Sua vitrine online bonita e fácil de navegar. Clientes veem tudo no celular, sem precisar baixar nada.',
  },
  {
    icon: MessageCircle,
    title: 'Pedidos no WhatsApp',
    description:
      'Clientes fazem pedido e você recebe tudo organizado no seu WhatsApp. Nada se perde mais.',
  },
  {
    icon: Bot,
    title: 'Assistente IA no WhatsApp',
    description:
      'Responde clientes automaticamente quando você está ocupado. Não substitui você, trabalha com você.',
  },
  {
    icon: PackageCheck,
    title: 'Controle de Estoque',
    description:
      'Sabe o que tem disponível. Produtos esgotados somem automaticamente do catálogo.',
  },
  {
    icon: ClipboardList,
    title: 'Organização de Pedidos',
    description:
      'Acompanhe cada pedido do início ao fim. Nunca mais venda o mesmo item duas vezes.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Simples',
    description:
      'Veja o que mais vende, seus melhores clientes e quanto faturou no mês.',
  },
  {
    icon: Smartphone,
    title: 'Funciona no Celular',
    description:
      'Gerencie tudo pelo celular. Criar produtos, ver pedidos, controlar estoque.',
  },
  {
    icon: Link,
    title: 'Link para Bio',
    description:
      'Um link único para colocar na bio do Instagram, Facebook, TikTok ou onde quiser.',
  },
  {
    icon: SwatchBook,
    title: 'Variações de Produto',
    description:
      'Tamanhos, cores, sabores. Mostre todas as opções de cada produto de forma clara.',
  },
];

export function Features() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="funcionalidades" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-[#2c273e] leading-tight mb-4">
            Tudo que você precisa para{' '}
            <span className="text-[#00d085]">organizar suas vendas</span>
          </h2>
          <p className="text-lg text-[#6b6785] max-w-2xl mx-auto">
            Ferramentas simples criadas pra quem vende pelo Instagram e WhatsApp
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-[#e9e9e9] transition-all duration-300 hover:shadow-lg hover:shadow-[#00d085]/5 hover:-translate-y-1 hover:border-[#00d085]/30">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.08,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="w-14 h-14 rounded-xl bg-[#00d085]/10 flex items-center justify-center mb-5 group-hover:bg-[#00d085]/20 group-hover:scale-110 transition-all duration-300"
                >
                  <feature.icon className="w-7 h-7 text-[#00d085]" />
                </motion.div>
                <h3 className="text-lg font-medium text-[#2c273e] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6b6785] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
