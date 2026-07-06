describe('GET Users API', () => {

  it('Get all users', () => {

    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com//users'
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.length).to.eq(10);
      expect(response.body[0].name).to.eq('Leanne Graham');

    });

  });

});
describe('POST API', () => {

  it('Create new post', () => {

    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'API Testing',
        body: 'Learning Cypress',
        userId: 1
      }
    }).then((response) => {

      expect(response.status).to.eq(201);
      expect(response.body.title).to.eq('API Testing');

    });

  });

});
describe('PUT API',()=>{
    it('create new put',()=>{
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
            id: 1,
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1
  }
}).then((response) => {

  expect(response.status).to.eq(200);
  expect(response.body.title).to.eq('Updated Title');

   });

  })

})
describe('DELETE API',()=>{
    it('crate new delete',()=>{
        cy.request({
          method: 'DELETE',
          url: 'https://jsonplaceholder.typicode.com/posts/1'
}).then((response) => {
expect(response.status).to.eq(200);

    })  
  })
})