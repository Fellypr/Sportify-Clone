import{ Laptop2, LayoutList, Maximize2, Mic2, Repeat, Shuffle, SkipBack, SkipForward, Play, Volume2 } from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="flex items-center gap-3 w-[30%]">
        <div className="w-14 h-14 bg-zinc-800 rounded shadow-md" />
        <div className="flex flex-col">
          <span className="text-sm font-normal hover:underline cursor-pointer">
            Máquina do Tempo
          </span>
          <span className="text-xs text-zinc-400 hover:underline cursor-pointer">
            Matuê
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-[40%]">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-green-500" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play fill="black" />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-zinc-400">0:10</span>
          <div className="h-1 rounded-full flex-1 bg-zinc-600">
            <div className="bg-zinc-200 w-1/12 h-1 rounded-full" />
          </div>
          <span className="text-xs text-zinc-400">3:50</span>
        </div>
      </div>

      <div className="flex items-center gap-4 w-[30%] justify-end">
        <Mic2 size={18} className="text-zinc-400" />
        <LayoutList size={18} className="text-zinc-400" />
        <Laptop2 size={18} className="text-zinc-400" />
        <div className="flex items-center gap-2">
          <Volume2 size={18} className="text-zinc-400" />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-2/3 h-1 rounded-full" />
          </div>
        </div>
        <Maximize2 size={18} className="text-zinc-400" />
      </div>
    </>
  );
}
