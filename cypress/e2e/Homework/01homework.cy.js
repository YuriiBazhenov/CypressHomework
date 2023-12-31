
describe("Homework", () => {

  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");


    const text = ['Contact Us', '2860 S River Rd Suite 480, Des Plaines, IL 60018', 'info@techglobalschool.com', '(773) 257-3010']
    cy.get('div > .mb-5').children().each(($el, index) => {
      cy.wrap($el).should('have.text', text[index])
    })

  })

  it("Test Case 02 - Validate the Full name input box", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");



    cy.get(':nth-child(1) > .control > .input').should('be.visible').and('have.attr', 'required')
    cy.get('form > :nth-child(1) > .label').should('have.text', 'Full name *')
    cy.get('input[placeholder*="Enter your full name"]')

  })
          it('Test Case 03 - Validate the Gender Radio Button', () => {
  
            cy.visit('https://techglobal-training.com/frontend/project-1');
        
            /**
             * Navigate to https://techglobal-training.com/frontend/project-1
            Validate the label is "Gender *"
            Validate that the Gender is required // BUG 
            Validate the options are "Female", "Male" and "Prefer not to disclose"
            Validate the options are clickable and not selected
            Click on the "Male" option and validate it is selected while the others are not selected
            Click on the "Female" option and validate it is selected while the others are not selected
             */
        
        
            cy.get('.control > .label').should('have.text', 'Gender *') // .and('have.attr', 'required')
        
            const expectedTexts = ['Male', 'Female', 'Prefer not to disclose']
        
            cy.get('.control > [class*="radio"]').each(($el, index) => {
              cy.wrap($el).should('have.text', expectedTexts[index])
            })
        
            cy.get('.mr-1').should('be.visible').and('be.enabled')
      
            cy.checkOptionAndValidateOthers('Male', expectedTexts)
            cy.checkOptionAndValidateOthers('Female', expectedTexts)
      
    
          })


  

  const testCases =
    [
      {
        testName: 'Validate the Address input box',
        label: 'Address',
        placeholder: 'Enter your address',
        required: false
      },
      {
        testName: 'Validate the Email input box',
        label: 'Email *',
        placeholder: 'Enter your email',
        required: true
      },
      {
        testName: 'Validate the Phone input box',
        label: 'Phone',
        placeholder: 'Enter your phone number',
        required: false
      },
      {
        testName: 'Validate the Massage input box',
        label: 'Message',
        placeholder: 'Type your message here...',
        required: false
      }
    ]


  testCases.forEach((test, index) => {
    it(`Test Case 0${index + 4} ${test.testName}`, () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");

      cy.get('.label').contains(test.label).should('have.text', test.label)

      cy.contains('.label', test.label).should('have.text', test.label)
      cy.contains('.label', test.label).parent().find('input, textarea').should('be.visible')
        .and('have.attr', 'placeholder', test.placeholder)
        .and(test.required ? 'have.attr' : 'not.have.attr', 'required')

    })

  })


  it("Test Case 08 - Validate the Consent checkbox", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");


    cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
    cy.get('.checkbox > input').click().should('be.checked').click().should('not.be.checked').should('have.attr', 'required')


  })

  it("Test Case 09 - Validate the SUBMIT button", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");

    cy.get('div > .control .button').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT')

  })

  it("Test Case 10 - Validate the form submission", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");


    const data = ['John Doe', '2860 S River Rd Suite 480, Des Plaines, IL 60018', 'johndoe@gmail.com', '(773) 777 7777', 'Good luck, have fun!']

    cy.get('form > div > div > .input,textarea').each(($el, index) => {
      cy.wrap($el).type(data[index]);
    })

    cy.get(':nth-child(2) > .mr-1').click()
    cy.get('.checkbox > input').click()
    cy.get('div > .control .button').realClick()
    Cypress.on('uncaught:exception', () => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.get('.mt-5').should('have.text', 'Thanks for submitting!')

  })

})