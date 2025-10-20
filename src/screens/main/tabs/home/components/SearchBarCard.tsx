import { StyleSheet } from 'react-native'
import React from 'react'
import CustomTextInput from '@/components/forms/CustomTextInput'
import SearchSvg from '@/assets/icons/Search'
import FilterSvg from '@/assets/icons/Filter'
import SearchBar from '@/components/forms/SearchBar'

export default function SearchBarCard({
    searchTerm,
    onChange,
}: {
    searchTerm: string;
    onChange: (value: string) => void;
}) {
    return (
        <SearchBar
            searchTerm={searchTerm}
            onChange={onChange}
        />
    )
}

const styles = StyleSheet.create({})