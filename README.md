A modern, scalable E2E testing framework for the [TodoMVC](https://todomvc.com/) application. This project demonstrates advanced **Page Object Model (POM)** patterns and the use of **semantic locators** for resilient automation.

## 🚀 Key Features

* **Page Object Model (POM):** Clean separation between test logic and UI locators.
* **API Testing:** Integration tests using `JSONPlaceholder` to demonstrate `POST` and `DELETE` requests for task management.
* **Dynamic Data Generation:** Integration with **Faker.js** to generate realistic, unique todo titles for every test run, preventing data collisions.
* **Resilient Locators:** Specialized use of `getByTestId` and `getByRole` to mimic actual user behavior.
* **Parallel Execution:** Configured for high-speed execution; tests are **independent** and run in parallel (not serial) to simulate real-world CI/CD environments.

## 🛠️ Tech Stack

* **Engine:** [Playwright](https://playwright.dev/)
* **Data:** [@faker-js/faker](https://fakerjs.dev/)
* **API Mocking:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
* **Language:** JavaScript (ES6+)

## 📂 Project Structure

- **pages/** - Robust Page Objects using semantic locators.
- **tests/** - Combined suite of UI (`.spec.js`) and API (`apitodo.spec.js`) scenarios.
- **playwright.config.js** - Framework configuration optimized for parallel workers.

## 🧪 Included Scenarios

1. **Creation:** Adding single and multiple todos using  **Faker.js** .
2. **Filtering:** Verifying "Active", "Completed", and "All" views.
3. **Management:** Completing tasks and clearing the completed list.
4. **Validation:** UI state sync with internal data tracking.

### API Scenarios

1. **Create Task:** `POST` request to create a todo and verify the `201 Created` status.
2. **Delete Task:** `DELETE` request using dynamic IDs to verify successful resource removal.

## 🏁 Quick Start

1. Clone the repo: `git clone https://github.com/blessybabu-qa/TodoMVC_Playwright.git`
2. Install dependencies: `npm install`
3. Run tests: `npx playwright test`

---

*Created with ❤️ by Blessy Babu — Passionate about high-quality automation.*
