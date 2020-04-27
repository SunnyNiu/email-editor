import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';
import Column from './Column';

const Row = ({ width, children, widgetMap }) => {
  return (
    <Grid columns={width}>
      {children.map(columnId => {
        const column = widgetMap[columnId];
        return (
          <Cell width={Number(column.width)} key={columnId}>
            <Column column={column} key={columnId} widgetMap={widgetMap} />
          </Cell>
        );
      })}
    </Grid>
  );
};

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  widgetMap: PropTypes.object.isRequired,
};
export default Row;
