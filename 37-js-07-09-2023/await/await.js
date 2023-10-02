// Vrem sa extragem un utilizator cu Fetch
const URL_USERS = 'https://random-data-api.com/api/v2/users';
// Fetching one user
fetch(URL_USERS, {method: 'GET'}).then(userValueResp => {
  return userValueResp.json();
}).then(userValueJson => {
  console.log(userValueJson);
}).catch(er => {
  console.log(er);
})

// async await
async function fetchUserData() {
  try {
    const respData = await fetch(URL_USERS, {method: 'GET'});
    const data = await respData.json();
    console.log(data);

  } catch(e) {
    console.log(e)
  }
}

fetchUserData();  

const getUserById = function(userId) {
  const users = [
    {
      userId: 1,
      userName: 'Andrei'
    },
     {
      userId: 2,
      userName: 'Ionut'
    },
  ]
  return new Promise((resolve, reject) => {
    users.forEach(user => {
      if (userId === user.userId) {
        resolve(user);
      }
    })
    reject('No user');
  })
}

// Traditional then 
getUserById(1).then(val => {
  console.log(val)
}).catch(er => {
  console.log(er)
})

// Async await
async function getUser() {
  try {
    const user = await getUserById(1);
    console.log(user);
  } catch(er) {
    console.log(er)
  }
}
getUser();

// // Ex2 
const URL_BASE = "https://collectionapi.metmuseum.org/public/collection/v1"
const URL_VAL  = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
const URL_DEPARTAMENTE = 'https://collectionapi.metmuseum.org/public/collection/v1/departments'
// // accesarea id-urilor 
// fetch(URL_DEPARTAMENTE, {method: 'GET'}).then(valRes => {
//   return valRes.json();
// }).then(val => {
//   // console.log(val)
//   // departamentul de Arms And Armour
//   let departmentId;
//   val.departments.forEach(department => {
//     if (department.displayName === 'Arms and Armor')  {
//       departmentId = department.departmentId;
//     }
//   })
//   return departmentId;
// }).then(departmentId => {
//   return fetch(`${URL_BASE}/search?departmentId=${departmentId}&q=cat`)
// }).then(valResp => {
//   return valResp.json();
// }).then(val => {
//   // console.log(val.objectIDs[i]);
//   const requests = [];
//   for (let i = 0; i < 3; i++) {
//     requests.push(fetch(`${URL_VAL}/${val.objectIDs[i]}`))
//   }
//   return Promise.all(requests);
// }).then(finalVal => {
//   // console.log(finalVal);
//   return finalVal.map(request => request.json())
// }).then(val => 
//     val.forEach(el => {
//       el.then(val => {
//         console.log(val);
//       });
//     })
//   );

// Varianta async await.
async function handleFetchData() {
  try {
    const respDataDepartments = await fetch(URL_DEPARTAMENTE, {method: 'GET'});
    const dataDepartments = await respDataDepartments.json();
    let departmentId;
    dataDepartments.departments.forEach(department => {
      if (department.displayName === 'Arms and Armor')  {
        departmentId = department.departmentId;
      }
    })
  
    const respDataDepartment = await fetch(`${URL_BASE}/search?departmentId=${departmentId}&q=cat`);
    const dataDepartment = await respDataDepartment.json();
  
    const requestsItemsDepartment = [];
    for (let i = 0; i < 3; i++) {
      const respObj = await fetch(`${URL_VAL}/${dataDepartment.objectIDs[i]}`);
      requestsItemsDepartment.push(await respObj.json());
    }

    return requestsItemsDepartment;
  
  } catch(e){
    throw new Error(e);
  }

}

handleFetchData().then(val => {
  console.log(val);
}).catch(er => {
  console.log(er);
})

// Async await este o modalitate mai usoara de a lucra cu promise + then, in spate tot promise si then este
// O functie async returneaza intodeauna o promisiunea, si resolve-ul este valoarea din return
// Rejectul reprezinta un throw error.