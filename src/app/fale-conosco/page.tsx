'use client';

import { useState } from 'react';

export default function FaleConosco() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/fale-conosco', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Handle error
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Failed to submit form', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Mensagem Enviada com Sucesso!
          </h2>
          <p className="text-gray-300 mb-6">
            Obrigado por entrar em contato conosco. Retornaremos em breve.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                nome: '',
                email: '',
                telefone: '',
                assunto: '',
                mensagem: ''
              });
            }}
            className="bg-gradient-to-r from-rose-500 to-red-600 text-white px-6 py-2 rounded-lg hover:from-rose-600 hover:to-red-700 transition-colors duration-200"
          >
            Enviar Nova Mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden ring-1 ring-white/10 bg-slate-900/70 backdrop-blur-sm px-6 lg:px-10 py-12">
          {/* Glows decorativos */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Fale Conosco
              </h1>
              <p className="text-xl text-slate-300">
                  Estamos aqui para ouvir você e responder suas dúvidas
              </p>
          </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="informacoes">Informações sobre a igreja</option>
                    <option value="visita">Agendar visita</option>
                    <option value="membro">Tornar-se membro</option>
                    <option value="ministerio">Ministérios</option>
                    <option value="eventos">Eventos</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={6}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-500 to-red-600 text-white py-3 px-4 rounded-md font-semibold hover:from-rose-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Endereço</h3>
                    <p className="text-gray-300">
                      Av. Cesário de Melo, 8355<br />
                      Campo Grande - Rio de Janeiro/RJ<br />
                      CEP: 23056-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Telefone</h3>
                    <p className="text-gray-300">
                      (11) 99999-9999<br />
                      (11) 3333-4444
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">E-mail</h3>
                    <p className="text-gray-300">
                      contato@igrejacadpog.com.br<br />
                      secretaria@igrejacadpog.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Horários de Culto</h3>
                    <p className="text-gray-300">
                      Segundas: Culto de Libertação as 19h<br />
                      Quintas: Doutrina as 19h<br />
                      Sábado: Consagração as 9h<br />
                      Domingo: EBD as 9h e Culto de Louvor as 19h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
