import React, { useEffect, useState } from 'react'
import axios from "axios"


 const addtransaction=(props)=>{
    const {addExpense}=props
   const [title, settitle] = useState("");
   const[amount,setAmount] =useState(0)
   const[error,setError]=useState({})

   const handleSubmit =(event) =>{
    event.preventDefault()
    let err={}
    if (title.length<3){
            err.title='Title should be atleast 3 char long'
         
           }
           if(!amount){
            err.amount='Enter a valid Amount!!'
        
           }  
           if(Object.keys(err).length>0){
            setError({...err})
            return
           }
            
          addExpense(title,parseInt(amount))
       settitle('')
       setAmount(0)
   }
  
 return(
        <>
        <div> <h3>Add transaction</h3> </div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className='add'>
            <label>Text</label>
            <input value={title}  onChange={(event)=>{settitle(event.target.value) 
            setError({error,title:''})} }
            placeholder="Enter Title..." type="title"></input>
           {error.title ? <div className="error">{error.title}</div>:null}
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