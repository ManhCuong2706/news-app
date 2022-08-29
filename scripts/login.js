'use strict'
const inputUserName = $('#input-username')
const inputPassword = $('#input-password')
const btnLogin = $('#btn-submit')

// validate input
function validate() {
    let isValid = true;
    if (inputUserName.value ==='') {
        alert('Please enter your username !')
        isValid = false;
    }
    if (inputPassword.value === '') {
        alert('Please enter your password!')
        isValid = false;
    }
    return isValid
}

// handle login event

btnLogin.onclick = () => {
    if (validate()) {
        currentUser = userList.find(user => user.userName === inputUserName.value && user.password === inputPassword.value)

        if (currentUser.length === 0) {
            alert('User Name or Password is incorrect !')
        } else {
            saveToStorage(CR_USER, currentUser)
            alert('Login success !')
            window.location.href = '/index.html'
        }
        
    } 
}

