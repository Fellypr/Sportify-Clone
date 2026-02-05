"use client";

import InputBiblioteca from "../input-biblioteca/InputBiblioteca";
import CardBiblioteca from "../card-biblioteca/CardBiblioteca";
import bibliotecas from "../../../public/data/bibliotecas.json";
import songs from "../../../public/data/songsDate.json";

export default function Biblioteca() {
  function GetPlaylists(playlists) {
    return playlists.songIds.map((id:number) =>
      songs.find((songs) => songs.id === id),
    );
  }

  return (
    <>
      <nav className="space-y-4 h-auto pb-4 px-2">
        <div className="flex items-center justify-between ">
          <h1 className="text-[15px] font-bold">Sua biblioteca</h1>
          <button className="text-3xl text-white/60 bg-zinc-800/30 w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-800/50 transition cursor-pointer hover:text-white/80 relative left-[3rem]">
            +
          </button>
          <div></div>
        </div>
        <div className="flex gap-2">
          <button className="bg-zinc-700/40 text-[13px] pl-3.5 pr-3.5 pt-1.5 pb-1.5 rounded-[23px] text-white/85 hover:bg-zinc-700/60 cursor-pointer">
            Playlists
          </button>
          <button className="bg-zinc-700/40 text-[13px] pl-3.5 pr-3.5 pt-1.5 pb-1.5 rounded-[23px] text-white/85 hover:bg-zinc-700/60 cursor-pointer">
            Artistas
          </button>
        </div>
      </nav>
      <div className="overflow-y-auto h-[500px] scrollbar-spotify">
        <div className=" flex flex-col gap-1">
          <div>
            <InputBiblioteca />
          </div>
          {bibliotecas.map((playlists) => {
            const playlistsSongs = GetPlaylists(playlists);
            return(
            <CardBiblioteca 
            key={playlists.id}
            playlists={playlists}
            playlistsSongs={playlistsSongs}
            />
          );
          })}
        </div>
      </div>
    </>
  );
}
