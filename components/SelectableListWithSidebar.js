import React, {Component, StyleSheet, View} = 'react';
// import ReactNative from 'react-native';
import PropTypes from 'prop-types';
const SectionList = require './SectionList';

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
