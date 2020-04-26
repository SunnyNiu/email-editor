import convert from 'xml-js';

function translateColumnElements(elements) {
  return elements.map(({ attributes, name }) => ({
    ...attributes,
    children: [],
    type: name.toLowerCase(),
  }));
}

function translateColumn(columns) {
  return columns.map(({ attributes, elements }) => ({
    ...attributes,
    children: translateColumnElements(elements),
    type: 'widget',
  }));
}

function translateRow(rows) {
  return rows.map(({ attributes, elements }) => ({
    ...attributes,
    children: translateColumn(elements),
    type: 'column',
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
    children: translateRow(elements),
    type: 'row',
  };
}
