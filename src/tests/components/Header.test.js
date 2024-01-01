import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('Header should render correctly', () => {
  const wrapper = shallow(<Header/>)
  expect(wrapper).toMatchSnapshot()


  //ReactShallowRenderer
  //=========================
  // const render = new ReactShallowRenderer()
  // render.render(<Header/>)
  // expect(render.getRenderOutput()).toMatchSnapshot()
  // console.log(render.getRenderOutput())
})