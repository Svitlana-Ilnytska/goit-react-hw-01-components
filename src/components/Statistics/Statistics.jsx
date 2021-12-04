import React from "react";
import PropTypes from "prop-types";

import css from "./Statistics.module.css";

const randomColor = () => {
  return Math.floor(Math.random() * 256);
};
const myColor = `rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;

const itemsStyles = {
  backgroundColor: myColor,
};

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.statisticList}>
      {stats.map((stat) => (
        <li key={stat.id} className={css.item} style={itemsStyles}>
          <span className={css.label}>{stat.name}</span>
          <span className={css.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
