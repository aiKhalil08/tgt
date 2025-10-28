import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTextInput from './CustomTextInput'
import BlurView from '../BlurView';
import CustomText from '../CustomText';
import Panel from '../Panel';
import CheckBox from './CheckBox';

export default function GenderInput({value, onChange}: {value: string, onChange: (value: string) => void}) {
    const [isOpen, setIsOpen] = React.useState(false);

    const genders = ["Female", "Male"];

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleSelect = (gender: string) => {
        onChange(gender);
        handleClose();
    }
    
    return (
        <>
            <CustomTextInput
                placeholder="Gender"
                value={value}
                onPress={handleOpen}
                editable={false}
            />
            <Modal
                visible={isOpen}
                animationType="slide"
                transparent
            >
                <BlurView>
                    <Pressable onPress={handleClose} className='flex-1 justify-center p-4'>
                        <View className='bg-white rounded-2xl p-4'>
                            <CustomText className='!font-manrope-semibold !font-semibold text-[16px]'>Select Gender</CustomText>
                            <View className='gap-4 mt-4'>
                                {
                                    genders.map((gender) => (
                                        <Panel
                                            key={gender}
                                            title={gender}
                                            onPress={() => {
                                                onChange(gender);
                                                handleClose();
                                            }}
                                            rightElement={<CheckBox
                                                onPress={() => handleSelect(gender)}
                                                isChecked={gender === value}
                                            />}
                                        />
                                    ))
                                }
                            </View>
                        </View>
                    </Pressable>
                </BlurView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({})