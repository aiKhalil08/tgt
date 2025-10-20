import { Modal, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ScreenView from './components/ScreenView'
import CustomText from '@/components/CustomText'
import FormGroup from '@/components/forms/FormGroup'
import CustomButton from '@/components/CustomButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '@/navigation/AuthStack'
import { SubTitle, Title } from './components/PageTitle'
import PasswordInput from '@/components/forms/PasswordInput'
import { BlurView } from '@react-native-community/blur'
import SuccessSvg from '@/assets/icons/Success.svg'

type ResetPasswordScreenProps = NativeStackScreenProps<AuthStackParamList, 'ResetPassword'>

export default function ResetPassword({ navigation }: ResetPasswordScreenProps) {
    const [visible, setVisible] = useState(false);

    const [data, setData] = useState({
        password: '',
        confirmPassword: '',
    })

    const handleResetPassword = () => {
        setVisible(true);
    }

    const handleInputChange = (field: string, value: string) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    }

    return (
        <>
            <ScreenView>
                <View className='flex-1 px-4'>
                    <View className='gap-4 mt-11'>
                        <Title>New Password,</Title>
                        <SubTitle>Now, you can create new password and confirm it below</SubTitle>
                    </View>
                    <FormGroup
                        className='mt-14'
                    >
                        <PasswordInput
                            placeholder='New password'
                            value={data.password}
                            onChangeText={(value) => handleInputChange('password', value)}
                        />
                        <PasswordInput
                            placeholder='Confirm new password'
                            value={data.confirmPassword}
                            onChangeText={(value) => handleInputChange('confirmPassword', value)}
                        />
                    </FormGroup>
                    <CustomButton
                        title='Reset Password'
                        onPress={handleResetPassword}
                        className='mt-auto'
                    />
                </View>
            </ScreenView>
            <Modal
                visible={visible}
                animationType="slide"
                transparent={true}
            >
                <BlurView
                    style={{
                        flex: 1
                    }}
                    blurType='light'
                    blurAmount={1}
                >
                    <View className='flex-1 p-4 pt-28'>
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
                            className='w-full bg-white p-4 pt-14 rounded-[45px] gap-3 items-center justify-center'
                        >
                            <SuccessSvg />
                            <CustomText className='text-center font-manrope-semibold font-semibold text-[16px]'>Password changed</CustomText>
                            <CustomText className='text-center font-nunito-sans-regular text-grey-80'>Your password is now updated. Continue exploring and booking with ease.</CustomText>
                            <CustomButton
                                title='Login Now'
                                onPress={() => setVisible(false)}
                            />
                        </View>
                    </View>
                </BlurView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({})