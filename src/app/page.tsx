
import Navbar from "@/components/navbar/navbar";
import Biblioteca from "@/components/biblioteca/biblioteca";
import FeedPrincipal from "@/components/feedPrincipal/FeedPrincipal";
import TocandoAgora from "@/components/tocandoAgora/TocandoAgora";
import Footer from "@/components/footer/fotter";

export default function SpotifyClone() {
  return (
    <div className="h-screen flex flex-col bg-black text-zinc-100">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div className="flex flex-1 overflow-hidden p-2 gap-2">
        <aside className="w-72 bg-zinc-950 rounded-lg flex flex-col gap-2 p-4 scrollbar-spotify">
          <Biblioteca />
        </aside>

        <main className="flex-1 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-lg overflow-y-auto p-6 scrollbar-spotify">
          <FeedPrincipal />
        </main>

        <aside className="w-80 bg-zinc-950 rounded-lg p-4 hidden xl:block">
          <TocandoAgora />
        </aside>
      </div>

      {/* Player Footer */}
      <footer className="bg-black border-t border-zinc-900 px-6 py-4 flex items-center justify-between">
        <Footer />  
      </footer>
    </div>
  );
}
