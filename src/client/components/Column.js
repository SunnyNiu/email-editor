/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from './Image';
import Text from './Text';

const Column = ({ column }) => {
  const widgetComponentMap = {
    text: Text,
    image: Image,
  };

  return column.widgets.map(widget => {
    const Widget = widgetComponentMap[widget.type];
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Widget {...widget} key={widget.id} />;
  });
};

export default Column;
