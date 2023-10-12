const API_URL = "https://jsonplaceholder.typicode.com/users";

let tableBody = document.querySelector('.table-body');

const displayUserDetails = (users)=>{
  users.forEach((user)=>{
    tableBody.innerHTML += `
     <tr key = {${user.id}}>
     <td>${user.id}</td>
     <td>${user.name}</td>
     <td>${user.username}</td>
     <td>${user.email}</td>
     <td>${user.phone}</td>
     <td>${user.website}</td>
     </tr>
    `
  });
}

async function getUserDetails(url){
  try{
    const response = await fetch(url);
    const data = await response.json();
    if(response.ok){
      console.log(data);
      displayUserDetails(data);
    }
  }
  catch(error){
    throw new Error(error);

  }

}

document.addEventListener("DOMContentLoaded", ()=>{
  getUserDetails(API_URL);
});

// getUserDetails();