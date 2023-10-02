
// Adding to local storage
const user1 =  {
  id: 1,
  name: 'Ionut'
}

const user2 =  {
  id: 2,
  name: 'Alex'
}

const currentUserSpanEl = document.getElementById('logged-user');
const logoutbuttonEl = document.getElementById('logout');
const loginElems = document.getElementsByClassName('login')
const registeredUsers = [user1, user2];

localStorage.setItem("logged_user", JSON.stringify(user1));
localStorage.setItem("users", JSON.stringify(registeredUsers));

const currentUser = localStorage.getItem("logged_user") ? JSON.parse(localStorage.getItem("logged_user")) : {};


if (currentUser) {
  currentUserSpanEl.textContent = currentUser.name;
}

logoutbuttonEl.addEventListener('click', () => {
  localStorage.removeItem("logged_user");
  currentUserSpanEl.textContent = '';
})

Array.from(loginElems).forEach((elem, index) => {
  elem.addEventListener('click', () => {
    const user = index === 0 ? user1 : user2;
    localStorage.setItem("logged_user", JSON.stringify(user));
    currentUserSpanEl.textContent = user.name;
  })

}) 

 function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentUser = localStorage.getItem("logged_user") ? JSON.parse(localStorage.getItem("logged_user")) : {};
      resolve(currentUser);
    }, 2000);
  })
}

getUserData().then(user => {
  console.log(user.name)
})


// Get from local storage
// const user = localStorage.getItem('user');
// console.log(JSON.parse(user));

// // Remove particular item from local storage
// localStorage.removeItem('user');


// Clear from local storage
// localStorage.clear();