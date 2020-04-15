import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import PropTypes from 'prop-types';
import Row from './Row';

const Section = styled(Cell)`
  justify-content: center;
  background-color: #bad1c0;
  align-items: center;
`;

const Sections = ({ section }) => (
  <Section>
    {JSON.parse(section).rows.map((row, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Grid columns={row.width} key={index}>
        <Row row={row} />
      </Grid>
    ))}
  </Section>
);

Sections.propTypes = {
  section: PropTypes.string,
};

Sections.defaultProps = {
  section: '',
};

export default Sections;
