# TodoMVC Test Project

This project uses **Playwright** to test the TodoMVC website. 

## How to setup
1. **Clone the project:**
   git clone https://github.com/blessybabu-qa/TodoMVC_Playwright.git

2. **Install everything:**
   npm install
   npx playwright install

## How to run the tests
To see the browser and run the tests slowly, use this command:

npx playwright test --project=chromium --headed --workers=1 

## Project Folders
* **pages/** - This folder has the code for finding buttons and typing text and verifying.
* **tests/** - This folder has the actual test steps.
