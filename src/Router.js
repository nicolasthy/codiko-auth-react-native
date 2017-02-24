import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import SplashScreen from './components/SplashScreen';
import StatsDetail from './components/stats/StatsDetail';
import Viewer from './components/Viewer';

const RouterComponent = () => {
  const getSceneStyle = () => {
    const style = {
      backgroundColor: '#373b46',
    };
    return style;
  };

  return (
    <Router>
      <Scene key="initial" initial>
        <Scene key="splash" component={SplashScreen} title="Splash" hideNavBar />
      </Scene>

      <Scene key="auth" getSceneStyle={getSceneStyle}>
        <Scene key="login" component={LoginScreen} initial title="Login" hideNavBar />
      </Scene>

      <Scene key="main" panHandlers={null} type="reset">
        <Scene
          sceneStyle={{ paddingTop: 12 }}
          key="dashboard"
          component={Dashboard}
          title="Dashboard"
          hideNavBar
        />

        <Scene
          key="statsDetail"
          component={StatsDetail}
          title="Statistiques"
          hideNavBar={false}
          sceneStyle={{ backgroundColor: '#fafafa' }}
          leftButtonIconStyle={{ tintColor: '#A7CD2C', marginLeft: 5 }}
          navigationBarStyle={{
            backgroundColor: '#fff',
            borderBottomWidth: 0.5,
            borderBottomColor: '#afafaf'
          }}
          titleStyle={{ color: '#262626', fontWeight: '600' }}
        />
      </Scene>

      <Scene key="training">
        <Scene key="viewer" component={Viewer} hideNavBar initial panHandlers={null} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
