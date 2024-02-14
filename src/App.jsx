import Expenseitem from "./components/Expenseitem"
import Addtransaction from "./components/Addtransaction "
import { useEffect, useState } from "react"
import axios from "axios"


const App=()=>{
  
   const [expenses,setExpense] =useState([
    {id:1,title:"food",amount:-50},
    {id:2,title:"movie",amount:-50},    
    {id:3,title:"salary",amount:5550}
])
useEffect(()=>{
  axios.get('https://expensetracker-kc8w.onrender.com/get-entries').then(res=>{console.log(res.data)
  setExpense(res.data)})
  .catch(err=>console.log(err))
  
},[])

const addExpense =(title,amount)=>{
  
  var nextid= expenses.length===0?1:expenses[expenses.length-1].id+1
  setExpense([...expenses,{id:nextid, title:title,amount:amount}])
  axios.post('https://expensetracker-kc8w.onrender.com/add-entry',{"title":title,"amount":parseInt(amount)})
  
}
const deleteExpense=(id)=>{
  setExpense(expenses.filter((event)=>event.id!==id))
}

let income=0
let expense=0
expenses.forEach((exp)=>{
  if(exp.amount>0){
    income=income+exp.amount
  }else{
    expense=expense+exp.amount
  }
})
  return(
    <>
<div>Expense tracker</div>
<div className="Balance">Balance: {income+expense}</div>
      <div className="Income-expense-container">
      <div className="Income">
        <span className="title">Income</span>
        <span>{income}</span>
      </div>
      <div className="block"></div>
      <div className="Expense">
        <span className="title">Expense</span>
        <span>{expense}</span>

      </div>
      </div>
      <Addtransaction addExpense={addExpense}/>
    {expenses.map((expenses)=>(
    <Expenseitem key={expenses.id} title={expenses.title}  id ={expenses.id} amount={expenses.amount} deleteExpense={deleteExpense}/>
    
  ))}
  
   
    </>
    )
  }


export default App