import React, { useEffect, useState } from 'react'
import axios from "axios"


 const addtransaction=(props)=>{
    const {addExpense}=props
   const [text, setText] = useState("");
   const[amount,setAmount] =useState(0)
   const[error,setError]=useState({})
   
   const handleSubmit =(event) =>{
    event.preventDefault()
    let err={}
    if (text.length<3){
            err.text='Title should be atleast 3 char long'
         
           }
           if(!amount){
            err.amount='Enter a valid Amount!!'
        
           }  
           if(Object.keys(err).length>0){
            setError({...err})
            return
           }
           axios.post('https://expensetracker-kc8w.onrender.com/get-entries/add-entry',{"text":text,"amount":amount})
           addExpense(text,parseInt(amount))
       setText('')
       setAmount(0)
   }
  
 return(
        <>
        <div> <h3>Add transaction</h3> </div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className='add'>
            <label>Text</label>
            <input value={text}  onChange={(event)=>{setText(event.target.value) 
            setError({error,title:''})} }
            placeholder="Enter Text..." type="text"></input>
           {error.text ? <div className="error">{error.text}</div>:null}
            <label>Amount</label>
            <input  value ={amount}onChange={(event)=>setAmount(event.target.value)}placeholder="Enter Amount..." type="number"/>
            {error.amount ? <div className="error">{error.amount}</div>:null}
            <div className="btn"><button  type="submit">Add transaction</button></div></div>
            </div>

        </form>
      
          
            </>
    )
    
}
export default addtransaction