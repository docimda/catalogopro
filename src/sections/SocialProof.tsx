import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { Star, Users } from 'lucide-react';

const metrics = [
  { value: 320, suffix: '', label: 'lojas ativas', prefix: '' },
  { value: 8500, suffix: '', label: 'pedidos este mês', prefix: '' },
  { value: 94, suffix: '%', label: 'recomendam', prefix: '' },
  { value: 2, suffix: 'M+', label: 'em vendas geradas', prefix: 'R$ ' },
];

const testimonials = [
  {
    name: 'Maria',
    role: 'Confeiteira - Plano Pro',
    image: '/avatar-maria.jpg',
    content:
      'Antes eu perdia pedidos, agora fica tudo organizado. O assistente responde enquanto eu preparo os bolos.',
    rating: 5,
  },
  {
    name: 'João',
    role: 'Loja de Roupas - Plano Empresarial',
    image: '/avatar-joao.jpg',
    content:
      'Finalmente tenho controle do estoque. Não vendo mais o mesmo item duas vezes. Meu estresse diminuiu muito.',
    rating: 5,
  },
  {
    name: 'Ana',
    role: 'Artesanato - Plano Pro',
    image: '/avatar-ana.jpg',
    content:
      'Criei minha loja no celular em 10 minutos. Clientes agora veem tudo organizado, não preciso mais mandar PDF.',
    rating: 5,
  },
];

function MetricCard({
  value,
  suffix,
  label,
  prefix,
  isVisible,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  prefix: string;
  isVisible: boolean;
  delay: number;
}) {
  const { count, startAnimation } = useCountUp(value, 2000);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        startAnimation();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, startAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.165, 0.84, 0.44, 1] }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold text-[#00d085] mb-2">
        {prefix}
        {count.toLocaleString('pt-BR')}
        {suffix}
      </div>
      <p className="text-[#6b6785]">{label}</p>
    </motion.div>
  );
}

export function SocialProof() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} id="depoimentos" className="py-20 lg:py-24 bg-[#f8f8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              prefix={metric.prefix}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#00d085]/10 text-[#00d085] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Criado para pequenos vendedores do Instagram
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-[#2c273e] leading-tight mb-4">
            O que quem <span className="text-[#00d085]">usa</span> diz
          </h2>
          <p className="text-lg text-[#6b6785]">
            Testado com lojas reais, resultados reais.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.1,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-[#e9e9e9] transition-all duration-300 hover:shadow-lg hover:shadow-[#00d085]/5 hover:-translate-y-1">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isVisible ? { scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.7 + index * 0.1 + i * 0.05,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#2c273e] leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#2c273e]">{testimonial.name}</p>
                    <p className="text-sm text-[#6b6785]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
