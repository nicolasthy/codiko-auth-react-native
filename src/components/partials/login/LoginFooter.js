import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Grid, Row, Col } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

class LoginFooter extends Component {
  render() {
    return (
      <Grid style={styles.containerGridStyle}>
        <Col size={21}>
          <View style={styles.roundPriceStyle}>
            <Text style={styles.roundPriceValueStyle}>0</Text>
            <Text style={styles.roundPriceCurrencyStyle}>€</Text>
          </View>
        </Col>

        <Col size={64}>
          <Text style={styles.titleStyle}>Accès premium gratuit pendant 24h</Text>
          <Text style={styles.subtitleStyle}>Inscription sans engagement.</Text>
        </Col>

        <Col size={15}>
          <Icon
            name="ios-arrow-forward"
            size={30}
            color='#fff'
            style={{ textAlign: 'center' }}
          />
        </Col>
      </Grid>
    );
  }
}

const styles = {
  containerGridStyle: {
    backgroundColor: '#4f5244',
    height: 80,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  titleStyle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500'
  },
  subtitleStyle: {
    color: '#fff',
    fontSize: 11
  },
  roundPriceStyle: {
    backgroundColor: '#d0e881',
    borderRadius: 50,
    margin: 10,
    padding: 20,
    width: 60,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  roundPriceValueStyle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    justifyContent: 'center'
  },
  roundPriceCurrencyStyle: {
    color: '#fff',
    justifyContent: 'flex-start',
    marginTop: -5
  }
}

export { LoginFooter };
