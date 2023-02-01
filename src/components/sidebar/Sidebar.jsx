import '@components/sidebar/Sidebar';
import { sideBarItems, fontAwesomeIcons } from '@components/sidebar/SidebarData';
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
            <>
              <p>{item.name}</p>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
