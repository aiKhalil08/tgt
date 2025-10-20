import { StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenLayout from './components/ScreenLayout'
import SquircleButton from '@/components/SquircleButton'
import NotificationSvg from '@/assets/icons/Notification'
import LocationCard from './components/LocationCard'
import NameCard from './components/NameCard'
import SearchBarCard from './components/SearchBarCard'
import ServicesCard from './components/ServicesCard'
import LocationPrompt from './components/LocationPrompt'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainTabsParamList } from '@/navigation/MainTabs'
import AnnouncementRBSheet from '../../announcements/components/AnnouncementRBSheet'
import AnnouncementsSlider from './components/AnnouncementsSlider'

type HomeScreenProps = BottomTabScreenProps<
    MainTabsParamList,
    "Home"
>;

export default function Home({ navigation }: HomeScreenProps) {

    const [search, setSearch] = useState('');

    const sheetRef = useRef<{open: () => void, close: () => void}>(null);

    const handleEnableLocation = () => {
        navigation.getParent()?.navigate('LocationStack');
    }

    const navigateToBookService = () => {
        navigation.getParent()?.navigate('BookServiceStack');
    }

    const showAnnouncements = () => {
        sheetRef.current?.open();
    }

    return (
        <>
            <ScreenLayout>
                <LocationPrompt onEnable={handleEnableLocation} />
                <View className='gap-[22px]'>
                    <View className='flex-row items-center justify-between gap-16'>
                        <View className='flex-1'>
                            <LocationCard onSelectLocation={handleEnableLocation} />
                        </View>
                        <SquircleButton
                            icon={<NotificationSvg color='#0B0C15' />}
                            onPress={showAnnouncements}
                        />
                    </View>
                <NameCard name="Thandeka" />
                <SearchBarCard 
                    searchTerm={search}
                    onChange={setSearch}
                />
                <AnnouncementsSlider />
                <ServicesCard onBookService={navigateToBookService} />
                </View>
            </ScreenLayout>
            <AnnouncementRBSheet ref={sheetRef} onClose={() => sheetRef.current?.close()} />
        </>
    )
}

const styles = StyleSheet.create({})