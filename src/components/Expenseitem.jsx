const Expenseitem=(props)=>{
    const { title,amount, id,deleteExpense} = props

    const handleDelete =()=>{
      deleteExpense(id)
    }
    return(
      <div className="expense-item-container">
      <div className={`Expense-item ${ amount>0 ?'positive' :'negative'}`}>

      <div className="expense-tile">{title}</div>
      <div className="expense-amount">{amount}</div>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
      </div>
    )
  }
  export default Expenseitem 