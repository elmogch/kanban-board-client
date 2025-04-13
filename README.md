# React(TypeScript): Kanban Board

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/97621WK8mbCIlXh5p8aedw/kanban-medium.gif)

## Functionality Requirements

- The board contains 4 stages of tasks in sequence - 'Backlog', 'To Do', 'Ongoing' and 'Done'.

- The 'New Task Name' input should initially be empty. The user can type a task name in this input box and clicking on 'Create task' button should add a new task with this task name. This newly created task should be added to the Backlog stage (the first stage). Post this, clear the input field.

- If 'Create Task' button is clicked with input being empty, nothing should happen.

- In every individual stage, the tasks are rendered as a list `<ul>` where each task is a single list item `<li>` which displays the name of the task.
    
- Each task list item has 3 icon buttons at the right -
    1. Back button - This moves the task to the previous stage in sequence, if any. This button is disabled if the task is in the first stage.
    2. Forward button - This moves the task to the next stage in sequence, if any. This button is disabled if the task is in the last stage.
    3. Delete button - This removes the task from the board.

- Each task has 2 properties -
    1. name - name of task. This is the unique identification for every task. [STRING] 
    2. stage - stage of task [NUMBER] (0 represents Backlog stage, 1 represents To Do stage, 2 represents Ongoing stage, 3 represents Done stage).

- Taks list should be managed with an API
    1. The list should be fetched from /taks
    2. The list should be retrieved from the /taks route.
    3. When updating the task, a PUT will be performed to the /taks/:id route.
    4. When deleting the task, a DELETE will be performed to the /task/:id route.

- Refactor the application
    1. Separate the code into the components you consider necessary.
    2. Ensure each component has a clear responsibility and receives the appropriate props.
    3. Maintain the current functionality: adding, deleting, and moving tasks between columns.
    4. Add the ability to customize the background color of each column.
    5. Add the ability to customize the text color of each task by column.

## Project Specifications

**Read Only Files**
- src/App.test.tsx

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
