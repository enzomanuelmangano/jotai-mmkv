import { Tabs } from 'expo-router';
import { Octicons } from '@expo/vector-icons';
import { useCallback } from 'react';

import { ACTIVE_COLOR, INACTIVE_COLOR } from '../../constants';

const TabScreenOptions = {
  headerShown: false,
  tabBarActiveBackgroundColor: '#000',
  tabBarInactiveBackgroundColor: '#000',
  tabBarActiveTintColor: ACTIVE_COLOR,
  tabBarInactiveTintColor: INACTIVE_COLOR,
  tabBarStyle: {
    backgroundColor: '#000',
  },
  headerBackgroundContainerStyle: {
    backgroundColor: '#000',
  },
};

export default function Layout() {
  const tabBarIcon = useCallback((name: 'filter' | 'home') => {
    return ({ focused }: { focused: boolean }) => {
      return (
        <Octicons
          name={name}
          size={20}
          color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
        />
      );
    };
  }, []);

  return (
    <Tabs screenOptions={TabScreenOptions} initialRouteName="selected">
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: tabBarIcon('home'),
        }}
      />
      <Tabs.Screen
        name="selected"
        options={{
          title: 'Selected',
          tabBarIcon: tabBarIcon('filter'),
        }}
      />
    </Tabs>
  );
}
