"use client";

import { useState, useEffect, useRef } from "react";
import { usePlayer } from "@/context/PlayerContext";
import Navbar from "@/components/navbar/navbar";
import Biblioteca from "@/components/biblioteca/biblioteca";
import FeedPrincipal from "@/components/feedPrincipal/FeedPrincipal";
import TocandoAgora from "@/components/tocandoAgora/TocandoAgora";
import Footer from "@/components/footer/fotter";
import AlbumSong from "@/components/feedPrincipal/album-song/AlbumSong";

export default function SpotifyClone() {
  const [leftWidth, setLeftWidth] = useState(280);
  const [rightWidth, setRightWidth] = useState(300);
  const isResizingLeft = useRef(false);
  const isResizingRight = useRef(false);
  const {isPlaying} = usePlayer();

  useEffect(() => {
    const stopResizing = () => {
      isResizingLeft.current = false;
      isResizingRight.current = false;
      document.body.style.cursor = "default";
    };

    const resize = (e: MouseEvent) => {
      if (isResizingLeft.current) {
        const newWidth = e.clientX;
        if (newWidth > 280 && newWidth < 400) setLeftWidth(newWidth);
      }
      if (isResizingRight.current) {
        const newWidth = window.innerWidth - e.clientX;
        if (newWidth > 300 && newWidth < 400) setRightWidth(newWidth);
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

        <header className="mb-2">
          <Navbar />
        </header>

        <div className="flex flex-1 overflow-hidden gap-1">
          <aside
            style={{ width: leftWidth }}
            className="bg-zinc-950 rounded-lg flex flex-col overflow-hidden relative"
          >
            <div className="flex-1 overflow-y-hidden p-3 scrollbar-spotify">
              <Biblioteca />
            </div>

            <div
              onMouseDown={handleMouseDownLeft}
              className="absolute top-0 right-0 w-[2px] h-full cursor-grab hover:bg-zinc-500 active:bg-zinc-200 transition-colors z-50"
            />
          </aside>

          <main className="flex-1 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg overflow-y-auto  scrollbar-spotify">
            {isPlaying ?  <AlbumSong /> : <FeedPrincipal />}
          </main>

          <aside
            style={{ width: rightWidth }}
            className="hidden xl:flex bg-zinc-950 rounded-lg flex-col overflow-hidden relative"
          >
            <div
              onMouseDown={handleMouseDownRight}
              className="absolute top-0 left-0 w-[2px] h-full cursor-grab hover:bg-zinc-500 active:bg-zinc-200 transition-colors z-50"
            />
            <div className="flex-1 overflow-y-auto p-4 scrollbar-spotify">
              <TocandoAgora />
            </div>
          </aside>
        </div>

        <footer className="bg-black border-t border-zinc-900 px-6 py-4 flex items-center justify-between">
          <Footer />
        </footer>
      </div>
  );
}
