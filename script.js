const heading = document.querySelector('h3');
const icon = document.querySelector('.icon');
const uldiv = document.querySelector('ul');
const cross = document.querySelector('.cross');
icon.addEventListener("click" , ()=>{
    uldiv.style.display = "block";
    heading.style.display = "none";
    icon.style.display = "none";
})
cross.addEventListener("click",()=>{
    uldiv.style.display = "none";
    heading.style.display = "block";
    icon.style.display = "block";
})


let datetime = ()=>{
    let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let hours = date.getHours();
let miniutes = date.getMinutes();
document.querySelector('#date').value = `${day}/${month}/${year} time:${hours}:${miniutes}`;
}

setInterval(()=>{
 datetime();
},1000)



const scriptURL = 'https://script.google.com/macros/s/AKfycbw9IhaFaSLmwb67eGYWvvWgocxBUDqWDtTLOXV5AWRSqqr9VQLo8ABmM-6KOpbDajk/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    
    .catch(error => console.error('Error!', error.message))

    document.querySelector('#expenseName').value = "";
    document.querySelector('#Amount').value = "";
})
