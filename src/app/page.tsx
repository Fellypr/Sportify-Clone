"use client";

import { useState, useEffect, useRef } from "react";
import { usePlayer } from "@/context/PlayerContext";
import Navbar from "@/components/navbar/navbar";
import Biblioteca from "@/components/biblioteca/biblioteca";
import FeedPrincipal from "@/components/feedPrincipal/FeedPrincipal";
import TocandoAgora from "@/components/tocandoAgora/TocandoAgora";
import Footer from "@/components/footer/fotter";
import AlbumSong from "@/components/feedPrincipal/album-song/AlbumSong";
import FullScreen from "@/components/full-screen/FullScreen";
import MelhorResultado from "@/components/feedPrincipal/melhor-resultado/MelhorResultado";
import songsDate from "../../public/data/songsDate.json";
import { LayoutList } from "lucide-react";

export default function SpotifyClone() {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [leftWidth, setLeftWidth] = useState<number>(280);
  const [rightWidth, setRightWidth] = useState<number>(300);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const isResizingLeft = useRef(false);
  const isResizingRight = useRef(false);
  const { viewAlbum } = usePlayer();
  const [search, setSearch] = useState<string>("");

  const searchMusic = songsDate.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFullscreen = (): void => {
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const stopResizing = () => {
      isResizingLeft.current = false;
      isResizingRight.current = false;
      document.body.style.cursor = "default";
    };

    const resize = (e: MouseEvent) => {
      if (isResizingLeft.current) {
        const newWidth = e.clientX;
        if (newWidth > 250 && newWidth < 350) {
          setLeftWidth(newWidth);
          setIsCollapsed(newWidth < 255);
        }
      }
      if (isResizingRight.current) {
        const newWidth = window.innerWidth - e.clientX;
        if (newWidth > 300 && newWidth < 500) setRightWidth(newWidth);
      }
    };

    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, []);

  const handleMouseDownLeft = () => {
    isResizingLeft.current = true;
    document.body.style.cursor = "grabbing";
  };

  const handleMouseDownRight = () => {
    isResizingRight.current = true;
    document.body.style.cursor = "grabbing";
  };

  return (
    <div className="h-screen flex flex-col bg-black text-zinc-100 p-2 overflow-hidden select-none">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-spotify::-webkit-scrollbar { width: 8px; }
        .scrollbar-spotify::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-spotify::-webkit-scrollbar-thumb { background: #4d4d4d; border-radius: 10px; }
      `,
        }}
      />

      <header className="mb-2 hidden md:block">
        <Navbar setSearch={setSearch} />
      </header>

      <div className="flex flex-1 overflow-hidden gap-1">
        <aside
          style={{ width: isCollapsed ? 72 : leftWidth }}
          className="hidden md:flex bg-zinc-950 rounded-lg flex-col overflow-hidden relative transition-[width] duration-75 ease-out"
        >
          <div className={`flex-1 overflow-x-hidden ${isCollapsed ? "items-center" : "p-3"} scrollbar-spotify overflow-y-auto`}>
            {isCollapsed ? (
              <div className="flex flex-col items-center py-4 gap-4">
                <button 
                  onClick={() => setIsCollapsed(false)}
                  className="text-zinc-400 hover:text-white transition"
                >
                  <LayoutList size={26} />
                </button>
                <Biblioteca  isCollapsed={isCollapsed}/>
              </div>
            ) : (
              <Biblioteca  isCollapsed={isCollapsed}/>
            )}
          </div>
            <div
              onMouseDown={handleMouseDownLeft}
              className="absolute top-0 right-0 w-[3px] h-full cursor-col-resize hover:bg-zinc-500 active:bg-zinc-200 transition-colors z-50"
            />
        </aside>

        <main className="flex-1 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg overflow-y-auto scrollbar-spotify relative">
          <div className="md:hidden sticky top-0 z-40 bg-zinc-900/90 backdrop-blur-sm p-4">
            <Navbar setSearch={setSearch} />
          </div>
          
          {(() => {
            if (search.length > 0) {
              return <MelhorResultado searchMusic={searchMusic} setSearch={setSearch} />;
            }
            if (viewAlbum) {
              return <AlbumSong />;
            }
            return <FeedPrincipal />;
          })()}
        </main>

        <aside
          style={{ width: rightWidth }}
          className="hidden xl:flex bg-zinc-950 rounded-lg flex-col overflow-hidden relative"
        >
          <div
            onMouseDown={handleMouseDownRight}
            className="absolute top-0 left-0 w-[3px] h-full cursor-col-resize hover:bg-zinc-500 active:bg-zinc-200 transition-colors z-50"
          />
          <div className="flex-1 overflow-y-auto p-4 scrollbar-spotify">
            <TocandoAgora />
          </div>
        </aside>
        
        {isFullScreen && <FullScreen />}
      </div>

      <footer className="bg-black md:border-t border-zinc-900 px-2 md:px-6 py-2 md:py-4 flex items-center justify-between z-50">
        <Footer toggleFullscreen={toggleFullscreen} />
      </footer>
    </div>
  );
}