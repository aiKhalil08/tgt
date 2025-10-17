import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import BootSplash from 'react-native-bootsplash'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../screens/onboarding/Onboarding'
import AuthStack from './AuthStack'


export type AppStackParamList = {
    OnBoarding: undefined;
    AuthStack: undefined;
}

const AppStack = createNativeStackNavigator<AppStackParamList>()

export default function AppNavigator() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(true);
    
    useEffect(() => {
        const checkIfFirstLaunch = async () => {
            const firstLaunch = await AsyncStorage.getItem('firstLaunch');

            if (!firstLaunch) {
                setIsFirstLaunch(false);
            } else {
                await AsyncStorage.setItem('firstLaunch', 'false');
                setIsFirstLaunch(true);
            }
        };

        const hideBootSplash = async () => {
            await checkIfFirstLaunch();
            await BootSplash.hide({ fade: true });
        };

        hideBootSplash();
    }, []);

    return (
        <AppStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                true && (
                    <AppStack.Screen
                        name="OnBoarding"
                        component={Onboarding}
                    />
                )
            }
            <AppStack.Screen name="AuthStack" component={AuthStack} />
        </AppStack.Navigator>
    )
}

const styles = StyleSheet.create({})