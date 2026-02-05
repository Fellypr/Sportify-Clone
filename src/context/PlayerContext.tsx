"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface Track {
  title: string;
  artist: string;
  audioUrl: string;
  themeColor: string;
  imageUrl: string;
}

interface Album {
  id: number;
  name: string;
  cover: string;
  songIds: number[];
}

interface PlayerContextType {
    selectedAlbum: Album | null;
    currentTrack: Track | null;
    albumSongs: Track[]; 
    isPlaying: boolean;
    viewAlbum: boolean;
    PlayTrack: (track: Track) => void;
    TogglePlay: () => void;
    ViewAlbum: (item: Track, album: Album, songs: Track[]) => void;
    CloseAlbum: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export default function PlayerProvider({ children }: { children: ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [albumSongs, setAlbumSongs] = useState<Track[]>([]);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [viewAlbum, setViewAlbum] = useState<boolean>(false);

    function ViewAlbum(item: Track, album: Album, songs: Track[]) {
        setSelectedAlbum(album);
        setAlbumSongs(songs);
        setCurrentTrack(item);
        setViewAlbum(true);
    }

    function CloseAlbum() {
        setViewAlbum(false);
    }

    function PlayTrack(track: Track) {
        setCurrentTrack(track);
        setIsPlaying(true);
    }

    function TogglePlay() {
        setIsPlaying(!isPlaying);
    }

    return (
        <PlayerContext.Provider value={{ 
            currentTrack, 
            isPlaying, 
            PlayTrack, 
            TogglePlay, 
            ViewAlbum, 
            viewAlbum, 
            selectedAlbum, 
            albumSongs, 
            CloseAlbum 
        }}>
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    const context = useContext(PlayerContext);
    if (!context) throw new Error("usePlayer must be used within a PlayerProvider");
    return context;
}