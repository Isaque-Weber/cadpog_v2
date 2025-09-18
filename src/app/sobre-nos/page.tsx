export default function SobreNos() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre Nós
            </h1>
            <p className="text-xl text-blue-100">
              Conheça nossa história, missão e valores
            </p>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  A Igreja CADPOG (Comunidade de Amor e Desenvolvimento Pessoal e Ocupacional de Deus) 
                  foi fundada com o propósito de servir a Deus e à comunidade, promovendo o amor de Cristo 
                  e o desenvolvimento integral das pessoas.
                </p>
                <p>
                  Desde nossa fundação, temos nos dedicado a construir uma comunidade unida, onde cada 
                  membro pode crescer espiritualmente e pessoalmente, encontrando apoio, amor e direção 
                  na palavra de Deus.
                </p>
                <p>
                  Nossa jornada tem sido marcada por momentos de crescimento, desafios superados e 
                  muitas bênçãos compartilhadas. Cada passo dado tem sido guiado pela fé e pelo 
                  compromisso com o evangelho de Jesus Cristo.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nossa Fundação</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Fundada em 2010</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Mais de 500 membros ativos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>3 congregações</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Diversos ministérios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nossos Pilares
            </h2>
            <p className="text-lg text-gray-300">
              Os fundamentos que guiam nossa caminhada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Missão</h3>
              <p className="text-gray-300">
                Proclamar o evangelho de Jesus Cristo, promovendo o amor, o desenvolvimento pessoal 
                e espiritual, e servindo à comunidade com excelência e dedicação.
              </p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Visão</h3>
              <p className="text-gray-300">
                Ser uma igreja referência em amor, desenvolvimento e transformação de vidas, 
                impactando positivamente nossa comunidade e além.
              </p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <p className="text-gray-300">
                Amor incondicional, integridade, excelência, serviço, unidade, crescimento 
                e compromisso com a palavra de Deus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liderança Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nossa Liderança
            </h2>
            <p className="text-lg text-gray-300">
              Conheça os pastores e líderes que guiam nossa igreja
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 rounded-lg shadow-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Pastor Principal</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pastor João Silva</h3>
                <p className="text-gray-300 mb-3">
                  Pastor principal da Igreja CADPOG, com mais de 15 anos de ministério.
                </p>
                <p className="text-sm text-gray-400">
                  Formado em Teologia, especialista em Aconselhamento Pastoral.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 rounded-lg shadow-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Pastora</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pastora Maria Santos</h3>
                <p className="text-gray-300 mb-3">
                  Pastora auxiliar, responsável pelo ministério de mulheres e famílias.
                </p>
                <p className="text-sm text-gray-400">
                  Formada em Teologia, especialista em Ministério Familiar.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 rounded-lg shadow-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Pastor Auxiliar</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pastor Pedro Costa</h3>
                <p className="text-gray-300 mb-3">
                  Pastor auxiliar, responsável pelo ministério de jovens e evangelismo.
                </p>
                <p className="text-sm text-gray-400">
                  Formado em Teologia, especialista em Evangelismo e Missões.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministérios Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nossos Ministérios
            </h2>
            <p className="text-lg text-gray-300">
              Diversos ministérios para servir a toda a família
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Escola Bíblica</h3>
              <p className="text-sm text-gray-300">Estudo da palavra para todas as idades</p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Ministério de Jovens</h3>
              <p className="text-sm text-gray-300">Atividades e estudos para jovens</p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Ministério de Mulheres</h3>
              <p className="text-sm text-gray-300">Encontros e estudos para mulheres</p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Ministério de Crianças</h3>
              <p className="text-sm text-gray-300">Atividades e ensino para crianças</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
