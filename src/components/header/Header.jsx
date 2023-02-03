import logo from '@assets/images/logo6.svg';
import { FaCaretDown, FaRegBell, FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '@components/header/Header.scss';
import Avatar from '@components/avatar/Avatar';

const Header = () => {
  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-navbar">
          <div className="header-image">
            <Link to="/for-you/feed">
              <img src={logo} className="img-fluid" alt="logo" />
            </Link>
            <Link to="/for-you/feed">
              <div className="app-name">FanFizzle</div>
            </Link>
          </div>
          <div className="header-menu-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="header-nav">
            <li className="header-nav-item active-item">
              <span className="header-list-name">
                <FaRegBell className="header-list-icon" />
                <span className="bg-danger-dots dots" data-testid="notification-dots">
                  5
                </span>
              </span>
              <ul className="dropdown-ul">
                <li className="dropdown-li"></li>
              </ul>
              &nbsp;
            </li>
            <li className="header-nav-item active-item">
              <span className="header-list-name">
                <FaRegEnvelope className="header-list-icon" />
                <span className="bg-danger-dots dots"></span>
              </span>
              &nbsp;
            </li>
            <li className="header-nav-item">
              <span className="header-list-name profile-image">
                <Avatar avatarSrc="" name="Giovanni" />
              </span>
              <span className="header-list-name profile-name">
                Danny
                <FaCaretDown className="header-list-icon caret" />
              </span>
              <ul className="dropdown-ul">
                <li className="dropdown-li"></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
