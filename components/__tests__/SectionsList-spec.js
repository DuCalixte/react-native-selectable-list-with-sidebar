'use strict';

const React = require('React');
const ReactTestRenderer = require('react-test-renderer');

const SectionList = require('SectionList');

describe('SectionList', () => {
  it('renders empty list', () => {
    const component = ReactTestRenderer.create(
      <SectionList sections={[]} renderItem={({item}) => <item v={item.key}/>}/>,);
    expect(component).toMatchSnapshot();
  });
});
