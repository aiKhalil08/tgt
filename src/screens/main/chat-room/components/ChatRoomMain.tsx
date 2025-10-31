import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import { Message } from '../ChatRoom'
import { differenceInMinutes, format, isBefore, isSameDay, isYesterday } from 'date-fns';
import ChatRoomContext from '../ChatRoomContext';
import { useContext } from 'react';
import LoaderKitView from 'react-native-loader-kit';
import DoubleCheckSvg from '@/assets/icons/DoubleCheck';

export default function ChatRoomContent() {

    const { messages, scrollRef, otherIsTyping } = useContext(ChatRoomContext);

    const dayClusters = messages.reduce((acc: Record<string, Message[]>, message: Message) => {
        const date = message.timestamp.toISOString().split('T')[0];

        if (!acc[date]) {
            acc[date] = [];
        }

        acc[date].push(message);
        return acc;
    }, {} as Record<string, Message[]>);

    const sortedDayClusters = Object.entries(dayClusters).sort((a, b) => {
        const dateA = new Date(a[0]);
        const dateB = new Date(b[0]);
        return isBefore(dateA, dateB) ? -1 : 1;
    });

    return (
        <ScrollView
            ref={scrollRef}
            contentContainerStyle={{
                paddingVertical: 24,
                paddingHorizontal: 16,
            }}
            showsVerticalScrollIndicator={false}
        >
            {
                Object.entries(dayClusters).map(([date, messages], index) => (
                    <DayCluster
                        key={index}
                        messages={messages}
                        date={date}
                    />
                ))
            }
            {
                otherIsTyping && (
                    <View className='mt-4'>
                        <TypingIndicator />
                    </View>
                )
            }
        </ScrollView>
    );
}

const DayCluster = ({messages, date}: {messages: Message[], date: string}) => {

    const messageClusters = messages.reduce((clusters: Message[][], presentChat: Message) => {
        const lastCluster = clusters[clusters.length - 1];

        if (!lastCluster) {
            return [[presentChat]]
        }

        const lastClusterChat = lastCluster[lastCluster.length - 1];
        const timeDiff = differenceInMinutes(presentChat.timestamp, lastClusterChat.timestamp);
        const sameSender = presentChat.sender === lastClusterChat.sender;
        
        if (timeDiff < 5 && sameSender) {
            lastCluster.push(presentChat);
            return clusters;
        }

        clusters.push([presentChat]);
        return clusters;
    }, [] as Message[][]);

    return (
        <View className='mt-4 gap-4'>
            <DayHeader date={date} />
            <View className='gap-4'>
                {
                    messageClusters.map((cluster, index) => (
                        <MessageCluster cluster={cluster} key={index} />
                    ))
                }
            </View>
        </View>
    );
};

const MessageCluster = ({cluster}: {cluster: Message[]}) => {

    const lastMessage = cluster[cluster.length - 1];
    const isOther = lastMessage.sender === "other";
    const clusterTime = format(lastMessage.timestamp, 'hh:mm a');
    const lastMessageStatus = "read";

    return (
        <View
            className={`gap-4 ${isOther ? "items-start" : "items-end"}`}
        >
            <View className={`gap-2`}>
                {
                    cluster.map((message) => {
                        return (
                            <MessageListing message={message} key={message.id} />
                        );
                    })
                }
            </View>
            <View className='flex-row items-center'>
                <CustomText className='!text-grey-60 !text-[12px] !tracking-widest'>
                    {clusterTime}
                </CustomText>
                {
                    !isOther && (
                        <View className='ml-1'>
                            <ReadIndicator status={lastMessageStatus} />
                        </View>
                    )
                }
            </View>
        </View>
    );
}

const MessageListing = ({message}: {message: Message}) => {
    const isOther = message.sender === "other";

    return (
        <Pressable
            className='p-4'
            style={{
                maxWidth: "80%",
                backgroundColor: isOther ? "#141414" : "#D9D9D9",
                borderTopLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: !isOther ? 16 : 0,
                borderTopRightRadius: isOther ? 16 : 0
            }}
        >
            <CustomText className={`!font-nunito-sans-regular !font-medium !tracking-wider ${isOther ? "!text-white" : "!text-grey-100"}`}>
                {message.content.text}
            </CustomText>
        </Pressable>
    );
}

const TypingIndicator = () => {
    return (
        <View className='items-start'>
            <View
                className='px-4 py-2'
                style={{
                    backgroundColor: "#141414",
                    borderTopLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 16
                }}
            >
                <LoaderKitView
                    color='#D3862A'
                    name="BallPulse"
                    style={{
                        width: 24,
                        height: 24
                    }}
                />
            </View>
        </View>
    );
}

const ReadIndicator = ({status}: {status: "sent" | "delivered" | "read"}) => {

    const color = status === "read" ? "#D3862A" : "#ADB3BC";

    return (
        <View>
            <DoubleCheckSvg color={color} />
        </View>
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