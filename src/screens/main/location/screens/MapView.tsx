import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import TargetSvg from '@/assets/icons/Target';
import CustomButton from '@/components/CustomButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LocationStackParamList } from '../LocationStack';

type MapViewScreenProps = NativeStackScreenProps<
    LocationStackParamList,
    "MapView"
>;

export default function MapViewV({ navigation }: MapViewScreenProps) {
    const handleChangePressed = () => {
        navigation.navigate("SearchLocation");
    }

    const handleConfirm = () => {
        navigation.getParent()?.goBack();
    }

    return (
        <View
            className='flex-1'
        >
            <View className='flex-1'>
                <MapView
                    // provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={{
                        flex: 1,
                    }}
                />
            </View>
            <View
                className='px-6 py-4'
            >
                <View className='flex-row items-center gap-2'>
                    <View className='flex-row flex-1 items-center gap-2'>
                        <TargetSvg size={18} />
                        <CustomText
                            className='text-black font-bold font-manrope-bold text-[22px]'
                        >
                            Woodstock,Cape Town
                        </CustomText>
                    </View>
                    <Pressable
                        onPress={handleChangePressed}
                    >
                        <CustomText
                            className='text-primary font-bold font-nunito-sans-bold text-[12px]'
                        >
                            Change
                        </CustomText>
                    </Pressable>
                </View>
                <CustomText
                    className='text-[#8F90A6] font-nunito-sans-regular mt-2'
                >
                    Unit 403, the hills, Buchanan Square, 160 Sir Lowry Rd, Woodstock, Cape Town, 7915
                </CustomText>
                <CustomButton
                    title='Confirm Location'
                    onPress={handleConfirm}
                    className='mt-4'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})