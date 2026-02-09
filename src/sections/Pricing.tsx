import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Crown, MessageSquare, TrendingUp, Headphones, Instagram, Bot } from 'lucide-react';

interface PricingProps {
  onOpenModal: (planName: string) => void;
}

const plans = [
  {
    name: 'Básico',
    price: '27',
    description: 'Para começar a vender online',
    icon: Zap,
    color: 'from-blue-500 to-blue-600',
    features: [
      'Catálogo digital ilimitado',
      'Link para bio do Instagram',
      'Pedidos no WhatsApp organizados',
      'Gestão de estoque simples',
      'Controle de pedidos',
      'Relatórios básicos',
      'Até 100 produtos',
      'Suporte por email',
    ],
    cta: 'Começar com Básico',
    popular: false,
    agent: null,
  },
  {
    name: 'Pro',
    price: '47',
    description: 'Para quem quer vender mais',
    icon: Bot,
    color: 'from-[#00d085] to-[#00b874]',
    features: [
      'Tudo do plano Básico',
      'Produtos ilimitados',
      '🤖 Assistente IA no WhatsApp',
      'Respostas automáticas',
      'Sugestão de produtos',
      'Lembretes de carrinho',
      'Suporte prioritário',
    ],
    cta: 'Quero o Assistente IA',
    popular: true,
    agent: {
      name: 'Assistente IA',
      icon: MessageSquare,
      description: 'Responde clientes e organiza pedidos 24h',
    },
  },
  {
    name: 'Empresarial',
    price: '97',
    description: 'Para escalar o negócio',
    icon: Crown,
    color: 'from-purple-500 to-purple-600',
    features: [
      'Tudo do plano Pro',
      '🤖 Assistente IA de Vendas',
      '📱 Assistente IA de Marketing',
      '🎧 Assistente IA de Suporte',
      '📸 Assistente IA de Instagram',
      'Postagens automáticas',
      'Suporte VIP no WhatsApp',
    ],
    cta: 'Ter minha Equipe IA',
    popular: false,
    agent: {
      name: 'Equipe IA Completa',
      icon: Sparkles,
      description: '4 assistentes trabalhando juntos pra você',
    },
  },
];

const agentDetails = [
  { name: 'Vendas IA', icon: MessageSquare, color: 'bg-green-100 text-green-600', desc: 'Responde clientes' },
  { name: 'Marketing IA', icon: TrendingUp, color: 'bg-blue-100 text-blue-600', desc: 'Cria campanhas' },
  { name: 'Suporte IA', icon: Headphones, color: 'bg-orange-100 text-orange-600', desc: 'Tira dúvidas' },
  { name: 'Instagram IA', icon: Instagram, color: 'bg-pink-100 text-pink-600', desc: 'Posta conteúdo' },
];

export function Pricing({ onOpenModal }: PricingProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="planos" className="py-20 lg:py-24 bg-[#f8f8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00d085]/10 text-[#00d085] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Escolha seu plano
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-[#2c273e] leading-tight mb-4">
            Assistentes de IA que{' '}
            <span className="text-[#00d085]">ajudam você a vender mais</span>
          </h2>
          <p className="text-lg text-[#6b6785] max-w-2xl mx-auto">
            Do básico ao avançado. Escolha o que faz sentido pro seu negócio.
          </p>
        </motion.div>

        {/* Agent Team Visualization - Only for Enterprise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl p-6 border border-[#e9e9e9]">
            <p className="text-center text-sm text-[#6b6785] mb-4">
              No plano Empresarial, você tem uma equipe de assistentes IA:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {agentDetails.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 bg-[#f8f8fa] rounded-xl px-4 py-3"
                >
                  <div className={`w-10 h-10 rounded-lg ${agent.color} flex items-center justify-center`}>
                    <agent.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2c273e] text-sm">{agent.name}</p>
                    <p className="text-xs text-[#6b6785]">{agent.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-green text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg shadow-[#00d085]/30">
                    Mais Popular
                  </div>
                </div>
              )}

              <div
                className={`bg-white rounded-2xl h-full border transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-[#00d085] shadow-lg shadow-[#00d085]/10 hover:shadow-[#00d085]/20'
                    : 'border-[#e9e9e9] hover:shadow-[#00d085]/5'
                }`}
              >
                {/* Card Header */}
                <div className={`p-6 rounded-t-2xl bg-gradient-to-r ${plan.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                      <p className="text-white/80 text-sm">{plan.description}</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/60 text-lg">R$</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60">/mês</span>
                  </div>
                </div>

                {/* Agent Info */}
                {plan.agent && (
                  <div className="px-6 py-4 bg-[#f8f8fa] border-b border-[#e9e9e9]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#00d085]/10 flex items-center justify-center">
                        <plan.agent.icon className="w-5 h-5 text-[#00d085]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#2c273e] text-sm">{plan.agent.name}</p>
                        <p className="text-xs text-[#6b6785]">{plan.agent.description}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#00d085]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#00d085]" />
                        </div>
                        <span className="text-[#2c273e] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => onOpenModal(`Plano ${plan.name}`)}
                    className={`w-full mt-6 rounded-xl py-5 font-medium transition-all hover:scale-[1.02] ${
                      plan.popular
                        ? 'bg-gradient-green hover:opacity-90 text-white shadow-lg shadow-[#00d085]/25'
                        : 'bg-[#f8f8fa] hover:bg-[#00d085] text-[#2c273e] hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-[#6b6785] mt-8"
        >
          7 dias de teste grátis em todos os planos • Cancele quando quiser • Sem taxa por venda
        </motion.p>
      </div>
    </section>
  );
}
