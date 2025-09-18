'use client'

import { usePedidoOracaoForm } from "./hooks"

export default function PedidoOracao() {
    const {
        formData,
        isSubmitting,
        isSubmitted,
        handleChange,
        handleSubmit,
        resetForm,
    } = usePedidoOracaoForm()

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-md mx-auto text-center">
                    <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Pedido Enviado com Sucesso!
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Seu pedido de oração foi recebido. Nossa equipe de intercessão já está orando por você.
                    </p>
                    <button
                        onClick={resetForm}
                        className="bg-gradient-to-r from-rose-500 to-red-600 text-white px-6 py-2 rounded-lg hover:from-rose-600 hover:to-red-700 transition"
                    >
                        Enviar Novo Pedido
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="text-white">
            {/* Hero Section */}
            <section className="py-16">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900/70 backdrop-blur-sm ring-1 ring-white/10 rounded-lg shadow-2xl p-8">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Compartilhe Seu Pedido</h2>
                            <p className="text-gray-300">Estamos aqui para orar por você e sua família</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Campo Nome */}
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
                                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:ring-2 focus:ring-blue-500"
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:ring-2 focus:ring-blue-500"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            {/* Telefone */}
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
                                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:ring-2 focus:ring-blue-500"
                                    placeholder="(11) 99999-9999"
                                />
                            </div>

                            {/* Tipo */}
                            <div>
                                <label htmlFor="tipo" className="block text-sm font-medium text-gray-300 mb-2">
                                    Tipo de Pedido
                                </label>
                                <select
                                    id="tipo"
                                    name="tipo"
                                    value={formData.tipo}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="pessoal">Pessoal</option>
                                    <option value="familiar">Familiar</option>
                                    <option value="saude">Saúde</option>
                                    <option value="trabalho">Trabalho</option>
                                    <option value="estudos">Estudos</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>

                            {/* Pedido */}
                            <div>
                                <label htmlFor="pedido" className="block text-sm font-medium text-gray-300 mb-2">
                                    Seu Pedido de Oração *
                                </label>
                                <textarea
                                    id="pedido"
                                    name="pedido"
                                    required
                                    rows={6}
                                    value={formData.pedido}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-md focus:ring-2 focus:ring-blue-500"
                                    placeholder="Descreva seu pedido de oração aqui..."
                                />
                            </div>

                            {/* Aviso */}
                            <div className="bg-rose-500/20 p-4 rounded-md">
                                <p className="text-sm text-rose-300">
                                    <strong>Importante:</strong> Seus dados são confidenciais e serão utilizados apenas para fins de oração.
                                    Nossa equipe de intercessão orará por você e sua família.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-rose-500 to-red-600 text-white py-3 px-4 rounded-md font-semibold hover:from-rose-600 hover:to-red-700 disabled:opacity-50 transition"
                            >
                                {isSubmitting ? "Enviando..." : "Enviar Pedido de Oração"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
