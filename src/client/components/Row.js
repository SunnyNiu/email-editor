import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';
import Column from './Column';

const Row = ({ width, columns }) => (
  <Grid columns={width}>
    {columns.map((column, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Cell width={Number(column.width)} key={index}>
        <Column column={column} />
      </Cell>
    ))}
  </Grid>
);

Row.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string.isRequired,
};
export default Row;
