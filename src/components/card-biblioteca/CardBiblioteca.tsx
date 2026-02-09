"use client";

import { usePlayer } from "@/context/PlayerContext";

interface Playlist {
  id: number;
  name: string;
  cover: string;
  songIds: number[];
}

export default function CardBiblioteca({ playlists, playlistsSongs,isCollapsed }: { playlists: Playlist, playlistsSongs: any[] }) {
  const { ViewAlbum } = usePlayer();

  return (
    <div 
      className="flex items-center gap-3 hover:bg-zinc-900 p-2 rounded cursor-pointer transition" 
      onClick={() => ViewAlbum(playlistsSongs[0], playlists, playlistsSongs)}
    >
      <div className="w-12 h-12 bg-zinc-800 rounded flex items-center justify-center shadow-lg overflow-hidden">
        <img src={playlists.cover} alt={playlists.name} className="w-full h-full object-cover" />
      </div>

      {!isCollapsed && (
        <div>
        <p className="text-sm font-bold text-zinc-100">{playlists.name}</p>
        <p className="text-xs text-zinc-400">Playlist • {playlistsSongs.length} músicas</p>
      </div>
      )}
    </div>
  );
}