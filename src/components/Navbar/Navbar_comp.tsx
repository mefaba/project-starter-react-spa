import React from "react";

export const Navbar = () => {
  const toggleMenu = () => {
    const hamburgerEl: HTMLElement = document.getElementById("id_nav-hamburger-menu") as HTMLElement;
    hamburgerEl.classList.toggle("hidden");
  }
  return (
    <>
      <nav className="bg-gray-800 p-2 flex justify-between items-center">
        <a href="#" className="text-white font-bold">Logo</a>
        <div className="hidden md:flex">
          <a href="#" className="text-white p-4 hover:text-gray-400">Home</a>
          <a href="#" className="text-white p-4 hover:text-gray-400">About</a>
          <a href="#" className="text-white p-4 hover:text-gray-400">Contact</a>
        </div>
        <button className="md:hidden flex items-center px-3 py-2 rounded-lg text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </nav>
      <div id="id_nav-hamburger-menu" className="hidden bg-gray-800  sm:items-center sm:justify-between sm:px-4 sm:py-3">
        <div className="flex items-center justify-around px-2 py-3 sm:p-0">
          <a href="#" className="text-white p-2 hover:text-gray-400">Home</a>
          <a href="#" className="text-white p-2 hover:text-gray-400">About</a>
          <a href="#" className="text-white p-2 hover:text-gray-400">Contact</a>
        </div>
      </div>
    </>
  );
};
