import React from 'react';
import Image from './Image';
import Text from './Text';

const Column = ({ column }) => {
  return column.widgets.map((widget, index) =>
    widget.type === 'text' ? (
      // eslint-disable-next-line react/no-array-index-key
      <Text value={widget.text} key={index} />
    ) : (
      // eslint-disable-next-line react/no-array-index-key
      <Image src={widget.src} key={index} />
    )
  );
};

export default Column;
