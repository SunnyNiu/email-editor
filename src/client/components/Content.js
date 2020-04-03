import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { addTextCreator, fetchTextCreator } from '../reducers/contentsActions';
import { ItemTypes } from '../util';

const Section = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  background-color: #4285f4;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
`;

const SectionContent = styled.input`
  height: 60px;
  width: 200px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    height: 30px;
    padding: 2px;
  }
`;

const Content = props => {
  const { fetchText, text, addText, userId } = props;

  const [item, setItem] = useState(text);
  useEffect(() => {
    fetchText(userId);
  }, []);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.XML,
    drop: dropItem => setItem(dropItem.path),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  console.log(item, 'item');
  return (
    <div>
      <Section>
        <SectionContent
          ref={drop}
          onChange={e => addText(e.target.value)}
          value={item}
        />
      </Section>
    </div>
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
  addText: input => dispatch(addTextCreator(input)),
  fetchText: userId => dispatch(fetchTextCreator(userId)),
});

Content.propTypes = {
  addText: PropTypes.func.isRequired,
  fetchText: PropTypes.func.isRequired,
  text: PropTypes.string,
  userId: PropTypes.string.isRequired,
};

Content.defaultProps = {
  text: 'Please input text',
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
