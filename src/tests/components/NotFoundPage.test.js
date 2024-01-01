import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'

test('NotFoundPage should render correctly', () => {
  const wrapper = shallow(<NotFoundPage/>)
  expect(wrapper).toMatchSnapshot()
})