import { motion } from 'framer-motion';
import { Typewriter } from '@/components/Typewriter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Check, ArrowRight, Store, X } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const dores = [
  'Cansado de responder preço no Direct toda hora?',
  'Clientes somem porque não entendem seu catálogo?',
  'Pedidos se perdem no meio do WhatsApp?',
];

const naoE = [
  { icon: X, text: 'Não é marketplace' },
  { icon: X, text: 'Não precisa saber tecnologia' },
  { icon: X, text: 'Não substitui você, trabalha com você' },
];

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-[70px]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#00d085]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-[#00d085]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            {/* Dores do vendedor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
              className="mb-6 min-h-[32px]"
            >
              <div className="inline-flex items-center">
                <span className="text-sm text-[#6b6785] bg-[#f8f8fa] px-3 py-1.5 rounded-full">
                  <Typewriter texts={dores} typingSpeed={40} deletingSpeed={20} pauseTime={2500} />
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3rem] font-medium text-[#2c273e] leading-[1.15] tracking-tight mb-6"
            >
              Seu atendimento no WhatsApp{' '}
              <span className="text-[#00d085]">automático e organizado</span>, 24h por dia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
              className="text-lg sm:text-xl text-[#6b6785] leading-relaxed mb-6 max-w-xl"
            >
              Responde clientes automaticamente no WhatsApp, organiza pedidos e envia 
              tudo prontinho pra você. Tudo isso funciona com um Agente de Inteligência Artificial.
            </motion.p>

            {/* Benefícios concretos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {['🍫 Doces', '👗 Roupas', '🧸 Artesanato', '🍔 Comida', '🎁 Qualquer produto'].map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-[#f8f8fa] text-[#2c273e] hover:bg-[#e9e9e9] px-3 py-1"
                >
                  {item}
                </Badge>
              ))}
            </motion.div>

            {/* Para quem NÃO é */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              {naoE.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 text-xs text-[#6b6785] bg-white border border-[#e9e9e9] px-3 py-1.5 rounded-full"
                >
                  <item.icon className="w-3 h-3 text-red-400" />
                  {item.text}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.165, 0.84, 0.44, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                onClick={() => onOpenModal()}
                size="lg"
                className="bg-gradient-green hover:opacity-90 text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#00d085]/30 group"
              >
                Agendar demonstração
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-2 border-[#00d085] text-[#00d085] hover:bg-[#00d085] hover:text-white rounded-full px-8 py-6 text-lg font-medium transition-all"
              >
                Ver planos
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {[
                '7 dias grátis',
                'Setup em 5 minutos',
                'Cancele quando quiser',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-[#6b6785]">
                  <div className="w-5 h-5 rounded-full bg-[#00d085]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#00d085]" />
                  </div>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="relative lg:pl-8"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d085]/20 to-[#00b874]/20 rounded-3xl blur-2xl transform scale-95" />
              
              {/* Phone mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <img
                  src="/hero-mockup.jpg"
                  alt="Catálogo Digital no celular"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#00d085]/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#00d085]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2c273e]">Novo pedido!</p>
                  <p className="text-xs text-[#6b6785]">Organizado automaticamente</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Store className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2c273e]">+12 pedidos hoje</p>
                  <p className="text-xs text-[#6b6785]">Tudo organizado!</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
