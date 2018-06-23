// import App from '../src/components/App'
// import React from 'react'
import { shallow } from 'enzyme'

// describe('App', () => {
//   test('should match snapshot', () => {
//     const wrapper = shallow(<App />)

//     expect(wrapper.find('h1').text()).toBe('Welcome to My Starter App')
//     expect(wrapper).toMatchSnapshot
//   })
// })


const gen = (name) => `Hello ${name}`;

test('should generate greeting', () => {
  const result = gen('paul')

  expect(result).toBe('Hello paul')
})


