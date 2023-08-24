import React, {useState} from 'react';
import './follower-list.css';
import { Link } from 'react-router-dom';

const FollowersList = ({ followers }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedFollowers = showMore ? followers : followers.slice(0, 3);

  return (
      <div className="followers-list">
        <h2>Followers ({followers.length})</h2>
        <ul className={showMore ? 'expanded' : ''}>
          {displayedFollowers.map((follower) => (
              <li key={follower.id} className="following-item">
                <Link to={`/reviewer/profile/${follower._id}`}>
                  <img
                    className="people-icon"
                    src={follower.avatar}
                    alt={`${follower.username}'s Avatar`}
                  />
                </Link>
                {/* <img src={follower.avatar} alt={`${follower.username}'s icon`} className="people-icon" /> */}
                <div className="people-info">
                  <h3 className="people-name">{follower.username}</h3>
                  <div className="people-level">Lv.{follower.level}</div>
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
