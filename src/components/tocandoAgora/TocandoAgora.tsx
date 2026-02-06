import { usePlayer } from "@/context/PlayerContext";
import { title } from "process";
export default function TocandoAgora() {
  const { isPlaying,currentTrack } = usePlayer();
  return (
    <>
      <h3 className="font-bold mb-4">{currentTrack?.title}</h3>
      <div className="w-full aspect-square bg-zinc-800 rounded-lg shadow-2xl mb-4 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-tr from-purple-900 to-blue-900 flex items-center justify-center">
          {currentTrack && (
            <img
              src={currentTrack?.imageUrl}
              alt={currentTrack?.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">{currentTrack?.title}</h2>
          <p className="text-zinc-400">{currentTrack?.artist}</p>
        </div>
      </div>
    </>
  );
}
