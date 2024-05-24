import { FC } from 'react';
import { Close } from '../icons/Close';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`z-40 md:relative fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-full sm:w-64 bg-gray-800 text-white flex flex-col justify-between h-full p-4`}>
      <div>
        <button className="md:hidden flex justify-end w-full mb-3" onClick={toggleSidebar}><Close/></button>
        <div className="flex items-center mb-8">
          <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="Perfil" />
          <div className="ml-4">
            <div className="text-white font-bold">Nombre del Usuario</div>
            <div className="text-gray-400">Rol del Usuario</div>
          </div>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#dashboard" className="text-white hover:text-black hover:bg-white py-2 px-2 rounded-md block">Dashboard</a>
            </li>
            <li className="mb-4">
              <a href="#usuarios" className="text-white hover:text-black hover:bg-white py-2 px-2 rounded-md block">Usuarios</a>
            </li>
            <li className="mb-4">
              <a href="#proyectos" className="text-white hover:text-black hover:bg-white py-2 px-2 rounded-md block">Proyectos</a>
            </li>
            <li className="mb-4">
              <a href="#tareas" className="text-white hover:text-black hover:bg-white py-2 px-2 rounded-md block">Tareas</a>
            </li>
            <li className="mb-4">
              <a href="#reportes" className="text-white hover:text-black hover:bg-white py-2 px-2 rounded-md block">Reportes</a>
            </li>
            <li className="mb-4">
              <a href="#configuracion" className="text-white hover:text-black hover:bg-white py-2 px-2 rounded-md block">Configuración</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-auto cursor-pointer hover:text-black hover:bg-white py-2 px-2 rounded-md">Cerrar Sesión</div>
    </aside>
  );
}

export default Sidebar;
