import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Preciso saber programar?',
    answer:
      'De jeito nenhum! Se você consegue usar o Instagram, consegue usar o Catálogo Pro. É tudo muito intuitivo, criado pra quem não entende de tecnologia.',
  },
  {
    question: 'Funciona no celular?',
    answer:
      'Sim! Você cria e gerencia tudo pelo celular. Não precisa de computador. E seus clientes também acessam pelo celular normalmente, igual acessar um site.',
  },
  {
    question: 'Tem taxa por venda?',
    answer:
      'Não. Você paga apenas a mensalidade do plano escolhido. Não cobramos comissão sobre suas vendas, você fica com 100% do valor.',
  },
  {
    question: 'Meus clientes precisam baixar algo?',
    answer:
      'Não precisam baixar nada. É só clicar no link e pronto. Funciona direto no navegador do celular, igual acessar qualquer site.',
  },
  {
    question: 'Posso usar no Instagram?',
    answer:
      'Com certeza! Você recebe um link único pra colocar na bio do Instagram. Funciona perfeitamente com a sacolinha do Instagram.',
  },
  {
    question: 'O que é o Assistente IA?',
    answer:
      'É um assistente virtual que responde seus clientes automaticamente no WhatsApp, organiza pedidos e ajuda no atendimento. Ele não substitui você, trabalha com você, respondendo quando você está ocupado.',
  },
  {
    question: 'Posso testar antes de pagar?',
    answer:
      'Sim! Todos os planos têm 7 dias de teste grátis. Você pode experimentar todas as funcionalidades e só depois decidir se quer continuar.',
  },
  {
    question: 'E se eu precisar de ajuda?',
    answer:
      'Temos suporte pelo WhatsApp e email. Planos Pro e Empresarial têm suporte prioritário. Além disso, temos tutoriais e vídeos ensinando passo a passo.',
  },
];

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="faq" className="py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-[#2c273e] leading-tight mb-4">
            Dúvidas <span className="text-[#00d085]">frequentes</span>
          </h2>
          <p className="text-lg text-[#6b6785]">
            Tudo que você precisa saber antes de começar
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.08,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-[#f8f8fa] rounded-xl border-none px-6 data-[state=open]:bg-white data-[state=open]:shadow-lg data-[state=open]:shadow-[#00d085]/5 data-[state=open]:border data-[state=open]:border-[#00d085]/20 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-[#2c273e] font-medium hover:text-[#00d085] transition-colors py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6b6785] leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
