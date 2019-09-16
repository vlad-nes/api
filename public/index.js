// axios.post('/users', { name: 'Qwerty', surname: 'Zaqwer'}).then(res => {
//   console.log(res);
// })

//////////////////////////

// const xhr = new XMLHttpRequest();

// xhr.open('GET', '/users');
// xhr.onload = () => {
//   // console.log(xhr.responseText);
//   console.log(JSON.parse(xhr.responseText));
// };

// xhr.send()


//////////////////////////promise


// let promiseObj = new Promise((reselve, rejrct) => {
//   setTimeout(() => {
//     reselve(5 + 5)
//   }, 2000);
// })
// console.log('start', new Date().getSeconds())
// promiseObj.then(reselve => {
//   console.log(reselve)
//   console.log('end', new Date().getUTCDate())
// })

let FetchApi = url => {
  return new Promise((reselve, reject) => {
    const xhr = new XMLHttpRequest();
  
  xhr.open('GET', '/users');
  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText)
    reselve(response);
  };
  xhr.onerror = () => {
    const err = JSON.parse(xhr.responseText)
    reject(err)
  }
  xhr.send()
  });
}

FetchApi('/users').then(reselve => {
  console.log(reselve)
})



// console.log('start', new Date().getSeconds())
// promiseObj.then(reselve => {
//   console.log(reselve)
//   console.log('end', new Date().getUTCDate())
// })
