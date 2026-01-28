import { HomeIcon, Library, Play, Search } from "lucide-react";
export default function Biblioteca() {
  return (
    <>
      <nav className="space-y-4">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon /> Início
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search /> Buscar
        </a>
      </nav>

      <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-4">
        <div className="flex items-center justify-between text-zinc-400">
          <span className="flex items-center gap-2">
            <Library /> Sua Biblioteca
          </span>
          <span className="text-2xl">+</span>
        </div>
        {/* Exemplo de item da biblioteca */}
        <div className="flex items-center gap-3 hover:bg-zinc-900 p-2 rounded cursor-pointer transition">
          <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center shadow-lg">
            <Play fill="white" size={16} />
          </div>
          <div>
            <p className="text-sm font-bold">Músicas Curtidas</p>
            <p className="text-xs text-zinc-400">Playlist • 23 músicas</p>
          </div>
        </div>
      </div>
    </>
  );
}
