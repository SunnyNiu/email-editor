import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTextCreator, fetchTextCreator } from '../reducers/contents.actions';

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
  const { userId, fetchText, text } = props;
  console.log(userId, 'Content userId');

  useEffect(() => {
    fetchText(userId);
  });

  const onChange = value => {
    const { addText } = props;
    addText(value);
  };
  return (
    <div>
      <Section>
        <SectionContent onChange={e => onChange(e.target.value)} value={text} />
      </Section>
    </div>
  );
};

const mapStateToProps = state => ({
  text: state.content.text,
});

const mapDispatchToProps = dispatch => ({
  addText: input => dispatch(addTextCreator(input)),
  fetchText: userId => dispatch(fetchTextCreator(userId)),
});

Content.propTypes = {
  addText: PropTypes.func.isRequired,
  fetchText: PropTypes.func.isRequired,
  text: PropTypes.string,
  userId: PropTypes.string,
};

Content.defaultProps = {
  text: 'Please input text',
  userId: '100',
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
