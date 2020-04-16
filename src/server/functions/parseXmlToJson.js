import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';

function translateColumnElements(elements) {
  return elements.map(({ attributes, name }) => ({
    ...attributes,
    id: uuidv4(),
    type: name.toLowerCase(),
  }));
}

function translateColumn(columns) {
  return columns.map(({ attributes, elements }) => ({
    ...attributes,
    id: uuidv4(),
    widgets: translateColumnElements(elements),
  }));
}

function translateRow(rows) {
  return rows.map(({ attributes, elements }) => ({
    ...attributes,
    id: uuidv4(),
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
    id: uuidv4(),
    rows: translateRow(elements),
  };
}
