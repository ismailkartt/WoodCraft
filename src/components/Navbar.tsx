import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-2xl text-gray-800 dark:text-white">WoodCraft</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Ana Sayfa</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Hakkımızda</Link>
            <Link to="/products" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Ürünler</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">İletişim</Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <User size={20} />
            </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <ShoppingCart size={20} />
            </button>
            <button className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}