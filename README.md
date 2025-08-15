# eBay Search Automation with Cypress

## Overview
This project automates the following user flow on [eBay](https://www.ebay.com) using Cypress with the **Page Object Model (POM)** design pattern:

1. Navigate to `https://www.ebay.com/`
2. Validate that you have landed on the main page.
3. Search for `mazda mx-5`.
4. Validate the results obtained.
5. Print/log the number of obtained search results.
6. From the left-hand side filter, select **Transmission → Manual**.
7. Validate that results are filtered accordingly.

The project reads test data from an **external JSON file**, supports **custom commands**, and generates an **HTML report**.

---

## Project Structure
```
cypress/
  e2e/
    ebay/
      ebaySearch.cy.js          # Test spec file
  pages/
    homePage.js                 # Home page object
    resultsPage.js              # Results page object
  fixtures/
    testData.json               # External test data
  support/
    commands.js
    e2e.js
cypress.config.js               # Cypress configuration
package.json
README.md
```

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- npm (comes with Node.js)
- Git (if cloning from a repo)

---

## Installation
1. Clone the repository:
```bash
git clone https://github.com/asho30/ebay-cypress-automation.git
cd <your-project-folder>  (i.e. D:\ebay_cypress)
```

2. Install dependencies:
```bash
npm install
```

3. Install Cypress Mochawesome Reporter:
```bash
npm install cypress-mochawesome-reporter --save-dev
```

---

## Running Tests

### Open Cypress UI:
```bash
npx cypress open
```

### Run in Headless Mode with Report:
```bash
npx cypress run
```

---

## Test Data
Test data is stored in `cypress/fixtures/testData.json`:
```json
{
  "baseUrl": "https://www.ebay.com",
  "searchTerm": "mazda mx-5",
  "filter": {
    "transmission": "Manual"
  }
}
```

You can easily change values here without modifying test code.

---

## Reports
This project uses **cypress-mochawesome-reporter** to generate HTML reports.

### To view the report:
1. After running tests in headless mode, merge JSON reports:
```bash
npx mochawesome-merge cypress/reports/*.json > report.json
```
2. Generate HTML report:
```bash
npx mochawesome-report-generator report.json
```
3. Open `mochawesome-report/report.html` in your browser.

---

## Video Proof
To record your test execution:
- ebay_demo.mp4 in the repo
- Show:
  - Running the test.
  - Cypress browser actions.
  - Generated HTML report.

---

## Author
Ahmed Ashour
