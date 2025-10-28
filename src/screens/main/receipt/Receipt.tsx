import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import QRCode from "react-qr-code";
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';
import { MainStackParamList } from '@/navigation/MainStack';

type ReceiptProps = NativeStackScreenProps<MainStackParamList, 'Receipt'>

export default function Receipt({route, navigation}: ReceiptProps) {
    const details = route.params?.details;
    const handleDownload = () => {
        navigation.getParent()?.reset({
            index: 0,
            routes: [
                {name: 'MainTabs'}
            ]
        })
    }

    // const details = [
    //     {name: "Salon", value: "The Gentle Touch"},
    //     {name: "Customer Name", value: "Thandeka"},
    //     {name: "Phone", value: "+27 6459 3768"},
    //     {name: "Booking Date", value: "November 12, 2025"},
    //     {name: "Booking Time", value: "9:30 AM"},
    // ];

    return (
        <View className='flex-1 p-4'>
            <View className='items-center'>
                <QRCode value="hey" size={160} />
                <CustomText className='!text-[#0B0C15] mt-3 px-20 text-center'>
                    Scan this QR code at the salon for quick check-in.
                </CustomText>
            </View>
            <View
                className='mt-6'
            >
                <CardWrapper>
                    <View className='gap-4 p-4'>        
                        {
                            details.map((detail) => (
                                <View className='flex-row items-center justify-between'>
                                    <CustomText className='!text-[#0B0C15]'>{detail.name}</CustomText>
                                    <CustomText className='!text-[#939393]'>{detail.value}</CustomText>
                                </View>
                            ))
                        }
                    </View>
                </CardWrapper>
            </View>
            <View
                className='mt-4'
            >
                <CardWrapper>
                    <View className='gap-4 p-4'>        
                        <View className='flex-row items-center justify-between gap-8'>
                            <CustomText className='!text-[#0B0C15] flex-1'>Cornrows with Natural hair -
                            6 - 10 Big lines</CustomText>
                            <CustomText className='!text-[#939393]'>R400.00</CustomText>
                        </View>
                    </View>
                </CardWrapper>
            </View>
            <CustomButton
                title="Download Receipt"
                onPress={handleDownload}
                className='mt-auto'
            />
        </View>
    )
}

const CardWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <View
            className='rounded-[10px] bg-white'
            style={{
                shadowColor: "#00000014",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 8,
                elevation: 2,
            }}
        >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({})