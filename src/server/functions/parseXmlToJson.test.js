import { translateSection } from './parseXmlToJson';

const xml = `<?xml version='1.0' encoding='utf-8'?>
<Section name="32" icon="icon_1">
   <Row width="4">
      <Column width="36">
       <Text text="button"/>
       <Image src="./abc.png"/>
      </Column> 
   </Row>
</Section>`;

function translateColumnElements(widgets) {
  widgets.forEach(widget => {
    // eslint-disable-next-line no-param-reassign
    delete widget.id;
  });
  return widgets;
}

function translateColumn(columns) {
  return columns.map(({ width, widgets }) => ({
    width,
    widgets: translateColumnElements(widgets),
  }));
}

function translateRow(rows) {
  return rows.map(({ width, columns }) => ({
    width,
    columns: translateColumn(columns),
  }));
}

describe('convert xml to json', () => {
  it('convert xml to json', () => {
    const expected = {
      name: '32',
      icon: 'icon_1',
      rows: [
        {
          width: '4',
          columns: [
            {
              width: '36',
              widgets: [
                { type: 'text', text: 'button' },
                { type: 'image', src: './abc.png' },
              ],
            },
          ],
        },
      ],
    };

    const json = translateSection(xml);
    const jsonWithoutUuid = {
      name: json.name,
      icon: json.icon,
      rows: translateRow(json.rows),
    };
    expect(jsonWithoutUuid).toEqual(expected);
  });
});
