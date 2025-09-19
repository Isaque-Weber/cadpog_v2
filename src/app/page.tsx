import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import {Button} from "@/components/Button";
import {
    ArrowRight,
    LucideMessageCircle
} from "lucide-react"

export default function HomePage() {
    return (
        <main className="relative flex flex-col items-center justify-center text-center gap-16 pb-24 sm:pb-28 lg:pb-36">
            {/* Hero com overlay-blur */}
            <div className="mx-auto w-[85vw] relative overflow-hidden rounded-2xl
                  px-6 lg:px-10 py-12 mt-8
                  flex flex-col lg:flex-row items-center justify-between gap-8">


                    <div className="relative z-10 flex-1 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-snug text-white">
                            A igreja é mais que um lugar para <span className="text-yellow-400">frequentar</span>, é um lugar para chamar de <span className="text-blue-400">lar</span>
                        </h1>
                        <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                            <Button href="/congregacoes" variant="outline">Conheça</Button>
                            <Button href="/pedido-oracao" variant="outline">Pedido de oração</Button>
                            <Button href="/ofertar" variant="primary">Ofertar</Button>
                        </div>
                    </div>

                    <div className="relative z-10 flex-1 flex gap-4 justify-center">
                        <Image
                            src="/img/igreja1.png"
                            alt="Igreja"
                            width={160}
                            height={160}
                            className="rounded-xl w-40 h-40 object-cover shadow-lg ring-1 ring-white/10"
                            priority
                            sizes="(min-width:1024px) 10rem, 10rem"
                        />
                        <Image
                            src="/img/igreja2.png"
                            alt="Culto"
                            width={160}
                            height={160}
                            className="rounded-xl w-40 h-40 object-cover shadow-lg ring-1 ring-white/10"
                            priority
                            sizes="(min-width:1024px) 10rem, 10rem"
                        />
                    </div>
                </div>

            {/* Banner culto online */}
            <section className="mx-auto w-[85vw]">
                <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 h-20 sm:h-24 md:h-28 lg:h-32">
                    {/* BG */}
                    <Image
                        src="/img/banner-culto-online.png"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="80vw"
                        priority
                    />

                    {/* Overlay para legibilidade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />

                    {/* Conteúdo central (texto + botão) */}
                    <div className="relative z-10 h-full flex items-center justify-center gap-3 sm:gap-4 px-4 text-white">
                      <span className="text-sm sm:text-lg md:text-xl font-semibold text-center tracking-wide drop-shadow">
                        Estamos online, veja nosso culto
                      </span>
                      <span
                            className="inline-grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur hover:bg-white/25 transition"
                            aria-hidden="true"
                        >
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                    </div>
                </div>
            </section>


            {/* Cards principais */}
            <section className="mx-auto w-[85vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-8">
                <FeatureCard
                    icon={<Image src="/img/icon-church.svg" alt="Ícone de igrejas" width={24} height={24} />}
                    title="Congregações"
                    description="Venha nos conhecer! Encontre a igreja mais próxima de você."
                    href="/congregacoes"
                />

                <FeatureCard
                    icon={<Image src="/img/icon-oracao.svg" alt="Ícone de oração" width={24} height={24} />}
                    title="Pedir oração"
                    description="Sua fé em ação, faça um pedido de oração!"
                    href="/pedido-oracao"
                />

                {/* Ofertar */}
                <FeatureCard
                    icon={<Image src="/img/icon-money.svg" alt="Ícone de oferta" width={24} height={24} />}
                    title="Ofertar"
                    description="É aqui que você pode contribuir para o nosso ministério! Vamos fazer a diferença juntos."
                    href="/ofertar"
                />

                {/* Fale conosco */}
                <FeatureCard
                    icon={<LucideMessageCircle className="w-6 h-6" strokeWidth={1.8} aria-hidden="true" />}
                    title="Fale conosco"
                    description="Precisa de ajuda com algo? Não hesite em nos contatar!"
                    href="/fale-conosco"
                />
            </section>

            {/* Sobre nós */}
            <section className="mx-auto w-[85vw]">
                <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10">
                    {/* BG */}
                    <Image
                        src="/img/sobre-nos-bg.png"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="80vw"
                        priority={false}
                    />

                    {/* Overlay para legibilidade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />

                    {/* Conteúdo central */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-10 sm:py-14 gap-4">
                        <h2 className="text-2xl sm:text-3xl font-bold">Sobre nós</h2>
                        <p className="max-w-2xl text-slate-200">
                            Existimos para capacitar discípulos, liderar pelo exemplo e mudar as comunidades para melhor.
                        </p>
                        <Button href="/sobre-nos" variant="outline">Ler mais</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
