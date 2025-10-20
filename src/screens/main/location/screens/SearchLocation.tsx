import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '@/components/forms/CustomTextInput'
import SearchSvg from '@/assets/icons/Search';
import CustomText from '@/components/CustomText';
import { useEffect } from 'react';
import Panel from '@/components/Panel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LocationStackParamList } from '../LocationStack';

type SearchLocationScreenProps = NativeStackScreenProps<
    LocationStackParamList,
    "SearchLocation"
>;

export default function SearchLocation({ navigation }: SearchLocationScreenProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [matches, setMatches] = useState<{ name: string; address: string; }[]>([]);

    useEffect(() => {
        if (searchTerm.length > 0) {
            setMatches([
                {
                    name: "Woodstock, Cape Town",
                    address: "Unit 403, the hills, Buchanan Square"
                },
                {
                    name: "Woodstock, Cape Town",
                    address: "Unit 403, the hills, Buchanan Square"
                },
                {
                    name: "Woodstock, Cape Town",
                    address: "Unit 403, the hills, Buchanan Square"
                },
            ])
        } else setMatches([])
    }, [searchTerm]);

    const handleChange = (text: string) => {
        setSearchTerm(text);
    }

    const handleSelect = (match: { name: string; address: string; }) => {
        navigation.navigate("MapView");
    }


    return (
        <View className='flex-1 p-4'>
            <CustomTextInput
                placeholder="Enter address or city name"
                value={searchTerm}
                onChangeText={handleChange}
                LeftIcon={SearchSvg}
            />
            <View className='flex-1 mt-4 items-center justify-center'>
                {
                    matches.length > 0 ? (
                        <ScrollView
                            className='flex-1 w-full'
                            contentContainerStyle={{
                                gap: 16
                            }}
                        >
                            {
                                matches.map((match, index) => (
                                    <Panel
                                        key={index}
                                        title={match.name}
                                        subTitle={match.address}
                                        onPress={() => handleSelect(match)}
                                    />
                                ))
                            }
                        </ScrollView>
                    ) : (
                        <CustomText
                            className='!text-[#939393] font-nunito-sans-regular text-center px-14'
                        >
                            Start by entering your location or city name above.
                        </CustomText>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})