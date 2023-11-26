const generateBtn = document.getElementById('generate');
const userEl = document.getElementById('user');


function fetchUser(){

    fetch('https://randomuser.me/api/')
    .then( (res) => res.json())
    .then((data) => {
        const user = data.results[0];
        displayUser(user);
    });
}

function displayUser(user)
{
    if(user.gender=='female'){
        document.body.style.backgroundColor = 'purple';
    }
    else{
        document.body.style.backgroundColor = 'steelBlue';
    }
    userEl.innerHTML = `<div class="flex justify-between">
    <div class="flex">
    <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.picture.large}"
    />
    <div class="space-y-3">
        <p class="text-xl">
    <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
    <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
    <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
    <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
    </div>
    </div>`;
}


generateBtn.addEventListener('click',fetchUser);