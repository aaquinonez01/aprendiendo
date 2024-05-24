import { FC, useState } from 'react';
import Sidebar from '../components/Sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
    }

const DashboardLayout:FC<DashboardLayoutProps> = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="md:flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <section className="flex-1 ml-0 relative">
        {/* <Header toggleSidebar={toggleSidebar} /> */}
        <main className='overflow-y-auto h-[calc(100%-40px)] mt-10'>
            {children}
        </main>
      </section>
      

    </div>
  );
}

export default DashboardLayout;
