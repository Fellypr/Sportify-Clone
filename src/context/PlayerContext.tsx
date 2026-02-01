"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface Track {
  title: string;
  artist: string;
  audioUrl: string;
  themeColor: string;
  imageUrl: string;
}
interface PlayerContextType {
    currentTrack: Track | null;
    isPlaying:boolean;
    PlayTrack: (track: Track) => void;
    TogglePlay: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export default function PlayerProvider({ children }: { children: ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    function PlayTrack(track: Track) {
        setCurrentTrack(track);
        setIsPlaying(true);
        console.log("a musica a aqui",{track})
    }
    function TogglePlay (){
        setIsPlaying(!isPlaying);
        
    }
  return(
    <PlayerContext.Provider value={{ currentTrack, isPlaying, PlayTrack, TogglePlay }}>
      {children}
    </PlayerContext.Provider>
  );
}
export function usePlayer(){
    const context = useContext(PlayerContext);
    if(!context){
        throw new Error("usePlayer must be used within a PlayerProvider");
    }
    return context;
  }