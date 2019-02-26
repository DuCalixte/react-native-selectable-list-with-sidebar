import React, {PureComponent} from 'react';
import {StyleSheet, Platform, Text} from 'react-native';

// type Props = {
//   letter: string
// };
export default class SelectableLetter extends React.PureComponent {
  static propTypes = {
    letter: PropTypes.string.isRequired,
  };
  render() {
    return (
      <Text style={styles.letter}>{this.props.letter}</Text>
    )
  }
}

const styles = StyleSheet.create({
  letter: {
    flex: 1,
    ...Platform.select({
      ios: {
        height: 100
      },
      android: {
        height: 150
      }
    })
  }
})
