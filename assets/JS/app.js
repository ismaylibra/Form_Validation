let btnLogin = document.querySelector('#login')
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.querySelector('#username')
    let password = document.querySelector('#pw')
    let email = document.querySelector('#mail')
    let firstLetter = document.getElementById('username').value.slice(0, 1).toUpperCase();
    let text = document.getElementById('username').value.slice(1).toLowerCase();
    let resultUN = firstLetter + text
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let resulEmail = email.value.match(regex)
    if (username.value == null || username.value == '') {
        alert('Please,Fill the Username')

    }
    else {
        document.querySelector('#un').innerHTML = resultUN
    }
    if (password.value.length < 6) {
        alert('Password must be more than 6 character')
    }
    if (email.value == null || email.value =='') {
        alert('Please, Fill the Email')
    }
    else{
        
        if (resulEmail) {
            document.querySelector('#em').innerHTML = resulEmail
        }
        else{
            alert('Please, Enter Email Correctly')
        }
    }

})


