"use client";

import { useState, useRef, useEffect } from "react";
import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Volume2,
} from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";

export default function Footer({
  toggleFullscreen,
}: {
  toggleFullscreen: () => void;
}) {
  const { currentTrack, isPlaying, TogglePlay } = usePlayer();

  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.log(error));
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((error) => console.log(error));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  const onTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      setDuration(total || 0);
      setProgress((current / total) * 100 || 0);
    }
  };

  function HandleProgressChange(e: React.MouseEvent<HTMLInputElement>) {
    if (audioRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percent = x / width;
      const newTime = percent * duration;

      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }

  return (
    <footer className="w-full flex items-center justify-between">
      <audio
        ref={audioRef}
        src={currentTrack?.audioUrl || ""}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
      />

      <div className="flex items-center gap-3 w-[30%]">
        <div className="w-14 h-14 bg-zinc-800 rounded shadow-md overflow-hidden">
          <img
            src={currentTrack?.imageUrl || ""}
            alt="Capa"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          {currentTrack ? (
            <>
              <span className="text-sm font-normal hover:underline cursor-pointer">
                {currentTrack.title}
              </span>
              <span className="text-xs text-zinc-400 hover:underline cursor-pointer">
                {currentTrack.artist}
              </span>
            </>
          ) : (
            <span className="text-sm font-normal">Nenhuma musica tocando</span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-[40%]">
        <div className="flex items-center gap-6 text-zinc-400">
          <Shuffle size={20} className="hover:text-white cursor-pointer" />
          <SkipBack
            size={20}
            className="hover:text-white cursor-pointer fill-zinc-400"
          />

          <button
            onClick={TogglePlay}
            className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition"
          >
            {isPlaying ? (
              <Pause fill="black" size={20} />
            ) : (
              <Play fill="black" size={20} />
            )}
          </button>

          <SkipForward
            size={20}
            className="hover:text-white cursor-pointer fill-zinc-400"
          />
          <Repeat size={20} className="hover:text-white cursor-pointer" />
        </div>

        <div className="flex items-center gap-2 w-full group">
          <span className="text-xs text-zinc-400 w-10 text-right">
            {formatTime(currentTime)}
          </span>
          <div
            className="h-1 rounded-full flex-1 bg-zinc-600 relative overflow-hidden"
            onClick={HandleProgressChange}
          >
            <div
              className="bg-zinc-200 h-full rounded-full group-hover:bg-green-500 transition-colors"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
          <span className="text-xs text-zinc-400 w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 w-[30%] justify-end">
        <Mic2
          size={18}
          className="text-zinc-400 hover:text-white cursor-pointer"
        />
        <LayoutList
          size={18}
          className="text-zinc-400 hover:text-white cursor-pointer"
        />
        <Laptop2
          size={18}
          className="text-zinc-400 hover:text-white cursor-pointer"
        />

        <div className="flex items-center gap-2">
          <Volume2 size={18} className="text-zinc-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 h-1 accent-white hover:accent-green-500 cursor-pointer"
          />
        </div>
        <Maximize2
          size={18}
          className="text-zinc-400 hover:text-white cursor-pointer"
          onClick={toggleFullscreen}
        />
      </div>
    </footer>
  );
}
