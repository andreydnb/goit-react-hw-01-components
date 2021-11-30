import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics'
import FriendsList from './FriendList/FriendList';
import user from './Profile/user.json';
import data from './Statistics/data.json'
import friends from './FriendList/friends.json'


const App = () => (
  <>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendsList friends={friends} />
  
  </>
);

export default App;