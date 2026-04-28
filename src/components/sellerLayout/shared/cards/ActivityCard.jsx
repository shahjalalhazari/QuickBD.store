import React from 'react';

const ActivityCard = ({activity, metadata, time}) => {
  return (
    <div className='activity-card quickbd-transition'>
      <div className={`icon ${metadata.bg}`}>
        {metadata.icon}
      </div>
      <div className="content">
        <p>{activity}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default ActivityCard;