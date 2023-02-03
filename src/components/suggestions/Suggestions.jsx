import Avatar from '@components/avatar/Avatar';
import Button from '@components/button/Button';
import '@components/suggestions/Suggestions.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Suggestions = () => {
  const [users, setUsers] = useState([]);
  const { suggestions } = useSelector((state) => state);

  useEffect(() => {
    // populate the users in the suggestions
    setUsers(suggestions?.users);
  }, [suggestions, setUsers]);

  return (
    <>
      <div className="suggestions-list-container" data-testid="suggestions-container">
        <div className="suggestions-header">
          <div className="title-text">Suggestions</div>
        </div>
        <hr />
        <div className="suggestions-container">
          <div className="suggestions">
            {users?.map((user, index) => (
              <div data-testid="suggestions-item" className="suggestions-item" key={index}>
                <Avatar
                  name={user?.username}
                  bgColor={user?.avatarColor}
                  textColor="#ffffff"
                  size={40}
                  avatarSrc={user?.profilePicture}
                />
                <div className="title-text">{user?.username}</div>
                <div className="add-icon">
                  <Button label="Follow" className="button follow" disabled={false} />
                </div>
              </div>
            ))}
          </div>
          {users.length > 8 && <div className="view-more">View More</div>}
        </div>
      </div>
    </>
  );
};

export default Suggestions;
