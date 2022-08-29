'use strict'

const inputTask = $('#input-task')
const btnAdd = $('#btn-add')
const todoList = $('#todo-list')

// Render Task function
function renderTask() {
    const task = taskList.filter(t => {
        return t.owner === currentUser.userName
    })
    console.log(task);

    const html = task.map(t => {
        return `<li onclick="toggle(this,'${t.task}','${t.owner}')"
                    class="${t.isDone ? 'checked':''}" >
					${t.task}
					<span class="close" onclick="event.stopPropagation();closeTasks('${t.task}','${t.owner}')">×</span>
				</li>`
    }).join('\n')
    todoList.innerHTML = html
}
renderTask()

// Handle event add Task
btnAdd.onclick = () => {
    if (inputTask.value !== '') {
        const task = new Task(
        inputTask.value,
        currentUser.userName,
        false,
    )
    taskList.push(task)
    saveToStorage(TASK, taskList)
    renderTask()
    inputTask.value = ''
    } else {
        alert('Pleas enter you task !')
    }
}

// Handle event toggle checked class when clicked
function toggle(event, taskName, owner) {
    event.classList.toggle('checked')

    const currentTask = taskList.find(t => t.task === taskName && t.owner === owner)
    
    currentTask.isDone = !currentTask.isDone
    saveToStorage(TASK, taskList)
}

// Handle event close task
function closeTasks(taskName,owner) {
    const index = taskList.findIndex(t => {
       return t.task === taskName && t.owner === owner
    })
    alert('Do you want to close task ?')

    taskList.splice(index, 1)

    saveToStorage(TASK, taskList)
    renderTask()
}