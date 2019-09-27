import React from "react";
import { FILTERS } from "../constants";

const Filters = ({ activeFilter }) => {
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
            onClick={() => {} /** waiting for setFilter handler*/}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default Filters;
