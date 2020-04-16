import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';
import Column from './Column';

const Row = ({ width, columns }) => {
  return (
    <Grid columns={width}>
      {columns.map(column => (
        <Cell width={Number(column.width)} key={column.id}>
          <Column column={column} key={column.id} />
        </Cell>
      ))}
    </Grid>
  );
};

Row.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string.isRequired,
};
export default Row;
