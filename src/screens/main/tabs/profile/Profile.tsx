import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ProfileCard from './components/ProfileCard';
import HeartOutlineSvg from '@/assets/icons/HeartOutline';
import CardSvg from '@/assets/icons/Card';
import BookingSvg from '@/assets/icons/Booking';
import NotificationSvg from '@/assets/icons/Notification';
import BriefcaseSvg from '@/assets/icons/Briefcase';
import InfoSvg from '@/assets/icons/Info';
import ActionList from './components/ActionList';
import LogoutPanel from './components/LogoutPanel';
import CustomText from '@/components/CustomText';
import { MainTabsParamList } from '@/navigation/MainTabs';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type ProfileAction = {
    title: string,
    subtitle?: string,
    icon: React.ReactNode,
    onPress: () => void,
}

type ProfileProps = BottomTabScreenProps<MainTabsParamList, 'Profile'>

export default function Profile({navigation}: ProfileProps) {
  const insets = useSafeAreaInsets();

  const navigateToUpdateProfile = () => {
    navigation.getParent()?.navigate('UpdateProfile');
  }

  const actions: ProfileAction[] = [
    {
      title: "Your Favourites",
      subtitle: "Reorder your favorite service in a click",
      icon: <HeartOutlineSvg size={24} color='#1C1C28'/>,
      onPress: () => {},
    },
    {
      title: "Payments",
      subtitle: "Payment methods, Transaction History ",
      icon: <CardSvg size={24} color='#1C1C28'/>,
      onPress: () => {},
    },
    {
      title: "My bookings",
      icon: <BookingSvg size={24} color='#1C1C28'/>,
      onPress: () => {},
    },
    {
      title: "Announcements",
      subtitle: "View your past notifications",
      icon: <NotificationSvg size={24} color='#1C1C28'/>,
      onPress: () => {},
    },
    {
      title: "Your Gentle Rewards",
      subtitle: "240 Points Available",
      icon: <BriefcaseSvg size={24} color='#1C1C28'/>,
      onPress: () => {},
    },
    {
      title: "About us",
      subtitle: "Privacy Policy, Terms of Services, Licenses",
      icon: <InfoSvg size={24} color='#1C1C28'/>,
      onPress: () => {},
    }
  ];

  return (
    <View
      className='flex-1'
      style={{
        paddingTop: insets.top,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileCard onEdit={navigateToUpdateProfile} />
        <View className='mt-8 px-6'>
          <ActionList actions={actions} />
          <View className='mt-8'>
            <LogoutPanel onPress={() => {}} />
          </View>
        </View>
        <View className='mt-8'>
          <View className='flex-row items-center justify-center'>
            <CustomText className='text-center'>Made with care by</CustomText>
            <CustomText className='text-center ml-[2px] !font-manrope-bold !font-bold' numberOfLines={1}>The Gentle Touch Team 🤍</CustomText>
          </View>
          <CustomText className='text-center !font-manrope-bold !font-bold mb-8'>
            App version number (v1.0.0)
          </CustomText>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})