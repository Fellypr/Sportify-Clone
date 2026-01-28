import { Play } from "lucide-react";
export default function FeedPrincipal() {
    return(
        <>
        <h1 className="text-3xl font-bold mt-4">Boa noite</h1>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              "Stay With Me",
              "Skillet",
              "Programar",
              "Rise",
              "Awake",
              "Treino",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="w-20 h-20 bg-zinc-700 shadow-[5px_0_15px_rgba(0,0,0,0.5)]" />
                <strong>{item}</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible shadow-xl">
                  <Play fill="black" />
                </button>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10">
            Feito para Fellype kenned
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
            <div className="bg-zinc-900/40 p-3 rounded-md hover:bg-zinc-900 transition-colors cursor-pointer">
              <div className="w-full aspect-square bg-zinc-700 rounded-md mb-4 shadow-lg" />
              <strong className="font-semibold">Descobertas da Semana</strong>
              <p className="text-sm text-zinc-400 mt-1">
                Sua dose semanal de músicas novas.
              </p>
            </div>
          </div>
        </>
    );
}