import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import { VISIBILITY_FILTERS } from '../constants';
import { Store } from '../configure-store';
const VisibilityFilters = ({
  activeFilter,
  setFilter
}: {
  activeFilter: VISIBILITY_FILTERS;
  setFilter: (currentFilter: VISIBILITY_FILTERS) => {};
}) => {
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

const mapStateToProps = (state: Store) => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
