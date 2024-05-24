import { FC } from 'react';


interface HeaderProps {
    toggleSidebar: () => void;
    }

const Header:FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center w-full fixed h-10">
      <div className="flex items-center">
        <button className="text-gray-500 md:hidden" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className="flex items-center">
        <span className="cursor-pointer">🔔</span>
        <span className="cursor-pointer">💬</span>
        <span className="cursor-pointer">👤</span>
      </div>
    </header>
  );
}

export default Header;
