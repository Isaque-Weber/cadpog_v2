'use client';

export default function Ofertar() {
    return (
        <div className="text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden ring-1 ring-white/10 bg-slate-900/70 backdrop-blur-sm px-6 lg:px-10 py-12">
                {/* Glows decorativos */}
                <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

                <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Ofertar
                    </h1>
                    <p className="text-xl text-slate-300">
                        &#34;Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação,
                        pois Deus ama quem dá com alegria.&#34;
                    </p>
                    <p className="text-sm text-slate-400 mt-2">2 Coríntios 9:7</p>
                </div>
            </section>

            {/* Formas de Contribuir */}
            <section className="py-16 bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Formas de Contribuir
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Transferência Bancária */}
                        <div className="bg-slate-800/50 hover:bg-slate-800/80 transition-colors rounded-xl p-8 shadow-lg flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                                {/* Ícone Transferência */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-10 h-10 text-white"
                                    fill="currentColor"
                                >
                                    <path d="M32 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64zm64 64v256h320V128H96z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">TED ou DOC</h3>
                            <p className="text-gray-300">Igreja Exemplo Brasil</p>
                            <p className="text-gray-400">CNPJ: 00.000.000/0001-00</p>
                            <p className="text-gray-400 mt-2">Banco Itaú</p>
                            <p className="text-gray-400">Agência: 1234</p>
                            <p className="text-gray-400">Conta: 56789-0</p>
                        </div>

                        {/* PIX */}
                        <div className="bg-slate-800/50 hover:bg-slate-800/80 transition-colors rounded-xl p-8 shadow-lg flex flex-col items-center">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                {/* Ícone Pix */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-10 h-10 text-white"
                                    fill="currentColor"
                                >
                                    <path d="M256 48c-11.4 0-22.6 4.5-30.6 12.6l-164 164c-16.4 16.4-16.4 43 0 59.4l164 164c8 8 19.2 12.6 30.6 12.6s22.6-4.6 30.6-12.6l164-164c16.4-16.4 16.4-43 0-59.4l-164-164C278.6 52.5 267.4 48 256 48z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">PIX</h3>
                            <p className="text-gray-300 mb-2">Use a chave:</p>
                            <p className="text-blue-400 font-mono">pix@igrejaexemplo.com.br</p>
                            <p className="text-gray-400 mt-4">Ou escaneie o QR Code:</p>
                            <img
                                src="/qrcode-pix.png"
                                alt="QR Code Pix"
                                className="mx-auto w-44 h-44 mt-4 rounded-lg shadow-md border border-slate-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bible Verse Section */}
            <section className="relative overflow-hidden ring-1 ring-white/10 bg-slate-900/70 backdrop-blur-sm px-6 lg:px-10 py-12">
                {/* Glows decorativos */}
                <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <blockquote className="text-xl md:text-2xl italic mb-4">
                        "Dê, e será dado a vocês: uma boa medida, calcada, sacudida e transbordante
                        será colocada em seu colo. Pois a medida que usarem também será usada para medir vocês."
                    </blockquote>
                    <p className="text-slate-400">Lucas 6:38</p>
                </div>
            </section>
        </div>
    );
}
