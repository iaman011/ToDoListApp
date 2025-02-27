# To-Do List Application
   DEPLOYMENT LINK: https://to-do-list-app-iaman011s-projects.vercel.app/

This is a simple To-Do List application built using HTML, CSS, and JavaScript. It allows users to add, edit, delete, and persist tasks using local storage.

## Features

1. **Add Tasks**: Users can add tasks to their to-do list.
2. **Edit Tasks**: Users can edit existing tasks.
3. **Delete Tasks**: Users can remove tasks from their to-do list.
4. **Local Storage Integration**: The application saves tasks in the browser's local storage, ensuring data persistence across sessions.

## How It Works

### 1. Adding a Task
- Enter the task description in the input box.
- Click the **Add** button to add the task to the list.
- If the input box is empty, an alert is shown prompting the user to type something.

### 2. Editing a Task
- Click the **Edit** button next to a task.
- The task text is moved to the input box for editing.
- Make changes and click the **Edit** button (which temporarily replaces the **Add** button).

### 3. Removing a Task
- Click the **Remove** button next to a task to delete it.

### 4. Local Storage
- Tasks are stored in the browser's local storage.
- Tasks persist even after refreshing the page or closing and reopening the browser.

## Code Overview

### HTML Structure
- **Input Box**: For entering task descriptions.
- **Add Button**: Adds tasks to the list.
- **Task List**: Displays tasks with options to edit or remove them.

### JavaScript Functionality

#### Global Variables
- `editTodo`: Tracks the task being edited.

#### Functions

1. **`addtodo()`**
   - Adds a task to the list.
   - Creates HTML elements (`li`, `p`, buttons) dynamically.
   - Saves tasks to local storage.
   - Handles switching the button from **Add** to **Edit** during task editing.

2. **`updatetodo(e)`**
   - Handles edit and delete actions for tasks.
   - Updates the input box and button state for editing.
   - Removes tasks from the list and local storage.

3. **`saveLocalTodos(todo)`**
   - Saves tasks to local storage.

4. **`getLocalTodos()`**
   - Retrieves tasks from local storage and displays them on the page.

5. **`deleteLocalTodos(todo)`**
   - Deletes a task from local storage.

6. **`editLocalTodos(todo)`**
   - Updates a task in local storage during editing.

### Event Listeners
- **DOMContentLoaded**: Loads tasks from local storage when the page loads.
- **Add Button**: Triggers the `addtodo()` function.
- **Task List**: Listens for clicks on **Edit** and **Remove** buttons.

## Browser Compatibility
- This application works on modern browsers that support local storage.
- Ensure JavaScript is enabled in the browser.
