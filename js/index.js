const getUser = async (username) =>{

    const url = `https://api.github.com/users/${username}`;
    const response = await (await fetch (url)).json();
    console.log(response);
    const result = document.getElementById('results');
    if (response.message ==='Not Found'){
        let responseText = `
        <div class="d-flex col gap-4">
            <h2 class="bold center">User Not found</h2>
            <img src="./assets/icons/spongebob.gif" alt="">
        </div>
        `;
        result.insertAdjacentHTML('afterbegin', responseText);
    }
    else {
        const name = response.name ? response.name: 'Not provided';
        const username = response.login;
        const repo_number = response.public_repos;
        const followers = response.followers;
        const following = response.following;
        const company = response.organizations ? response.organizations: 'Not provided';
        const bio = response.bio ? response.bio: 'No Bio';
        let created_at = response.created_at;
        created_at = created_at.split('T')[0];
        const email = response.email ? response.email: 'Not provided';
        const location = response.location ? response.location: 'Unknown';
        const blog = response.blog ? response.blog: 'Not provided';

        const card =`
        <h2 class="clr-primary bold">Results:</h2>
        <div class="card  d-flex col gap-4" > 
            <div class="card-header d-flex align-center gap-10">
                <img class="avatar" src="https://github.com/${username}.png" width="150" height="150">
                <div>
                    <h2 class="bold" id="name">${name}</h2>
                    <p class="clr-primary bold">@${username}</p>
                </div>
                </div>
                <div class="card-body  d-flex col gap-10">
                    <div class="user-overview d-flex gap-10 justify-space-around">
                        <div class="bold">
                            <p>${repo_number}</p>
                            <p>Repositories</p>
                        </div>
                        <div class="bold">
                            <p>${followers}</p>
                            <p>Followers</p>
                        </div>
                        <div class="bold">
                            <p>${following}</p>
                            <p>Following</p>
                        </div>
                    </div>
                    <div class="user-details d-flex col gap-4">
                        <div class="d-flex gap-4 align-center">
                            <img src="./assets/icons/company-icon.svg" alt="">
                            <p>${company}</p>
                        </div>
                        <div class="d-flex gap-4 align-center">
                            <img src="./assets/icons/bio-icon.svg" alt="">
                            <p>${bio}</p>
                        </div>
                        <div class="d-flex gap-4 align-center">
                            <img src="./assets/icons/acc-created-icon.svg" alt="">
                            <p>${created_at}</p>
                        </div>
                        <div class="d-flex gap-4 align-center">
                            <img src="./assets/icons/email-icon.svg" alt="">
                            <p>${email}</p>
                        </div>
                        <div class="d-flex gap-4 align-center">
                            <img src="./assets/icons/location-icon.svg" alt="">
                            <p>${location}</p>
                        </div>
                        <div class="d-flex gap-4 align-center">
                            <img src="./assets/icons/link-icon.svg" alt="">
                            <p>${blog}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        result.insertAdjacentHTML('afterbegin', card);
    }
        
}


const onSearch =() => {
    console.log('Button clicked');
    document.getElementById('results').innerHTML = '';
    if (username.value === '') {
        const errorUsername = document.getElementById('error-username');
        errorUsername.innerHTML = 'Please Enter Username';
    } else {
        //to do fetch data
        getUser(username.value);
        document.getElementById("onSearch").reset();
    }

}

const username = document.getElementById('username');
const searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', onSearch);