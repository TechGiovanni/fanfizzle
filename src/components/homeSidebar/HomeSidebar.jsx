import '@components/sidebar/Sidebar.scss';
import { sideBarItems, fontAwesomeIcons } from '@components/homeSidebar/HomeSidebarData';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomeSidebar = () => {
  const [homeSidebar, setHomeSidebar] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const checkUrl = (name) => {
    // takes thee name of the side bar item
    // if the url name that is passed in is included/matches any of the side bar name, then we return true.
    // we will use this function in the ternary operator
    return location.pathname.includes(name.toLowerCase());
  };

  useEffect(() => {
    setHomeSidebar(sideBarItems);
  }, []);

  return (
    <div className="app-side-menu">
      <div className="side-menu">
        <ul className="list-unstyled">
          {homeSidebar.map((data) => (
            <li key={data.index}>
              <div
                onClick={() => {
                  navigate(`${data.name}`);
                }}
                className={`sidebar-link ${checkUrl(data.name) ? 'active' : ''}`}
              >
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

export default HomeSidebar;
