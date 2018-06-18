import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

/* ***********
TYPES ND ACTION
********** */
// ADD_EXPENSE
const addExpense = (
	{ 
		description = '',
		note = '',
		amount = 0,
		createdAt = 0
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expenses: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

 // REMOVE_EXPENSE
 const removeExpense = ({ id } = {}) => ({
	 type: 'REMOVE_EXPENSE',
	 id
 })

// EDIT_EXPENSE
const editExpense = ( id , updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})

// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
	type: 'SET_TEXT_FILTER',
	text
})
// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
})

// SET_START_DATE
const setStartDate = (date = undefined) => ({
	type: "SET_START_DATE",
	date
})

// SET_END_DATE
const setEndDate = (date = undefined) => ({
	type: "SET_END_DATE",
	date
})


// expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = ( 
    state = expensesReducerDefaultState , 
    action 
) => {
    switch (action.type) {
			case 'ADD_EXPENSE':
				return [
					...state,
					action.expenses
				]
			case 'REMOVE_EXPENSE':
				return state.filter((expense) => expense.id !== action.id)
			case 'EDIT_EXPENSE':
				return state.map((expense) => {
						 if(expense.id === action.id){
							 return {
								 ...expense,
								 ...action.updates
								};
						 }
					})
        default:
            return state;
    }
}

/*********
 * filter Reducer
 * *************/
const filterReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
}

const filterReducer= (
    state = filterReducerDefaultState, 
    action 
) => {
    switch (action.type) {
			case 'SET_TEXT_FILTER':
				return {
					...state,
					text: action.text
				}
			case 'SORT_BY_AMOUNT':
				return {
					...state,
					sortBy: 'amount' 
				}
			case 'SORT_BY_DATE':
				return {
					...state,
					sortBy: 'date' 
				}
			case 'SET_START_DATE':
				return {
					...state,
					startDate: action.date
				}
			case 'SET_END_DATE':
				return {
					...state,
					endDate: action.date
				}
        default:
            return state;
    }
}









/* ********
STORE
********* */
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}))


const getPrintedExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter(expense => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());


		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if(sortBy === 'date'){
			return a.createdAt < b.createdAt? 1 : -1;
		}else if(sortBy === 'amount'){
			return a.amount < b.amount ? 1 : -1;
		}
	})
};



store.subscribe(() => {
	const state = store.getState()
	const printedExpenses = getPrintedExpenses(state.expenses, state.filters)
	console.log("EXp :", printedExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: "Like the sun you brighten up my day", amount: 3000, createdAt: -2000}))
const expenseTwo = store.dispatch(addExpense({ description: "What goes around comes back around", amount: 2000, createdAt: -1000}))
console.log('ADD----------------------------')

// const expenseThree = store.dispatch(addExpense({ description: "You aint seen nothing like me", amount: 3000}))

// const removed = store.dispatch(removeExpense({ id: expenseOne.expenses.id}))

// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 4000}))

// store.dispatch(setTextFilter('go'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(-1002))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(-1001))




console.log('RM1',expenseTwo.expenses.id)







const dataStore = {
    expenses: [{
        id: 'sdjskkdsk',
        description: 'June rent',
        note: 'payment for my current home',
        amount: 37232,
        createdAt: Date.now()
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
// console.log(store)

// const user = {
// 	name: 'Drake',
// 	age: 23
// }
// console.log({
// 	...user
// })


// const arr = Array(200)
// const arr1 = [...Array(100)]
// const arr2 = Array.from({length: 100})

// console.log(arr)
// console.log(arr1)
// console.log(arr2)