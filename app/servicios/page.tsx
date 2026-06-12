'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trpc } from '@/lib/trpc';
import { Cpu, Smartphone, Globe, Zap, Code, Brain } from 'lucide-react';
import type { Service } from '@prisma/client';

const serviceIcons: Record<string, React.ComponentType<any>> = {
  'Cpu': Cpu,
  'Smartphone': Smartphone,
  'Globe': Globe,
  'Zap': Zap,
  'Code': Code,
  'Brain': Brain,
};

export default function ServicesPage() {
  const { data: services = [] } = trpc.getServices.useQuery();

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

        {/* Header Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Soluciones tecnológicas diseñadas para escalar tu empresa al siguiente nivel.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.length > 0 ? services.map((service) => {
                const IconComponent = serviceIcons[service.icon] || Cpu;
                return (
                  <div key={service.id} className="bg-bg-secondary border border-border-light p-10 rounded-3xl shadow-xl hover:shadow-glow-cyan hover:border-accent-cyan/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-accent-cyan" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-text-primary">{service.title}</h3>
                    <p className="text-text-secondary">{service.description}</p>
                  </div>
                );
              }) : (
                [
                  { icon: Cpu, title: 'Desarrollo de Software', description: 'Soluciones de software personalizadas adaptadas a las necesidades específicas de tu empresa, utilizando las tecnologías más modernas y escalables del mercado.' },
                  { icon: Globe, title: 'Desarrollo Web', description: 'Sitios web y aplicaciones web modernos, rápidos y optimizados para la mejor experiencia de usuario y rendimiento.' },
                  { icon: Smartphone, title: 'Aplicaciones Móviles', description: 'Apps nativas y multiplataforma para iOS y Android con interfaces intuitivas y rendimiento excepcional.' },
                  { icon: Brain, title: 'Inteligencia Artificial', description: 'Soluciones de IA y Machine Learning que te ayudan a automatizar procesos y tomar decisiones basadas en datos.' },
                  { icon: Zap, title: 'Automatización de Procesos', description: 'Automatiza tus procesos empresariales para ahorrar tiempo, reducir errores y aumentar la productividad.' },
                  { icon: Code, title: 'Consultoría Tecnológica', description: 'Asesoramiento experto para ayudarte a tomar las mejores decisiones tecnológicas y maximizar tu inversión.' },
                ].map((service, idx) => (
                  <div key={idx} className="bg-bg-secondary border border-border-light p-10 rounded-3xl shadow-xl hover:shadow-glow-cyan hover:border-accent-cyan/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-accent-cyan" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-text-primary">{service.title}</h3>
                    <p className="text-text-secondary">{service.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
