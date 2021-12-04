import React from "react";
import PropTypes from "prop-types";

import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, alt }) => (
  <>
    <span className={css.status}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt={alt} width="48" />
    <p className={css.name}>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  alt: "User avatar",
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  alt: PropTypes.string,
};

export default FriendListItem;
