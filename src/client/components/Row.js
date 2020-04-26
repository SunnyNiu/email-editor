import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';
import Column from './Column';

const Row = ({ width, children }) => {
  return (
    <Grid columns={width}>
      {children.map(column => (
        <Cell width={Number(column.width)} key={column.id}>
          <Column column={column} key={column.id} />
        </Cell>
      ))}
    </Grid>
  );
};

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string.isRequired,
};
export default Row;
