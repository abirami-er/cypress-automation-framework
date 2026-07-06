describe('API Testing', () => {

  it('Create User', () => {

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      headers: {
        'x-api-key': 'free_user_3Fw2Jx4yiR5cwFj3gXhybPXf4V6'
      },
      body: {
        name: 'Abi',
        job: 'QA Tester'
      }

    }).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body.job).to.eq('QA Tester')

    })

  })

})
describe('API Testing', () => {

  it('GET Users', () => {

    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      headers: {
        'x-api-key': 'free_user_3Fw2Jx4yiR5cwFj3gXhybPXf4V6'
      }
    }).then((response) => {

      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))

    })

  })

})