'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Text,
  PanResponder,
  TouchableWithoutFeedback,
  View,
  Platform,
} from 'react-native';

import AlphabetSidebar from './AlphabetSidebar';

export default class SelectableListWithSidebar extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Text>Hello world!!</Text>
        </View>
        <AlphabetSidebar alphabet={"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')} />
      </View>
    );
    // return (
    //   <View style={{flex: 1}}>
    //     <View>
    //       <Text>Hello world!!</Text>
    //     </View>
    //   </View>
    // );
  }
}
