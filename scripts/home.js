'use strict'
const loginModal = $('#login-modal')
const message = $('#welcome-message')
const btnLogout = $('#btn-logout')

// If the user already logged in
if (currentUser.userName) {
    loginModal.style.display = 'none'
    message.textContent = `Welcome back ${currentUser.firstName} !`

    // when user logged out
    btnLogout.onclick = () => {
        localStorage.removeItem(CR_USER)
        window.location.href ='/pages/login.html'
    }
}