import { StyleSheet } from 'react-native'
import React from 'react'
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
            placeholder="What would you like for your crown today?"
            searchTerm={searchTerm}
            onChange={onChange}
        />
    )
}

const styles = StyleSheet.create({})