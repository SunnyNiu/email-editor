import convert from 'xml-js';
import { readFile } from './util';

function translateColumnElements(elements) {
  return elements.map(({ attributes, name }) => {
    const obj = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(attributes)) {
      obj.type = name.toLowerCase();
      obj[key] = value;
    }
    return obj;
  });
}

function translateColumn(columns) {
  return columns.map(({ attributes, elements }) => ({
    ...attributes,
    widgets: translateColumnElements(elements),
  }));
}

function translateRow(rows) {
  return rows.map(({ attributes, elements }) => ({
    ...attributes,
    columns: translateColumn(elements),
  }));
}

export function translateSection(xml) {
  const section = convert.xml2js(xml, {
    compact: false,
    spaces: 4,
  }).elements[0];
  const { attributes, elements } = section;
  return {
    ...attributes,
    rows: translateRow(elements),
  };
}

// readFile('src/xml/breakfast.xml', (err, data) => {
//   if (err) throw err;
//   const json = translateSection(data);
//   console.log('section', JSON.stringify(json, null, 2));
// });
