import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import SplashScreen from './components/SplashScreen';
import StatsDetails from './components/partials/stats/StatsDetails';
import UserSettings from './components/Settings';
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
          component={StatsDetails}
          title="Statistiques"
          hideNavBar={false}
          sceneStyle={{ backgroundColor: '#eff1f4' }}
          leftButtonIconStyle={{ tintColor: '#A7CD2C', marginLeft: 5 }}
          navigationBarStyle={{
            backgroundColor: '#fff',
            borderBottomWidth: 0.5,
            borderBottomColor: '#afafaf'
          }}
          titleStyle={{ color: '#262626', fontWeight: '600' }}
        />

        <Scene
          key="settings"
          component={UserSettings}
          title="Modifier mon profil"
          hideNavBar={false}
          sceneStyle={{ backgroundColor: '#eff1f4' }}
          leftButtonIconStyle={{ tintColor: '#A7CD2C', marginLeft: 5 }}
          navigationBarStyle={{
            backgroundColor: '#fff',
            borderBottomWidth: 0.5,
            borderBottomColor: '#afafaf'
          }}
          titleStyle={{ color: '#262626', fontWeight: '600' }}
          rightTitle="Terminer"
          onRight={() => console.log("Pressed")}
          rightButtonTextStyle={{ color: '#A7CD2C' }}
        />
      </Scene>

      <Scene key="training">
        <Scene key="viewer" component={Viewer} hideNavBar initial panHandlers={null} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
