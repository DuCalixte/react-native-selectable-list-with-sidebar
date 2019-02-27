'use strict';

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import AlphabetSidebar from './AlphabetSidebar';

describe('AlphabetSidebar', () => {
  const render = () => {
    console.log('AlphabetSidebar', AlphabetSidebar)
    return shallow(<AlphabetSidebar alphabet={['A','B','C']}/>);
  }
  it('mounts', function() {
    console.log('AlphabetSidebar',render().html());
    expect(render()).toExist();
  });
});
