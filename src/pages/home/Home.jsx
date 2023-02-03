import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// stylesheet
import styled from 'styled-components';
import '@components/navbar/Navbar.scss';

// component
import logo from '@assets/images/logo6.svg';
import Button from '@components/button/Button';
import { FaListUl } from 'react-icons/fa';
import DarkMode from '@components/navbar/darkmode/DarkMode';
import Auth from '@components/auth/Auth';

// reducer
import { closeAuthModal } from '@redux/reducers/loginModal/loginModal.reducer';
import HomeSidebar from '@pages/home/homeSidebar/HomeSidebar';
// import Feed from '@pages/feed/Feed';
import People from '@pages/people/People';
import Feed from '@pages/feed/Feed';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  // const [openAuthModal, setOpenAuthModal] = useState(true);
  const dispatch = useDispatch();
  const authModal = useSelector((state) => state.authModalName.authModalState);
  const [showFeed, setShowFeed] = useState(true);

  const handleOpenAuthModal = () => {
    dispatch(closeAuthModal({ authModalState: true }));
  };

  const handleChangeSideBarTabs = (name) => {
    if (name === 'feed') {
      console.log('showing feed');
      setShowFeed(true);
    }
    if (name === 'people') {
      console.log('showing people');
      setShowFeed(false);
    }
  };

  useEffect(() => {
    setShowFeed(true);
  }, []);

  return (
    <>
      <div className="navbar-section-base">
        {' '}
        {authModal && (
          <Backdrop>
            <Auth />
          </Backdrop>
        )}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo-container">
              <div className="nav-image-box">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <Link to="/">
                <div className="app-name">FanFizzle</div>
              </Link>
            </div>
            <div className="nav-buttons">
              <Button disabled={false} buttonColor="primary" handleClick={handleOpenAuthModal}>
                Login
              </Button>
              <div className="menu-items">
                <FaListUl className="navbar-three-dots"></FaListUl>
                <div className="dropdown-menu-nav">
                  <DarkMode />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div style={{ display: 'flex' }}>
          <div className="home-sidebar-content">
            <div className="side-bar-holder">
              <HomeSidebar handleChangeSideBarTabs={handleChangeSideBarTabs} />
            </div>
          </div>
          <div className="outlet">{showFeed ? <Feed /> : <People />}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
