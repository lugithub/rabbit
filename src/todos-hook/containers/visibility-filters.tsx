import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../actions';
import { VISIBILITY_FILTERS } from '../constants';
import { getActiveFilter } from '../selectors';

const VisibilityFilters = () => {
  const activeFilter = useSelector(getActiveFilter);
  const dispatch = useDispatch();

  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[
          filterKey as any
        ] as VISIBILITY_FILTERS;
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              'filter',
              currentFilter === activeFilter && 'filter--active'
            )}
            onClick={dispatch.bind(null, setFilter(currentFilter))}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;
