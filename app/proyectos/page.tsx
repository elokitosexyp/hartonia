'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trpc } from '@/lib/trpc';
import type { Project } from '@prisma/client';

export default function ProjectsPage() {
  const { data: projects = [] } = trpc.getProjects.useQuery();

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
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Conoce lo que hemos creado para transformar ideas en soluciones digitales impactantes.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.length > 0 ? projects.map((project) => (
                <div key={project.id} className="bg-bg-secondary rounded-3xl shadow-xl overflow-hidden border border-border-light hover:shadow-glow-blue transition-all duration-300 group">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-8">
                    <span className="inline-block px-4 py-1 bg-accent-purple/20 text-accent-purple text-sm font-semibold rounded-full mb-4">{project.category}</span>
                    <h3 className="text-2xl font-semibold mb-3 text-text-primary">{project.title}</h3>
                    <p className="text-text-secondary">{project.description}</p>
                  </div>
                </div>
              )) : (
                [
                  { title: 'Plataforma E-commerce Premium', category: 'Web', description: 'Plataforma de comercio electrónico completa con gestión de inventario, carrito de compras y pagos integrados.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop' },
                  { title: 'App de Salud Inteligente', category: 'Móvil', description: 'Aplicación móvil para seguimiento de salud personal, con recordatorios de medicamentos y análisis de datos.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop' },
                  { title: 'Dashboard Analítico IA', category: 'IA', description: 'Panel de control con visualizaciones de datos en tiempo real y reportes automatizados con inteligencia artificial.', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop' },
                  { title: 'Sistema de Gestión ERP', category: 'Software', description: 'Sistema ERP para gestión empresarial integral, incluyendo finanzas, recursos humanos y operaciones.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop' },
                  { title: 'Chatbot de Atención', category: 'IA', description: 'Chatbot con inteligencia artificial para atención al cliente 24/7 con procesamiento de lenguaje natural.', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop' },
                  { title: 'App de Logística', category: 'Móvil', description: 'Aplicación para seguimiento de envíos y gestión de flotas en tiempo real.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop' },
                ].map((project, idx) => (
                  <div key={idx} className="bg-bg-secondary rounded-3xl shadow-xl overflow-hidden border border-border-light hover:shadow-glow-blue transition-all duration-300 group">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-8">
                      <span className="inline-block px-4 py-1 bg-accent-purple/20 text-accent-purple text-sm font-semibold rounded-full mb-4">{project.category}</span>
                      <h3 className="text-2xl font-semibold mb-3 text-text-primary">{project.title}</h3>
                      <p className="text-text-secondary">{project.description}</p>
                    </div>
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
