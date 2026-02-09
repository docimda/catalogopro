import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Store, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
}

const segmentos = [
  'Alimentação (doces, salgados, marmitas)',
  'Roupas e Acessórios',
  'Artesanato',
  'Cosméticos e Beleza',
  'Brinquedos',
  'Eletrônicos',
  'Móveis e Decoração',
  'Outro',
];

export function DemoModal({ isOpen, onClose, planName }: DemoModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    segmento: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construir mensagem para WhatsApp
    const mensagem = `Olá, gostaria de agendar uma demonstração.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Segmento:* ${formData.segmento}%0A` +
      (planName ? `*Plano de Interesse:* ${planName}%0A` : '');

    // Número do WhatsApp
    const whatsappNumber = '353833394121';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensagem}`;

    // Simular delay e abrir WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
      
      // Fechar modal após 2 segundos
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ nome: '', segmento: '' });
      }, 2000);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-green p-6 rounded-t-3xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Agendar Demonstração
                    </h3>
                    {planName && (
                      <p className="text-white/80 text-sm">
                        Plano: {planName}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-[#2c273e] mb-2">
                      Solicitação enviada!
                    </h4>
                    <p className="text-[#6b6785]">
                      Redirecionando para o WhatsApp...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nome */}
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-[#2c273e] font-medium flex items-center gap-2">
                        <User className="w-4 h-4 text-[#00d085]" />
                        Qual seu nome?
                      </Label>
                      <Input
                        id="nome"
                        placeholder="Digite seu nome completo"
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value })
                        }
                        required
                        className="rounded-xl border-[#e9e9e9] focus:border-[#00d085] focus:ring-[#00d085]/20"
                      />
                    </div>

                    {/* Segmento */}
                    <div className="space-y-2">
                      <Label htmlFor="segmento" className="text-[#2c273e] font-medium flex items-center gap-2">
                        <Store className="w-4 h-4 text-[#00d085]" />
                        Qual o segmento da sua loja?
                      </Label>
                      <Select
                        value={formData.segmento}
                        onValueChange={(value) =>
                          setFormData({ ...formData, segmento: value })
                        }
                        required
                      >
                        <SelectTrigger className="rounded-xl border-[#e9e9e9] focus:border-[#00d085] focus:ring-[#00d085]/20">
                          <SelectValue placeholder="Selecione o segmento" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {segmentos.map((seg) => (
                            <SelectItem key={seg} value={seg}>
                              {seg}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-green hover:opacity-90 text-white rounded-xl py-6 text-lg font-medium transition-all hover:scale-[1.02] group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Agendar Demonstração
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>

                    <p className="text-center text-sm text-[#6b6785]">
                      Você será redirecionado para o WhatsApp
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
