import { FaSpotify } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { usePlayer } from "@/context/PlayerContext";


export default function Navbar({ setSearch }: { setSearch: (val: string) => void }) {
  const { setViewAlbum } = usePlayer();

  return (
    <nav className="w-full top-0 left-0 z-50 bg-black md:bg-transparent">
      <div className="flex items-center justify-between h-[4rem] px-2 md:pl-2">
        
        <div className="flex items-center space-x-2 md:space-x-4 p-2 md:p-4 w-full">
          <FaSpotify size={30} color="#FFF" className="md:w-[35px] md:h-[35px]" />
          
          <button 
            className="hover:transform hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer" 
            onClick={() => setViewAlbum(false)}
          >
            <MdHome size={40} className="text-gray-200 bg-gray-800 p-2 rounded-full hover:text-white md:w-[46px] md:h-[46px]" />
          </button>

          <div className="relative flex items-center flex-1 md:flex-none">
            <IoIosSearch size={24} color="white" className="absolute left-3 md:left-4 md:w-[32px] md:h-[32px]" />
            <input
              type="text"
              className="pl-10 md:pl-12 bg-zinc-800 text-white rounded-full py-2 w-full md:w-120 h-10 md:h-12 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
              placeholder="O que você quer ouvir?"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-6 p-3 justify-end">


            <div className="hidden sm:block">
              <IoNotifications size={24} color="white" />
            </div>

            <div className="hidden md:block">
              <PiUsersThree size={24} color="white" />
            </div>

            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <p className="text-black text-xs md:text-base font-semibold">V</p>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
}