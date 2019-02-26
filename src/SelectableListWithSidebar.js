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
import AlphabetPicker from './AlphabetPicker';

export default class SelectableListWithSidebar extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Text>Hello world!</Text>
        </View>
        <AlphabetPicker alphabet={"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')} />
      </View>
    );
  }
}
