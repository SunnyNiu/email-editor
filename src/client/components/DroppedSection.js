import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import PropTypes from 'prop-types';

const Section = styled(Cell)`
  justify-content: center;
  background-color: #bad1c0;
  align-items: center;
`;

const DroppedSection = ({ section }) => (
  <Section>
    {JSON.parse(section).rows.map(row => (
      <Grid columns={row.width}>
        {row.columns.map(column => (
          <Cell width={column.width}>
            {column.widgets.map(widget =>
              widget.type === 'text' ? (
                <input value={widget.text} />
              ) : (
                <img src={widget.src} alt="img" />
              )
            )}
          </Cell>
        ))}
      </Grid>
    ))}
  </Section>
);

DroppedSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  section: PropTypes.string,
};

DroppedSection.defaultProps = {
  section: undefined,
};

export default DroppedSection;
