import React, { useEffect, useState } from "react";
import Chat from "../components/Chat";
import { useSocket } from "../context/SocketProvider";

function ChatPage() {
  const { socket, namespaceSocket, getNameSpaceRooms } = useSocket();
  const [namespaces, setNameSpaces] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [roomInfo, setRoomInfo] = useState({});
  const [onlineUsers, setOnlineUsers] = useState(null);
  const [isTypingInfo, setIsTypingInfo] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket?.on("namespaces", (namespaces) => {
      setNameSpaces(namespaces);
      getNameSpaceRooms(namespaces[0].href);
    });
  }, [socket]);

  useEffect(() => {
    namespaceSocket?.on("namespaceRooms", (namespaceRooms) => {
      setRooms(namespaceRooms);
    });
  }, [namespaceSocket]);

  const joinUserIntoRoom = (roomTitle) => {
    namespaceSocket?.emit("joining", roomTitle);
    getOnlineUsers();
    confirmIsTyping();
    getConfirmMessages();

    namespaceSocket.off("roomInfo");
    namespaceSocket?.on("roomInfo", (data) => {
      setRoomInfo(data);
    });
  };

  const getOnlineUsers = () => {
    namespaceSocket?.on("onlineUsersCount", (usersCount) => {
      setOnlineUsers(usersCount);
    });
  };

  const detectIsTyping = (userID, roomName, isTyping) => {
    namespaceSocket?.emit("isTyping", { userID, roomName, isTyping });
  };

  const confirmIsTyping = () => {
    namespaceSocket?.on("isTyping", (data) => {
      setIsTypingInfo(data);
    });
  };

  const sendMessage = (sender, roomName, message) => {
    namespaceSocket.emit("newMsg", { sender, roomName, message });
  };

  const getConfirmMessages = () => {
    namespaceSocket?.off("confirmMsg");
    namespaceSocket?.on("confirmMsg", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  };

  return (
    <Chat
      namespaces={namespaces}
      getNameSpaceRooms={getNameSpaceRooms}
      rooms={rooms}
      joinUserIntoRoom={joinUserIntoRoom}
      roomInfo={roomInfo}
      onlineUsers={onlineUsers}
      detectIsTyping={detectIsTyping}
      isTypingInfo={isTypingInfo}
      sendMessage={sendMessage}
      messages={messages}
      setMessages={setMessages}
    />
  );
}

export default ChatPage;
