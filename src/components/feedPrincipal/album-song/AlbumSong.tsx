"use client";

import { Play, PlusCircle, Clock, List, ChevronLeft } from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";
import { useEffect, useState } from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
  audioUrl: string;
  imageUrl: string;
  themeColor: string;
}

interface AlbumSongProps {
  id: number | null;
  onBack: () => void;
}

export default function AlbumSong({ id, onBack }: AlbumSongProps) {
  const { currentTrack,PlayTrack } = usePlayer();



  if (!currentTrack) return <div className="p-8 text-zinc-500">Carregando...</div>;

  return (
    <div className="flex-1 bg-zinc-900 overflow-y-auto scrollbar-spotify rounded-lg">
      <nav className="p-4 sticky top-0 bg-black/20 backdrop-blur-md z-10">
        <button onClick={onBack} className="p-2 rounded-full bg-black/40 hover:bg-black/60 transition">
          <ChevronLeft size={24} />
        </button>
      </nav>

      <header className={`p-8 flex items-end gap-6 bg-gradient-to-b ${currentTrack?.themeColor || 'from-zinc-700'} to-zinc-900`}>
        <img src={currentTrack.imageUrl} alt={currentTrack.title} className="w-52 h-52 shadow-2xl rounded-sm" />
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase">Single</span>
          <h1 className="text-7xl font-black mt-2 mb-6">{currentTrack.title}</h1>
          <div className="flex items-center gap-2 text-sm font-bold">
            <img src={currentTrack.imageUrl} className="w-6 h-6 rounded-full" alt="Artist" />
            <span>{currentTrack.artist}</span>
            <span className="text-zinc-300 font-normal">• 2024 • 1 música</span>
          </div>
        </div>
      </header>

      <div className="p-8">
        <div className="flex items-center gap-8 mb-8">
          <button 
            onClick={() => PlayTrack(currentTrack)}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-black hover:scale-105 transition active:scale-95"
          >
            <Play fill="black" size={28} />
          </button>
          <PlusCircle size={32} className="text-zinc-400 hover:text-white cursor-pointer" />
          <div className="ml-auto flex items-center gap-2 text-zinc-400">
            <span className="text-sm font-bold">Lista</span>
            <List size={20} />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-zinc-400 text-sm uppercase">
              <th className="w-12 py-3 font-normal text-center">#</th>
              <th className="py-3 font-normal">Título</th>
              <th className="w-12 py-3 text-right pr-4"><Clock size={18} /></th>
            </tr>
          </thead>
          <tbody>
            <tr 
              onClick={() => PlayTrack(currentTrack)}
              className="group hover:bg-white/10 rounded-md transition-colors cursor-pointer"
            >
              <td className="py-4 text-center text-zinc-400 group-hover:text-white">1</td>
              <td className="py-4">
                <div className="flex flex-col">
                  <span className="text-white font-medium">{currentTrack.title}</span>
                  <span className="text-zinc-400 text-sm group-hover:text-white">{currentTrack.artist}</span>
                </div>
              </td>
              <td className="py-4 text-right pr-4 text-zinc-400 text-sm">3:45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}