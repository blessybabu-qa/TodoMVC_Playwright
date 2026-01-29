import { test, expect,chromium } from '@playwright/test'
import { todoPage } from '../pages/todoPage'

test.describe('TodoMVC Functional Suite', () => {
    let todo
    let page
    const myTasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
    let completedTaskName

    // Use serial mode because each test builds on the previous one
     test.describe.configure({ mode: 'serial' })

    test.beforeAll(async ({ browser }) => {

        const customBrowser = await chromium.launch({
        slowMo: 500,
        headless: false 
    });
       // 2. Create the page from this custom browser
    page = await customBrowser.newPage();
    todo = new todoPage(page);

        // 1. Go to URL
        await todo.gotoTodoMvcUrl()
        // 2. Click React option (per your method logic)
        await todo.clickReactOption()
    });

    test('Step 1: Add multiple todos and verify', async () => {
        await todo.clickInputOption()
        await todo.addMultipleTodos(myTasks)

        // Verify all 4 are visible
        await todo.verifyTodosAreVisible()
    });

    test('Step 2: Complete a random todo and verify in Completed filter', async () => {
        // Capture the name of the one we check
        completedTaskName = await todo.checkRandomAndReturnName()
        await todo.clickCompletedOption()

        // Verify the specific item moved to Completed
        await todo.verifyCompletedNameVisible(completedTaskName)
    });

    test('Step 3: Clear completed and verify deletion', async () => {
        // We are already on the Completed tab from the previous test
        await todo.clickClearCompleted()

        // Verify the completed list is now empty
        await todo.verifyCompletedDeleted()
    });

    test('Step 4: Click All and verify remaining active items', async () => {
        await todo.clickAllOption()

        // Verify that 3 items remain (since we cleared 1)
        const remainingCount = myTasks.length - 1
        await todo.verifyRemainingCount(remainingCount)
    });
});