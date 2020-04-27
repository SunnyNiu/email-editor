/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { Cell } from 'styled-css-grid';
import PropTypes from 'prop-types';
import Row from './Row';

const Section = styled(Cell)`
  justify-content: center;
  background-color: #bad1c0;
  align-items: center;
`;

const Sections = ({ section }) => (
  <Section>
    {section.children.map(rowId => {
      const row = section.widgetMap[rowId];
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Row {...row} key={rowId} widgetMap={section.widgetMap} />
      );
    })}
  </Section>
);

Sections.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  section: PropTypes.object.isRequired,
};

export default Sections;
