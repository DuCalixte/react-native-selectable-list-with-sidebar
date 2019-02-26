import React, { Component } from 'react';
import { StyleSheet, View, Text, PanResponder } from 'react-native';

import SelectableLetter from './SelectableLetter';
// type Props {
//   alphabet: array
// }
export default class AlphabetSidebar extends Component {
  static propTypes = {
    alphabet: PropTypes.array.isRequired,
  };
  render() {
    const { alphabet } = this.props;
    this._alphabet = (
      alphabet.map((letter) => <SelectableLetter letter={letter} key={letter} />)
    );
    return (
      <View style={styles.alphabet} ref='alphabetSidebar'>
        {this._alphabet}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alphabet: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 1,
    justifyContent: 'center'
  }
})
