import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../util';

const StyledSection = styled.div`
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

const Section = ({ section }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.XML,
      section,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return <StyledSection opacity={isDragging ? '0.5' : '1'} ref={drag} />;
};

Section.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  section: PropTypes.object.isRequired,
};

export default Section;
