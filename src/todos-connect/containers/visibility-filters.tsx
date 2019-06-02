import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import { VISIBILITY_FILTERS } from '../constants';
import { State } from '../configure-store';
import { getVisibilityFilter } from '../selectors';

interface VisibilityFiltersProps {
  activeFilter: VISIBILITY_FILTERS;
  setFilter: typeof setFilter;
}

const VisibilityFilters = ({
  activeFilter,
  setFilter
}: VisibilityFiltersProps) => {
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
            onClick={setFilter.bind(null, currentFilter)}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return { activeFilter: getVisibilityFilter(state) };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
