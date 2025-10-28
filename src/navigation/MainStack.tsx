import { ImageSourcePropType, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainTabs from './MainTabs';
import LocationStack from '../screens/main/location/LocationStack';
import Announcements from '@/screens/main/announcements/Announcements';
import ScreenHeader from '@/components/layout/ScreenHeader';
import BookServiceStack from '@/screens/main/book-service/BookServiceStack';
import Payment from '@/screens/main/payment/Payment';
import Receipt from '@/screens/main/receipt/Receipt';
import UpdateProfile from '@/screens/main/update-profile/UpdateProfile';
import ChatRoom, { ChatRoomParams } from '@/screens/main/chat-room/ChatRoom';

export type MainStackParamList = {
    MainTabs: undefined;
    LocationStack: undefined;
    Announcements: undefined;
    BookServiceStack: undefined;
    Payment: { type: "booking" | "refund"};
    Receipt: { details: {name: string, value: string}[]}
    UpdateProfile: undefined;
    ChatRoom: { chat: ChatRoomParams }
}

const MainStackNavigator = createNativeStackNavigator<MainStackParamList>()

export default function MainStack() {
    const insets = useSafeAreaInsets();

    return (
        <MainStackNavigator.Navigator
            screenOptions={{
                contentStyle: {
                    backgroundColor: "white",
                    paddingBottom: insets.bottom,
                }
            }}
        >
            <MainStackNavigator.Screen
                name="MainTabs"
                component={MainTabs}
                options={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: "white",
                    }
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
            <MainStackNavigator.Screen
                name="Payment"
                component={Payment}
                options={{
                    header: ({...props}) => {
                        const title = (props.route.params as {type: "booking" | "refund"})?.type === "booking" ? "Secure Your Spot" : "Cancel Booking";

                        return (
                            <ScreenHeader
                                {...props}
                                options={{
                                    ...props.options,
                                    title,
                                }}
                            />
                        )
                    },
                }}
            />
            <MainStackNavigator.Screen
                name="Receipt"
                component={Receipt}
                options={{
                    header: ScreenHeader,
                }}
            />
            <MainStackNavigator.Screen
                name="UpdateProfile"
                component={UpdateProfile}
                options={{
                    title: "Personal Data",
                    header: ScreenHeader,
                }}
            />
            <MainStackNavigator.Screen
                name="ChatRoom"
                component={ChatRoom}
                options={{
                    headerShown: false,
                }}
            />
        </MainStackNavigator.Navigator>
    )
}

const styles = StyleSheet.create({})