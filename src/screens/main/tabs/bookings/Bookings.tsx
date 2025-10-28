import { ImageRequireSource, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import PagerView from 'react-native-pager-view'
import BookingList from './components/BookingList';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MainTabsParamList } from '@/navigation/MainTabs';

export type Booking = {
    id: number;
    date: string;
    service: string;
    location: string;
    variant: string;
    image: ImageRequireSource;
}

type BookingsScreenProps = BottomTabScreenProps<MainTabsParamList, 'Bookings'>

export default function Bookings({navigation}: BookingsScreenProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  const pagerRef = useRef<PagerView>(null);

  useEffect(() => {
    pagerRef.current?.setPage(selectedTab);
  }, [selectedTab]);

  const handleCancelBooking = () => {
    navigation.getParent()?.navigate('Payment', {
        type: "refund",
    })
  }

  const tabs = [
    {
      title: "Upcoming",
      onPress: () => setSelectedTab(0),
    },
    {
      title: "Completed",
      onPress: () => setSelectedTab(1)
    },
    {
      title: "Cancelled",
      onPress: () => setSelectedTab(2)
    }
  ];

  const bookings: Record<number, Booking[]> = {
    0: [
      {
        id: 1,
        date: "Nov 12, 2025 - 10:00 AM",
        service: "Cornrows with Natural Hair",
        location: "Woodstock, Cape Town",
        variant: "Cornrows with Natural hair - 6 - 10 Big lines",
        image: require('@/assets/images/hairstyles/cornrows.png'),
      },
      {
        id: 11,
        date: "Nov 12, 2025 - 10:00 AM",
        service: "Cornrows with Natural Hair",
        location: "Woodstock, Cape Town",
        variant: "Cornrows with Natural hair - 6 - 10 Big lines",
        image: require('@/assets/images/hairstyles/cornrows.png'),
      },
      {
        id: 11,
        date: "Nov 12, 2025 - 10:00 AM",
        service: "Cornrows with Natural Hair",
        location: "Woodstock, Cape Town",
        variant: "Cornrows with Natural hair - 6 - 10 Big lines",
        image: require('@/assets/images/hairstyles/cornrows.png'),
      },
      {
        id: 11,
        date: "Nov 12, 2025 - 10:00 AM",
        service: "Cornrows with Natural Hair",
        location: "Woodstock, Cape Town",
        variant: "Cornrows with Natural hair - 6 - 10 Big lines",
        image: require('@/assets/images/hairstyles/cornrows.png'),
      }
    ],
    1: [
      {
        id: 2,
        date: "Sep 27, 2024 - 11:30 AM",
        service: "Sew In",
        location: "Woodstock, Cape Town",
        variant: "Sew In",
        image: require('@/assets/images/hairstyles/sew-in.png'),
      }
    ],
    2: [
      {
        id: 3,
        date: "Oct 27, 2024 - 11:30 AM",
        service: "Silk Press",
        location: "Montana, Pretoria",
        variant: "Silk Press",
        image: require('@/assets/images/hairstyles/silk-press.png'),
      }
    ]
  }
  
  return (
    <View className='flex-1'>
      <View className='flex-row items-center gap-4 px-4 mt-4'>
        {
          tabs.map((tab, index) => (
            <TabButton
              key={index}
              title={tab.title}
              onPress={tab.onPress}
              isSelected={selectedTab === index}
            />
          ))
        }
      </View>
      <PagerView scrollEnabled={false} ref={pagerRef} initialPage={0} style={{flex: 1}}>
        <View key={0} className='mt-3'>
          <BookingList
            bookings={bookings[0]}
            type="upcoming"
            onCancel={handleCancelBooking}
          />
        </View>
        <View key={1} className='mt-3'>
          <BookingList bookings={bookings[1]} type="completed" />
        </View>
        <View key={2} className='mt-3'>
          <BookingList bookings={bookings[2]} type="cancelled" />
        </View>
      </PagerView>
    </View>
  )
}

const TabButton = ({title, onPress, isSelected}: {title: string, onPress: () => void, isSelected: boolean}) => {

  return (
    <Pressable onPress={onPress}>
      <Text className={`!font-manrope-medium border-b-2 !font-medium leading-normal pb-2 ${isSelected ? "text-primary border-primary" : "text-[#939393] border-transparent"}`}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({})