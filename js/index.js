function onSearch() {
    console.log('Button clicked');
    if (username.value === '') {
        const errorUsername = document.getElementById('error-username');
        errorUsername.innerHTML = 'Please Enter Username';
    } else {
        //to do fetch data
    }

}

const username = document.getElementById('username');
const searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', onSearch);