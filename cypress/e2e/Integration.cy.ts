describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3001/auth/login");
  });
});

describe("my first test", () => {
  it("Does not do much", () => {
    expect(true).to.equal(true);
  });
  // it("Does not do much", () => {
  //   expect(true).to.equal(false);
  // });
});

describe("flow", () => {
  it("contains email", () => {
    cy.contains("email");
  });
  it("contains password", () => {
    cy.contains("pwd");
  });

  it("success login", () => {
    const user = { email: "123@123", password: "abc123" };
    cy.findByLabelText(/email/i).type(user.email);
    cy.findByLabelText(/password/i).type(user.password);
    cy.findByRole("button", { name: /login/i }).click();

    cy.url().should("eq", "http://localhost:3001/");
  });
});
