'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { trpc } from '@/lib/trpc';
import { Edit, Trash2, Plus, CheckCircle2, Eye } from 'lucide-react';
import type { Service, Project, ContactMessage } from '@prisma/client';

type Tab = 'services' | 'projects' | 'messages';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('services');

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <h1 className="text-4xl font-extrabold mb-10 text-text-primary">Panel Administrativo</h1>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'services' ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary shadow-glow-cyan' : 'bg-bg-secondary text-text-secondary border border-border-light hover:bg-bg-tertiary'}`}
            >
              Servicios
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'projects' ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary shadow-glow-cyan' : 'bg-bg-secondary text-text-secondary border border-border-light hover:bg-bg-tertiary'}`}
            >
              Proyectos
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'messages' ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary shadow-glow-cyan' : 'bg-bg-secondary text-text-secondary border border-border-light hover:bg-bg-tertiary'}`}
            >
              Mensajes
            </button>
          </div>

          <div className="bg-bg-secondary rounded-3xl shadow-2xl p-10 border border-border-light">
            {activeTab === 'services' && <ServicesTab />}
            {activeTab === 'projects' && <ProjectsTab />}
            {activeTab === 'messages' && <MessagesTab />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ServicesTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<any | null>(null);
  const [form, setForm] = useState({ title: '', description: '', icon: 'Cpu', order: 0 });
  const utils = trpc.useContext();

  const { data: services = [] } = trpc.getServices.useQuery();

  const handleEdit = (service: any) => {
    setEditingService(service);
    setForm(service);
    setIsModalOpen(true);
  };
  const createService = trpc.createService.useMutation({
    onSuccess: () => {
      utils.getServices.invalidate();
      setIsModalOpen(false);
      setForm({ title: '', description: '', icon: 'Cpu', order: 0 });
    }
  });
  const updateService = trpc.updateService.useMutation({
    onSuccess: () => {
      utils.getServices.invalidate();
      setIsModalOpen(false);
      setEditingService(null);
    }
  });
  const deleteService = trpc.deleteService.useMutation({
    onSuccess: () => {
      utils.getServices.invalidate();
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      await updateService.mutateAsync({ ...form, id: editingService.id });
    } else {
      await createService.mutateAsync(form);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar este servicio?')) {
      await deleteService.mutateAsync(id);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-text-primary">Servicios</h2>
        <Button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-accent-cyan to-accent-blue border-none"><Plus className="w-5 h-5 mr-2" /> Nuevo Servicio</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-bg-primary border border-border-light rounded-2xl p-6 hover:border-accent-cyan/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-text-primary">{service.title}</h3>
            <p className="text-text-secondary mb-6">{service.description}</p>
            <div className="flex space-x-3">
              <button onClick={() => handleEdit(service)} className="text-accent-cyan hover:text-accent-blue transition-colors p-2 rounded-xl hover:bg-bg-tertiary">
                <Edit className="w-6 h-6" />
              </button>
              <button onClick={() => handleDelete(service.id)} className="text-red-500 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-bg-tertiary">
                <Trash2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-bg-secondary border border-border-light rounded-3xl p-8 w-full max-w-2xl">
            <h3 className="text-3xl font-bold mb-8 text-text-primary">{editingService ? 'Editar Servicio' : 'Nuevo Servicio'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-3">Título</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-3">Descripción</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-3">Icono</label>
                <select
                  value={form.icon}
                  onChange={(e) => setForm({ ...form, icon: e.target.value })}
                  className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                >
                  <option value="Cpu">Cpu</option>
                  <option value="Globe">Globe</option>
                  <option value="Smartphone">Smartphone</option>
                  <option value="Brain">Brain</option>
                  <option value="Zap">Zap</option>
                  <option value="Code">Code</option>
                </select>
              </div>
              <div className="mb-10">
                <label className="block text-sm font-semibold text-text-secondary mb-3">Orden</label>
                <input
                  type="number"
                  value={form.order}
                  onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
                  className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <Button type="submit" className="bg-gradient-to-r from-accent-cyan to-accent-blue border-none">{editingService ? 'Guardar' : 'Crear'}</Button>
                <Button type="button" variant="secondary" onClick={() => { setIsModalOpen(false); setEditingService(null); }}>Cancelar</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectsTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any | null>(null);
  const [form, setForm] = useState({ title: '', description: '', imageUrl: '', category: '', order: 0 });
  const utils = trpc.useContext();

  const { data: projects = [] } = trpc.getProjects.useQuery();

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setForm(project);
    setIsModalOpen(true);
  };
  const createProject = trpc.createProject.useMutation({
    onSuccess: () => {
      utils.getProjects.invalidate();
      setIsModalOpen(false);
      setForm({ title: '', description: '', imageUrl: '', category: '', order: 0 });
    }
  });
  const updateProject = trpc.updateProject.useMutation({
    onSuccess: () => {
      utils.getProjects.invalidate();
      setIsModalOpen(false);
      setEditingProject(null);
    }
  });
  const deleteProject = trpc.deleteProject.useMutation({
    onSuccess: () => {
      utils.getProjects.invalidate();
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      await updateProject.mutateAsync({ ...form, id: editingProject.id });
    } else {
      await createProject.mutateAsync(form);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar este proyecto?')) {
      await deleteProject.mutateAsync(id);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-text-primary">Proyectos</h2>
        <Button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-accent-cyan to-accent-blue border-none"><Plus className="w-5 h-5 mr-2" /> Nuevo Proyecto</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-bg-primary rounded-2xl shadow-xl overflow-hidden border border-border-light transition-all duration-300 group">
            <img src={project.imageUrl} alt={project.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-8">
              <span className="inline-block px-4 py-1 bg-accent-purple/20 text-accent-purple text-sm font-semibold rounded-full mb-4">{project.category}</span>
              <h3 className="text-2xl font-semibold mb-3 text-text-primary">{project.title}</h3>
              <p className="text-text-secondary mb-6">{project.description}</p>
              <div className="flex space-x-3">
                <button onClick={() => handleEdit(project)} className="text-accent-cyan hover:text-accent-blue transition-colors p-2 rounded-xl hover:bg-bg-tertiary">
                  <Edit className="w-6 h-6" />
                </button>
                <button onClick={() => handleDelete(project.id)} className="text-red-500 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-bg-tertiary">
                  <Trash2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-bg-secondary border border-border-light rounded-3xl p-8 w-full max-w-2xl">
            <h3 className="text-3xl font-bold mb-8 text-text-primary">{editingProject ? 'Editar Proyecto' : 'Nuevo Proyecto'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-3">Título</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-3">Descripción</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-3">URL de Imagen</label>
                <input
                  type="text"
                  value={form.imageUrl}
                  onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-3">Categoría</label>
                <input
                  type="text"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                />
              </div>
              <div className="mb-10">
                <label className="block text-sm font-semibold text-text-secondary mb-3">Orden</label>
                <input
                  type="number"
                  value={form.order}
                  onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
                  className="w-full px-5 py-4 bg-bg-primary border border-border-light rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <Button type="submit" className="bg-gradient-to-r from-accent-cyan to-accent-blue border-none">{editingProject ? 'Guardar' : 'Crear'}</Button>
                <Button type="button" variant="secondary" onClick={() => { setIsModalOpen(false); setEditingProject(null); }}>Cancelar</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function MessagesTab() {
  const utils = trpc.useContext();
  const { data: messages = [] } = trpc.getContactMessages.useQuery();
  const updateMessage = trpc.updateContactMessage.useMutation({
    onSuccess: () => {
      utils.getContactMessages.invalidate();
    }
  });
  const deleteMessage = trpc.deleteContactMessage.useMutation({
    onSuccess: () => {
      utils.getContactMessages.invalidate();
    }
  });

  const handleMarkRead = async (id: string, read: boolean) => {
    await updateMessage.mutateAsync({ id, read: !read });
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar este mensaje?')) {
      await deleteMessage.mutateAsync(id);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-text-primary mb-8">Mensajes de Contacto</h2>
      <div className="space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`border rounded-3xl p-8 ${msg.read ? 'bg-bg-primary border-border-light' : 'bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border-accent-cyan/30'}`}>
            <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
              <div>
                <h3 className="font-semibold text-2xl text-text-primary">{msg.name}</h3>
                <p className="text-sm text-text-secondary mb-2">{msg.email}</p>
                <p className="text-base font-semibold text-text-tertiary">{msg.subject}</p>
              </div>
              <div className="flex space-x-3">
                <button onClick={() => handleMarkRead(msg.id, msg.read)} className={`p-3 rounded-xl ${msg.read ? 'text-text-muted hover:text-text-secondary hover:bg-bg-tertiary' : 'text-accent-cyan hover:text-accent-blue hover:bg-bg-tertiary'}`}>
                  {msg.read ? <Eye className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                </button>
                <button onClick={() => handleDelete(msg.id)} className="text-red-500 hover:text-red-400 p-3 rounded-xl hover:bg-bg-tertiary">
                  <Trash2 className="w-6 h-6" />
                </button>
              </div>
            </div>
            <p className="text-text-secondary text-lg">{msg.message}</p>
            <p className="text-xs text-text-muted mt-4">{new Date(msg.createdAt).toLocaleDateString('es-ES', { dateStyle: 'full', timeStyle: 'short' })}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
