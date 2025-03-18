import React, { useEffect, useState } from "react";
import Chat from "../components/Chat";
import { useSocket } from "../context/SocketProvider";

function ChatPage() {
  const { socket, namespaceSocket, getNameSpaceRooms } = useSocket();
  const [namespaces, setNameSpaces] = useState([]);
  const [rooms, setRooms] = useState([]);

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

  return (
    <Chat
      namespaces={namespaces}
      getNameSpaceRooms={getNameSpaceRooms}
      rooms={rooms}
    />
  );
}

export default ChatPage;
