import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import CheckBox from '@/components/forms/CheckBox';
import CustomText from '@/components/CustomText';
import MasterCardSvg from '@/assets/icons/payment/MasterCard.svg';
import VisaSvg from '@/assets/icons/payment/Visa.svg';
import IconProps from '@/assets/icons/IconProps';
import PlusSvg from '@/assets/icons/Plus';
import CancelSvg from '@/assets/icons/Cancel';
import CustomButton from '@/components/CustomButton';
import CustomTextInput from '@/components/forms/CustomTextInput';


type Card = {
    cardNumber: string,
    logo: React.FC<IconProps>
}

const initialCards: Card[] = [
    {
        cardNumber: "1234 5678 9012 3456",
        logo: MasterCardSvg
    },
    {
        cardNumber: "9012 3456 1234 5678",
        logo: VisaSvg
    }
]

const maskCardNumber = (cardNumber: string) => {
    return "**** **** **** " + cardNumber.slice(-4);
}

export default function CardPayment({
    isSelected,
    onPress
}: {
    isSelected: boolean,
    onPress: () => void
}) {

    const [cards, setCards] = useState(initialCards);
    const [selectedCardNumber, setSelectedCardNumber] = useState('');
    const [showCardForm, setShowCardForm] = useState(false);

    const handleSelectCard = (card: Card) => {
        setSelectedCardNumber(card.cardNumber)
    }

    const handleAddCard = (card: Card) => {
        setCards([...cards, card])
    }

    const handleRemoveCard = (card: Card) => {
        setCards(cards.filter((c) => c.cardNumber !== card.cardNumber))
    }
    
    return (
        <SectionWrapper
            title="Credit/Debit Card"
            isSelected={isSelected}
            onPress={onPress}
        >
            <View>
                <View className='gap-6'>
                    {
                        cards.map((card, index) => (
                            <CardListing
                                key={index}
                                card={card}
                                isSelected={selectedCardNumber === card.cardNumber}
                                onSelect={() => handleSelectCard(card)}
                            />
                        ))
                    }
                </View>
                <View className='mt-6'>
                    {
                        showCardForm ? (
                            <CardForm
                                onAdd={handleAddCard}
                                onClose={() => setShowCardForm(false)}
                            />
                        ) : (
                            <Pressable
                                onPress={() => setShowCardForm(true)}
                                className='flex-row gap-2'
                            >
                                <PlusSvg color="#D3862A" />
                                <CustomText className='!font-manrope-semibold !font-semibold !text-primary'>
                                    Add Card
                                </CustomText>
                            </Pressable>
                        )
                    }   
                </View>
            </View>
        </SectionWrapper>
    )
}

const CardListing = ({card, isSelected, onSelect}: {card: Card, isSelected: boolean, onSelect: () => void}) => {
    return (
        <View className='flex-row items-center justify-between gap-4'>
            <View className='flex-row items-center gap-4'>
                <View className='h-6 w-10 rounded-[4px] border border-[#D6DCE5] items-center justify-center'>
                    <card.logo />
                </View>
                <CustomText>
                    {maskCardNumber(card.cardNumber)}
                </CustomText>
            </View>
            <CheckBox
                isChecked={isSelected}
                onPress={onSelect}
            />
        </View>
    )
}

const CardForm = ({onAdd, onClose}: {onAdd: (card: Card) => void, onClose: () => void}) => {
    const [data, setData] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvc: ''
    });

    const handleChange = (key: string, value: string) => {
        setData({
            ...data,
            [key]: value
        })
    }

    const handleAddCard = () => {
        onAdd({
            cardNumber: data.cardNumber,
            logo: MasterCardSvg
        })
        onClose();
    }
    
    return (
        <View className='gap-6'>
            <View className='flex-row items-center justify-between'>
                <CustomText className='!font-manrope-medium !font-medium !text-[16px]'>
                    Add New Card
                </CustomText>
                <Pressable
                    onPress={onClose}
                >
                    <CancelSvg />
                </Pressable>
            </View>
            <View className='gap-4'>
                <CustomTextInput
                    placeholder="Card Number"
                    value={data.cardNumber}
                    onChangeText={(value) => handleChange('cardNumber', value)}
                    keyboardType="numeric"
                />
                <View className='flex-row gap-4'>
                    <CustomTextInput
                        className='w-28'
                        placeholder="MM/YY"
                        value={data.expiryDate}
                        onChangeText={(value) => handleChange('expiryDate', value)}
                        keyboardType="numeric"
                    />
                    <CustomTextInput 
                        className='w-28'
                        placeholder="CVC"
                        value={data.cvc}
                        onChangeText={(value) => handleChange('cvc', value)}
                        keyboardType="numeric"
                    />
                </View>
                <CustomTextInput
                    placeholder="Card Holder Name"
                    value={data.cardHolderName}
                    onChangeText={(value) => handleChange('cardHolderName', value)}
                />
            </View>
            <CustomButton
                title="Add Card"
                onPress={handleAddCard}
            />
        </View>
    )
}

const styles = StyleSheet.create({})