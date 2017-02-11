import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

class TrainingCard extends Component {
  onCardPress() {
    Actions.training();
  }

  render() {
    const { trainingType, trainingLabel, cardBackgroundColor, cardBackgroundAltColor } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onCardPress.bind(this)}>
        <View style={[styles.containerStyle, { backgroundColor: cardBackgroundColor }]}>
          <View style={styles.textContainerStyle}>
            <Text style={styles.textStyle}>Série {trainingType}</Text>
            <Text style={styles.subTitleTextStyle}>{trainingLabel}</Text>
          </View>
          <View style={[styles.iconContainerStyle, { backgroundColor: cardBackgroundAltColor }]}>
            <Icon
              name="md-arrow-dropright"
              size={35}
              color='#fff'
              style={{ textAlign: 'center' }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
    marginBottom: 7,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1
  },
  textContainerStyle: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 10
  },
  iconContainerStyle: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: 50
  },
  textStyle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 17
  },
  subTitleTextStyle: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  }
};

export { TrainingCard };
