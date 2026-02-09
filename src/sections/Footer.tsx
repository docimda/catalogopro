import { motion } from 'framer-motion';
import { ShoppingBag, Instagram, Facebook, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

const footerLinks = [
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
];

export function Footer({ onOpenModal }: FooterProps) {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2c273e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-green flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">Catálogo Pro</span>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-white/60 hover:text-[#00d085] transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onOpenModal}
              className="text-white/60 hover:text-[#00d085] transition-colors text-sm"
            >
              Contato
            </button>
          </motion.nav>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#00d085] hover:text-white transition-all hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Catálogo Pro. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
