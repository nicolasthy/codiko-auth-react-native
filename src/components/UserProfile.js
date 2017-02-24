import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions';
import { getCurrentUser } from '../selectors';
import { store } from '../store';

import { View, Text, Dimensions } from 'react-native';
import { Grid, Row } from 'react-native-elements';
import { Spinner } from './common';
import { UserSubscription, UserSettings } from './partials/user';

class Profile extends Component {
  componentWillMount() {
    const access_token = store.getState().auth.access_token;
    store.dispatch(fetchCurrentUser(access_token));
  }

  getScreenHeight() {
    const { width, height } = Dimensions.get('window');
    const screenHeight = (height > width) ? (height - 85) : (width - 85);

    return screenHeight;
  }

  render() {
    const { currentUser } = this.props;

    if(currentUser) {
      return (
        <Grid style={{ height: this.getScreenHeight() }}>
          <Row><Text>User</Text></Row>
          <Row><Text>Settings</Text></Row>
          <Row>
            <UserSubscription />
          </Row>
        </Grid>
      );
    }

    return (
      <Grid>
        <Row><Spinner size="small" /></Row>
      </Grid>
    );
  }
};

const styles = {

};

const mapStateToProps = (state, props) => {
  return {
    currentUser: getCurrentUser(state)
  }
}

export default connect(mapStateToProps)(Profile);
