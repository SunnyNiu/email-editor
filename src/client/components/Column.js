/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from './Image';
import Text from './Text';

const Column = ({ column }) => {
  const widgetComponentMap = {
    text: Text,
    image: Image,
  };

  return column.widgets.map((widget, index) => {
    const Widget = widgetComponentMap[widget.type];

    // eslint-disable-next-line react/jsx-props-no-spreading
    // eslint-disable-next-line react/no-array-index-key
    return <Widget {...widget} key={index} />;
  });
};

export default Column;
