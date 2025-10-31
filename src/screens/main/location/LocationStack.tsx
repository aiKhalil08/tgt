import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from './screens/MapView';
import SearchLocation from './screens/SearchLocation';
import ScreenHeader from '@/components/layout/ScreenHeader';

export type LocationStackParamList = {
    MapView: undefined;
    SearchLocation: undefined;
}

const LocationStackNavigator = createNativeStackNavigator<LocationStackParamList>()

export default function LocationStack() {
    return (
        <LocationStackNavigator.Navigator
            screenOptions={{
                header: ScreenHeader,
                contentStyle: {
                    backgroundColor: "white"
                }
            }}
        >
            <LocationStackNavigator.Screen
                name="MapView"
                component={MapView}
                options={{
                    headerShown: false,
                }}
            />
            <LocationStackNavigator.Screen
                name='SearchLocation'
                component={SearchLocation}
                options={{
                    title: "Search Location"
                }}
            />
        </LocationStackNavigator.Navigator>
    )
}

const styles = StyleSheet.create({})