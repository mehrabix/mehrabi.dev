'use client'
import { useEffect } from "react";



export default function Home() {
  useEffect(() => {
    const handleKeyDown = (event: { metaKey: any; ctrlKey: any; key: string; }) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        openCommandMenu()
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const openCommandMenu = () => {
    console.log('open command menu'); 
  }

  return (
    <>
      <header>
        <div className="container mx-auto px-5">

          <header className="flex justify-between items-center mt-6 md:mt-4">
            <h1 className="text-zinc-400">mehrabi.dev</h1>

            <button onClick={openCommandMenu} className="hover:bg-white hover:bg-opacity-10 md:px-3 md:py-2 rounded-md transition-all duration-200">
              <span className="text-zinc-400 mr-2 text-md hidden md:inline-block">Command Menu</span>
              <span className="text-white border-[0.7px] border-zinc-400 rounded-md inline-block w-6 h-6">⌘</span>
              <span className="text-white border-[0.7px] border-zinc-400 rounded-md w-6 h-6 ml-1 hidden md:inline-block">K</span>
            </button>
          </header>

        </div>
      </header>
    </>
  )
}
