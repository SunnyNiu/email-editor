import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from 'styled-css-grid';
import Column from './Column';

const Row = ({ row }) => {
  return row.columns.map((column, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Cell width={Number(column.width)} key={index}>
      <Column column={column} />
    </Cell>
  ));
};

Row.propTypes = {
  // eslint-disable-next-line react/require-default-props
  column: PropTypes.arrayOf(PropTypes.string),
};
export default Row;
