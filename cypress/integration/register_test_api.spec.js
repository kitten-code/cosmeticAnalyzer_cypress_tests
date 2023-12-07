import { fakeDataGenerator } from "../helpers/loginData";
import 'cypress-plugin-api'


describe('Register and Login API testing', () => {
    const data = fakeDataGenerator();

    context('Registration', () => {
        it('Should register a new user successfully', () => {
            cy.request({
                method: 'POST',
                url: `http://localhost:8080/identity/register`,
                body: {
                    'email': data[0].email,
                    'password': data[0].password
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
            })
        });

        // it('Create an account', () => {
        //     cy.request("POST", "http://localhost:8080/identity/register", {
        //         'email': data[1].email,
        //         'password': data[1].password
        //     }).then((response) => {
        //         expect(response.status).eq(201);
        //     })
        // })

        it(' Should fail to register with an existing email', () => {
            cy.request({
                method: 'POST',
                url: `http://localhost:8080/identity/register`,
                body: {
                    'email': data[0].email,
                    'password': data[0].password
                }, failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
            })

        })

        it('Should fail to register with invalid data', () => {
            cy.request({
                method: 'POST',
                url: `http://localhost:8080/identity/register`,
                body: {
                    'email': ".",
                    'password': " "
                }, failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
            })
            //check the response code 
        })
    });

    context('Login', () => {

        it('Should log in a user successfully', () => {
            cy.request({
                method: 'POST',
                url: `http://localhost:8080/identity/login`,
                body: {
                    'email': data[0].email,
                    'password': data[0].password
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
            })
        });

        it('Should fail to log in with non-existing user', () => {
            cy.request({
                method: 'POST',
                url: `http://localhost:8080/identity/login`,
                body: {
                    'email': data[2].email,
                    'password': data[2].password
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404);
            })
        });

        it('Should fail to log in with incorrect password', () => {
            cy.request({
                method: 'POST',
                url: `http://localhost:8080/identity/login`,
                body: {
                    'email': data[0].email,
                    'password': data[2].password
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
            })
        });

    });
});
