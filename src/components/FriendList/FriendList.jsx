import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendList/FriendListItem/FriendListItem";

const FriendList = ({ friends }) =>
  friends.length > 0 && (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );

FriendListItem.defaultProps = {
  items: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
