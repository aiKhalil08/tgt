import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ScreenView from './components/ScreenView'
import CustomText from '@/components/CustomText'
import FormGroup from '@/components/forms/FormGroup'
import CustomTextInput from '@/components/forms/CustomTextInput'
import EnvelopeSvg from '@/assets/icons/Envelope'
import CustomButton from '@/components/CustomButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '@/navigation/AuthStack'
import { SubTitle, Title } from './components/PageTitle'

type ForgotPasswordScreenProps = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>

export default function ForgotPassword({ navigation }: ForgotPasswordScreenProps) {
    const [email, setEmail] = useState({
        value: '',
        error: '',
    });

    const handleSendCode = () => {
        console.log(email);
        navigation.navigate('VerifyOtp');
    }

    const handleInputChange = (field: string, value: string) => {
        setEmail((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    }

    return (
        <ScreenView>
            <View className='flex-1 px-4'>
                <View className='gap-4 mt-11'>
                    <Title>Forgot Password,</Title>
                    <SubTitle>Please type your email below and we will give you a OTP code</SubTitle>
                </View>
                <FormGroup
                    className='mt-14'
                >
                    <CustomTextInput
                        placeholder='Email address'
                        keyboardType='email-address'
                        value={email.value}
                        onChangeText={(value) => handleInputChange('email', value)}
                        LeftIcon={EnvelopeSvg}
                    />
                </FormGroup>
                <View className='mt-4 flex-row justify-end'>
                    <Pressable
                        onPress={() => console.log('Forgot Password')}
                    >
                        <CustomText className='text-[14px] tracking-wider !font-nunito-sans-regular text-primary'>
                            Use phone number?
                        </CustomText>
                    </Pressable>
                </View>
                <CustomButton
                    title='Send Code'
                    onPress={handleSendCode}
                    className='mt-auto'
                />
            </View>
        </ScreenView>
    )
}

const styles = StyleSheet.create({})