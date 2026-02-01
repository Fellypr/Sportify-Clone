import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { usePlayer } from "@/context/PlayerContext";

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  audioUrl: string;
  themeColor: string;
  isLiked: boolean;
  imageUrl: string;
}
export default function FeedPrincipal() {
  const [songs, SetSongs] = useState<Song[]>([]);
  const {ViewAlbum} = usePlayer();

  useEffect(() => {
    fetch("/data/songsDate.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.songs)) {
          SetSongs(data.songs);
        } else if (Array.isArray(data)) {
          SetSongs(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, []);
  return (
    <div className="p-6">
      <div className="flex gap-2">
        <button className="bg-white text-gray-800 group rounded-[15px] flex items-center overflow-hidden hover:bg-zinc-300 transition-colors cursor-pointer pl-3 pr-3 pt-1.5 pb-1.5 w-auto h-auto text-[14px]">
          Tudo
        </button>
        <button className="bg-white/5 group rounded-[15px] flex items-center overflow-hidden hover:bg-white/10 transition-colors cursor-pointer pl-3 pr-3 pt-1.5 pb-1.5 w-auto h-auto text-[14px]">
          Música
        </button>
        <button className="bg-white/5 group rounded-[15px] flex items-center overflow-hidden hover:bg-white/10 transition-colors cursor-pointer pl-3 pr-3 pt-1.5 pb-1.5 w-auto h-auto text-[14px]">
          Podcasts
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 mt-6">
        {songs.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer w-auto h-[40px]"
            onClick={() => ViewAlbum(item)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-10 h-10 rounded-md z-20"
            />
            <strong className="text-[12px]">{item.title}</strong>
            <button className="w-7 h-7 flex items-center justify-center p-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible shadow-xl">
              <Play fill="black" size={16} />
            </button>
          </div>
        ))}
      </div>

      <p className="text-sm text-zinc-400 mt-8">Feito para </p>
      <h2 className="text-2xl font-bold ">Fellype kenned</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1 mt-4">
        {songs.slice(0, 8).map((item) => (
          <div className="w-[160px] p-3 rounded-md hover:bg-zinc-900 transition-colors cursor-pointer" key={item.id}>
            <img className="w-full aspect-square bg-zinc-700 rounded-md mb-2 shadow-lg" src={item.imageUrl} alt={item.title} />
            <strong className="font-normal">{item.title}</strong>
            <p className="text-sm text-zinc-400 mt-1">{item.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
