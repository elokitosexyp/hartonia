import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/harton.node.ai?igsh=MTQ0amY3aXQwOHY3Yw==',
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logosinletra.png"
                alt="Harton Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                Harton
              </span>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Soluciones digitales innovadoras impulsadas por inteligencia artificial para transformar tu negocio.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-2xl bg-bg-tertiary text-text-secondary hover:bg-accent-cyan hover:text-bg-primary transition-all duration-300 hover:shadow-glow-cyan"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-cyan">Contacto</h4>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-accent-cyan">📧</span>
                harton.node.ia@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-light mt-12 pt-8 text-center text-text-muted">
          <p>&copy; 2026 Harton. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
