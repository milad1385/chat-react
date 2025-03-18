import React, { useEffect, useState } from "react";

function Chat({ namespaces, getNameSpaceRooms, rooms }) {
  const [mainNameSpace, setMainNameSpace] = useState({});

  useEffect(() => {
    setMainNameSpace(namespaces[0]);
  }, [namespaces]);

  console.log(rooms);

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
                  <li className="sidebar__contact-item" key={room._id}>
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
                              {room.messages?.[0]?.sender.username} <span> </span>
                            </span>
                            <span className="sidebar__contact-sender-text">
                            {room.messages?.[0]?.message.slice(0 , 15)}
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
            <div className="sidebar__contact data-category-group">
              <ul className="sidebar__contact-list">
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            ijrewijgfjierjigjierij
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            ijrewijgfjierjigjierij
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar__contact data-category-people">
              <ul className="sidebar__contact-list">
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام داداش خوبی؟
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            سلام ییییییییییییییییییییی
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar__contact data-category-channle">
              <ul className="sidebar__contact-list">
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            ijrewijgfjierjigjierij
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar__contact-item">
                  <a className="sidebar__contact-link" href="#">
                    <div className="sidebar__contact-left">
                      <div className="sidebar__contact-left-left">
                        <img
                          className="sidebar__contact-avatar"
                          src="public/images/avatar.jpg"
                        />
                      </div>
                      <div className="sidebar__contact-left-right">
                        <span className="sidebar__contact-title">
                          Sabzlearn support
                        </span>
                        <div className="sidebar__contact-sender">
                          <span className="sidebar__contact-sender-name">
                            Qadir Yolme :
                          </span>
                          <span className="sidebar__contact-sender-text">
                            ijrewijgfjierjigjierij
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__contact-right">
                      <span className="sidebar__contact-clock">15.53</span>
                      <span className="sidebar__contact-counter sidebar__counter">
                        4
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <button className="sidebar-bottom-btn btn-circle rp btn-corner z-depth-1 btn-menu-toggle">
            <span className="tgico animated-button-icon-icon animated-button-icon-icon-first">
              
            </span>
          </button>
        </div>
        <div className="costom-col-9 container-hide">
          <section className="chat">
            <div className="chat__header">
              <div className="chat__header-left">
                <button className="btn-icon sidebar-close-button">
                  <span className="tgico button-icon"></span>
                  <span className="badge badge-20 badge-primary is-badge-empty back-unread-badge"></span>
                </button>
                <div className="chat__header-left-left">
                  <img
                    className="chat__header-avatar"
                    src="public/images/avatar.jpg"
                  />
                </div>
                <div className="chat__header-left-right">
                  <span className="chat__header-name">M.SaeeidiRad</span>
                  <span className="chat__header-status">
                    last seen recently
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
            <div className="chat__content">
              <div className="chat__content-date">
                <span className="chat__content-date-text"> Today </span>
              </div>
              <div className="chat__content-main">
                <div className="chat__content-sender-wrapper chat__content-wrapper">
                  <div className="chat__content-sender">
                    <span className="chat__content-sender-text">
                      این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی
                      آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است:
                      دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز
                      نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی
                      ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم،
                      کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه
                      را نمی‌شناسم می‌شناسم...!
                    </span>
                    <span className="chat__content-chat-clock">17:55</span>
                  </div>
                </div>
                <div className="chat__content-receiver-wrapper chat__content-wrapper">
                  <div className="chat__content-receiver">
                    <span className="chat__content-receiver-text">بنازمم</span>
                    <span className="chat__content-chat-clock">17:55</span>
                  </div>
                </div>
                <div className="chat__content-receiver-wrapper chat__content-wrapper">
                  <div className="chat__content-receiver">
                    <span className="chat__content-receiver-text">
                      بذار یکی هم من بگم.
                    </span>
                    <span className="chat__content-chat-clock">17:55</span>
                  </div>
                </div>
                <div className="chat__content-receiver-wrapper chat__content-wrapper">
                  <div className="chat__content-receiver">
                    <span className="chat__content-receiver-text">
                      هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی
                      می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز
                      شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت
                      کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این
                      همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی
                      زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن
                      است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر
                      چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.
                    </span>
                    <span className="chat__content-chat-clock">17:55</span>
                  </div>
                </div>
                <div className="chat__content-sender-wrapper chat__content-wrapper">
                  <div className="chat__content-sender">
                    <span className="chat__content-sender-text">ماشالا</span>
                    <span className="chat__content-chat-clock">17:55</span>
                  </div>
                </div>
                <div className="chat__content-sender-wrapper chat__content-wrapper">
                  <div className="chat__content-sender">
                    <span className="chat__content-sender-text">
                      ولی من کم نمیارم
                    </span>
                    <span className="chat__content-chat-clock">17:55</span>
                  </div>
                </div>
                <div className="chat__content-sender-wrapper chat__content-wrapper">
                  <div className="chat__content-sender">
                    <span className="chat__content-sender-text">
                      مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار
                      نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که
                      مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح
                      ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد
                      صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی پر نشد، به
                      یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…
                    </span>
                    <span className="chat__content-chat-clock">17:55</span>
                  </div>
                </div>
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

      <div className="contact-menu context-menu">
        {/* <ul className="contact-menu__list context-menu__list">
                <li className="contact-menu__item context-menu__item">
                    <i className="contact-menu__icon context-menu__icon fa fa-trash"></i>
                    <span className="contact-menu__text context-menu__text">Open in new salam</span>
                </li>
            
                <li className="contact-menu__item context-menu__item">
                    <i className="contact-menu__icon context-menu__icon fa fa-trash"></i>
                    <span className="contact-menu__text context-menu__text">Open in new tab</span>
                </li>
            
                <li className="contact-menu__item context-menu__item">
                    <i className="contact-menu__icon context-menu__icon fa fa-trash"></i>
                    <span className="contact-menu__text context-menu__text">Open in new tab</span>
                </li>
            
                <li className="contact-menu__item context-menu__item">
                    <i className="contact-menu__icon context-menu__icon fa fa-trash"></i>
                    <span className="contact-menu__text context-menu__text">Open in new tab</span>
                </li>
            
                <li className="contact-menu__item context-menu__item">
                    <i className="contact-menu__icon context-menu__icon fa fa-trash"></i>
                    <span className="contact-menu__text context-menu__text">Open in new tab</span>
                </li>
            
                <li className="contact-menu__item context-menu__item context-menu__item-delete">
                    <i className="contact-menu__icon context-menu__icon fa fa-trash"></i>
                    <span className="contact-menu__text context-menu__text">Open in new tab</span>
                </li>
            
        </ul> */}
      </div>

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
