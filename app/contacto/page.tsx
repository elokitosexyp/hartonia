'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setIsSuccess(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error(error);
      alert('Error al enviar el mensaje');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
              Contáctanos
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              ¿Listo para empezar tu proyecto? ¡Hablemos!
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {isSuccess ? (
              <div className="text-center py-20 bg-bg-secondary border border-border-light rounded-3xl shadow-2xl">
                <h2 className="text-3xl font-bold text-accent-cyan mb-4">¡Mensaje enviado con éxito!</h2>
                <p className="text-text-secondary text-lg">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-bg-secondary border border-border-light p-10 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-text-secondary mb-3">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-secondary mb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-text-secondary mb-3">Asunto</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                  />
                </div>
                <div className="mb-10">
                  <label className="block text-sm font-semibold text-text-secondary mb-3">Mensaje</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-accent-cyan to-accent-blue hover:from-accent-blue hover:to-accent-cyan text-bg-primary border-none shadow-glow-cyan text-lg font-semibold">
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
