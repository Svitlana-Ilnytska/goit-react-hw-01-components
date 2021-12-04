import React from "react";
import PropTypes from "prop-types";

import css from "./Statistics.module.css";

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul>
      {stats.map((stat) => (
        <li key={stat.id}>
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
