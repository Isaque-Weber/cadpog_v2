"use client";

import { useRef } from "react";

export default function SobreNos() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (offset: number) => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
        }
    };

    return (
        <div className="text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden ring-1 ring-white/10 bg-slate-900/70 backdrop-blur-sm px-6 lg:px-10 py-12">
                {/* Glows decorativos */}
                <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

                <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Sobre Nós
                    </h1>
                    <p className="text-xl text-slate-300">
                        Conheça nossa história, missão e valores
                    </p>
                </div>
            </section>

            {/* História Section */}
            <section className="py-20 bg-slate-950/50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Nossa História</h2>
                    <div className="grid md:grid-cols-3 gap-10 text-gray-300">
                        <div className="bg-slate-900/70 ring-1 ring-white/10 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-3 text-white">Início</h3>
                            <p className="mb-4">
                                Na década de 90, o pastor Carlos Henrique e a missionária Elaine deram
                                os primeiros passos na fé participando do grupo de jovens da Igreja
                                Pentecostal Nova Vida, em Nova Iguaçu (RJ).
                            </p>
                            <p>
                                Guiados pelo Espírito Santo, iniciaram reuniões de oração em sua casa.
                                O que parecia apenas um encontro simples entre irmãos se transformou
                                no embrião de uma nova igreja.
                            </p>
                        </div>

                        <div className="bg-slate-900/70 ring-1 ring-white/10 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-3 text-white">Expansão</h3>
                            <p className="mb-4">
                                Em 2007, já atuando como presbítero na Assembleia de Deus, o pastor
                                Carlos foi enviado para dirigir uma congregação no bairro de Cosmos,
                                no Rio de Janeiro. Pouco tempo depois, veio a emancipação e nasceu a
                                Catedral das Assembleias de Deus Ministério Deus de Poder e Glória.
                            </p>
                            <p>
                                Desde então, a igreja cresceu de forma constante, reunindo centenas de
                                membros e abrindo novas congregações ligadas à igreja mãe no Brasil.
                            </p>
                        </div>

                        <div className="bg-slate-900/70 ring-1 ring-white/10 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-3 text-white">Nações</h3>
                            <p className="mb-4">
                                A promessa de que a obra alcançaria outros continentes se cumpriu em
                                2019, quando a família pastoral chegou à Espanha. Os cultos começaram
                                em casa com poucas pessoas, mas logo a sala ficou pequena.
                            </p>
                            <p>
                                Em pouco tempo, Deus abriu as portas para um novo templo em Fuengirola,
                                Málaga, consolidando a CADPOG também na Europa e expandindo ainda mais
                                o alcance do evangelho.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missão, Visão e Valores */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Nossos Pilares</h2>
                        <p className="text-lg text-gray-300">
                            Os fundamentos que guiam nossa caminhada
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Missão */}
                        <div className="bg-slate-900/70 ring-1 ring-white/10 p-8 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold mb-3">Missão</h3>
                            <p className="text-gray-300">
                                Proclamar o evangelho de Jesus Cristo, promovendo o amor, o desenvolvimento pessoal
                                e espiritual, e servindo à comunidade com excelência e dedicação.
                            </p>
                        </div>
                        {/* Visão */}
                        <div className="bg-slate-900/70 ring-1 ring-white/10 p-8 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold mb-3">Visão</h3>
                            <p className="text-gray-300">
                                Ser uma igreja referência em amor, desenvolvimento e transformação de vidas,
                                impactando positivamente nossa comunidade e além.
                            </p>
                        </div>
                        {/* Valores */}
                        <div className="bg-slate-900/70 ring-1 ring-white/10 p-8 rounded-lg shadow-lg text-center">
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
            {/* ... mantida igual ao seu código ... */}

            {/* Ministérios com Carrossel */}
            <section className="py-20 bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Nossos Ministérios</h2>
                        <p className="text-lg text-gray-300">
                            Diversos ministérios para servir a toda a família
                        </p>
                    </div>

                    <div className="relative">
                        {/* Botão Esquerda */}
                        <button
                            onClick={() => scroll(-300)}
                            className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 bg-slate-800/70
      text-white p-3 rounded-full shadow-lg hover:bg-slate-700 z-20"
                        >
                            ◀
                        </button>

                        {/* Carrossel */}
                        <div
                            ref={carouselRef}
                            className="overflow-x-auto flex space-x-6 pb-6 snap-x snap-mandatory scroll-smooth
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                        >
                            {[
                                { title: "Escola Bíblica Dominical - EBD", desc: "Estudo da palavra para todas as idades", icon: "📖" },
                                { title: "Interliga Jovem", desc: "Atividades e estudos para jovens", icon: "🧑‍🤝‍🧑" },
                                { title: "Interliga Juniores", desc: "Atividades e estudos para adolescentes", icon: "👦" },
                                { title: "UniFem", desc: "Encontros e estudos para mulheres", icon: "💜" },
                                { title: "UniMasc", desc: "Encontros e estudos para homens", icon: "💙" },
                                { title: "Interliga Kids", desc: "Atividades e ensino para crianças", icon: "🌟" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="min-w-[280px] sm:min-w-[320px] bg-slate-900/70 ring-1 ring-white/10
                    p-8 rounded-xl shadow-lg snap-center flex-shrink-0"
                                >
                                    <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white text-center mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 text-center">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Botão Direita */}
                        <button
                            onClick={() => scroll(300)}
                            className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 bg-slate-800/70
      text-white p-3 rounded-full shadow-lg hover:bg-slate-700 z-20"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
