import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Booking } from '../Bookings'
import BookingCard from './BookingCard'

export default function BookingList({ bookings, type, onCancel }: { bookings: Booking[], type: "upcoming" | "completed" | "cancelled", onCancel?: () => void }) {
    return (
        <ScrollView contentContainerStyle={{ gap: 20, padding: 16 }} showsVerticalScrollIndicator={false}>
            {
                bookings.map((booking, index) => (
                    <BookingCard
                        key={index}
                        type={type}
                        booking={booking}
                        onCancel={onCancel}
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({})