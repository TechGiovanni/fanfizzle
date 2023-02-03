// import '@components/sidebar/Sidebar.scss';
import { sideBarItems, fontAwesomeIcons } from '@components/sidebar/SidebarData';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [sideBar, setSidebar] = useState([]);
  const location = useLocation();

  const checkUrl = (name) => {
    // takes thee name of the side bar item
    // if the url name that is passed in is included/matches any of the side bar name, then we return true.
    // we will use this function in the ternary operator
    return location.pathname.includes(name.toLowerCase());
  };

  // const navigateToPage = () => {};
  // onClick={() => navigateToPage(data.name, data.url)}

  useEffect(() => {
    setSidebar(sideBarItems);
  }, []);

  return (
    <div className="app-side-menu">
      <div className="side-menu">
        <ul className="list-unstyled">
          {sideBar.map((data) => (
            <li key={data.index}>
              <div className={`sidebar-link ${checkUrl(data.name) ? 'active' : ''}`}>
                <div className="menu-icon">{fontAwesomeIcons[data.iconName]}</div>
                <div className="menu-link">
                  <span>{`${data.name}`}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
