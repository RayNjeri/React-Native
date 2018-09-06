import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
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
  renderDescription() {
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return <Text>{this.props.library.item.description}</Text>;
    }
  }

  render() {
    const { id, title } = this.props.library.item;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  return { selectLibraryId: state.selectLibraryId };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
