/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Image from './Image';
import Text from './Text';
import { editSelectedIdCreator } from '../reducers/contentsActions';

const Column = ({ column, editSelectedId }) => {
  const widgetComponentMap = {
    text: Text,
    image: Image,
  };

  return column.widgets.map(widget => {
    const Widget = widgetComponentMap[widget.type];
    // eslint-disable-next-line react/jsx-props-no-spreading
    return (
      <Widget
        {...widget}
        key={widget.id}
        onClick={() => editSelectedId(widget.id)}
      />
    );
  });
};

const mapDispatchToProps = dispatch => ({
  editSelectedId: widgetId => dispatch(editSelectedIdCreator(widgetId)),
});

export default connect(null, mapDispatchToProps)(Column);
