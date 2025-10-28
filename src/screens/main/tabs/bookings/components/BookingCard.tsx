import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import { Booking } from '../Bookings'
import CustomButton from '@/components/CustomButton'
import CancelBookingRBSheet from './CancelBookingRBSheet'
import { useRef } from 'react'

export default function BookingCard({ booking, type, onCancel }: { booking: Booking, type: "upcoming" | "completed" | "cancelled", onCancel?: () => void }) {
    const cancelBookingRBSheetRef = useRef<{open: () => void, close: () => void}>(null);

    const handleCancelBooking = () => {
        cancelBookingRBSheetRef.current?.close();
        onCancel?.();
    }

    return (
        <>
            <View
                style={{
                    shadowColor: "#000000c0",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 3.84,
                    elevation: 2,
                }}
                className='bg-white w-full p-3 rounded-[10px] gap-4'
            >
            <View className='flex-row items-center justify-between'>
                <CustomText className='text-[12px] !font-manrope-medium !font-medium'>
                    {booking.date}
                </CustomText>
                {
                    type === "completed" && (
                        <CustomText className='bg-[#6FD3BF] rounded-[50px] text-[10px] !font-manrope-medium !font-medium text-white px-5 py-1'>Completed</CustomText>
                    )
                }  
                {
                    type === "cancelled" && (
                        <CustomText className='text-[12px] !font-manrope-medium !font-medium 
                        !text-[#FF3B30]'>Cancelled</CustomText>
                    )
                }  
                </View>
                <View
                    className='flex-row gap-4'
                >
                    <Image
                        source={booking.image}
                        className='w-[90px] h-[90px] rounded-[10px]'
                    />
                    <View className='flex-1 gap-2'>
                        <CustomText className='text-[16px] !font-manrope-medium !font-medium !text-[#0B0C15]'>{booking.service}</CustomText>
                        <CustomText className='!font-manrope-medium !font-medium !text-[#939393]'>{booking.location}</CustomText>
                        <CustomText className='!font-manrope-medium !font-medium !text-[#939393] leading-none'>{booking.variant}</CustomText>
                    </View>
                </View>
                {
                    type === "upcoming" && (
                        <View className='flex-row items-center justify-between gap-4'>
                            <View className='flex-1'>
                                <CustomButton
                                    onPress={() => cancelBookingRBSheetRef.current?.open()}
                                    title="Cancel Booking"
                                    theme="secondary"
                                    className='!py-[10px] !border-primary w-full'
                                />
                            </View>
                            <View className='flex-1'>
                                <CustomButton
                                    title="View Receipt"
                                    theme="primary"
                                    className='!py-[10px] w-full'
                                />
                            </View>
                        </View>
                    )
                }
                {
                    type === "completed" && (
                        <View className='flex-1'>
                            <CustomButton
                                title="View Receipt"
                                theme="primary"
                                className='!py-[10px]'
                            />
                        </View>
                    )
                }
            </View>
            <CancelBookingRBSheet
                ref={cancelBookingRBSheetRef}
                onCancelBooking={handleCancelBooking}
                onKeepAppointment={() => cancelBookingRBSheetRef.current?.close()}
            />
        </>
    )
}

const styles = StyleSheet.create({})