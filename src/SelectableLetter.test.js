'use strict';

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import SelectableLetter from './SelectableLetter';

describe('SelectableLetter', () => {
  const render = () => {
    console.log('SelectableLetter', SelectableLetter)
    return shallow(<SelectableLetter letter='A'/>);
  }
  it('mounts', function() {
    console.log('SelectableLetter',render().html());
    expect(render()).toExist();
  });
});
