const historyicon = document.getElementById('historyicon');
const displayhistory = document.getElementsByClassName('displayhistory')[0];
const history = document.getElementById('history');
const myform = document.getElementById('myform');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const incexp = document.getElementById('incexp');
const balance = document.getElementById('balance');




historyicon.addEventListener("click",()=>{
    displayhistory.classList.toggle("view")
})

myform.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(incexp.value == "income"){
        let val = amount.value;
        let existincome = income.innerText;
        let totalincome = `${existincome}+${val}`;
        let finalincome = eval(totalincome);
        income.innerHTML = `<i class="uil uil-rupee-sign"></i>${finalincome}`;

       history.innerHTML += `
        <div class="item">
        <span>${text.value}</span>
        <span class="incomeborder">+${val}</span>
        </div>
        `;
        
    }

    if(incexp.value == "expense"){
        let expenseval = amount.value;
        let existexpense = expense.innerText;
        let totalexpense = `${existexpense}+${expenseval}`;
        let finalexpense = eval(totalexpense);
        expense.innerHTML = `<i class="uil uil-rupee-sign"></i>${finalexpense}`;  

        history.innerHTML += `
        <div class="item">
        <span>${text.value}</span>
        <span class="expenseborder">-${expenseval}</span>
        </div>
        `;
    }

    let totalbalance = eval(income.innerText - expense.innerText);
    balance.innerHTML = `<i class="uil uil-rupee-sign"></i>${totalbalance}`

    localStorage.setItem("balance",totalbalance);
    localStorage.setItem("income",income.innerText);
    localStorage.setItem("expense",expense.innerText);
    localStorage.setItem("history",history.innerHTML);

    


    myform.reset();
    
})

window.onload = ()=>{
    let reloadBalance = localStorage.getItem("balance");
    balance.innerHTML = `<i class="uil uil-rupee-sign"></i>${reloadBalance}`

    let reloadIncome = localStorage.getItem("income");
    income.innerHTML = `<i class="uil uil-rupee-sign"></i>${reloadIncome}`

    let reloadExpense = localStorage.getItem("expense");
    expense.innerHTML = `<i class="uil uil-rupee-sign"></i>${reloadExpense}`

  
    let reloadHistory = localStorage.getItem("history");
    history.innerHTML = reloadHistory;

    
}
