const list = [
    {
        name: 'Create a post',
        status: 'In Progress',
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
    DONE: 'Done',
    DEFAULT: 'To Do'
}

const PRIORITY = {
    LOW_PRIORITY: 'Low',
    HIGH_PRIORITY: 'High',
    DEFAULT: 'Low'
}

function addTask(task) {
    const NEW_TASK = {
        name: task,
        status: STATUS.DEFAULT,
        priority: PRIORITY.DEFAULT
    }
    list.push(NEW_TASK);
}

function deleteTask (task) {
    const indexOfCurrentTask = list.findIndex(item => item.name === task)
    list.splice(indexOfCurrentTask,1)
}

function changeStatus (task, newStatus) {
    const indexOfCurrentTask = list.findIndex(item => item.name === task);
    list[indexOfCurrentTask].status = newStatus;
}

function showBy(isSort) {
    let key;
    let highPriorityTasks = '';
    let lowPriorityTasks = '';
    let todoTasks = '';
    let inProgressTasks = '';
    let doneTasks = '';
    let noTasks = `\n -`;
    if (isSort === 'priority') {
        for (key of list) {
            if (key.priority === PRIORITY.HIGH_PRIORITY) {
                highPriorityTasks += `\n "${key.name}"`;
            } else if (key.priority === PRIORITY.LOW_PRIORITY) {
                lowPriorityTasks += `\n "${key.name}"`;
            }
        }
        console.log(PRIORITY.HIGH_PRIORITY + ':' + (highPriorityTasks || noTasks));
        console.log(PRIORITY.LOW_PRIORITY + ':' + (lowPriorityTasks || noTasks));
    } else if (isSort === 'status') {
        for (key of list) {
            if (key.status === STATUS.TO_DO) {
                todoTasks += `\n "${key.name}"`;
            } else if (key.status === STATUS.IN_PROGRESS) {
                inProgressTasks += `\n "${key.name}"`;
            } else if (key.status === STATUS.DONE) {
                doneTasks += `\n "${key.name}"`;
            }
        }
        console.log(STATUS.TO_DO + ':' + (todoTasks || noTasks));
        console.log(STATUS.IN_PROGRESS + ':' + (inProgressTasks || noTasks));
        console.log(STATUS.DONE + ':' + (doneTasks || noTasks));
    }
}
// addTask('Hello')
// addTask('Buy a beer')
// addTask('Walk a dog')
// deleteTask('Say Hi')
// deleteTask('Test')
// deleteTask('Hello')
// deleteTask('Create a post')
// changeStatus('Hello', 'Done')
// changeStatus('Hello', 'In Progress')
showBy('status')
showBy('priority')
