import { Message } from "./ChatRoom";
import { RefObject } from "react";
import { ScrollView } from "react-native";
import { Content } from "./ChatRoom";
import { createContext } from "react";

export interface ChatRoomContextType {
    messages: Message[],
    otherIsTyping: boolean,
    scrollRef: RefObject<ScrollView | null>,
    handleSendMessage: (content: Content, isOther?: boolean) => void,
}

const ChatRoomContext = createContext({} as ChatRoomContextType);

export default ChatRoomContext;