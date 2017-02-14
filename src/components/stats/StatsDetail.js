import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { SessionCard, TrainingGraph } from '../utils'

class StatsDetail extends Component {
  renderTrainingSessions(sessions) {
    return sessions.map((session, key) => {
      return <SessionCard key={key} session={session} style={{ borderBottomWidth: key === sessions.length - 1 ? 0 : 0.5}} />
    });
  }

  render() {
    const sessions = [
      { id: 10, date: "10-02-2017", score: 32 },
      { id: 9, date: "13-02-2017", score: 12 },
      { id: 8, date: "13-02-2017", score: 40 },
      { id: 7, date: "13-02-2017", score: 25 },
      { id: 6, date: "13-02-2017", score: 28 },
      { id: 5, date: "3-02-2017", score: 34 },
      { id: 4, date: "3-02-2017", score: 30 },
      { id: 3, date: "13-02-2017", score: 22 },
      { id: 2, date: "5-02-2017", score: 28 },
      { id: 1, date: "7-02-2017", score: 26 }
    ];

    return (
      <ScrollView style={{ paddingTop: 65, flex: 1 }}>
        <View>
          <View style={[
            styles.graphContainer,
            this.props.statsType === 'entrainement' ? styles.pedagogicalStyle : styles.examStyle
          ]}>
            <TrainingGraph statsType={this.props.statsType} sessions={sessions} />
          </View>

          <Text style={styles.listLabelStyle}>{`Historique séries ${this.props.statsType}`.toUpperCase()}</Text>
          <View style={styles.listStyle}>{this.renderTrainingSessions(sessions)}</View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  graphContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1
  },
  pedagogicalStyle: {
    backgroundColor: '#A7CD2C'
  },
  examStyle: {
    backgroundColor: '#50C8C6'
  },
  listLabelStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 35,
    marginBottom: 5,
    paddingLeft: 5,
    color: '#a0a0a0',
    fontSize: 11,
    fontWeight: '600'
  },
  listStyle: {
    borderTopColor: '#c8c7cc',
    borderTopWidth: 0.5,
    borderBottomColor: '#c8c7cc',
    borderBottomWidth: 0.5,
  }
}

export default StatsDetail;
