import { StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/screens/main/tabs/home/Home';
import Bookings from '@/screens/main/tabs/bookings/Bookings';
import Messages from '@/screens/main/tabs/messages/Messages';
import Profile from '@/screens/main/tabs/profile/Profile';
import HomeSvg from '@/assets/icons/Home';
import CalendarSvg from '@/assets/icons/Calendar';
import MessagesSvg from '@/assets/icons/Messages';
import UserSvg from '@/assets/icons/User';
import ScreenHeader from '@/components/layout/ScreenHeader';

export type MainTabsParamList = {
    Home: undefined;
    Bookings: undefined;
    Messages: undefined;
    Profile: undefined;
}

const MainTabsNavigator = createBottomTabNavigator<MainTabsParamList>()

export default function MainTabs() {
    const insets = useSafeAreaInsets();

    return (
        <MainTabsNavigator.Navigator
            screenOptions={{
                sceneStyle: {
                    backgroundColor: 'white',
                },
                tabBarActiveTintColor: "#D3862A",
                tabBarInactiveTintColor: "#000000",
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontFamily: "Manrope-Medium"
                }
            }}
        >
            <MainTabsNavigator.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color}) => <HomeSvg color={color} />,
                    headerShown: false,
                }}
            />
            <MainTabsNavigator.Screen
                name="Bookings"
                component={Bookings}
                options={{
                    tabBarIcon: ({color}) => <CalendarSvg color={color} />,
                    headerShown: true,
                    header: ScreenHeader
                }}
            />
            <MainTabsNavigator.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: ({color}) => <MessagesSvg color={color} />,
                    headerShown: false,
                }}
            />
            <MainTabsNavigator.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({color}) => <UserSvg color={color} />,
                    headerShown: false,
                }}
            />
        </MainTabsNavigator.Navigator>
    )
}

const styles = StyleSheet.create({})