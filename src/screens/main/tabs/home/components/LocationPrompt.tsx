import { Modal, StyleSheet, View } from 'react-native'
import CustomText from '@/components/CustomText'
import CustomButton from '@/components/CustomButton'
import { useState } from 'react';
import { BlurView } from '@react-native-community/blur';
import TargetSvg from '@/assets/icons/Target';

export default function LocationPrompt({onEnable}: {onEnable: () => void}) {
    const [visible, setVisible] = useState(false);

    const handleEnableLocation = () => {
        setVisible(false);
        onEnable();
    }

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
                            title='Enable Location'
                            onPress={handleEnableLocation}
                            className='w-full mt-4'
                        />
                    </View>
                </View>
            </BlurView>
        </Modal>
    )
}

const styles = StyleSheet.create({})