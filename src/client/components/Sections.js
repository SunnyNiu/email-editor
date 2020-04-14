import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import PropTypes from 'prop-types';

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
        {row.columns.map((column, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Cell width={Number(column.width)} key={i}>
            {column.widgets.map((widget, j) =>
              widget.type === 'text' ? (
                // eslint-disable-next-line react/no-array-index-key
                <input value={widget.text} key={j} readOnly />
              ) : (
                // eslint-disable-next-line react/no-array-index-key
                <img src={widget.src} alt="img" key={j} />
              )
            )}
          </Cell>
        ))}
      </Grid>
    ))}
  </Section>
);

Sections.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  section: PropTypes.string,
};

Sections.defaultProps = {
  section: '',
};

export default Sections;
