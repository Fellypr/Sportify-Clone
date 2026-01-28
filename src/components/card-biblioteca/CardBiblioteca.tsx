import { Play } from "lucide-react";
export default function CardBiblioteca() {
    return(
        <div className="flex items-center gap-3 hover:bg-zinc-900 p-2 rounded cursor-pointer transition">
          <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center shadow-lg">
            <Play fill="white" size={16} />
          </div>
          <div>
            <p className="text-sm font-bold">Músicas Curtidas</p>
            <p className="text-xs text-zinc-400">Playlist • 23 músicas</p>
          </div>
        </div>
    )
}