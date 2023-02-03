import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Stylesheet
import '@pages/home/homeSidebar/HomeSidebar.scss';

// Data
import { sideBarItems, fontAwesomeIcons } from '@pages/home/homeSidebar/TheHomeSidebarData';

// Reducer
import { closeAuthModal } from '@redux/reducers/loginModal/loginModal.reducer';

const HomeSidebar = (props) => {
  const { handleChangeSideBarTabs } = props;
  const [homeSidebar, setHomeSidebar] = useState([]);
  const [activateFeed, setActivateFeed] = useState('');
  const [activatePeople, setActivatePeople] = useState('active');
  const dispatch = useDispatch();

  useEffect(() => {
    setHomeSidebar(sideBarItems);
  }, []);

  const handleOpenAuthModal = () => {
    dispatch(closeAuthModal({ authModalState: true }));
  };

  const handleOnClickTab = (name) => {
    console.log(name);
    if (name === 'people') {
      handleChangeSideBarTabs('people');
      setActivateFeed('active');
      setActivatePeople('');
    }
    if (name === 'feed') {
      handleChangeSideBarTabs('feed');
      setActivateFeed('');
      setActivatePeople('active');
    }
  };

  return (
    <>
      <div className="app-side-menu">
        <div className="side-menu">
          <ul className="list-unstyled">
            {homeSidebar.map((data) => (
              <li key={data.index}>
                <div
                  onClick={() => handleOnClickTab(data.name)}
                  className={`sidebar-link ${data.name !== 'feed' && activateFeed} ${
                    data.name !== 'people' && activatePeople
                  }`}
                >
                  <div className="menu-icon">{fontAwesomeIcons[data.iconName]}</div>
                  <div className="menu-link">
                    <span>{`${data.name}`}</span>
                  </div>
                </div>
              </li>
            ))}

            <li className="sidebar-button-holder">
              <button onClick={handleOpenAuthModal} className="sidebar-home-button">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

HomeSidebar.propTypes = {
  handleChangeSideBarTabs: PropTypes.func,
};

export default HomeSidebar;
