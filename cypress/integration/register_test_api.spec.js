
import 'cypress-plugin-api'

describe('Register API testing', () => {

    //POST stworzenie konta
    it('Create an account', () => {
        cy.request({
            method: 'POST',
            url: `http://localhost:8080/identity/register`,
            body: {
                'email': 'aleksandra16120+2@gmail.com',
                'password': 'qwerty123@'
            }
        })
    })
});
    // POST stworzenie konta z tymi samymi danymi (mailem)
