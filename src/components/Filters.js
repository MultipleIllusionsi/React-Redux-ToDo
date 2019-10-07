import React from "react";
import { FILTERS } from "../constants";

import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

const Filters = ({ activeFilter, setFilter }) => {
  return (
    <div className="filters">
      {Object.keys(FILTERS).map(filterKey => {
        const currentFilter = FILTERS[filterKey];
        return (
          <span
            key={`filter-${currentFilter}`}
            className={`
              filter
              ${currentFilter === activeFilter && "filter--active"}
            `}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.filter };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(Filters);
