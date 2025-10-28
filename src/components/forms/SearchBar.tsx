import { StyleSheet } from 'react-native'
import React from 'react'
import CustomTextInput from './CustomTextInput'
import SearchSvg from '@/assets/icons/Search';
import FilterSvg from '@/assets/icons/Filter';

export default function SearchBar({
    searchTerm,
    onChange,
    placeholder="Search",
    hideFilterIcon=false,
}: {
    searchTerm: string;
    onChange: (value: string) => void;
    placeholder?: string;
    hideFilterIcon?: boolean;
}) {
    return (
        <CustomTextInput
            placeholder={placeholder}
            value={searchTerm}
            onChangeText={onChange}
            LeftIcon={SearchSvg}
            RightIcon={hideFilterIcon ? undefined : FilterSvg}
        />
    )
}

const styles = StyleSheet.create({})