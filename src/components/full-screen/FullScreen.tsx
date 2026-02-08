import { usePlayer } from "@/context/PlayerContext";
import Image from "next/image";
export default function FullScreen() {
    const { currentTrack } = usePlayer();
    return (
        <div 
        className="absolute w-[98.8%] h-[74vh] z-20 flex items-center justify-center flex-col rounded-t-2xl"
        style={{backgroundColor:currentTrack?.themeColor}}
        >
            <header className="w-[97%] flex items-center p-4 relative bottom-15 text-[16px] font-bold">
                <p>{currentTrack?.title}</p>
            </header>
            <Image src={currentTrack?.imageUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TL3YUIC2cny9dklenfcET7Q5oOAH_T1KRg&s'} alt={currentTrack?.title || 'titulo'} width={300} height={300} quality={75} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-3xl shadow-2xl/50 object-cover"/>
        </div>
    );
}