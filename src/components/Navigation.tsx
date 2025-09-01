import React from 'react';
import { Twitter, Info, Home, FileText } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-white font-bold text-xl">GOONUR</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => onPageChange('home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                currentPage === 'home'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Home size={16} />
              <span>Home</span>
            </button>
            <button
              onClick={() => onPageChange('about')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                currentPage === 'about'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Info size={16} />
              <span>About</span>
            </button>
            <button
              onClick={() => onPageChange('docs')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                currentPage === 'docs'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <FileText size={16} />
              <span>Docs</span>
            </button>
          </div>
        </div>
        <a
          href="https://x.com/i/communities/1962548301120549124"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
        >
          <Twitter size={20} />
        </a>
      </div>
    </nav>
  );
}