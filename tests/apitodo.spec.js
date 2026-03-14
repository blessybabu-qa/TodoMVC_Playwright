import { test, expect } from '@playwright/test';

test('API Task: Create and Delete Todo', async ({ request }) => {
    // 1. Use a REAL testing API (JSONPlaceholder)
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'; 
    const todoData = { title: 'API Task', body: 'API post test', userId: 1 };

    // --- ARRANGE: Create the task via POST ---
    const postResponse = await request.post(baseUrl, {
        data: todoData
    });

    // Verify 201 Created
    expect(postResponse.ok()).toBeTruthy();
    expect(postResponse.status()).toBe(201);

    const body = await postResponse.json();
    const taskId = body.id; 

    // --- ACT: Verify the data ---
    expect(body.title).toBe(todoData.title);
    console.log(`Created Task ID: ${taskId}`);

    // --- ASSERT: Delete the task ---
    const deleteResponse = await request.delete(`${baseUrl}/${taskId}`);

    // JSONPlaceholder returns 200 OK for successful DELETE
    expect(deleteResponse.status()).toBe(200); 
    
    console.log('Task deleted successfully via API');
});