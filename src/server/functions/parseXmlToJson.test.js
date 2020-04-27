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

describe('convert xml to json', () => {
  it('convert xml to json', () => {
    const expected = {
      name: '32',
      icon: 'icon_1',
      children: [
        {
          width: '4',
          children: [
            {
              width: '36',
              children: [
                { type: 'text', text: 'button', children: [] },
                { type: 'image', src: './abc.png', children: [] },
              ],
              type: 'column',
            },
          ],
          type: 'row',
        },
      ],
      type: 'section',
    };

    const json = translateSection(xml);

    expect(json).toEqual(expected);
  });
});
