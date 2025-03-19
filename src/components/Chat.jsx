import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { calculateTime } from "../Utils/func";
import { RxPaperPlane } from "react-icons/rx";

function Chat({
  namespaces,
  getNameSpaceRooms,
  rooms,
  joinUserIntoRoom,
  roomInfo,
  onlineUsers,
  detectIsTyping,
  isTypingInfo,
  sendMessage,
  messages,
  setMessages,
}) {
  const [mainNameSpace, setMainNameSpace] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");
  const isTypingTimeout = useRef();
  const { user } = useAuth();

  useEffect(() => {
    setMainNameSpace(namespaces[0]);
  }, [namespaces]);

  useEffect(() => {
    setMessages(roomInfo.messages);
  }, [roomInfo]);

  useEffect(() => {
    detectIsTyping(user._id, roomInfo.title, isTyping);
  }, [isTyping]);

  const handleChangeInput = (e) => {
    setMessage(e.target.value);

    setIsTyping(true);

    if (isTypingTimeout.current) clearTimeout(isTypingTimeout.current);

    isTypingTimeout.current = setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    sendMessage(user._id, roomInfo.title, message);
    setMessage("");
  };

  return (
    <main className="main">
      <section className="costom-row">
        <div className="costom-col-3">
          <section className="sidebar">
            <div className="sidebar__header">
              <div className="sidebar__menu">
                <i className="sidebar__menu-icon animated-menu-icon"></i>
              </div>
              <div className="sidebar__searchbar">
                <input
                  type="text"
                  className="sidebar__searchbar-input"
                  placeholder="Search"
                />
                <i className="sidebar__searchbar-icon fa fa-search"></i>
              </div>
            </div>
            <div className="sidebar__categories">
              <ul className="sidebar__categories-list">
                {namespaces.map((namespace) => (
                  <li
                    key={namespace._id}
                    className={`sidebar__categories-item ${
                      mainNameSpace?.title === namespace.title
                        ? "sidebar__categories-item--active"
                        : ""
                    }`}
                    onClick={() => {
                      setMainNameSpace(namespace);
                      getNameSpaceRooms(namespace.href);
                    }}
                  >
                    <span className="sidebar__categories-text">
                      {namespace.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar__contact data-category-all sidebar__contact--active">
              <ul className="sidebar__contact-list">
                {rooms?.map((room) => (
                  <li
                    onClick={() => joinUserIntoRoom(room.title)}
                    className="sidebar__contact-item"
                    key={room._id}
                  >
                    <div className="sidebar__contact-link">
                      <div className="sidebar__contact-left">
                        <div className="sidebar__contact-left-left">
                          <img
                            className="sidebar__contact-avatar"
                            src={`http://localhost:4003/${room.image}`}
                          />
                        </div>
                        <div className="sidebar__contact-left-right">
                          <span className="sidebar__contact-title">
                            {room.title}
                          </span>
                          <div className="sidebar__contact-sender">
                            <span className="sidebar__contact-sender-name">
                              {room.messages?.[0]?.sender?.username}{" "}
                              <span> </span>
                            </span>
                            <span className="sidebar__contact-sender-text">
                              {room.messages?.[0]?.message?.slice(0, 15)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="sidebar__contact-right">
                        <span className="sidebar__contact-clock">15.53</span>
                        {room.messages.length > 0 && (
                          <span className="sidebar__contact-counter sidebar__counter sidebar__counter-active">
                            {room.messages.length}
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="costom-col-9 container-hide">
          <section className="chat">
            <div
              className={`chat__header ${
                roomInfo.title ? "chat__header--active" : ""
              }`}
            >
              <div className="chat__header-left">
                <button className="btn-icon sidebar-close-button">
                  <span className="tgico button-icon"></span>
                  <span className="badge badge-20 badge-primary is-badge-empty back-unread-badge"></span>
                </button>
                <div className="chat__header-left-left">
                  <img
                    className="chat__header-avatar"
                    src={`http://localhost:4003/${roomInfo.image}`}
                  />
                </div>
                <div className="chat__header-left-right">
                  <span className="chat__header-name">{roomInfo.title}</span>
                  <span className="chat__header-status">
                    {isTypingInfo?.isTyping &&
                    isTypingInfo.username !== user.username
                      ? `${isTypingInfo.username} is typing ...`
                      : `${onlineUsers} user${
                          onlineUsers > 1 ? "s" : ""
                        } online`}
                  </span>
                </div>
              </div>
              <div className="chat__header-right">
                <div className="chat__header-search icon-phone">
                  <span className="tgico button-icon chat__header-phone-icon"></span>
                </div>
                <div className="chat__header-search">
                  <i className="chat__header-search-icon fa fa-search"></i>
                </div>
                <div className="chat__header-menu">
                  <i className="chat__header-menu-icon fa fa-ellipsis-v"></i>
                </div>
              </div>
            </div>
            <div
              className={`chat__content ${
                roomInfo.title ? "chat__content--active" : ""
              }`}
            >
              <div className="chat__content-date">
                <span className="chat__content-date-text"> Today </span>
              </div>
              <div className="chat__content-main">
                {messages?.map((messageInfo) => {
                  if (user._id === messageInfo?.sender?._id) {
                    return (
                      <div
                        key={messageInfo?._id}
                        className="chat__content-receiver-wrapper chat__content-wrapper"
                      >
                        <div className="chat__content-receiver">
                          <span className="chat__content-receiver-text">
                            {messageInfo?.message}
                          </span>
                          <span className="chat__content-chat-clock">
                            {calculateTime(messageInfo.createdAt)}
                          </span>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={messageInfo?._id}
                        className="chat__content-sender-wrapper chat__content-wrapper"
                      >
                        <div className="chat__content-sender">
                          <span>{messageInfo.sender.username}</span>
                          <span className="chat__content-sender-text">
                            {messageInfo?.message}
                          </span>
                          <span className="chat__content-chat-clock">
                            {calculateTime(messageInfo.createdAt)}
                          </span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="chat__content-bottom-bar">
                <form onSubmit={sendMessageHandler}>
                  <div className="chat__content-bottom-bar-left">
                    <input
                      className="chat__content-bottom-bar-input"
                      placeholder="Message"
                      type="text"
                      onChange={(e) => handleChangeInput(e)}
                      ref={isTypingTimeout}
                      value={message}
                    />
                    <i className="chat__content-bottom-bar-icon-left tgico button-icon laugh-icon"></i>
                    <i className="chat__content-bottom-bar-icon-right tgico button-icon file-icon"></i>
                  </div>
                </form>
                <div onClick={sendMessageHandler}>
                  <RxPaperPlane
                    style={{ fontSize: "18px" }}
                    className=" icon"
                  />
                </div>
                <div className="chat__content-bottom-bar-right"></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Chat;
