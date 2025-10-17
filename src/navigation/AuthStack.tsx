import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '@/screens/auth/SignIn';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SignUp from '@/screens/auth/SignUp';
import ForgotPassword from '@/screens/auth/ForgotPassword';
import VerifyOtp from '@/screens/auth/VerifyOtp';
import ResetPassword from '@/screens/auth/ResetPassword';

export type AuthStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    VerifyOtp: undefined;
    ResetPassword: undefined;
}

const AuthStackNavigator = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
    const insets = useSafeAreaInsets();

    return (
        <AuthStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    flex: 1,
                    backgroundColor: 'white',
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                },
            }}
        >
            <AuthStackNavigator.Screen name="SignIn" component={SignIn} />
            <AuthStackNavigator.Screen name="SignUp" component={SignUp} />
            <AuthStackNavigator.Screen name="ForgotPassword" component={ForgotPassword} />
            <AuthStackNavigator.Screen name="VerifyOtp" component={VerifyOtp} />
            <AuthStackNavigator.Screen name="ResetPassword" component={ResetPassword} />
        </AuthStackNavigator.Navigator>
    )
}

const styles = StyleSheet.create({})