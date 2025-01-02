import React from 'react';
import { Wallet, SprayCan, Search, Heart } from 'lucide-react';

const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 p-4 flex justify-around items-center border-t">
      <div className="text-center">
        <Search className="w-6 h-6 text-white mx-auto" />
        <span className="text-xs text-white">Explorer</span>
      </div>

      <div className="text-center">
        <SprayCan className="w-6 h-6 text-white mx-auto" />
        <span className="text-xs text-white">Mes ménages</span>
      </div>

      <div className="text-center">
        <Wallet className="w-6 h-6 text-white mx-auto" />
        <span className="text-xs text-white">Mon porte-monnaie</span>
      </div>

      <div className="text-center">
        <Heart className="w-6 h-6 text-white mx-auto" />
        <span className="text-xs text-white">Favoris</span>
      </div>

      <div className="text-center">
        <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 4c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 4c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
        </svg>
        <span className="text-xs text-white">Profil</span>
      </div>
    </div>
  );
};

export default BottomMenu;