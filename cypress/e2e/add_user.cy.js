describe("Add user form", () => {
  it("fills out the form and submits it", () => {
    cy.viewport(window.screen.width, window.screen.height);

    // Open the page
    cy.visit("index.html");

    cy.wait(2000);

    // Populate the first name field
    cy.get("#first_name_input_id").should("be.visible").type("Jack");

    // Populate the last name field
    cy.get("#last_name_input_id").should("be.visible").type("Black");

    cy.wait(2000);

    // Click the Add User button
    cy.get("#add_user").should("be.enabled").click();

    cy.wait(3000);

    // Populate the first name field
    cy.get("#first_name_input_id").should("be.visible").type("Dianne");

    // Populate the last name field
    cy.get("#last_name_input_id").should("be.visible").type("Keaton");

    cy.wait(2000);

    // Click the Add User button
    cy.get("#add_user").should("be.enabled").click();

    cy.wait(3000);

    // Populate the first name field
    cy.get("#first_name_input_id").should("be.visible").type("Claudia");

    // Populate the last name field
    cy.get("#last_name_input_id").should("be.visible").type("Black");

    cy.wait(2000);

    // Click the Add User button
    cy.get("#add_user").should("be.enabled").click();

    cy.wait(3000);

    cy.get("#2").should("be.visible").click();

    cy.wait(3000);

    // Populate the first name field
    cy.get("#first_name_input_id").should("be.visible").type("Betty");

    // Populate the last name field
    cy.get("#last_name_input_id").should("be.visible").type("Boop");

    cy.wait(2000);

    // Click the Add User button
    cy.get("#add_user").should("be.enabled").click();

    cy.wait(3000);

    // Populate the first name field
    cy.get("#first_name_input_id").should("be.visible").type("Bill");

    // Populate the last name field
    cy.get("#last_name_input_id").should("be.visible").type("Goat");

    cy.wait(2000);
    //
    // Click the Add User button
    cy.get("#add_user").should("be.enabled").click();

    cy.wait(3000);

    cy.get("#1").should("be.visible").click();

    cy.wait(2000);

    cy.get("#2").should("be.visible").click();

    cy.wait(2000);

    cy.get("#3").should("be.visible").click();
  });
});

