'use strict';

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import SelectableListWithSidebar from './SelectableListWithSidebar';

describe('SelectableListWithSidebar', () => {
  const render = () => {
    console.log('SelectableListWithSidebar', SelectableListWithSidebar)
    return shallow(<SelectableListWithSidebar />);
  }
  it('mounts', function() {
    console.log('SelectableListWithSidebar',render().html());
    expect(render()).toExist();
  });
});
