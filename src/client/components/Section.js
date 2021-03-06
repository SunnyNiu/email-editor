/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { Cell } from 'styled-css-grid';
import PropTypes from 'prop-types';
import Row from './Row';

const StyledSection = styled.div`
  justify-content: center;
  background-color: #bad1c0;
  align-items: center;
`;

const Section = React.forwardRef(({ section }, ref) => (
  <div ref={ref}>
    <StyledSection>
      <Cell>
        {section.rows.map(row => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Row {...row} key={row.id} />
        ))}
      </Cell>
    </StyledSection>
  </div>
));

Section.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  section: PropTypes.object.isRequired,
};

export default Section;
