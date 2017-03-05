import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../../../store';
import { fetchTrainingsByType } from '../../../actions';

import { View, Text, ScrollView, ListView } from 'react-native';
import { Grid, Row, Col, List, ListItem } from 'react-native-elements';
import { Spinner } from '../../common';

class StatsDetails extends Component {
  componentWillMount() {
    store.dispatch(fetchTrainingsByType(this.props.serie));
  }

  renderRow (rowData, sectionID) {
    const { attributes } = rowData;
    const { serie } = this.props;

    return (
      <ListItem
        key={sectionID}
        title={
          <Grid>
            <Col size={3}><Text>{`Série ${serie.label} ${serie.category ? serie.category : ""} ${attributes.index}`}</Text></Col>
            <Col size={1} style={styles.scoreContainer}>
              <Text style={[styles.scoreStyle, { color: attributes.score >= 35 ? '#a7cd2c' : '#cb3333' }]}>{attributes.score}</Text>
              <Text style={styles.countStyle}>/{attributes["answers-count"]}</Text>
            </Col>
          </Grid>
        }
        hideChevron
      />
    )
  }

  render() {
    if(this.props.trainings) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      let dataSource = ds.cloneWithRows(this.props.trainings.data);

      return (
        <ScrollView style={{ flex: 1, marginTop: 63 }}>
          <View>
            <Text>Coucou</Text>
          </View>
          <View>
            <List>
              <ListView
                renderRow={this.renderRow.bind(this)}
                dataSource={dataSource}
                onEndReached={() => {console.log('TODO: HANDLE PAGINATION');}}
                enableEmptySections={true}
              />
            </List>
          </View>
        </ScrollView>
      );
    }

    return (
      <Grid>
        <Row><Spinner size="small" /></Row>
      </Grid>
    );
  }
}

const styles = {
  scoreContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  scoreStyle: {
    fontSize: 20,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0, 0.03)',
    textShadowOffset: { width: 2, height: 2 }
  },
  countStyle: {
    fontWeight: '600'
  }
}

const mapStateToProps = (state, props) => {
  if(props.serie.type === 0) {
    return {
      trainings: state.trainings.pedagogical
    }
  }
  else if(props.serie.type === 1) {
    return {
      trainings: state.trainings.thematical[props.serie.category]
    }
  }
  else {
    return {
      trainings: state.trainings.examination
    }
  }
}

export default connect(mapStateToProps)(StatsDetails);
