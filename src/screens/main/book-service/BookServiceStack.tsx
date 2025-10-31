import { ImageSourcePropType, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHeader from '@/components/layout/ScreenHeader';
import Catalogue from './screens/catalogue/Catalogue';
import ServiceDetails from './screens/service-details/ServiceDetails';
import DetailsScreenHeader from './components/DetailsScreenHeader';
import SelectType from './screens/SelectType';
import SelectTypeScreenHeader from './components/SelectTypeScreenHeader';
import SelectDate from './screens/select-date/SelectDate';
import BookingSummary from './screens/BookingSummary';

export type BookServiceStackParamList = {
    Catalogue: undefined;
    ServiceDetails: {service: {name: string, previewImage: ImageSourcePropType}};
    SelectType: {categoryName: string};
    SelectDate: undefined;
    BookingSummary: undefined;
}

const BookServiceStackNavigator = createNativeStackNavigator<BookServiceStackParamList>()

export default function BookServiceStack() {

    return (
        <BookServiceStackNavigator.Navigator
            screenOptions={{
                header: ScreenHeader,
                contentStyle: {
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
                options={{
                    header: DetailsScreenHeader,
                }}
                component={ServiceDetails}
            />
            <BookServiceStackNavigator.Screen
                name='SelectType'
                options={{
                    header: SelectTypeScreenHeader,
                }}
                component={SelectType}
            />
            <BookServiceStackNavigator.Screen
                name="SelectDate"
                options={{
                    title: "Date and Time",
                    header: ScreenHeader,
                }}
                component={SelectDate}
            />
            <BookServiceStackNavigator.Screen
                name="BookingSummary"
                options={{
                    title: "Booking Summary",
                    header: ScreenHeader,
                }}
                component={BookingSummary}
            />
        </BookServiceStackNavigator.Navigator>
    )
}

const styles = StyleSheet.create({})