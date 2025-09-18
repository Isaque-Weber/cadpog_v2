'use client'

import { useState } from "react"
import { useSwipeable } from "react-swipeable"

type Congregacao = {
    id: number
    nome: string
    dirigentes: string
    mapEmbed: string
}

export default function CongregacoesPage() {
    const congregacoes: Congregacao[] = [
        {
            id: 1,
            nome: "Sede Espanha",
            dirigentes: "Pr. Carlos Henrique e Missª Elaine",
            mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.648045823038!2d-4.630075782325676!3d36.54926192064272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e35cae82d7a1%3A0x54bab98a83ab6b61!2sIglesia%20Cristiana%20Dios%20de%20Poder%20y%20Gloria%20(%40iglesiacadpog)!5e0!3m2!1spt-BR!2sbr!4v1757877337041!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            id: 2,
            nome: "Matriz Brasil",
            dirigentes: "Pr. Marcelo Lourenço e Missª Marcela Lourenço",
            mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7349.814225509725!2d-43.62040190391885!3d-22.916796684944753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be4edc2f311f5%3A0x528f0ca0a170e078!2sCADPOG%20-%20Catedral%20das%20Assembleias%20de%20Deus%20-%20Minist%C3%A9rio%20Deus%20de%20Poder%20e%20Gl%C3%B3ria!5e0!3m2!1spt-BR!2sbr!4v1757877369015!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            id: 3,
            nome: "Congregação Gouveia",
            dirigentes: "Pr. Marcelo Pinho e Missª Márcia Pinho",
            mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.7059367889415!2d-43.622958329002415!3d-22.924214736948855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be4de63a06799%3A0x6945f549ea35d602!2sCADPOG%20Gouveia!5e0!3m2!1spt-BR!2sbr!4v1757877275703!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            id: 4,
            nome: "Congregação Rua 5",
            dirigentes: "Pr. Adalberto e Missª Leilane",
            mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7349.814225509725!2d-43.62040190391885!3d-22.916796684944753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be5234c74aa41%3A0x7482199705d4e678!2sCADPOG%20RUA%205!5e0!3m2!1spt-BR!2sbr!4v1757877422316!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            id: 5,
            nome: "Congregação Canal 2",
            dirigentes: "Pr. Júlio e Missª ",
            mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.7422561465455!2d-43.60888611336487!3d-22.922875684913574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be59a379330c5%3A0x979e0e59ba86172b!2sCadpog%20Canal%202!5e0!3m2!1spt-BR!2sbr!4v1757877477528!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            id: 6,
            nome: "Congregação Engenheiro Pedreira",
            dirigentes: "Pr. Wilson e Missª Sirlene",
            mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.944842886605!2d-43.62076112381259!3d-22.69309713027065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x995badc3f83901%3A0xdba19e0e411222b6!2sCadpog%20eng%20Pedreira!5e0!3m2!1spt-BR!2sbr!4v1757877505375!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        }
    ]

    const [current, setCurrent] = useState(0)

    const next = () =>
        setCurrent((prev) => (prev === congregacoes.length - 1 ? 0 : prev + 1))
    const prev = () =>
        setCurrent((prev) => (prev === 0 ? congregacoes.length - 1 : prev - 1))

    const handlers = useSwipeable({
        onSwipedLeft: () => next(),
        onSwipedRight: () => prev(),
        preventScrollOnSwipe: true,
        trackMouse: true,
    })

    const currentCong = congregacoes[current]

    return (
        <main
            className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 py-12"
            {...handlers}
        >
            <div className="relative w-full max-w-6xl bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
                {/* Botão Prev */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
                >
                    ◀
                </button>

                {/* Conteúdo */}
                <div className="p-8 text-center">
                    <h1 className="text-4xl font-extrabold mb-3">{currentCong.nome}</h1>
                    <p className="text-lg text-gray-300 mb-6">
                        Dirigentes: {currentCong.dirigentes}
                    </p>
                </div>

                {/* Mapa maior */}
                <div
                    className="h-[600px] w-full border-t border-gray-700"
                    dangerouslySetInnerHTML={{ __html: currentCong.mapEmbed }}
                />

                {/* Botão Next */}
                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
                >
                    ▶
                </button>
            </div>

            {/* Indicadores */}
            <div className="flex gap-3 mt-6">
                {congregacoes.map((c, idx) => (
                    <span
                        key={c.id}
                        className={`w-4 h-4 rounded-full transition ${
                            idx === current ? "bg-orange-500" : "bg-gray-500"
                        }`}
                    ></span>
                ))}
            </div>
        </main>
    )
}
