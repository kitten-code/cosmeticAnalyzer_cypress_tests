import { faker } from '@faker-js/faker';

export const fakeDataGenerator = () => {
    return [
        {
            email: faker.internet.email(),
            password: faker.internet.password(),
        },
        {
            email: faker.internet.email(),
            password: faker.internet.password(),
        },
        {
            email: faker.internet.email(),
            password: faker.internet.password(),
        },
        // Add more users as needed
    ];
}