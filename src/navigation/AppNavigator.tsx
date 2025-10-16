import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BootSplash from 'react-native-bootsplash'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../app/Home'
import Onboarding from '../onboarding/Onboarding'


export type AppStackParamList = {
    OnBoarding: undefined;
    App: undefined;
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
        <AppStack.Navigator>
            {
                true && (
                    <AppStack.Screen
                        name="OnBoarding"
                        component={Onboarding}
                        options={{
                            headerShown: false
                        }}
                    />
                )
            }
            <AppStack.Screen name="App" component={Home} />
        </AppStack.Navigator>
    )
}

const styles = StyleSheet.create({})