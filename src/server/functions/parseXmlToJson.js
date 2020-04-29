import convert from 'xml-js';

function translateToJson({ attributes, elements, name }) {
  return {
    ...attributes,
    children: (elements || []).map(e => translateToJson(e)),
    type: name.toLowerCase(),
  };
}

export function translateSection(xml) {
  const section = convert.xml2js(xml, {
    compact: false,
    spaces: 4,
  }).elements[0];
  return translateToJson(section);
}
