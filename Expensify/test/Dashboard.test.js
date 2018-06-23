import Dashboard from '../src/components/Dashboard'
import React from 'react'
import { shallow } from 'enzyme'

describe('Dashboard', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Dashboard />)

    expect(wrapper.find('h2').text()).toBe('Dashboard')
    expect(wrapper).toMatchSnapshot
  })
})