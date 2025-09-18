export default function BackgroundGlows() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gray-950" />
            {/* topo/esquerda (azul) */}
            <div className="absolute -top-28 -left-28 h-[28rem] w-[28rem] rounded-full bg-sky-500/12 blur-3xl" />
            {/* centro (violeta) */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-violet-500/12 blur-3xl" />
            {/* baixo/direita (amarelo) */}
            <div className="absolute -bottom-28 -right-28 h-[26rem] w-[26rem] rounded-full bg-yellow-400/12 blur-3xl" />
        </div>
    );
}
