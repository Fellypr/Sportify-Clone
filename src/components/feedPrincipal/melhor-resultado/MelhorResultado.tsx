import { Play } from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";

interface SongSearch {
    id: number;
    title: string;
    artist: string;
    duration: number;
    audioUrl: string;
    themeColor: string;
    isLiked: boolean;
    imageUrl: string;
}
interface Album {
  id: number;
  name: string;
  cover: string;
  songIds: number[];
}
type ResultadoBuscas = {
    searchMusic: SongSearch[];
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function ResultadosBusca({searchMusic,setSearch}:ResultadoBuscas) {
  const { PlayTrack, currentTrack, isPlaying,ViewAlbum } = usePlayer();

  function FormataTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }




  return (
    <div className="flex flex-col gap-8 p-5 pt-10 w-full">
      <div className="flex flex-col gap-4 w-full lg:w-[100%]">
        <h2 className="text-2xl font-bold text-white tracking-tighter">Melhor resultado</h2>
        
        <div className="bg-zinc-900/40 hover:bg-zinc-800/60 p-5 rounded-lg w-full max-w-[500px] transition-all duration-300 group cursor-pointer relative" onClick={() => {
            const sigleAlbum : Album = {
                id: searchMusic[0]?.id,
                name: searchMusic[0]?.title,
                cover: searchMusic[0]?.imageUrl,
                songsIds: [searchMusic[0]?.id],
            }
            ViewAlbum(searchMusic[0], sigleAlbum, [searchMusic[0]])
            setSearch('')
        }}>
        <div className="w-24 h-24 mb-5 shadow-2xl">
          <img
            src={searchMusic[0]?.imageUrl}
            alt={searchMusic[0]?.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <h1 className="text-3xl font-bold text-white truncate tracking-tighter">
          {searchMusic[0]?.title}
        </h1>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium text-zinc-400">
            Música
          </span>
          <span className="text-zinc-400">•</span>
          <span className="text-sm font-bold text-white hover:underline">
            {searchMusic[0]?.artist}
          </span>
        </div>

        <button className="absolute bottom-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 active:scale-95">
          <Play fill="black" size={24} />
        </button>
      </div>
      </div>

      
      <div className="flex flex-col gap-4 w-full lg:w-[100%]">
        <h2 className="text-2xl font-bold text-white tracking-tighter">Músicas</h2>
        
        <div className="flex flex-col">
          {searchMusic.map((song: SongSearch) => {
            const isSelected = currentTrack?.title === song.title;
            
            return (
              <div 
                key={song.id}
                onClick={() => PlayTrack(song as SongSearch)}
                className="group flex items-center gap-4 p-2 rounded-md hover:bg-white/10 transition-colors cursor-pointer w-full"
              >
                <div className="relative w-10 h-10 flex-shrink-0">
                  <img src={song.imageUrl} alt="" className="w-full h-full object-cover rounded" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={16} fill="white" className="text-white" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 truncate">
                  <span className={`text-sm font-medium truncate ${isSelected ? 'text-green-500' : 'text-white'}`}>
                    {song.title}
                  </span>
                  <span className="text-xs text-zinc-400 group-hover:text-white truncate">
                    {song.artist}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs text-zinc-400 tabular-nums">
                    {FormataTime(song.duration)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}


