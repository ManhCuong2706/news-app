'use strict'
const inputFirstName = $('#input-firstname')
const inputLastName = $('#input-lastname')
const inputUserName = $('#input-username')
const inputPassword = $('#input-password')
const passwordConfirm = $('#input-password-confirm')
const btnRegister = $('#btn-submit')

// Validate function
function validate(user) {
    let isValid = true
    if (user.firstName === ' ' || user.firstName === '') {
        alert('Please enter your first name!')
        isValid = false
    }
    if (user.lastName === ' ' || user.lastName === '') {
        alert('Please enter your last name!')
        isValid = false
    }
    if (user.userName === ' ' || user.userName === '') {
        alert('Please enter your username!')
        isValid = false
    }
    if (userList.length !== 0 && userList.every(u => u.userName === user.userName)) {
        alert('Username already in exist')
        isValid = false
    }
    if (user.password === '' || user.password === ' ') {
        alert('Please enter your password!')
        isValid = false
    }
    if (user.password.length < 8) {
        alert('Password must be at least 8 characters!')
        isValid = false
    }
    if (passwordConfirm.value !== user.password) {
        alert('Password not correct!')
        isValid = false
    } 
    return isValid
}

// Handle register event
btnRegister.onclick = () => {
    const user = new User(
        inputFirstName.value,
        inputLastName.value,
        inputUserName.value,
        inputPassword.value
    )
    if (validate(user)) {
        userList.push(user)
        saveToStorage(USER, userList)
        alert('Register Success !')
        window.location.href = '../pages/login.html';
    }
   
}