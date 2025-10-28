import { Modal, StyleSheet, View, } from 'react-native'
import React from 'react'
import BlurView from '@/components/BlurView'
import CustomText from '@/components/CustomText'
import CustomButton from '@/components/CustomButton'
import CheckSvg from '@/assets/icons/Check'
import CancelSvg from '@/assets/icons/Cancel'
import { CircleSnail } from 'react-native-progress'

type Props = {
    status: 'success' | 'error' | 'pending' | null;
    paymentType: "booking" | "refund";
    onViewReceipt: () => void;
    onGoHome: () => void;
    onTryAgain: () => void;
    onChangeMethod: () => void;
}

export default function PaymentStatusModal({status, paymentType, onViewReceipt, onGoHome, onTryAgain, onChangeMethod}: Props) {

    const statuses: Record<'success' | 'error' | 'pending', {
        title: string;
        description: string;
        icon: React.ReactNode;
        buttons?: {
            title: string;
            onPress: () => void;
            theme: 'primary' | 'secondary'
        }[];
    }> = {
        success: {
            title: paymentType === "booking" ? 'Your salon appointment is confirmed!' : 'Booking Canceled',
            description: paymentType === "booking" ? 'Thank you for your payment. We look forward to hosting you soon.' : 'Your appointment has been successfully canceled.',
            icon: (
                <View className='w-[60px] h-[60px] bg-primary rounded-full items-center justify-center'>
                    <CheckSvg color='white' size={40} />
                </View>
            ),
            buttons: paymentType === "booking" ? [
                {
                    title: 'View Receipt',
                    onPress: onViewReceipt,
                    theme: 'primary'
                },
                {
                    title: 'Back to Home',
                    onPress: onGoHome,
                    theme: 'secondary'
                }
            ] : [
                {
                    title: 'Thank You',
                    onPress: onGoHome,
                    theme: 'primary'
                }
            ]
        },
        error: {
            title: 'Payment Failed',
            description: 'We couldn\'t process your payment. Please check your card details or try another payment method.',
            icon: (
                <View className='w-[60px] h-[60px] bg-[#FF3B30] rounded-full items-center justify-center'>
                    <CancelSvg color='white' size={40} />
                </View>
            ),
            buttons: [
                {
                    title: 'Try Again',
                    onPress: onTryAgain,
                    theme: 'primary'
                },
                {
                    title: 'Change Payment Method',
                    onPress: onChangeMethod,
                    theme: 'secondary'
                }
            ]
        },
        pending: {
            title: 'Processing Your Payment...',
            description: 'Please wait while we complete your transaction.',
            icon: (
                <View className='w-[60px] h-[60px] bg-primary rounded-full items-center justify-center'>
                    <CircleSnail color='white' size={50} />
                </View>
            ),
        }
    }

    if (status === null) return null;

    return (
        <Modal
            visible={status !== null}
            animationType="slide"
            transparent={true}
        >
            <BlurView
                style={{
                    flex: 1
                }}
                blurType='dark'
                blurAmount={1}
            >
                <View className='flex-1 p-4 items-center justify-center'>
                    <View
                        style={{
                            shadowColor: "#000000c0",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}
                        className='bg-white w-full p-6 rounded-[10px] gap-3 items-center justify-center'
                    >
                        {statuses[status].icon}
                        <CustomText className='text-center !font-manrope-semibold !font-semibold !text-[16px]'>{statuses[status].title}</CustomText>
                        <CustomText className='text-center font-nunito-sans-regular !text-[#939393]'>{statuses[status].description}</CustomText>
                        {
                            statuses[status].buttons?.map((button, index) => (
                                <CustomButton
                                    key={index}
                                    title={button.title}
                                    onPress={button.onPress}
                                    className={`w-full mt-4 ${button.theme === "secondary" ? "!border-primary" : ""}`}
                                    theme={button.theme}
                                />
                            ))
                        }
                    </View>
                </View>
            </BlurView>
        </Modal>
    )
}

const styles = StyleSheet.create({})