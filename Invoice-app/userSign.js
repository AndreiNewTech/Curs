const userNameEl = document.getElementById('username');
const userNamePass = document.getElementById('password');
const formEl = document.getElementById('user-form');
const pageTitle = document.title;

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const userData = {
    userName: userNameEl.value,
    password: userNamePass.value
  }

  const storageUsers = JSON.parse(localStorage.getItem('users')) ?? [];
  const registeredUser = storageUsers.find(user => {
    return user.userName === userData.userName
  })


  if (pageTitle === 'Login') {
    if (registeredUser) {
      localStorage.setItem('user', JSON.stringify([registeredUser]));
      console.log('user Logged');
      // console.log();
      window.location.href = './index.html';
    } else {
      console.log('Not found')
    }
  } 

  if (pageTitle === 'Register') {
    if (registeredUser) {
      console.log('User already registered')
    } else {
        // Register user
        const updatedStorageUsers = [...storageUsers, userData];
        localStorage.setItem('users', JSON.stringify(updatedStorageUsers));
        window.location.href = './login.html';
        console.log('User added');
    }
  }

})