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

function removeIdFromWidgets(widgets) {
  widgets.forEach(widget => {
    // eslint-disable-next-line no-param-reassign
    delete widget.id;
  });
  return widgets;
}

function removeIdFromColumn(columns) {
  columns.forEach(column => {
    // eslint-disable-next-line no-param-reassign
    delete column.id;
    removeIdFromWidgets(column.widgets);
  });
  return columns;
}

function removeIdFromRow(rows) {
  rows.forEach(row => {
    // eslint-disable-next-line no-param-reassign
    delete row.id;
    removeIdFromColumn(row.columns);
  });

  return rows;
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

    // verify the json contain id
    expect(json.id).toBeTruthy();

    // verify each row contain id
    json.rows.forEach(row => expect(row.id).toBeTruthy());

    // verify each column contain id
    json.rows.forEach(row =>
      row.columns.forEach(column => expect(column.id).toBeTruthy())
    );

    // verify each widget contain id
    json.rows.forEach(row =>
      row.columns.forEach(column =>
        column.widgets.map(widget => expect(widget.id).toBeTruthy())
      )
    );

    const jsonWithoutUuid = {
      name: json.name,
      icon: json.icon,
      rows: removeIdFromRow(json.rows),
    };
    expect(jsonWithoutUuid).toEqual(expected);
  });
});
