import React, {useState} from 'react';
import './following-list.css';
import { Link } from 'react-router-dom';

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
                <Link to={`/reviewer/profile/${following._id}`}>
                  <img
                    className="people-icon"
                    src={following.avatar}
                    alt={`${following.username}'s Avatar`}
                  />
                </Link>
                  <div className="people-info">
                    <h3 className="people-name">{following.username}</h3>
                    <div className="people-level">Lv.{following.level}</div>
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
