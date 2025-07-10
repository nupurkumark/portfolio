import {Link} from "react-router-dom"
import logo from "../assets/logo-w.png"

export default function Navbar() {
  return (
  <nav className="mt-5 mr-10 ml-10 flex justify-between items-center">
    <div className="ml-10 text-5xl">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-25" />
        <span className="text-[#004aad] hover:text-[#38b6ff] hover:underline transition duration-200 mb-2">nupurkumark</span>
      </Link>
    </div>

    <div className="mt-2 mr-20 space-x-6 text-2xl">
      <Link to="/" className="hover:text-gray-600 hover:underline transition duration-200">home</Link>
      <Link to="/projects" className="hover:text-gray-600 hover:underline transition duration-200">projects</Link>
      <Link to="/photography" className="hover:text-gray-600 hover:underline transition duration-200">photography</Link>
    </div>
  </nav>
  );
}

