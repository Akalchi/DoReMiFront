import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-[#141415] py-4 px-6 fixed top-0 left-2 right-2 flex items-center justify-start rounded-[64px] z-50">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:underline text-xs md:text-sm text-white">
          <Link to="/">Inicio</Link>
          </a>
        </li>
        <li>
          <a
            href="/instruments"
            className="hover:underline text-xs md:text-sm text-white">
            <Link to="/instruments">Instrumentos</Link>
          </a>
        </li>
        <li>
          <a
            href="/records"
            className="hover:underline text-xs md:text-sm text-white"
          >
            <Link to="/records">Grabaciones</Link>
          </a>
        </li>
      </ul>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-l text-white z-20">
        DoReMi 🎶
      </div>
    </header>

  );
}
