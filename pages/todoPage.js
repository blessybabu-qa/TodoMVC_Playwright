import { expect } from '@playwright/test';

export class todoPage {
    constructor(page) {
        this.page = page;
        this.todoInput = page.getByTestId('text-input');
        this.allFilter = page.getByRole('link', { name: 'All' });
        this.activeFilter = page.getByRole('link', { name: 'Active' });
        this.completedFilter = page.getByRole('link', { name: 'Completed' });
        this.clearCompleted = page.getByRole('button', { name: 'Clear completed' });
        this.checkBox = page.getByTestId('todo-item-toggle');
        this.completedCheckBox = page.locator('li.completed');

        // FIX: Change '.todo-list' (the container) to '.todo-list li' (the items)
        this.todoItems = page.locator('.todo-list li');
        this.addedTodos = [];
    }

    async gotoTodoMvcUrl() {
        await this.page.goto('https://todomvc.com/');
    }

    async clickReactOption() {
        await this.page.goto('https://todomvc.com/examples/react/dist/');
    }

    async clickInputOption() {
        // FIX: Removed .page.
        await this.todoInput.click();
    }

    async addMultipleTodos(todoList) {
        for (const item of todoList) {
            await this.todoInput.fill(item);
            await this.todoInput.press('Enter');
            this.addedTodos.push(item);
        }
    }

    async verifyTodosAreVisible() {
        // Compare the UI list against our stored array
        await expect(this.todoItems).toHaveText(this.addedTodos);
    }

    async checkRandomAndReturnName() {
        const totalItems = await this.todoItems.count();
        const randomIndex = Math.floor(Math.random() * totalItems);
        const todoName = await this.todoItems.nth(randomIndex).textContent();


        await this.checkBox.nth(randomIndex).click();
        return todoName.trim();
    }

    async clickCompletedOption() {

        await this.completedFilter.click();
    }

    async verifyCompletedNameVisible(name) {
        const completedItemByName = this.page.locator('li.completed', { hasText: name });
        await expect(completedItemByName).toBeVisible();
    }

    async clickClearCompleted() {
       await this.clearCompleted.click();
    }

    async verifyCompletedDeleted() {
        const completedItems = this.completedCheckBox;
        await expect(completedItems).toHaveCount(0);
    }

    async clickActiveOption() {

        await this.activeFilter.click();
    }

    async verifyActiveContent() {
        await expect(this.todoItems).not.toHaveCount(0);
    }

    async clickAllOption() {
        await this.allFilter.click();
    }

    async verifyRemainingCount(expectedCount) {
        const items = this.todoItems;
        await expect(items).toHaveCount(expectedCount);
    }
}