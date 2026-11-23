import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary/90 backdrop-blur-md border-b border-gray-200/50 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold text-primary">
          Muga Food
        </Link>
        <nav>
          <ul className="flex items-center gap-8 hidden md:flex">
            <li>
              <Link to="/home" className="text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-white hover:text-gray-300 transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/order" className="text-white hover:text-gray-300 transition-colors">
                Order
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded transition-colors"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden bg-secondary hover:bg-primary text-white px-4 py-2 rounded"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 flex items-center justify-center">
          <div className="bg-white w-80 p-8 rounded-lg shadow-xl transform transition-transform duration-300">
            <ul className="flex-flex flex-col gap-6">
              <li>
                <Link to="/home" className="text-lg font-medium text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-lg font-medium text-primary">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-lg font-medium text-primary">
                  Order
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-primary text-white py-3 rounded hover:bg-secondary transition-colors"
                >
                  Sign Up
                </button>
              </li>
            </ul>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-primary"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </header>
  )
}