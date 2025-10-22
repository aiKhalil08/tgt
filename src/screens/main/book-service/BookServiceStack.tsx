import { ImageSourcePropType, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHeader from '@/components/layout/ScreenHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Catalogue from './screens/catalogue/Catalogue';
import ServiceDetails from './screens/ServiceDetails';
import DetailsScreenHeader from './components/DetailsScreenHeader';
import SelectType from './screens/SelectType';
import SelectTypeScreenHeader from './components/SelectTypeScreenHeader';
import SelectDate from './screens/select-date/SelectDate';
import BookingSummary from './screens/BookingSummary';
import Receipt from './screens/Receipt';
import ReceiptScreenHeader from './components/ReceiptScreenHeader';
import Payment from './screens/payment/Payment';

export type BookServiceStackParamList = {
    Catalogue: undefined;
    ServiceDetails: {service: {name: string, previewImage: ImageSourcePropType}};
    SelectType: {categoryName: string};
    SelectDate: undefined;
    BookingSummary: undefined;
    Payment: undefined;
    Receipt: undefined;
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
            <BookServiceStackNavigator.Screen
                name="Payment"
                options={{
                    title: "Secure Your Spot",
                    header: ScreenHeader,
                }}
                component={Payment}
            />
            <BookServiceStackNavigator.Screen
                name="Receipt"
                options={{
                    title: "Receipt",
                    header: ReceiptScreenHeader,
                }}
                component={Receipt}
            />
        </BookServiceStackNavigator.Navigator>
    )
}

const styles = StyleSheet.create({})