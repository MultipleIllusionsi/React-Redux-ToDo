import React from "react";
import { FILTERS } from "../constants";

import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

const Filters = ({ activeFilter, setFilter }) => {
  return (
    <ul className="filters">
      {Object.keys(FILTERS).map(filterKey => {
        const currentFilter = FILTERS[filterKey];
        return (
          <li
            tabIndex="0"
            key={`filter-${currentFilter}`}
            className={`filter ${currentFilter ===
              activeFilter && "filter--active"}
            `}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.filter };
};

export default connect(mapStateToProps, { setFilter })(
  Filters
);
