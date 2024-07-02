let input = document.getElementById('input');
let button = document.getElementById('button');
let wrap = document.getElementById('wrap');
let h = document.getElementById('h3');
let iconblock = document.getElementById('iconblock');
let ione = document.getElementById('i1');
let itwo = document.getElementById('i2');
let form = document.getElementById('form')




let createcard = function(value){
    return `
    <div class="wrong">
    <div class="h">
        <h3 id="h3">${value}</h3>
    </div>
    <div class="icon" id="iconblock">
        <i class="fa-solid fa-pen-to-square" id="i1"></i>
        <i class="fa-solid fa-trash" id="i2"></i>
    </div>
</div>
                
    `
}


function getUsers(){
    let users = [];
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'))
    }
    return users;
}

button && button.addEventListener('click', function(e){
    e.preventDefault();

    let users = getUsers()
    let user = {
        input:input.value,
        id: Date.now(),
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users))


    let card = createcard(input.value);
    wrap.innerHTML += card;
    input.value = ''

    iconblock.style.color = 'red'
})
