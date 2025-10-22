import { Modal, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import BlurView from '@/components/BlurView'
import TargetSvg from '@/assets/icons/Target'
import CustomText from '@/components/CustomText'
import CustomButton from '@/components/CustomButton'

type Props = {
    visible: boolean;
    onViewReceipt: () => void;
    onGoHome: () => void;
    onTryAgain: () => void;
    onChangeMethod: () => void;
}

export default function PaymentStatusModal({visible, onViewReceipt, onGoHome, onTryAgain, onChangeMethod}: Props) {

    return (
        <Modal
            visible={visible}
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
                        className='bg-white w-full p-4 pt-14 rounded-[45px] gap-3 items-center justify-center'
                    >
                        <TargetSvg size={64} />
                        <CustomText className='text-center font-manrope-bold font-bold text-[24px]'>Enable Your Location</CustomText>
                        <CustomText className='text-center font-nunito-sans-regular text-grey-80'>Please enable to use your location to show nearby branches on the map</CustomText>
                        <CustomButton
                            title='View Receipt'
                            onPress={onViewReceipt}
                            className='w-full mt-4'
                        />
                    </View>
                </View>
            </BlurView>
        </Modal>
    )
}

const styles = StyleSheet.create({})