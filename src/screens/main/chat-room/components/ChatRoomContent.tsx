import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomText from '@/components/CustomText'
import { Chat } from '../ChatRoom'
import { format, isBefore, isSameDay, isYesterday, subDays, subMinutes } from 'date-fns';

export default function ChatRoomContent({chats}: {chats: Chat[]}) {

    const chatDayGroups = chats.reduce((acc, chat) => {
        const date = chat.timestamp.toISOString().split('T')[0];

        if (!acc[date]) {
            acc[date] = [];
        }

        acc[date].push(chat);
        return acc;
    }, {} as Record<string, Chat[]>);

    const sortedChatDayGroups = Object.entries(chatDayGroups).sort((a, b) => {
        const dateA = new Date(a[0]);
        const dateB = new Date(b[0]);
        return isBefore(dateA, dateB) ? -1 : 1;
    });

    return (
        <ScrollView
            contentContainerStyle={{
                // height: "100%",
                paddingVertical: 24,
                paddingHorizontal: 16,
            }}
            showsVerticalScrollIndicator={false}
        >
            {
                Object.entries(chatDayGroups).map(([date, chats], index) => (
                    <DayChats
                        key={index}
                        chats={chats}
                        date={date}
                    />
                ))
            }
        </ScrollView>
    );
}

const DayChats = ({chats, date}: {chats: Chat[], date: string}) => {
    const [chatClusters, setChatClusters] = useState<Record<string, Chat[]>>({
        "11:20 PM": [
            {
                id: '1',
                message: {
                    text: 'Hello 3',
                },
                sender: 'me',
                timestamp: new Date("2025-10-28T16:16:00"),
                isRead: true,
            },
            {
                id: '2',
                message: {
                    text: 'How are you? 4',
                },
                sender: 'me',
                timestamp: new Date("2025-10-28T16:25:00"),
                isRead: true,
            },
        ],
        "11:40 PM": [
            {
                id: '10',
                message: {
                    text: 'Hello 3',
                },
                sender: 'other',
                timestamp: new Date("2025-10-28T16:16:00"),
                isRead: true,
            },
            {
                id: '20',
                message: {
                    text: 'How are you? 4 lorem',
                },
                sender: 'other',
                timestamp: new Date("2025-10-28T16:25:00"),
                isRead: true,
            },
        ]
    });
    
    // useEffect(() => {
    //     console.log("here")
    //     let clusterCount = 0;
    //     const chatClustersTemp: Record<number, Chat[]> = {};

    //     chats.forEach((chat, index) => {
    //         const prevChat = chats[index - 1];
    
    //         const over5MinsSinceLast = prevChat && isBefore(prevChat?.timestamp, subMinutes(chat.timestamp, 5));

    //         console.log("over5MinsSinceLast", over5MinsSinceLast);
    
    //         if (over5MinsSinceLast) {
    //             const latestTimeInCluster = chatClustersTemp[clusterCount]?.[chatClustersTemp[clusterCount].length - 1]?.timestamp;
    
    //             setChatClusters((prev) => ({
    //                 ...prev,
    //                 [format(latestTimeInCluster, 'hh:mm a')]: chatClustersTemp[clusterCount],
    //             }));
    
    //             delete chatClustersTemp[clusterCount];
    
    //             clusterCount++;
    //             chatClusters[clusterCount] = [chat];
    //         } else {
    //             if (!chatClustersTemp[clusterCount]) {
    //                 chatClustersTemp[clusterCount] = [chat];
    //             } else {
    //                 chatClustersTemp[clusterCount].push(chat);
    //             }
    //         }
    //     });
    // }, [chats]);


    console.log("chatClusters", date, chatClusters);

    return (
        <View className='mt-4'>
            <DayHeader date={date} />
            <View className='gap-4'>
                {
                    Object.entries(chatClusters).map(([time, chats], index) => (
                        <ChatCluster cluster={{time, chats}} key={index} />
                    ))
                }
            </View>
        </View>
    );
};

const ChatCluster = ({cluster}: {cluster: {time: string, chats: Chat[]}}) => {

    const isOther = cluster.chats[0].sender === "other";

    return (
        <View
            className={`gap-6 ${isOther ? "items-start" : "items-end"}`}
        >
            <View className={`gap-2 ${isOther ? "items-start" : "items-end"}`}>
                {
                    cluster.chats.map((chat) => {
                        return (
                            <ChatListing chat={chat} />
                        );
                    })
                }
            </View>
            <View>
                <CustomText className='!text-grey-60 !text-[12px] !tracking-widest'>
                    {cluster.time}
                </CustomText>
            </View>
        </View>
    );
}

const ChatListing = ({chat}: {chat: Chat}) => {
    const isOther = chat.sender === "other";

    return (
        <Pressable
            className='p-4'
            style={{
                backgroundColor: isOther ? "#141414" : "#D9D9D9",
                borderTopLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: !isOther ? 16 : 0,
                borderTopRightRadius: isOther ? 16 : 0
            }}
        >
            <CustomText className={`!font-nunito-sans-regular !font-medium !tracking-wider ${isOther ? "!text-white" : "!text-grey-100"}`}>
                {chat.message.text}
            </CustomText>
        </Pressable>
    );
}

const DayHeader = ({date}: {date: string}) => {
    const isToday = isSameDay(new Date(date), new Date());
    const wasYesterday = isYesterday(new Date(date));

    const formattedDate = format(new Date(date), 'dd MMMM yyyy');

    return (
        <View className="flex-row items-center">
            <View className={`flex-1 h-px border-grey-40 border-t`} />
            <CustomText className={`mx-[16px] text-[14px] !font-nunito-sans-regular tracking-wider !text-grey-80`}>
                {isToday ? 'Today' : wasYesterday ? 'Yesterday' : formattedDate}
            </CustomText>
            <View className={`flex-1 h-px border-grey-40 border-t`} />
        </View>
    );
}

const styles = StyleSheet.create({})