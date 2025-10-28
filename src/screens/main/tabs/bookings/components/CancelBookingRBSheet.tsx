import { StyleSheet, View } from 'react-native';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';

type CancelBookingRBSheetProps = {
    onCancelBooking: () => void;
    onKeepAppointment: () => void;
};

const CancelBookingRBSheet: ForwardRefRenderFunction<{open: () => void, close: () => void}, CancelBookingRBSheetProps> = (
  {onCancelBooking, onKeepAppointment},
  ref,
) => {

    const insets = useSafeAreaInsets();

    return (
        <RBSheet
            ref={ref}
            customStyles={{
                container: {
                    height: "36%",
                    paddingBottom: insets.bottom,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                },
            }}
            customModalProps={{
                animationType: 'slide',
                statusBarTranslucent: true,
            }}
            draggable
        >
            <View className='p-4 gap-6'>
                <View className='gap-2'>
                    <CustomText className='text-[22px] text-center !font-manrope-semibold !font-semibold !text-[#0B0C15]'>Cancel Booking</CustomText>
                    <CustomText className='text-[16px] !font-manrope-semibold !font-semibold !text-[#0B0C15]'>Are you sure you want to cancel?</CustomText>
                    <CustomText className='!text-[#0B0C15]'>Canceling your appointment will remove it from your upcoming bookings.</CustomText>
                </View>
                <View className='gap-2'>
                    <CustomButton
                        title="Yes, Cancel Booking"
                        theme="secondary"
                        className='!border-primary'
                        onPress={onCancelBooking}
                    />
                    <CustomButton
                        title="Keep Appointment"
                        theme="primary"
                        onPress={onKeepAppointment}
                    />
                </View>
            </View>
        </RBSheet>
    );
};


export default forwardRef(CancelBookingRBSheet);

const styles = StyleSheet.create({});
