it('Deve realizar um GET simples', () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2',
    }).then(res => {
        expect(res.status).to.be.equal(200)
        expect(res.body.data).is.not.empty
        expect(res.body.data[0]).to.have.property('id')
        expect(res.body.data[0]).to.have.property('email')
        expect(res.body.data[0]).to.have.property('first_name')
        expect(res.body.data[0]).to.have.property('last_name')
        expect(res.body.data[0]).to.have.property('avatar')
    })
})