import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../util';

const Sec = styled.div`
  height: 83px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #4285f4;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-button: 20px;
  }
`;

const Section = ({ path }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.XML,
      path,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return <Sec opacity={isDragging ? '0.5' : '1'} ref={drag} path={path} />;
};

Section.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Section;
