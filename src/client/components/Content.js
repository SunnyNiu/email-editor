import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTextCreator } from '../reducers/contents.actions';

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
  useEffect(() => {});

  const onChange = value => {
    const { addText } = props;
    addText(value);
  };
  return (
    <div>
      <Section>
        <SectionContent onChange={e => onChange(e.target.value)} />
      </Section>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addText: input => dispatch(addTextCreator(input)),
});

Content.propTypes = {
  addText: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Content);
