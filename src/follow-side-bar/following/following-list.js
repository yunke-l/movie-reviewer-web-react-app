import React, {useState} from 'react';
import './following-list.css';

const FollowingList = ({ followings }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedFollowings = showMore ? followings : followings.slice(0, 3);

  return (
      <div className="following-list">
        <h2>Following ({followings.length})</h2>
        <ul className={showMore ? 'expanded' : ''}>
          {displayedFollowings.map((following) => (
              <li key={following.id} className="following-item">
                <img src={following.icon} alt={`${following.name}'s icon`} className="people-icon" />
                  <div className="people-info">
                    <h3 className="people-name">{following.name}</h3>
                    <div className="people-level">LV{following.level}</div>
                  </div>
              </li>
          ))}
        </ul>

        {followings.length > 3 && (
            <div className="toggle-button" onClick={toggleShowMore}>
              {showMore ? 'Show Less' : 'Show More'}
            </div>
        )}
      </div>
  );
};

export default FollowingList;
