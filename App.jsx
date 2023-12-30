import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faList} from '@fortawesome/free-solid-svg-icons';

// Importe os componentes para suas telas
import Profile from './Screens/Profile';
import Jobs from './Screens/Jobs';
import SplashScreen from './Screens/SplashScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: null,
        style: {height: 60}, // Defina a altura do tab bar conforme necessário
        showLabel: false, // Oculta os rótulos
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faUser} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faList} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{tabBarVisible: false, tabBarButton: props => null}}
          />
          <Stack.Screen
            name="MainStack"
            component={MainStack}
            options={{
              title: 'Logout',
              tabBarVisible: false,
              tabBarButton: props => null,
            }}
          />
          <Stack.Screen
            name="Jobs"
            component={Jobs}
            options={{tabBarVisible: false, tabBarButton: props => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
