import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendList/FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

const FriendList = ({ friends }) =>
  friends.length > 0 && (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.friendItem}>
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
