"use client";

import { useState } from "react";
import InputBiblioteca from "../input-biblioteca/InputBiblioteca";
import CardBiblioteca from "../card-biblioteca/CardBiblioteca";
import bibliotecas from "../../../public/data/bibliotecas.json";
import songs from "../../../public/data/songsDate.json";

export default function Biblioteca({ isCollapsed }: { isCollapsed: boolean }) {
  const [searchTerm, setSearchTerm] = useState("");

  function GetPlaylists(playlists: any) {
    return playlists.songIds.map((id: number) =>
      songs.find((song) => song.id === id),
    );
  }

  const filteredPlaylists = bibliotecas.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {!isCollapsed && (
        <nav className="space-y-4 h-auto pb-4 px-2">
          <div className="flex items-center justify-between ">
            <h1 className="text-[15px] font-bold">Sua biblioteca</h1>
            <button className="text-3xl text-white/60 bg-zinc-800/30 w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-800/50 transition cursor-pointer hover:text-white/80 relative left-[3rem]">
              +
            </button>
            <div></div>
          </div>
        </nav>
      )}

      <div className="overflow-y-auto h-[500px] scrollbar-spotify ">
        <div className=" flex flex-col gap-1">
          {!isCollapsed && (
            <InputBiblioteca 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
            />
          )}
          {filteredPlaylists.map((playlists) => {
            const playlistsSongs = GetPlaylists(playlists);
            return (
              <CardBiblioteca
                key={playlists.id}
                playlists={playlists}
                playlistsSongs={playlistsSongs}
                isCollapsed={isCollapsed}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}