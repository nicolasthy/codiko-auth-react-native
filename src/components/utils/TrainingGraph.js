import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TrainingGraph extends Component {
  getAverageScore(day) {
    const now = new Date();
    let count = 0;

    this.props.sessions.map((session) => {
      let year = session.date.split('-')[2];
      let month = session.date.split('-')[1];
      let currentDay = session.date.split('-')[0];

      if((now.getMonth() + 1) === parseInt(month) && now.getFullYear() === parseInt(year)) {
        if(parseInt(currentDay) === day) {
          if(count > 0) {
            count = (count + session.score) / 2;
          } else {
            count = session.score;
          }
        }
      }
    });

    return (count * 100) / 40;
  }

  renderBars() {
    const now = new Date();
    const nbDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

    return [...Array(nbDays).keys()].map((i) => {
      i = i + 1;
      return <View style={[styles.barStyle, { height: this.getAverageScore(i) }]} key={i}></View>;
    });
  }

  render() {
    const now = new Date();
    const nbDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={{ fontWeight: '600', color: '#fff'}}>Résultats série {this.props.statsType}</Text>
        </View>
        <View style={styles.containerStyle}>
          {this.renderBars()}
        </View>
        <View style={[styles.containerStyle, styles.legendContainerStyle]}>
          <Text style={styles.legendStyle}>0</Text>
          <Text style={styles.legendStyle}>5</Text>
          <Text style={styles.legendStyle}>10</Text>
          <Text style={styles.legendStyle}>15</Text>
          <Text style={styles.legendStyle}>20</Text>
          <Text style={styles.legendStyle}>25</Text>
          <Text style={styles.legendStyle}>{nbDays}</Text>
        </View>
      </View>
    );
  }
};

const styles = {
  titleContainer: {
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 3
  },
  legendContainerStyle: {
    borderTopWidth: 0.5,
    borderTopColor: '#fff',
    paddingTop: 7,
    paddingBottom: 10,
    opacity: 0.6
  },
  legendStyle: {
    color: '#fff',
    opacity: 1,
    fontSize: 10
  },
  barStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    opacity: 0.4
  }
};

export { TrainingGraph };
