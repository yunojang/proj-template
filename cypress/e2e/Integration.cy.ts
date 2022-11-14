describe("visite", () => {
    it("page visite", () => {
        cy.visit("http://localhost:3000/auth/login");
    });
});

// describe("my first test", () => {
//     it("Does not do much", () => {
//         expect(true).to.equal(true);
//     });
//     // it("Does not do much", () => {
//     //   expect(true).to.equal(false);
//     // });
// });
const user = { email: "hi@hi.com", password: "hihi" };

describe("flow", () => {
    it("login", () => {
        cy.findByLabelText(/email/i).type(user.email);
        cy.findByLabelText(/password/i).type(user.password);
        cy.findByRole("button", { name: /login/i }).click();

        cy.url().should("eq", "http://localhost:3000/");
    });

    it("start app", () => {
        cy.findByRole("button", { name: /start/i }).click();

        cy.url().should("eq", "http://localhost:3000/user");
    });
});
