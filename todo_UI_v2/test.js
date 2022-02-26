const tasksContainer = [
    {name: 'Вот вам и супер интересная тема. Вы наверняка заметили что ваши файлы ' +
            'с кодом становятся все объемнее, что хочется вынести некоторые вещи ' +
            'куда-то за пределы основной программы.',
        status: 'To Do',
        priority: 'High'},
    {name: 'Сверстать этот TODO list',
        status: 'To Do',
        priority: 'High'},
    {name: 'Начать делать задачу',
        status: 'To Do',
        priority: 'High'},
    {name: 'Посмотреть ютубчик',
        status: 'To Do',
        priority: 'Low'},
]

const NEW_TASK = document.getElementById('newTask')
const ADD_TASK = document.getElementById('addTask')
const NEW_TASK_LOW = document.getElementById('newTaskLow')
const ADD_TASK_LOW = document.getElementById('addTaskLow')
const CONTAINER = document.getElementById('tasksContainer')
const CONTAINER_LOW = document.getElementById('tasksContainerLow')
ADD_TASK.addEventListener('click', () => addTask(NEW_TASK.value))
ADD_TASK_LOW.addEventListener('click', () => addTaskLow(NEW_TASK_LOW.value))

const STATUS = {
    TO_DO: 'To Do',
    DONE: 'Done',
    DEFAULT: 'To Do'
}

const PRIORITY = {
    LOW_PRIORITY: 'Low',
    HIGH_PRIORITY: 'High',
}

function render () {
    CONTAINER.innerHTML = '';
    CONTAINER_LOW.innerHTML = '';
    for (let key of tasksContainer) {
        if (key.priority === PRIORITY.HIGH_PRIORITY) {
            CONTAINER.insertAdjacentHTML('beforeend',
                `<div class="content">
                 <div class="checkbox_size">
                    <div class="round">
                        <div class=""></div>
                    </div>
                </div>
                <a class="task">${key.name}</a>
                <button class="delete_task">&#10006</button>
                </div>`)
        } else if (key.priority === PRIORITY.LOW_PRIORITY) {
            CONTAINER_LOW.insertAdjacentHTML('beforeend',
                `<div class="content">
                <div class="checkbox_size">
                    <div class="round">
                        <div class=""></div>
                    </div>
                </div>
                <a class="task">${key.name}</a>
                <button class="delete_task">&#10006</button>
                </div>`)
        }
    }
    NEW_TASK.value = '';
    const DELETE_TASK = document.getElementsByClassName('delete_task')
    for (let deleteThisTask of DELETE_TASK) {
        deleteThisTask.addEventListener('click', () => deleteTask(deleteThisTask));
    }
    const CHECK_STATUS = document.getElementsByClassName('round')
    for (let checkThisTask of CHECK_STATUS) {
        checkThisTask.addEventListener('click', () => checkTask(checkThisTask));
    }
}
render();

function checkTask (checkThisTask) {
    const task = checkThisTask.parentElement.nextElementSibling.textContent;
    const indexOfCurrentTask = tasksContainer.findIndex(item => item.name === task);
    if (tasksContainer[indexOfCurrentTask].status === STATUS.TO_DO) {
        tasksContainer[indexOfCurrentTask].status = STATUS.DONE
        checkThisTask.firstElementChild.classList.add('round_in');
        checkThisTask.parentElement.parentElement.classList.add('background_done');
    } else {
        tasksContainer[indexOfCurrentTask].status = STATUS.TO_DO
        checkThisTask.firstElementChild.classList.remove('round_in');
        checkThisTask.parentElement.parentElement.classList.remove('background_done');
    }
    event.preventDefault();
}

function addTask(task) {
    if (!task) {
        alert('oops, an empty line!');
        NEW_TASK.value = '';
        event.preventDefault();
        return;
        }
    for (let item of tasksContainer) {
        if (item.name === task) {
            alert ('oops, there is already such a case');
            NEW_TASK.value = '';
            event.preventDefault();
            return;
        }
    }
    const ADD_NEW_TASK = {
        name: task,
        status: STATUS.DEFAULT,
        priority: PRIORITY.HIGH_PRIORITY
    }
    tasksContainer.push(ADD_NEW_TASK);
    NEW_TASK.value = '';
    render();
    event.preventDefault();
}

function addTaskLow(task) {
    if (!task) {
        alert('oops, an empty line!')
        NEW_TASK_LOW.value = '';
        event.preventDefault();
        return;
    }
    for (let item of tasksContainer) {
        if (item.name === task) {
            alert ('oops, there is already such a case');
            NEW_TASK_LOW.value = '';
            event.preventDefault();
            return;
        }
    }
    const ADD_NEW_TASK = {
        name: task,
        status: STATUS.DEFAULT,
        priority: PRIORITY.LOW_PRIORITY
    }
    tasksContainer.push(ADD_NEW_TASK);
    NEW_TASK_LOW.value = '';
    render();
    event.preventDefault();
}

function deleteTask(deleteThisTask) {
    const thisTask = deleteThisTask.previousElementSibling.textContent
    const indexOfCurrentTask = tasksContainer.findIndex(item => item.name === thisTask)
    tasksContainer.splice(indexOfCurrentTask,1)
    render();
    event.preventDefault();
}