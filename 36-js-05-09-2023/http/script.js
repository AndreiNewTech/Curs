
// Testing dogo api
let data = [];

fetch('https://dogapi.dog/api/v2/facts', {method: 'GET'}).then(val => {return val.json()}).then(val =>{
  // console.log(val);
  data = val;
})


// Ex1 
 
// Vrem sa extragem un utilizator cu Fetch
const URL_USERS = ' https://random-data-api.com/api/v2/users';

// Fetching one user
fetch(URL_USERS, {method: 'GET'}).then(userValueResp => {
  return userValueResp.json();
}).then(userValueJson => {
  console.log(userValueJson);
})


// Using  XMLHttpRequest(); Modalitate veche
// const req = new XMLHttpRequest();
// req.onreadystatechange  = function() {
//   if (this.status === 200 && this.readyState === 4) {
//     console.log(JSON.parse(this.response))
//   }
// }
// req.open('GET', URL_USERS, true);
// req.send();

// Fetching multiple users with query paramethers
const multiplUsersUrl = (nrUsers) => `${URL_USERS}?size=${nrUsers}`
fetch(multiplUsersUrl(10), {method: 'GET'}).then(userValueResp => {
  return userValueResp.json();
}).then(userValueJson => {
  const users = userValueJson.map(user => {
    return  {
      avatar: user.avatar,
      first_name: user.first_name,
      email:  user.email,
    }
  })
  return users;
}).then(users => {
  users.forEach(user => {
    const userList = document.createElement('ul');
    const userName = document.createElement('li');
    userName.textContent = user.first_name;

    const userAvatar = document.createElement('li');
    const userAvatarImage = document.createElement('img');
    userAvatarImage.src = user.avatar;
    userAvatar.appendChild(userAvatarImage);

    const userEmail = document.createElement('li');
    userEmail.textContent = user.email;

    userList.appendChild(userAvatar);
    userList.appendChild(userName);
    userList.appendChild(userEmail);

    document.body.appendChild(userList);
  })
})


// Ex2 
const URL_BASE = "https://collectionapi.metmuseum.org/public/collection/v1"
const URL_VAL  = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
const URL_DEPARTAMENTE = 'https://collectionapi.metmuseum.org/public/collection/v1/departments'
// accesarea id-urilor 
fetch(URL_DEPARTAMENTE, {method: 'GET'}).then(valRes => {
  return valRes.json();
}).then(val => {
  // console.log(val)
  // departamentul de Arms And Armour
  let departmentId;
  val.departments.forEach(department => {
    if (department.displayName === 'Arms and Armor')  {
      departmentId = department.departmentId;
    }
  })
  return departmentId;
}).then(departmentId => {
  return fetch(`${URL_BASE}/search?departmentId=${departmentId}&q=cat`)
}).then(valResp => {
  return valResp.json();
}).then(val => {
  // console.log(val.objectIDs[i]);
  const requests = [];
  for (let i = 0; i < 3; i++) {
    requests.push(fetch(`${URL_VAL}/${val.objectIDs[i]}`))
  }
  return Promise.all(requests);
}).then(finalVal => {
  // console.log(finalVal);
  return finalVal.map(request => request.json())
}).then(val => 
    val.forEach(el => {
      el.then(val => {
        console.log(val);
      });
    })
  );