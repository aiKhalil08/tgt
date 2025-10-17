import { Pressable, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenView from './components/ScreenView'
import CustomText from '@/components/CustomText'
import FormGroup from '@/components/forms/FormGroup'
import CustomTextInput from '@/components/forms/CustomTextInput'
import EnvelopeSvg from '@/assets/icons/Envelope'
import CustomButton from '@/components/CustomButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '@/navigation/AuthStack'
import { SubTitle, Title } from './components/PageTitle'
import OtpInput from '@/components/forms/OtpInput'

type VerifyOtpScreenProps = NativeStackScreenProps<AuthStackParamList, 'VerifyOtp'>

const COOLDOWN_DURATION = 30;

export default function VerifyOtp({ navigation }: VerifyOtpScreenProps) {
    const [otp, setOtp] = useState('');

    const [cooldown, setCooldown] = useState(0);

    useEffect(() => {
        if (cooldown === 0) return;
        const interval = setInterval(() => {
            setCooldown((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [cooldown]);

    const handleResend = () => {
        if (cooldown > 0) return;
        // TODO: trigger resend logic here
        setCooldown(COOLDOWN_DURATION);
    };

    const handleSendCode = () => {
        console.log(otp);
    }

    const handleInputChange = (value: string) => {
        setOtp(value);
    }

    const handleSubmit = () => {
        navigation.navigate('ResetPassword');
    }

    return (
        <ScreenView>
            <View className='flex-1 px-4'>
                <View className='gap-4 mt-11'>
                    <Title>Email verification,</Title>
                    <SubTitle>Please type OTP code that we give you</SubTitle>
                </View>
                <FormGroup
                    className='mt-14'
                >
                    <OtpInput
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <View className='mt-4 flex-row justify-end'>
                    <Pressable
                        disabled={cooldown > 0}
                        onPress={() => handleResend()}
                    >
                        <CustomText className='text-[14px] tracking-wider !font-nunito-sans-regular text-primary'>
                            {
                                cooldown > 0 ? (
                                    <>
                                        {"Resend in "}
                                        <CustomText className=' font-manrope-semibold font-semibold text-primary'>{cooldown}s</CustomText>
                                    </>
                                ) : "Resend email"
                            }
                        </CustomText>
                    </Pressable>
                </View>
                <CustomButton
                    title='Verify Email'
                    onPress={handleSubmit}
                    className='mt-auto'
                />
            </View>
        </ScreenView>
    )
}

const styles = StyleSheet.create({})