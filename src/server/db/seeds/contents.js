exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('contents')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('contents').insert([
        {
          id: 1,
          text:
            '[' +
            '{"id":"section_1","icon":"section_1_image.jpg","rows":[{"width":"6","columns":[{"width":"3","widgets":[{"text":"section_1_text","type":"text"},{"src":"section_1_image","type":"image"},{"text":"section_2_text","type":"text"}]},{"width":"3","widgets":[{"text":"section_1_c_text","type":"text"},{"src":"section_1__c_image","type":"image"}]}]},{"width":"6","columns":[{"width":"6","widgets":[{"text":"section_2_text","type":"text"},{"src":"section_2_image","type":"image"}]}]}]}' +
            ',' +
            '{"id":"section_2","icon":"section_2_image.jpg","rows":[{"width":"6","columns":[{"width":"3","widgets":[{"text":"section_4_text","type":"text"},{"src":"section_4_image","type":"image"},{"text":"section_4_text","type":"text"}]},{"width":"3","widgets":[{"text":"section_4_c_text","type":"text"},{"src":"section_4__c_image","type":"image"}]}]},{"width":"6","columns":[{"width":"6","widgets":[{"text":"section_4_text","type":"text"},{"src":"section_4_image","type":"image"}]}]}]}' +
            ']',
          userId: '1',
        },
      ]);
    });
};
