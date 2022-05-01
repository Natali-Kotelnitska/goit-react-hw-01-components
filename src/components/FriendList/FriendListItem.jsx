import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  const online = { isOnline };
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // isOnline:
};
