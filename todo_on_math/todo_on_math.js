const list = [
    {
        name: 'Create a post',
        status: 'In progress',
        priority: 'Low',
    },
    {
        name: 'Test',
        status: 'Done',
        priority: 'High',
    },
    {
        name: 'Say Hi',
        status: 'To Do',
        priority: 'Low',
    }
]

const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done:',
    DEFAULT: 'To Do'
}

const PRIORITY = {
    LOW_PRIORITY: 'Low',
    HIGH_PRIORITY: 'High',
    DEFAULT: 'None'
}

const NEW_TASK = {
    name: '',
    status: STATUS.DEFAULT,
    priority: PRIORITY.DEFAULT
}

function addTask(task, priority = PRIORITY.DEFAULT) {
    list.push(NEW_TASK);
    NEW_TASK.name = task;
    NEW_TASK.priority = priority;
}

function deleteTask (task) {
    const indexOfCurrentTask = list.findIndex(item => item.name === task)
    list.splice(indexOfCurrentTask,1)
}

function changeStatus (task, newStatus) {
    const indexOfCurrentTask = list.findIndex(item => item.name === task);
    list[indexOfCurrentTask].status = newStatus;
}

function showList() {
    let todoTasks = '';
    let inProgressTasks = '';
    let doneTasks = '';
    let noTasks = `\n -`;
    for (let key of list) {
        if (key.status === STATUS.IN_PROGRESS) {
            todoTasks += `\n "${key.name}"`;
        } else if (key.status === STATUS.IN_PROGRESS) {
            inProgressTasks += `\n "${key.name}"`;
        } else if (key.status === STATUS.DONE) {
            doneTasks += `\n "${key.name}"`;
        }
    }
    console.log(STATUS.TO_DO + (todoTasks || noTasks));
    console.log(STATUS.IN_PROGRESS + (inProgressTasks || noTasks));
    console.log(STATUS.DONE + (doneTasks || noTasks));
}
console.log(list);
showList()

addTask('Hello')
console.log(list);

deleteTask('Say Hi')
console.log(list);

changeStatus('Hello', 'Done')
console.log(list);
