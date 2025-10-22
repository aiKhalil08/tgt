import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookServiceStackParamList } from '../../BookServiceStack'
import SectionWrapper from './components/SectionWrapper'
import CardPayment from './components/CardPayment'
import CustomButton from '@/components/CustomButton'
import PaymentStatusModal from './components/Modal'

type PaymentProps = NativeStackScreenProps<BookServiceStackParamList, 'Payment'>

export default function Payment({route, navigation}: PaymentProps) {

    const [selectedMethod, setSelectedMethod] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [processingPayment, setProcessingPayment] = useState(false);

    const handlePay = () => {
        // navigation.navigate('Receipt')
        setShowModal(true);
    }

    const handleSelectMethod = (method: string) => {
        setSelectedMethod(selectedMethod === method ? "" : method)
    }
    
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
                    title="Pay Now"
                    onPress={handlePay}
                    className='mt-auto'
                />
            </ScrollView>
            <PaymentStatusModal
                visible={showModal}
                onViewReceipt={() => setShowModal(false)}
                onGoHome={() => setShowModal(false)}
                onTryAgain={() => setShowModal(false)}
                onChangeMethod={() => setShowModal(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({})