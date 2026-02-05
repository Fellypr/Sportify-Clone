import { Play } from "lucide-react";
export default function CardBiblioteca({playlists,playlistsSongs}) {
    return(
        <div className="flex items-center gap-3 hover:bg-zinc-900 p-2 rounded cursor-pointer transition">
          <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center shadow-lg">
            <img src={playlists.cover} alt="" />
          </div>
          <div>
            <p className="text-sm font-bold">{playlists.name}</p>
            <p className="text-xs text-zinc-400">Playlist • {playlistsSongs.length} músicas</p>
          </div>
        </div>
    )
}