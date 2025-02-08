import { Heart } from "lucide-react";

function Header() {
  return (
    <div className='outline outline-red-500 h-dvh max-w-dvw snap-start backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden'>
      <header className='text-center px-4 w-full'>
        <h1 className='text-5xl md:text-8xl font-bold flex flex-col gap-5 md:gap-8 items-center text-rose-800 mb-2 font-montez overflow-hidden'>
          I love you{" "}
          <span className='inline-block animate-[scale_2s_ease-in-out_infinite] delay-1000'>
            💖
          </span>
        </h1>
        <div className='flex justify-center items-center gap-2'>
          <Heart
            className='text-rose-600 animate-pulse'
            size={24}
          />
          <p className='text-xl text-rose-700'>My Valentine</p>
          <Heart
            className='text-rose-600 animate-pulse'
            size={24}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
