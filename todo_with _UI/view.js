const CHECK_STATUS = document.getElementsByClassName('round')
const CHECK_DONE = document.getElementsByClassName('checkbox_size')

for (let item of CHECK_DONE) {
    item.addEventListener('click', checkTask);
}
function checkTask() {
    console.log('CHECK');
    console.log(CHECK_DONE[0].firstElementChild);
    CHECK_STATUS[0].firstElementChild.classList.toggle('round_in');
    event.preventDefault();
}

const DELETE_TASK = document.getElementsByClassName('delete')
for (let item of DELETE_TASK) {
    item.addEventListener('click', deleteTask);
}
function deleteTask () {
    console.log('DELETE');
    event.preventDefault();
}

const ADD_NEW_HIGH_TASK = document.getElementById('addHighTask')
const NEW_HIGH_TASK = document.getElementById('HIGH_PRIORITY')
ADD_NEW_HIGH_TASK.addEventListener('click', addHighTask)
function addHighTask () {
    console.log('ADD HIGH TASK');
    console.log(NEW_HIGH_TASK.value);
    NEW_HIGH_TASK.value = '';
    event.preventDefault();
}

const ADD_NEW_LOW_TASK = document.getElementById('addLowTask')
const NEW_LOW_TASK = document.getElementById('LOW_PRIORITY')
ADD_NEW_LOW_TASK.addEventListener('click', addLowTask)
function addLowTask () {
    console.log('ADD LOW TASK');
    console.log(NEW_LOW_TASK.value);
    NEW_LOW_TASK.value = '';
    event.preventDefault();
}


// const NEW_HIGH_TASK = document.getElementById('HIGH_PRIORITY')
// const ADD_NEW_HIGH_TASK = document.getElementById('addHighTask')
// ADD_NEW_HIGH_TASK.addEventListener('click', showFun)

// const ADD_NEW_LOW_TASK = document.getElementById('addLowTask')
// ADD_NEW_LOW_TASK.addEventListener('click', showFun)

// const STATUS_DONE = document.getElementsByClassName('checkbox_size')
// for (let item of STATUS_DONE) {
//     item.addEventListener('click', doneFun);
// }

// const DELETE_THIS_TASK = document.getElementsByClassName('delete')
// for (let item of DELETE_THIS_TASK) {
//     item.addEventListener('click', delTask)
// }

// function doneFun() {
//     console.log('DONE');
//     event.preventDefault();
// }

// function delTask () {
//     console.log('DELETE');
//     event.preventDefault();
// }

// function showFun () {
//     // console.log('ADD');
//     // alert(NEW_TASK.value);
//     BEGIN_HIGH_TASKS.insertAdjacentHTML('afterend',
//         ` <div class="output_block">
//                 <div class="checkbox_size">
//                 <div class="round">
//                     <div class="round_in"></div>
//                 </div>
//             </div>
//             <div class="block_content">${NEW_TASK.value}</div>
//             <div><button class="delete button_size">&#10006</button></div>
//         </div>`)
//     event.preventDefault();
// }

const BEGIN_HIGH_TASKS = document.getElementById('HIGH')
const BEGIN_LOW_TASKS = document.getElementById('LOW')
