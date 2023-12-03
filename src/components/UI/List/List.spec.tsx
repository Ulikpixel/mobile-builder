import * as React from 'react'
import renderer from 'react-test-renderer'
import List from './List'

it(`renders correctly`, () => {
  const exampleList = ['one', 'two']
  const tree = renderer.create(<List data={exampleList} />).toJSON()

  expect(tree).toMatchSnapshot()
})
