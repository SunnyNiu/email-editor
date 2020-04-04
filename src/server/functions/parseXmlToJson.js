import convert from 'xml-js';
import isArray from 'lodash/isArray';
import fs from 'fs';

function translateColumn(column) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    ...column._attributes,
    widgets: [
      ...(isArray(column.Text) ? column.Text : [column.Text]).map(x => ({
        type: 'text',
        text: x._attributes.text,
      })),
      ...(isArray(column.Image) ? column.Image : [column.Image]).map(x => ({
        type: 'image',
        src: x._attributes.src,
      })),
    ],
  };
}

function translateRow(row) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    ...row._attributes,
    columns: (isArray(row.Column) ? row.Column : [row.Column]).map(
      translateColumn
    ),
  };
}

fs.readFile('src/xml/breakfast.xml', (err, data) => {
  if (err) throw err;
  const result = convert.xml2json(data, { compact: true, spaces: 4 });
  const sectionWithAttribute = JSON.parse(result).Section;
  const section = {
    // eslint-disable-next-line no-underscore-dangle
    ...sectionWithAttribute._attributes,
    rows: (isArray(sectionWithAttribute.Row)
      ? sectionWithAttribute.Row
      : [sectionWithAttribute.Row]
    ).map(translateRow),
  };
  console.log(JSON.stringify(section, null, 2));
});
