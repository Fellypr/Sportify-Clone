"use client";

import { Play,  Clock,  ChevronLeft, Pause } from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";
import LoaderPlay from "@/components/loaderPlay/LoaderPlay";
export default function AlbumSong() {
  const { currentTrack,  isPlaying, PlayTrack, selectedAlbum, albumSongs, CloseAlbum, TogglePlay } = usePlayer();

  if (!selectedAlbum || albumSongs.length === 0) {
    return <div className="p-8 text-zinc-500">Selecione uma playlist...</div>;
  }

  return (
    <div className="flex-1 bg-zinc-900 overflow-y-auto scrollbar-spotify rounded-lg relative">
      <button onClick={CloseAlbum} className="absolute top-4 left-4 z-10 bg-black/40 p-2 rounded-full hover:bg-black/60 transition">
        <ChevronLeft size={24} />
      </button>

      <header className={`mt-10 p-8 flex items-start gap-6 bg-gradient-to-b ${albumSongs[0]?.themeColor || 'from-purple-700'} to-zinc-900`}>
        <img src={selectedAlbum.cover} alt={selectedAlbum.name} className="w-52 h-52 shadow-2xl rounded-sm object-cover" />
        <div className="flex flex-col">
          <span className="text-[12px] font-bold uppercase">Playlist</span>
          <h1 className="text-5xl font-black mt-2 mb-12 leading-tight tracking-tighter">{selectedAlbum.name}</h1>
          <div className="flex items-center gap-2 text-sm font-bold mb-6">
            <span>Seu Usuário</span>
            <span className="text-zinc-300 font-normal">• {albumSongs.length} músicas</span>
          </div>
        </div>
      </header>

      <div className="p-8">
        <div className="flex items-center gap-8 mb-4">
          {isPlaying ? (
            <button onClick={TogglePlay} className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-black hover:scale-105 transition shadow-lg cursor-pointer">
            <Pause size={20} fill="black" />
          </button>
          ): (
            <button onClick={() => PlayTrack(albumSongs[0])} className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-black hover:scale-105 transition shadow-lg cursor-pointer hover:bg-green-400">
            <Play size={20}  fill="black"/>
          </button>
          )}
          
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-zinc-400 text-sm uppercase">
              <th className="w-12 py-3 text-center">#</th>
              <th className="py-3">Título</th>
              <th className="w-12 py-3 text-right pr-4"><Clock size={18} /></th>
            </tr>
          </thead>
          <tbody>
            {albumSongs.map((track, index) => {
              const isThisTrackPlaying = currentTrack?.title === track.title;
              
              return (
                <tr 
                  key={index}
                  onClick={() => PlayTrack(track)}
                  className="group hover:bg-white/10 rounded-md transition-colors cursor-pointer"
                >
                  <td className={`py-4 text-center ${isThisTrackPlaying ? 'text-green-500' : 'text-zinc-400'}`}>
                    {isThisTrackPlaying && isPlaying ? <LoaderPlay /> : index + 1}
                  </td>
                  <td className="py-4">
                    <div className="flex flex-col">
                      <span className={`font-medium ${isThisTrackPlaying ? 'text-green-500' : 'text-white'}`}>
                        {track.title}
                      </span>
                      <span className="text-zinc-400 text-sm">{track.artist}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right pr-4 text-zinc-400 text-sm">3:45</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}