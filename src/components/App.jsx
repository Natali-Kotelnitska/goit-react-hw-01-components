import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';

import transactions from './Transactions/transactions.json';
import TransactionHistory from './Transactions/TransactionHistory';

//  console.log(data);
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        // position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: '80px',
        paddingBottom: '100px',
      }}
    >
      {/* React homework template */}
      {/* <Profile props={user} /> */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} />; */}
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
