import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookServiceStackParamList } from '../BookServiceStack'
import CustomText from '@/components/CustomText'
import LocationPinSvg from '@/assets/icons/LocationPin'
import CustomButton from '@/components/CustomButton'
import CheckBox from '@/components/forms/CheckBox'

type BookingSummaryProps = NativeStackScreenProps<BookServiceStackParamList, 'BookingSummary'>

export default function BookingSummary({route, navigation}: BookingSummaryProps) {

    const [payNow, setPayNow] = useState(false);

    const handleProceed = () => {
        navigation.getParent()?.navigate('Payment', { type: "booking"})
    }

    return (
        <View className='flex-1 p-4 gap-4'>
            <View>
                <View className='flex-row gap-4 items-center justify-center'>
                    <View>
                        <Image
                            source={require('@/assets/images/hairstyles/braids.png')}
                            className='h-[90px] w-[90px] rounded-[18px]'
                        />
                    </View>
                    <View className='gap-2'>
                        <CustomText className='!font-manrope-medium !font-medium !text-[16px] !text-[#0B0C15]'>
                            Cornrows with Natural Hair
                        </CustomText>
                        <View className='flex-row gap-2 items-center'>
                            <LocationPinSvg color='#939393' size={20} />    
                            <CustomText className='!text-[#939393] !font-manrope-medium !font-medium'>
                                Woodstock, Cape Town
                            </CustomText>
                        </View>
                    </View>
                </View>
                <View className='gap-6 mt-9'>
                    <View className='gap-4'>
                        <CustomText className='!font-manrope-semibold !font-semibold text-[16px] !text-[#0B0C15]'>Booking details</CustomText>
                        <View className='gap-3'>
                            <View className='gap-1'>
                                <CustomText className='!text-[#0B0C15]'>Date</CustomText>
                                <CustomText className='!text-[#939393]'>WED, Nov 12 at 9:30 AM</CustomText>
                            </View>
                            <View className='gap-1'>
                                <CustomText className='!text-[#0B0C15]'>Duration</CustomText>
                                <CustomText className='!text-[#939393]'>45 mins</CustomText>
                            </View>
                        </View>
                    </View>
                    <View className='h-[1px] bg-[#F5F5F5]' />
                    <View className='gap-4'>
                        <CustomText className='!font-manrope-semibold !font-semibold text-[16px] !text-[#0B0C15]'>Payment</CustomText>
                        <View className='flex-row items-center'>
                            <View className='gap-1 flex-1'>
                                <CustomText className='!text-[#0B0C15]'>Date</CustomText>
                                <CustomText className='!text-[#939393]'>WED, Nov 12 at 9:30 AM</CustomText>
                            </View>
                            <CheckBox onPress={() => setPayNow(!payNow)} isChecked={payNow} />
                        </View>
                    </View>
                    <View className='h-[1px] bg-[#F5F5F5]' />
                    <View className='gap-4'>
                        <CustomText className='!font-manrope-semibold !font-semibold text-[16px] !text-[#0B0C15]'>Pricing Details</CustomText>
                        <View className='gap-3'>
                            <View className='flex-row items-center justify-between'>
                                <CustomText className='!text-[#939393] flex-1'>Cornrows with Natural hair -
                                6 - 10 Big lines</CustomText>
                                <CustomText className='!text-[#939393]'>R400</CustomText>
                            </View>
                            <View className='flex-row items-center justify-between'>
                                <CustomText className='!text-[#0B0C15] text-[18px] !font-bold !font-manrope-bold'>Total</CustomText>
                                <CustomText className='!text-[#0B0C15] text-[18px] !font-bold !font-manrope-bold'>R400.00</CustomText>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <CustomButton
                title="Proceed"
                onPress={handleProceed}
                className='mt-auto'
            />
        </View>
    )
}

const styles = StyleSheet.create({})