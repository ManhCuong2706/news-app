'use strict'

const inputPageSize = $('#input-page-size')
const inputCategory = $('#input-category')
const btnSave = $('#btn-submit')


// handle setting event
btnSave.onclick = () => {
    let pageSize = Number(inputPageSize.value)
    let category = inputCategory.value
    
    if (pageSize==='' ||pageSize < 2 || pageSize > 10) {
        alert(`Please enter pase size, it must be between 2 and 10!`)
    } else {
        currentUser.pageSize = pageSize
        currentUser.category = category
        saveToStorage(CR_USER, currentUser)
        window.location.href ='./news.html'
    }
}