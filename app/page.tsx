'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { 
  Cpu, 
  Search, 
  Briefcase, 
  Film, 
  HardDrive, 
  FileText 
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Cpu,
      title: "IA de Gemini Avanzada (4x Más Potencia)",
      description: "Acceso prioritario al modelo más avanzado de Google (Gemini Pro). Con capacidades de razonamiento superiores y límites de uso hasta 4 veces mayores que la versión gratuita. Respuestas instantáneas incluso en horas pico."
    },
    {
      icon: Search,
      title: "Deep Research (Informes en Minutos)",
      description: "Deja que la IA investigue por ti. Permite analizar y sintetizar cientos de sitios web en tiempo real para generar informes de investigación profundos y estructurados en minutos. Tu propia agencia de investigación privada en un clic."
    },
    {
      icon: Briefcase,
      title: "Integración Nativa con Workspace",
      description: "Gemini vive dentro de tus aplicaciones diarias. Redacta correos en Gmail, resume documentos interminables en Docs o analiza datos en Sheets sin cambiar de pestaña. Productividad pura y sin fricciones."
    },
    {
      icon: Film,
      title: "Google Flow: Tu Estudio Creativo",
      description: "El poder de la creación en tus manos. Recibe créditos mensuales para generar videos, imágenes hiperrealistas y nuevas historias utilizando inteligencia artificial avanzada. Diseña como un profesional sin tocar un software complejo."
    },
    {
      icon: HardDrive,
      title: "5 TB de Almacenamiento Masivo (Familiar)",
      description: "Olvídate de los avisos de espacio lleno. Obtén 5 TB de almacenamiento en la nube, compartible hasta con 5 miembros adicionales de tu familia. Válido para blindar tus archivos en Drive, Gmail y Google Fotos."
    },
    {
      icon: FileText,
      title: "Contexto Extendido (Hasta 1,500 páginas)",
      description: "¿Documentos gigantescos o repositorios de código extensos? Súbelos todos en una sola consulta. Analiza libros enteros, contratos masivos o códigos de programación sin perder el hilo y en segundos."
    }
  ];

  const plans = [
    {
      name: "Plan Standard Pro",
      price: "$5",
      period: "/ mes",
      description: "Para creadores y profesionales.",
      features: [
        "IA Gemini Avanzada (Acceso Pro)",
        "Integración en Workspace (Gmail, Docs)",
        "Acceso a Deep Research",
        "400 GB de Almacenamiento Ampliable",
        "Créditos para Google Flow"
      ],
      buttonText: "Elegir Plan $5",
      recommended: false
    },
    {
      name: "💎 La Promoción Especial: Plan 12x12",
      price: "$12",
      period: "/ 12 meses",
      description: "Para quienes piensan a largo plazo.",
      features: [
        "TODO lo del plan anterior",
        "Upgrade a 5 TB de Almacenamiento Masivo",
        "Almacenamiento compartido con hasta 5 familiares",
        "Soporte Premium 24/7 de Google",
        "Un solo pago equivalente a $1 al mes"
      ],
      buttonText: "Obtener Plan 12x12",
      recommended: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

        {/* 1. HERO SECTION */}
        <section className="relative py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Pretitle */}
              <p className="text-accent-cyan text-lg md:text-xl font-semibold mb-6 animate-pulse-slow">
                El ecosistema digital definitivo ya está aquí.
              </p>
              
              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-primary mb-8 leading-tight">
                Todo el poder de Google AI Pro. Por menos de lo que cuesta un café.
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                Desbloquea la IA más avanzada del planeta con Gemini Pro, realiza investigaciones masivas con Deep Research y obtén 5 TB de almacenamiento familiar. Todo integrado nativamente en tu Gmail y Docs.
              </p>
              
              {/* Offer */}
              <div className="bg-accent-cyan/10 border border-accent-cyan/30 rounded-2xl px-6 py-4 mb-10 inline-block">
                <p className="text-accent-cyan text-lg md:text-xl font-bold flex items-center justify-center gap-2">
                  ⚡ Promoción de Lanzamiento: Llévate el plan anual completo por solo $12 USD o empieza mes a mes por $5 USD.
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://ig.me/m/harton.node.ai?text=Hola, estoy interesado en el plan 12x12" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-accent-cyan to-accent-blue hover:from-accent-blue hover:to-accent-cyan text-bg-primary border-none shadow-glow-cyan text-lg px-10 py-5 font-semibold">
                    Conseguir Plan 12x12 por $12
                  </Button>
                </a>
                <a href="https://ig.me/m/harton.node.ai?text=Hola, estoy interesado en el plan de $5" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="text-text-primary border-border-light hover:border-accent-cyan hover:bg-accent-cyan/10 text-lg px-10 py-5 font-semibold">
                    Empezar por $5 al mes
                  </Button>
                </a>
              </div>
              
              {/* Microcopy */}
              <p className="text-text-muted text-sm md:text-base">
                Sin contratos ocultos. Cancela cuando quieras en un clic.
              </p>
            </div>
          </div>
        </section>

        {/* 2. LOS SEIS SUPERPODERES */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                Los Seis Superpoderes
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                ¿Qué obtienes al activar tu cuenta Pro? Pasas de usar herramientas comunes a tener superpoderes digitales integrados en tu día a día.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-bg-secondary border border-border-light p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-glow-cyan hover:border-accent-cyan/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-accent-cyan" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-text-primary">{feature.title}</h3>
                    <p className="text-text-secondary">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN DE PRECIOS */}
        <section className="py-20 md:py-28 bg-bg-secondary/50 relative">
          <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                Escoge el plan que va a cambiar tu forma de trabajar
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Nos encargamos personalmente de darte el mejor precio, el mejor producto y el servicio más obsesivo del mercado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div key={index} className={`bg-bg-secondary border rounded-3xl shadow-2xl p-8 md:p-10 transition-all duration-300 ${plan.recommended ? 'border-accent-cyan shadow-glow-cyan scale-[1.02]' : 'border-border-light hover:border-accent-cyan/50'}`}>
                  {plan.recommended && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-cyan to-accent-purple text-bg-primary px-6 py-2 rounded-full font-bold text-sm">
                      Recomendado
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-text-secondary mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-extrabold text-text-primary">{plan.price}</span>
                    <span className="text-xl text-text-secondary">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-text-secondary">
                        <div className="w-5 h-5 text-accent-cyan flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a href={plan.recommended ? "https://ig.me/m/harton.node.ai?text=Hola, estoy interesado en el plan 12x12" : "https://ig.me/m/harton.node.ai?text=Hola, estoy interesado en el plan de $5"} target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full text-lg py-4 font-semibold ${plan.recommended ? 'bg-gradient-to-r from-accent-cyan to-accent-blue hover:from-accent-blue hover:to-accent-cyan text-bg-primary border-none shadow-glow-cyan' : 'border-border-light hover:border-accent-cyan hover:bg-accent-cyan/10'}`}>
                      {plan.buttonText}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COMPROMISO DE SERVICIO */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-8">
              No compramos clientes, nos ganamos tu lealtad
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed">
              No queremos que pienses en el dinero, queremos que pienses en lo que vas a crear. Te garantizamos el precio más competitivo del mercado y un servicio técnico impecable. Si la IA no revoluciona tu productividad en la primera semana, puedes cancelar con un solo clic. Sin preguntas.
            </p>
            <a href="https://ig.me/m/harton.node.ai?text=Hola, estoy interesado en el plan 12x12" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-accent-cyan to-accent-blue hover:from-accent-blue hover:to-accent-cyan text-bg-primary border-none shadow-glow-cyan text-xl px-12 py-6 font-semibold">
                Activar Google Pro Ahora
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
