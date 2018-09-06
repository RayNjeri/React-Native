import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

class ListItem extends Component {
  render() {
    console.log(this.props, 'hhhhhh');
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.item.title}</Text>
      </CardSection>
    );
  }
}

export default connect(
  null,
  actions
)(ListItem);
