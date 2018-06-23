import moment from 'moment'
import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses'


test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abcd'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abcd'
  })
})



test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {note: 'Pay bill on time'})

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates:{ 
      note: 'Pay bill on time',
    } 
  })
})

test('should setup add expense action object', () => {
  const data = {
    description: 'water bill',
    amount: 200.00,
    note: 'Pay bill on time',
    createdAt: '2018-06-23T08:30:54.364Z'
  }

  const action = addExpense(data)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: {
      ...data,
      id: expect.any(String)
    }
  })
})


// add expense default
test('should setup add expense action object for default value', () => {
  const action = addExpense({})

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: { 
      description: '',
      note : '',
      amount : 0,
      createdAt : 0,
      id: expect.any(String)
    }
  })
}) 