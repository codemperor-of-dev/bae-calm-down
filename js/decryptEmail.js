// get email from url
const params = new URLSearchParams(location.search);
const email = params.get("email");

//decript email
let decrpytResult = window.atob(email);
console.log(decrpytResult);
