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
    if (namespaceSocket) {
      namespaceSocket.on("isTyping", (data) => {
        console.log(data);
        
        setIsTypingInfo(data);
      });
    }
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
    />
  );
}

export default ChatPage;
