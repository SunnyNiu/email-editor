import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { Grid, Cell } from 'styled-css-grid';
import { setTextCreator, fetchTextCreator } from '../reducers/contentsActions';
import { ItemTypes } from '../util';

const Section = styled(Cell)`
  justify-content: center;
  background-color: red;
  align-items: center;
`;

const Container = styled(Grid)`
  height: 300px;
  justify-content: center;
  background-color: #4285f4;
  align-items: center;
`;
const Content = props => {
  const { fetchText, text, setText, userId } = props;
  useEffect(() => {
    fetchText(userId);
  }, []);

  const [, drop] = useDrop({
    accept: ItemTypes.XML,
    drop: ({ section }) => setText(JSON.stringify(section)),
  });

  return (
    <Container columns={1} ref={drop}>
      {text.map(section => (
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
      ))}
    </Container>
  );
};

const mapStateToProps = state => {
  const userId = window.location.href.split('email=')[1];
  return {
    text: state.content.text,
    userId,
  };
};

const mapDispatchToProps = dispatch => ({
  setText: input => dispatch(setTextCreator(input)),
  fetchText: userId => dispatch(fetchTextCreator(userId)),
});

Content.propTypes = {
  setText: PropTypes.func.isRequired,
  fetchText: PropTypes.func.isRequired,
  text: PropTypes.string,
  userId: PropTypes.string.isRequired,
};

Content.defaultProps = {
  text: 'Please input text',
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
