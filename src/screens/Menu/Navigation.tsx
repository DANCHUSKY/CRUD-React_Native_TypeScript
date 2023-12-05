// Navigation.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './MenuScreens/HomeScreen';
import UserScreen from './MenuScreens/UserScreen';
import NavigationCSS from './style/NavigationCSS';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: NavigationCSS.tabBar,
                tabBarActiveTintColor: NavigationCSS.activeTab.color,
                tabBarInactiveTintColor: NavigationCSS.inactiveTab.color,
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
    );
}

export default Navigation;
