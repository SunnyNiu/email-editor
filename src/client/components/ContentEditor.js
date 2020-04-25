import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ContentEditorContainer = styled.div`
  height: 300px;
  width: 300px;
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

const ContentEditor = ({ selectedWidget }) => {
  if (!selectedWidget) return <ContentEditorContainer />;
  return (
    <ContentEditorContainer>
      {selectedWidget.type === 'text' ? (
        <input value={selectedWidget.text} />
      ) : (
        <input value={selectedWidget.src} />
      )}
    </ContentEditorContainer>
  );
};

const mapStateToProps = state => {
  const { email, selectedId } = state.content;
  let selectedWidget;

  email.forEach(section =>
    section.rows.forEach(row =>
      row.columns.forEach(column =>
        column.widgets.forEach(widget => {
          if (widget.id === selectedId) {
            selectedWidget = widget;
          }
        })
      )
    )
  );

  return {
    selectedWidget,
  };
};

ContentEditor.propTypes = {
  selectedWidget: PropTypes.shape({
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps)(ContentEditor);
