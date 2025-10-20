import { StyleSheet } from 'react-native'
import React from 'react'
import CustomTextInput from './CustomTextInput'
import SearchSvg from '@/assets/icons/Search';
import FilterSvg from '@/assets/icons/Filter';

export default function SearchBar({
    searchTerm,
    onChange,
}: {
    searchTerm: string;
    onChange: (value: string) => void;
}) {
    return (
        <CustomTextInput
            placeholder="What would you like for your crown today?"
            value={searchTerm}
            onChangeText={onChange}
            LeftIcon={SearchSvg}
            RightIcon={FilterSvg}
        />
    )
}

const styles = StyleSheet.create({})