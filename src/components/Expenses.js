import {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './NewExpense/ExpensesFilter'
import ExpenseChart from './ExpenseChart'

function Expenses(props){

    const [filteredYear,setFilteredYear]=useState('2020')

    const filterChangeHandler = selectedYear=>{
       setFilteredYear(selectedYear)

    }
    const filteredExpense = props.items.filter(expense => expense.date.getFullYear().toString()===filteredYear)
    return(
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear}onChangeFilter = {filterChangeHandler}/>
        <ExpenseChart expenses={filteredExpense}/>
        {filteredExpense.length===0 && (<p>No results</p>)}
         {filteredExpense.length>0 &&
             filteredExpense.map(expense=>
                <ExpenseItem
                key={expense.id} 
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>
            )
         }  
          
       
        </Card>
        </div>
    )

}

export default Expenses