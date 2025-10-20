import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHeader from '@/components/layout/ScreenHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Catalogue from './screens/catalogue/Catalogue';
import ServiceDetails from './screens/ServiceDetails';

export type BookServiceStackParamList = {
    Catalogue: undefined;
    ServiceDetails: undefined;
}

const BookServiceStackNavigator = createNativeStackNavigator<BookServiceStackParamList>()

export default function BookServiceStack() {
    const insets = useSafeAreaInsets();

    return (
        <BookServiceStackNavigator.Navigator
            screenOptions={{
                header: ScreenHeader,
                contentStyle: {
                    paddingBottom: insets.bottom,
                    backgroundColor: "white"
                }
            }}
        >
            <BookServiceStackNavigator.Screen
                name="Catalogue"
                options={{
                    title: "Book Your Gentle Touch",
                    header: ScreenHeader,
                }}
                component={Catalogue}
            />
            <BookServiceStackNavigator.Screen
                name='ServiceDetails'
                component={ServiceDetails}
            />
        </BookServiceStackNavigator.Navigator>
    )
}

const styles = StyleSheet.create({})