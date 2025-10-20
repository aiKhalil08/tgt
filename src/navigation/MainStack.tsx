import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainTabs from './MainTabs';
import LocationStack from '../screens/main/location/LocationStack';
import Announcements from '@/screens/main/announcements/Announcements';
import ScreenHeader from '@/components/layout/ScreenHeader';
import BookServiceStack from '@/screens/main/book-service/BookServiceStack';

export type MainStackParamList = {
    MainTabs: undefined;
    LocationStack: undefined;
    Announcements: undefined;
    BookServiceStack: undefined;
}

const MainStackNavigator = createNativeStackNavigator<MainStackParamList>()

export default function MainStack() {
    const insets = useSafeAreaInsets();

    return (
        <MainStackNavigator.Navigator
            // screenOptions={{
            //     headerShown: false,
            //     contentStyle: {
            //         flex: 1,
            //         backgroundColor: 'white',
            //         paddingTop: insets.top,
            //         paddingBottom: insets.bottom,
            //     },
            // }}
        >
            <MainStackNavigator.Screen
                name="MainTabs"
                component={MainTabs}
                options={{
                    headerShown: false,
                }}
            />
            <MainStackNavigator.Screen
                name="LocationStack"
                component={LocationStack}
                options={{
                    headerShown: false,
                }}
            />
            <MainStackNavigator.Screen
                    name='Announcements'
                    component={Announcements}
                    options={{
                        header: ScreenHeader,
                        presentation: "formSheet",
                        sheetAllowedDetents: [0.95],
                        sheetCornerRadius: 20,
                        sheetGrabberVisible: true,
                    }}
                />
            <MainStackNavigator.Screen
                name="BookServiceStack"
                component={BookServiceStack}
                options={{
                    headerShown: false,
                }}
            />
        </MainStackNavigator.Navigator>
    )
}

const styles = StyleSheet.create({})