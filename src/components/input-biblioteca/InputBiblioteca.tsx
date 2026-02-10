"use client";

import { useState, useRef } from "react";
import { Search, X } from "lucide-react"; 

interface InputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function InputBiblioteca({ searchTerm, setSearchTerm }: InputProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setSearchTerm("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex items-center justify-start p-2">
      <div
        className={`
          flex items-center hover:bg-zinc-800/50 px-1.5 py-1.5 
          transition-all duration-300 ease-in-out border border-transparent
          ${isExpanded || searchTerm ? "w-64 bg-zinc-800 border-zinc-600 rounded-[5px]" : "w-9 rounded-full"}
        `}
      >
        <button
          onClick={() => {
            setIsExpanded(true);
            inputRef.current?.focus();
          }}
          className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <Search size={20} />
        </button>

        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar em Sua Biblioteca"
          onFocus={() => setIsExpanded(true)}
          onBlur={() => !searchTerm && setIsExpanded(false)} 
          className={`
            placeholder:text-[12px]
            bg-transparent border-none outline-none ml-2 text-sm text-white placeholder-zinc-500
            transition-all duration-300
            ${isExpanded || searchTerm ? "opacity-100 w-full" : "opacity-0 w-0 pointer-events-none"}
          `}
        />

        {searchTerm && (
          <button onClick={handleClear} className="text-zinc-400 hover:text-white mr-1">
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}