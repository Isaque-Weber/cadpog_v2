'use client';

import { useState } from 'react';

export default function Ofertar() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    valor: '',
    tipo: 'dizimo',
    observacoes: ''
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
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
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
            Oferta Registrada com Sucesso!
          </h2>
          <p className="text-gray-300 mb-6">
            Obrigado pela sua generosidade. Que Deus abençoe abundantemente sua vida.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                nome: '',
                email: '',
                valor: '',
                tipo: 'dizimo',
                observacoes: ''
              });
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Fazer Nova Oferta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ofertar
            </h1>
            <p className="text-xl text-blue-100">
              "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria."
            </p>
            <p className="text-sm text-blue-200 mt-2">2 Coríntios 9:7</p>
          </div>
        </div>
      </section>

      {/* Offering Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 rounded-lg shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Faça sua Oferta
              </h2>
              <p className="text-gray-300">
                Contribua para a obra de Deus e seja abençoado
              </p>
            </div>

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
                <label htmlFor="tipo" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Oferta *
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  required
                  value={formData.tipo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                >
                  <option value="dizimo">Dízimo</option>
                  <option value="oferta">Oferta</option>
                  <option value="missao">Missões</option>
                  <option value="construcao">Construção</option>
                  <option value="eventos">Eventos</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="valor" className="block text-sm font-medium text-gray-300 mb-2">
                  Valor (R$) *
                </label>
                <input
                  type="number"
                  id="valor"
                  name="valor"
                  required
                  min="0"
                  step="0.01"
                  value={formData.valor}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                  placeholder="0,00"
                />
              </div>

              <div>
                <label htmlFor="observacoes" className="block text-sm font-medium text-gray-300 mb-2">
                  Observações
                </label>
                <textarea
                  id="observacoes"
                  name="observacoes"
                  rows={4}
                  value={formData.observacoes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                  placeholder="Observações adicionais (opcional)"
                />
              </div>

              <div className="bg-blue-500/20 p-4 rounded-md">
                <p className="text-sm text-blue-300">
                  <strong>Importante:</strong> Após o envio, você receberá as instruções para 
                  efetuar o pagamento. Todas as ofertas são utilizadas para a manutenção da igreja 
                  e expansão da obra de Deus.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Processando...' : 'Enviar Oferta'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Formas de Contribuir
            </h2>
            <p className="text-lg text-gray-300">
              Diversas maneiras de apoiar a obra de Deus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Dízimo</h3>
              <p className="text-gray-300">
                Contribuição regular de 10% dos seus rendimentos
              </p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Oferta</h3>
              <p className="text-gray-300">
                Contribuição voluntária para a manutenção da igreja
              </p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Missões</h3>
              <p className="text-gray-300">
                Apoio ao trabalho missionário e evangelização
              </p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Construção</h3>
              <p className="text-gray-300">
                Contribuição para obras e melhorias da igreja
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verse Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl italic mb-4">
            "Dê, e será dado a vocês: uma boa medida, calcada, sacudida e transbordante 
            será colocada em seu colo. Pois a medida que usarem também será usada para medir vocês."
          </blockquote>
          <p className="text-blue-200">Lucas 6:38</p>
        </div>
      </section>
    </div>
  );
}
