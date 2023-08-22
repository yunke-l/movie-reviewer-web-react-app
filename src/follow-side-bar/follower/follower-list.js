import React, {useState} from 'react';
import './follower-list.css';

const FollowersList = ({ followers }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedFollowers = showMore ? followers : followers.slice(0, 3);

  return (
      <div className="followers-list">
        <h2>Following ({followers.length})</h2>
        <ul className={showMore ? 'expanded' : ''}>
          {displayedFollowers.map((follower) => (
              <li key={follower.id} className="following-item">
                <img src={follower.icon} alt={`${follower.name}'s icon`} className="people-icon" />
                <div className="people-info">
                  <h3 className="people-name">{follower.name}</h3>
                  <div className="people-level">LV{follower.level}</div>
                </div>
              </li>
          ))}
        </ul>

        {followers.length > 3 && (
            <div className="toggle-button" onClick={toggleShowMore}>
              {showMore ? 'Show Less' : 'Show More'}
            </div>
        )}
      </div>


  );
};

export default FollowersList;
