A modern, scalable E2E testing framework for the [TodoMVC](https://todomvc.com/) application. This project demonstrates advanced **Page Object Model (POM)** patterns and the use of **semantic locators** for resilient automation.

## 🚀 Key Features
- **Page Object Model (POM):** Clean separation between test logic and UI locators.
- **Resilient Locators:** Specialized use of `getByTestId` and `getByRole` to mimic user behavior and ensure stability.
- **Dynamic Assertions:** Leveraging Playwright's auto-awaiting assertions (`expect`).
- **Data-Driven:** Support for bulk todo creation and state-based validation.

## 🛠️ Tech Stack
- **Engine:** [Playwright](https://playwright.dev/)
- **Language:** JavaScript (ES6+)
- **Test Runner:** Playwright Test

## 📂 Project Structure
- **pages/** - Robust Page Objects using semantic locators.
- **tests/** - Clean, readable E2E test scenarios.
- **playwright.config.js** - Framework configuration.

## 🧪 Included Scenarios
1. **Creation:** Adding single and multiple todos.
2. **Filtering:** Verifying "Active", "Completed", and "All" views.
3. **Management:** Completing tasks and clearing the completed list.
4. **Validation:** UI state sync with internal data tracking.

## 🏁 Quick Start
1. Clone the repo: `git clone https://github.com/blessybabu-qa/TodoMVC_Playwright.git`
2. Install dependencies: `npm install`
3. Run tests: `npx playwright test`

---
*Created with ❤️ by Blessy Babu — Passionate about high-quality automation.*
