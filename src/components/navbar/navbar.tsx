import { FaSpotify } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaCircleArrowDown } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { usePlayer } from "@/context/PlayerContext";
export default function Navbar() {
  const { setViewAlbum } = usePlayer();
  return (
    <nav className="w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between space-x-4  h-[4rem] pl-2">
        <div className="flex items-center space-x-4 p-4 w-full">
          <FaSpotify size={35} color="#FFF" />
          <button className="hover:transform hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => setViewAlbum(false)}>
            <MdHome size={46} className="text-gray-200 bg-gray-800 p-2 rounded-full hover:text-white" />
          </button>
          <div className="flex items-center justify-center">
            <IoIosSearch size={32} color="white" className="absolute left-[9.5rem]" />
            <input
              type="text"
              className="pl-12 bg-zinc-800 text-white rounded-full px-4 py-2 w-120 h-12 focus:outline-none focus:ring-2 focus:ring-white-500 transition-all duration-600 ease-in-out"
              placeholder="O que você quer ouvir?"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6 p-3 w-full justify-end">
            <button className="bg-white p-2 pl-4 pr-4 rounded-full text-black text-[13px] font-bold hover:hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer">Ver planos Premium</button>
            <a href="" className="flex items-center space-x-2 gap-3 text-[14px] text-neutral-400 hover:text-white transition-all duration-200 ease-in-out"><FaCircleArrowDown />Instalar aplicativo</a>
            <IoNotifications size={24} color="white"/>
            <PiUsersThree size={24} color="white" />
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-400  rounded-full flex items-center justify-center p-3">
                    <p className="text-black font-semibold">V</p>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
}
