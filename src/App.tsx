// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/screenlog/LoginScreen';
import RegisterScreen from './screens/screenlog/RegisterScreen';
import HomeScreen from './screens/Menu/MenuScreens/HomeScreen';
import UserScreen from './screens/Menu/MenuScreens/UserScreen';
import Navigation from './screens/Menu/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="UserScreen" component={UserScreen} />
          <Stack.Screen name="Navigation" component={Navigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
