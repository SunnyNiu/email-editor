import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateWidgetValueCreator } from '../reducers/contentsActions';

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

const ContentEditor = ({ selectedId, selectedWidget, updateWidgetValue }) => {
  if (!selectedWidget) return <ContentEditorContainer />;
  return (
    <ContentEditorContainer>
      {selectedWidget.type === 'text' ? (
        <input
          type="text"
          value={selectedWidget.text}
          onChange={e => updateWidgetValue(selectedId, e.target.value)}
          contentEditable="true"
        />
      ) : (
        <input
          value={selectedWidget.src}
          onChange={e => updateWidgetValue(selectedId, e.target.value)}
        />
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
    selectedId,
  };
};

const mapDispatchToProps = dispatch => ({
  updateWidgetValue: (selectedId, value) =>
    dispatch(updateWidgetValueCreator(selectedId, value)),
});

ContentEditor.propTypes = {
  selectedWidget: PropTypes.shape({
    src: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
  }),
  selectedId: PropTypes.string,
  updateWidgetValue: PropTypes.func.isRequired,
};

ContentEditor.defaultProps = {
  selectedWidget: {
    src: '',
    text: '',
    type: '',
  },
  selectedId: undefined,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentEditor);
