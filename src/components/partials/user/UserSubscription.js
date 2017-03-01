import React from 'react';
import { View, Text, Image } from 'react-native';
import { Grid, Row } from 'react-native-elements';

const UserSubscription = () => {
  return (
    <Grid style={styles.containerStyle}>
      <Row>
        <Text>Subscription</Text>
      </Row>
    </Grid>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#454545',
    margin: 15
  }
}

export { UserSubscription };
