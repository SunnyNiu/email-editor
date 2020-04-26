import convert from 'xml-js';

function translateColumnElements(elements) {
  return elements.map(({ attributes, name }) => ({
    ...attributes,
    children: [],
    type: name.toLowerCase(),
  }));
}

function translateColumn(columns) {
  return columns.map(({ attributes, elements, name }) => ({
    ...attributes,
    children: translateColumnElements(elements),
    type: name.toLowerCase(),
  }));
}

function translateRow(rows) {
  return rows.map(({ attributes, elements, name }) => ({
    ...attributes,
    children: translateColumn(elements),
    type: name.toLowerCase(),
  }));
}

export function translateSection(xml) {
  const section = convert.xml2js(xml, {
    compact: false,
    spaces: 4,
  }).elements[0];
  const { attributes, elements, name } = section;
  return {
    ...attributes,
    children: translateRow(elements),
    type: name.toLowerCase(),
  };
}
