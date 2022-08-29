'use strict'


// Get Element function

function $(e) {
    return document.querySelector(e)
}

// Parse to Instance Object
function parseUser(userData) {
    const user = new User(
        userData.firstName,
        userData.lastName,
        userData.userName,
        userData.password,
        userData.pageSize,
        userData.category
    )
	return user
}

function parseTasks(taskData) {
    const task = new Task(
        taskData.task,
        taskData.owner,
        taskData.isDone
    )
    return task;
}

// Set and Get to Storage

function getFormStorage(key) {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}

function saveToStorage(key, value) {
    return localStorage.setItem(key,JSON.stringify(value));
}

// Public variables

const USER = 'userList'
const CR_USER = 'currentUser'
const TASK = 'taskList'
const API_KEY = '06f581e0bb9243c0b617d46dfe83124c'

const user = getFormStorage(USER)
const userList = user.map(u => parseUser(u))

let currentUser = getFormStorage(CR_USER)

const task = getFormStorage(TASK)
const taskList = task.map(t => parseTasks(t))
