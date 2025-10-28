import { Pressable, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import PagerView from 'react-native-pager-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomText from '@/components/CustomText'
import { useState } from 'react'
import MessagesTab from './components/MessagesTab'
import AnnouncementsTab from './components/AnnouncementsTab'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainTabsParamList } from '@/navigation/MainTabs'
import { ChatRoomParams } from '../../chat-room/ChatRoom'

type MessagesProps = BottomTabScreenProps<MainTabsParamList, "Messages">

export default function Messages({navigation}: MessagesProps) {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState(0);

  const pagerRef = useRef<PagerView>(null);

  useEffect(() => {
    pagerRef.current?.setPage(selectedTab);
  }, [selectedTab]);

  const goToChat = (chat: ChatRoomParams) => {
    navigation.getParent()?.navigate("ChatRoom", {chat});
  }

  const tabs = [
    {
      title: "Message",
      onPress: () => setSelectedTab(0),
    },
    {
      title: "Announcements",
      onPress: () => setSelectedTab(1)
    }
  ];


  return (
    <View
      className='flex-1'
    >
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: 10,
          shadowOffset: {
              width: 0,
              height: 2,
          },
          shadowColor: "#606170",
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 3,
        }}
        className='bg-white'
      >
        <View className='flex-row'>
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
      </View>
      <PagerView
        ref={pagerRef}
        initialPage={0}
        style={{flex: 1}}
        scrollEnabled={false}
      >
        <View
          key={0}
        >
          <MessagesTab
            onGoToChat={goToChat}
          />
        </View>
        <View
          key={1}
        >
          <AnnouncementsTab />
        </View>
      </PagerView>
    </View>
  )
}

const TabButton = ({title, onPress, isSelected}: {title: string, onPress: () => void, isSelected: boolean}) => {

  return (
    <Pressable className='flex-1 items-center' onPress={onPress}>
      <CustomText className={`text-center !font-manrope-bold !font-bold ${isSelected ? "!text-primary" : "!text-grey-60"}`}>{title}</CustomText>
      {
        isSelected && (
          <View className='mt-2 h-[5px] w-[5px] rounded-full bg-primary' />
        )
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({})