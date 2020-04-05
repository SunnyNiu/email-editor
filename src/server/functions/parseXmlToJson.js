import convert from 'xml-js';

function translateColumnElements(elements) {
  return elements.map(({ attributes, name }) => ({
    ...attributes,
    type: name.toLowerCase(),
  }));
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
