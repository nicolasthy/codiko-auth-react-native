import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Orientation from 'react-native-orientation';

import { store } from '../store';
import { TabBar } from './common';

import Stats from './Stats';
import Home from './Home';
import Profile from './Profile';

class Dashboard extends Component {
  componentWillMount() {
    StatusBar.setBarStyle('dark-content', true);
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <ScrollableTabView
        initialPage={1}
        style={{ marginTop: 20 }}
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        renderTabBar={() => <TabBar />}
      >
        <ScrollView tabLabel="md-podium">
          <Stats />
        </ScrollView>
        <ScrollView tabLabel="md-speedometer" scrollEnabled={false}>
          <Home />
        </ScrollView>
        <ScrollView tabLabel="md-person" scrollEnabled={false}>
          <Profile />
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

const styles = {
  tabBarUnderlineStyle: {
    height: 1
  }
};

export default Dashboard;
