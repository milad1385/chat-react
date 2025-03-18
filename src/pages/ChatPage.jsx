import React, { useEffect, useState } from "react";
import Chat from "../components/Chat";
import { useAuth } from "../context/AuthProvider";
import { useSocket } from "../context/SocketProvider";

function ChatPage() {
  const { socket, namespaceSocket, getNameSpaceRooms } = useSocket();
  const [namespaces, setNameSpaces] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [roomInfo, setRoomInfo] = useState({});


  const { user } = useAuth();


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
    namespaceSocket.off("roomInfo");
    namespaceSocket?.on("roomInfo", (data) => {
      console.log(data);
      setRoomInfo(data);
    });
  };

  return (
    <Chat
      namespaces={namespaces}
      getNameSpaceRooms={getNameSpaceRooms}
      rooms={rooms}
      joinUserIntoRoom={joinUserIntoRoom}
      roomInfo={roomInfo}
    />
  );
}

export default ChatPage;
