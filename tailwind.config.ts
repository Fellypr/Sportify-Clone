import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // Importante para adicionar CSS customizado

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        /* O erro acontecia porque aqui precisa ser um objeto JS, não CSS puro */
        '.scrollbar-spotify': {
          '&::-webkit-scrollbar': {
            width: '10px' ,
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#4d4d4d',
            
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#b3b3b3',
          },
        },
      })
    }),
  ],
};

export default config;