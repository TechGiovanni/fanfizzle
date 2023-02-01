import '@components/sidebar/Sidebar';
import { sideBarItems } from '@components/sidebar/SidebarData';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [sideBar, setSidebar] = useState([]);

  useEffect(() => {
    setSidebar(sideBarItems);
  }, []);

  return (
    <div className="app.sidebar-menu">
      <div className="">
        <ul>
          {sideBar.map((item) => (
            <div key={item.index}>
              <p>{item.name}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
