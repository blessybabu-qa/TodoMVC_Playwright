import { test, expect } from '@playwright/test';
import { todoPage } from '../pages/todoPage';
import { faker } from '@faker-js/faker';

test.describe('TodoMVC Functional Suite', () => {
    
    test.beforeEach(async ({ page }) => {
        const todo = new todoPage(page);
        // Common setup for every test
        await todo.gotoTodoMvcUrl();
        await todo.clickReactOption();
    });

    test('should allow a user to add multiple todo items', async ({ page }) => {
        const todo = new todoPage(page);
        const myTasks = [faker.commerce.productName(), faker.commerce.productName()];

        await todo.clickInputOption();
        await todo.addMultipleTodos(myTasks);
        await todo.verifyTodosAreVisible();
    });

    test('should display completed tasks in the completed filter', async ({ page }) => {
        const todo = new todoPage(page);
        const myTasks = [faker.commerce.productName()];

        // Arrange: Prepare state for THIS test specifically
        await todo.addMultipleTodos(myTasks);
        
        // Act
        const completedTaskName = await todo.checkRandomAndReturnName();
        await todo.clickCompletedOption();

        // Assert
        await todo.verifyCompletedNameVisible(completedTaskName);
    });

    test('should clear completed items from the list', async ({ page }) => {
        const todo = new todoPage(page);
        const myTasks = [faker.commerce.productName()];

        // Arrange
        await todo.addMultipleTodos(myTasks);
        await todo.checkRandomAndReturnName(); // Mark one as done
        await todo.clickCompletedOption();

        // Act
        await todo.clickClearCompleted();

        // Assert
        await todo.verifyCompletedDeleted();
    });

    test('should reflect the correct remaining count after deletion', async ({ page }) => {
        const todo = new todoPage(page);
        const myTasks = [faker.commerce.productName(), faker.commerce.productName()];

        // Arrange
        await todo.addMultipleTodos(myTasks);
        await todo.checkRandomAndReturnName(); // Complete 1 of 2
        
        // Act
        await todo.clickCompletedOption();
        await todo.clickClearCompleted();
        await todo.clickAllOption();

        // Assert: 2 tasks minus 1 cleared = 1 remaining
        await todo.verifyRemainingCount(1);
    });
});