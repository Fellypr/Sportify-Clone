import { Play } from "lucide-react";

export default function FeedPrincipal() {
  return (
    <>
      <div className="flex gap-2">
        <button className="bg-white text-gray-800 group rounded-[15px] flex items-center overflow-hidden hover:bg-zinc-300 transition-colors cursor-pointer pl-3 pr-3 pt-1.5 pb-1.5 w-auto h-auto text-[14px]">
          Tudo
        </button>
        <button className="bg-white/5 group rounded-[15px] flex items-center overflow-hidden hover:bg-white/10 transition-colors cursor-pointer pl-3 pr-3 pt-1.5 pb-1.5 w-auto h-auto text-[14px]">
          Música
        </button>
        <button className="bg-white/5 group rounded-[15px] flex items-center overflow-hidden hover:bg-white/10 transition-colors cursor-pointer pl-3 pr-3 pt-1.5 pb-1.5 w-auto h-auto text-[14px]">
          Podcasts
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
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
            className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer w-auto h-[40px]"
          >
            <div className="w-9 h-9 bg-zinc-700 shadow-[5px_0_15px_rgba(0,0,0,0.5)]" />
            <strong className="text-[12px]">{item}</strong>
            <button className="w-7 h-7 flex items-center justify-center p-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible shadow-xl">
              <Play fill="black" size={16} />
            </button>
          </div>
        ))}
      </div>

      <p className="text-sm text-zinc-400 mt-8">Feito para </p>
      <h2 className="text-2xl font-bold ">Fellype kenned</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 mt-4">
        <div className="w-[160px] p-3 rounded-md hover:bg-zinc-900 transition-colors cursor-pointer">
          <div className="w-full aspect-square bg-zinc-700 rounded-md mb-2 shadow-lg" />
          <strong className="font-normal">Descobertas da Semana</strong>
          <p className="text-sm text-zinc-400 mt-1">
            Sua dose semanal de músicas novas.
          </p>
        </div>
      </div>
    </>
  );
}
