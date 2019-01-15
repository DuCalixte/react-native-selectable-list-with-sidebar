import React, {Component, StyleSheet, View} from 'react';
// import ReactNative from 'react-native';
import PropTypes from 'prop-types';
import SectionList from './SectionList';

export default class SelectableListWithSidebar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {sectionList, sections} = this.props;
    return (
      <SectionList />
    );
  }
}
