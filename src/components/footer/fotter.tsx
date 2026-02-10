"use client";

import { useState, useRef, useEffect } from "react";
import {
  Maximize2,
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
  const { currentTrack, albumSongs, isPlaying, TogglePlay, PlayTrack } =
    usePlayer();

  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);

  const audioRef = useRef<HTMLAudioElement>(null);

  
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.log("Erro ao dar play:", err));
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      setDuration(total || 0);
      setProgress((current / total) * 100 || 0);
      localStorage.setItem("player:last-time", current.toString());
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      const savedTime = localStorage.getItem("player:last-time");
      if (savedTime) {
        const time = parseFloat(savedTime);
        audioRef.current.currentTime = time;
        setCurrentTime(time);
      }
    }
  };

  const SkipMusic = () => {
    if (!currentTrack || albumSongs.length === 0) return;
    const index = albumSongs.findIndex((s) => s.title === currentTrack.title);
    const nextIndex = (index + 1) % albumSongs.length;
    PlayTrack(albumSongs[nextIndex]);
  };

  const BackMusic = () => {
    if (!currentTrack || albumSongs.length === 0) return;
    const index = albumSongs.findIndex((s) => s.title === currentTrack.title);
    const prevIndex = (index - 1 + albumSongs.length) % albumSongs.length;
    PlayTrack(albumSongs[prevIndex]);
  };

  const handleProgressChange = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (audioRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

      const x = clientX - rect.left;
      const width = rect.width;
      const percent = Math.min(Math.max(x / width, 0), 1);
      const newTime = percent * duration;

      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(percent * 100);
    }
  };

  return (
    <footer className="w-full border-zinc-800 px-4 md:h-15 flex items-center justify-between relative">
      <audio
        ref={audioRef}
        src={currentTrack?.audioUrl || ""}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={SkipMusic}
      />
      <div
        className="absolute top-0 left-0 w-full h-[2px] bg-zinc-700 md:hidden"
        onClick={handleProgressChange}
      >
        <div
          className="h-full bg-green-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center gap-3 w-auto md:w-[30%] min-w-0">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 rounded shadow-md flex-shrink-0 overflow-hidden">
          {currentTrack?.imageUrl && (
            <img
              src={currentTrack.imageUrl}
              alt="Capa"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col truncate">
          <span className="text-sm font-medium text-white truncate">
            {currentTrack?.title || "Nenhuma música"}
          </span>
          <span className="text-xs text-zinc-400 truncate">
            {currentTrack?.artist || "Selecione uma faixa"}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 flex-1 md:w-[40%]">
        <div className="flex items-center gap-4 md:gap-6 text-zinc-400">
          <Shuffle
            size={20}
            className="hidden md:block hover:text-white cursor-pointer"
          />
          <SkipBack
            size={24}
            className="hover:text-white cursor-pointer fill-zinc-400"
            onClick={BackMusic}
          />

          <button
            onClick={TogglePlay}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 active:scale-95 transition"
          >
            {isPlaying ? (
              <Pause fill="black" size={20} />
            ) : (
              <Play fill="black" size={20} className="ml-0.5" />
            )}
          </button>

          <SkipForward
            size={24}
            className="hover:text-white cursor-pointer fill-zinc-400"
            onClick={SkipMusic}
          />
          <Repeat
            size={20}
            className="hidden md:block hover:text-white cursor-pointer"
          />
        </div>

        <div className="hidden md:flex items-center gap-2 w-full max-w-md group">
          <span className="text-[10px] text-zinc-400 w-10 text-right">
            {formatTime(currentTime)}
          </span>
          <div
            className="h-1 rounded-full flex-1 bg-zinc-600 relative cursor-pointer"
            onClick={handleProgressChange}
          >
            <div
              className="bg-zinc-200 h-full rounded-full group-hover:bg-green-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] text-zinc-400 w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 w-[30%] justify-end">
        <div className="flex items-center gap-2">
          <Volume2 size={18} className="text-zinc-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 h-1 accent-white cursor-pointer"
          />
        </div>
        <Maximize2
          size={18}
          className="text-zinc-400 hover:text-white cursor-pointer"
          onClick={toggleFullscreen}
        />
      </div>

      <div className="md:hidden flex items-center ml-2">
        <Maximize2
          size={20}
          className="text-zinc-400"
          onClick={toggleFullscreen}
        />
      </div>
    </footer>
  );
}
