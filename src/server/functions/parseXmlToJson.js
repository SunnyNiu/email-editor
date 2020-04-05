import convert from 'xml-js';
import fs from 'fs';

function translateColumnElements(elements) {
  return elements.map(element => {
    const obj = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(element.attributes)) {
      obj[`${key}`] = value;
    }
    return obj;
  });
}

function translateColumn(columns) {
  return columns.map(column => ({
    width: column.attributes.width,
    widgets: translateColumnElements(column.elements),
  }));
}

function translateRow(rows) {
  return rows.map(row => ({
    width: row.attributes.width,
    columns: translateColumn(row.elements),
  }));
}

fs.readFile('src/xml/breakfast.xml', (err, data) => {
  if (err) throw err;
  const result = convert.xml2json(data, {
    compact: false,
    spaces: 4,
  });
  const section = JSON.parse(result).elements[0];
  const sectionWithIdIcon = section.attributes;
  const rows = translateRow(section.elements);
  const json = {
    ...sectionWithIdIcon,
    rows,
  };
  console.log('section', JSON.stringify(json, null, 2));
});
