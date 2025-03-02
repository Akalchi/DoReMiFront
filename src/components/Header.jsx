import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#141415] py-4 px-6 fixed top-0 left-2 right-2 flex items-center justify-start rounded-[64px] z-50">
      <div className="md:hidden mr-auto">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      <ul
        className={`flex space-x-4 ${
          menuOpen
            ? "flex-col absolute top-16 left-2 right-2 bg-[#141415] rounded-[16px] p-4"
            : "hidden md:flex"
        }`}
      >
        <li>
          <Link
            to="/"
            className="hover:underline text-xs md:text-sm text-white"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/instruments"
            className="hover:underline text-xs md:text-sm text-white"
          >
            Instrumentos
          </Link>
        </li>
        <li>
          <Link
            to="/records"
            className="hover:underline text-xs md:text-sm text-white"
          >
            Grabaciones
          </Link>
        </li>
      </ul>
      <Link
        to="/"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-l text-white z-20"
      >
        DoReMi 🎶
      </Link>
    </header>
  );
}
