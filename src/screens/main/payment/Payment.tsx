import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SectionWrapper from './components/SectionWrapper'
import CardPayment from './components/CardPayment'
import CustomButton from '@/components/CustomButton'
import PaymentStatusModal from './components/Modal'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '@/navigation/MainStack'

type PaymentProps = {
   onSuccess: () => void,
   onGoHome: () => void,
   type: "booking" | "refund"
}

type PaymentScreenProps = NativeStackScreenProps<MainStackParamList, 'Payment'>

export default function Payment({navigation, route}: PaymentScreenProps) {

    const paymentType = route.params?.type;

    const [selectedMethod, setSelectedMethod] = useState("");
    const [paymentStatus, setPaymentStatus] = useState<'success' | 'error' | 'pending' | null>(null);

     // simulate success or error based on probability after 3 secs
    useEffect(() => {
        if (paymentStatus === 'pending') {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    setPaymentStatus('success');
                } else {
                    setPaymentStatus('error');
                }
            }, 3000);
        }
    }, [paymentStatus]);

    const handlePay = () => {
        // navigation.navigate('Receipt')
        setPaymentStatus('pending');
    }

    const handleSelectMethod = (method: string) => {
        setSelectedMethod(selectedMethod === method ? "" : method)
    }

    const handleViewReceipt = () => {
        setPaymentStatus(null);
        navigation.reset({
            index: 1,
            routes: [
                {name: 'MainTabs'},
                {name: 'Receipt', params: {details: [
                    {name: "Salon", value: "The Gentle Touch"},
                    {name: "Customer Name", value: "Thandeka"},
                    {name: "Phone", value: "+27 6459 3768"},
                    {name: "Booking Date", value: "November 12, 2025"},
                    {name: "Booking Time", value: "9:30 AM"},
                ]}}
            ]
        });
    }

    const handleGoHome = () => {
        setPaymentStatus(null);
        navigation.reset({
            index: 0,
            routes: [
                {name: 'MainTabs'}
            ]
        })
    }

    const handleTryAgain = () => {
        setPaymentStatus('pending');
    }

    const handleChangeMethod = () => {
        setPaymentStatus(null);
        setSelectedMethod("");
    }

    const showModal = paymentStatus !== null;
    
    return (
        <View className='flex-1 p-4'>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View className='gap-4'>
                    <CardPayment
                        isSelected={selectedMethod === "card"}
                        onPress={() => handleSelectMethod("card")}
                    />
                    <SectionWrapper
                        title='Ozow'
                        isSelected={selectedMethod === "ozow"}
                        onPress={() => handleSelectMethod("ozow")}
                    />
                    <SectionWrapper
                        title='Yoco'
                        isSelected={selectedMethod === "yoco"}
                        onPress={() => handleSelectMethod("yoco")}
                    />
                    <SectionWrapper
                        title='Payfast'
                        isSelected={selectedMethod === "payfast"}
                        onPress={() => handleSelectMethod("payfast")}
                    />
                    <SectionWrapper
                        title='Snapscan'
                        isSelected={selectedMethod === "snapscan"}
                        onPress={() => handleSelectMethod("snapscan")}
                    />
                </View>
                <CustomButton
                    title={paymentType === "booking" ? "Pay Now" : "Refund"}
                    onPress={handlePay}
                    className='mt-auto'
                />
            </ScrollView>
            <PaymentStatusModal
                status={paymentStatus}
                paymentType={paymentType}
                onViewReceipt={handleViewReceipt}
                onGoHome={handleGoHome}
                onTryAgain={handleTryAgain}
                onChangeMethod={handleChangeMethod}
            />
        </View>
    )
}

const styles = StyleSheet.create({})