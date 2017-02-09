import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import SplashScreen from './components/SplashScreen';
import StatsDetail from './components/stats/StatsDetail';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="initial" initial>
        <Scene key="splash" component={SplashScreen} title="Splash" hideNavBar />
      </Scene>

      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" hideNavBar />
      </Scene>

      <Scene key="main" panHandlers={null}>
        <Scene
          sceneStyle={{ paddingTop: 12 }}
          key="dashboard"
          component={Dashboard}
          title="Dashboard"
          hideNavBar
        />
        <Scene key="statsDetail" component={StatsDetail} title="Statistiques" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
