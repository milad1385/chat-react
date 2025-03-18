import React, { createContext, useContext, useEffect, useState } from "react";
import IO from "socket.io-client";
const SocketContext = createContext({});

function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [namespaceSocket, setNamespaceSocket] = useState(null);

  useEffect(() => {
    const socketConnection = IO("http://localhost:4003");
    setSocket(socketConnection);

    return () => socketConnection.close();
  }, []);

  const getNameSpaceRooms = (namespaceHref) => {
    if (namespaceSocket) namespaceSocket.close();
    setNamespaceSocket(IO(`http://localhost:4003${namespaceHref}`));
  };

  return (
    <SocketContext.Provider
      value={{ socket, namespaceSocket, getNameSpaceRooms }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  const socket = useContext(SocketContext);

  if (!socket) {
    throw new Error("Socket context was used outside a provider");
  }

  return socket;
}

export default SocketProvider;
