import React, { useState } from 'react';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 flex justify-between items-center text-white shadow-lg">
            <div className="flex flex-col">
                <div className="text-lg md:text-xl font-bold"><h1 className='text-3xl'>AirCleanConnect</h1></div>
                <div className="text-sm md:text-base text-cyan-200">Connecter les pros du ménage à vos besoins.</div>
            </div>
            <div className="relative">
                <button
                    onClick={toggleMenu}
                    className="focus:outline-none text-white"
                    aria-expanded={menuOpen ? "true" : "false"}
                    aria-controls="menu"
                    aria-label="Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A1.5 1.5 0 016.5 17h11a1.5 1.5 0 011.379.804l1.5 2.5A1.5 1.5 0 0119.5 22h-15a1.5 1.5 0 01-1.379-.696l1.5-2.5zM12 14a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>
                </button>
                {menuOpen && (
                    <div
                        id="menu"
                        className="absolute right-0 mt-2 w-48 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border rounded-md shadow-lg py-2 transition-all ease-in-out duration-300"
                    >
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-teal-400 transition-colors duration-200">Me Connecter</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-teal-400 transition-colors duration-200">S'inscrire en tant que propriétaire</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-teal-400 transition-colors duration-200">S'inscrire en tant que professionnel du ménage</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navigation;