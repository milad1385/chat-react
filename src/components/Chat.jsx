import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";

function Chat({
  namespaces,
  getNameSpaceRooms,
  rooms,
  joinUserIntoRoom,
  roomInfo,
  onlineUsers,
}) {
  const [mainNameSpace, setMainNameSpace] = useState({});
  const { user } = useAuth();

  console.log(roomInfo);

  useEffect(() => {
    setMainNameSpace(namespaces[0]);
  }, [namespaces]);

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
                {rooms.map((room) => (
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
                              {room.messages?.[0]?.sender.username}{" "}
                              <span> </span>
                            </span>
                            <span className="sidebar__contact-sender-text">
                              {room.messages?.[0]?.message.slice(0, 15)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="sidebar__contact-right">
                        <span className="sidebar__contact-clock">15.53</span>
                        <span className="sidebar__contact-counter sidebar__counter sidebar__counter-active">
                          {room.messages.length}
                        </span>
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
                    {onlineUsers} user{onlineUsers > 1 ? "s" : ""} online
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
                {roomInfo?.messages?.map((messageInfo) => {
                  if (user._id === messageInfo?.sender) {
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
                            17:55
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
                          <span className="chat__content-sender-text">
                            {messageInfo?.message}
                          </span>
                          <span className="chat__content-chat-clock">
                            17:55
                          </span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="chat__content-bottom-bar">
                <div className="chat__content-bottom-bar-left">
                  <input
                    className="chat__content-bottom-bar-input"
                    placeholder="Message"
                    type="text"
                  />
                  <i className="chat__content-bottom-bar-icon-left tgico button-icon laugh-icon"></i>
                  <i className="chat__content-bottom-bar-icon-right tgico button-icon file-icon"></i>
                </div>
                <div className="chat__content-bottom-bar-right">
                  <i className="chat__content-bottom-bar-right-icon fa fa-microphone"></i>
                </div>
                <div className="chat__content-bottom-bar-right">
                  <span
                    style={{
                      backgroundColor: "var(--secondary-color)",
                      top: "-37px",
                      fontSize: "2.4rem",
                      visibility: "hidden",
                      opacity: "0",
                    }}
                    className="chat__content-bottom-bar-right-icon tgico button-icon arrow-bottom-icon__active"
                  >
                    
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="chat-menu context-menu">
        <div className="contact-menu__list context-menu__list">
          <div className="contact-menu__item context-menu__item">
            <span className="tgico btn-menu-item-icon"></span>
            <span className="contact-menu__text context-menu__text">Reply</span>
          </div>
          <div className="contact-menu__item context-menu__item">
            <span className="contact-menu__icon context-menu__icon tgico btn-menu-item-icon">
              
            </span>
            <span className="contact-menu__text context-menu__text">Copy</span>
          </div>
          <div className="contact-menu__item context-menu__item">
            <span className="contact-menu__icon context-menu__icon tgico btn-menu-item-icon">
              
            </span>
            <span className="contact-menu__text context-menu__text">
              Translate
            </span>
          </div>
          <div className="contact-menu__item context-menu__item">
            <span className="contact-menu__icon context-menu__icon tgico btn-menu-item-icon">
              
            </span>
            <span className="contact-menu__text context-menu__text">Pin</span>
          </div>
          <div className="contact-menu__item context-menu__item">
            <span className="contact-menu__icon context-menu__icon tgico btn-menu-item-icon">
              
            </span>
            <span className="contact-menu__text context-menu__text">
              Forward
            </span>
          </div>
          <div className="contact-menu__item context-menu__item">
            <span className="contact-menu__icon context-menu__icon tgico btn-menu-item-icon">
              
            </span>
            <span className="contact-menu__text context-menu__text">
              Select
            </span>
          </div>
          <div className="contact-menu__item context-menu__item danger">
            <span className="contact-menu__icon context-menu__icon tgico btn-menu-item-icon">
              
            </span>
            <span className="contact-menu__text context-menu__text">
              Delete
            </span>
          </div>
        </div>
      </div>

      <div className="setting-menu">
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            Saved Messages
          </span>
        </div>
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            Archived Chats
          </span>
          <span
            style={{ flex: "1", textAlign: "right", opacity: "0.7" }}
            className="badge badge-24 badge-gray archived-count"
          >
            6
          </span>
        </div>
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            My Stories
          </span>
        </div>
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            Contacts
          </span>
        </div>
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            Settings
          </span>
        </div>
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            Dark Mode
          </span>
          <label className="checkbox-field checkbox-without-caption checkbox-field-toggle">
            <input className="checkbox-field-input" type="checkbox" />
            <div className="checkbox-toggle">
              <div className="checkbox-toggle-circle"></div>
            </div>
          </label>
        </div>
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            Animations
          </span>
          <label className="checkbox-field checkbox-without-caption checkbox-field-toggle">
            <input className="checkbox-field-input" type="checkbox" />
            <div className="checkbox-toggle">
              <div className="checkbox-toggle-circle"></div>
            </div>
          </label>
        </div>
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            Telegram Features
          </span>
        </div>
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            Report Bug
          </span>
        </div>
        <div className="contact-menu__item context-menu__item a">
          <span className="tgico btn-menu-item-icon">A</span>
          <span className="contact-menu__text context-menu__text">
            Switch to A version
          </span>
        </div>
        <div className="contact-menu__item context-menu__item">
          <span className="tgico btn-menu-item-icon"></span>
          <span className="contact-menu__text context-menu__text">
            Install App
          </span>
        </div>
        <a
          href="https://github.com/morethanwords/tweb/blob/master/CHANGELOG.md"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-menu-footer"
        >
          <span className="btn-menu-footer-text">
            Telegram WebK 2.1.0 (509)
          </span>
        </a>
      </div>
    </main>
  );
}

export default Chat;
