import React, { useEffect, useMemo, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "../style/Chat.css";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        fetchMessageHistory();
      }, 3000);
    }
  });

  const fetchMessageHistory = async () => {
    setIsLoaded(true);
    console.log("fetching --->->");
    const { data, error } = await supabase.from("Chat").select("*").order("id");

    if (error) {
      console.error("Error fetching message history:", error);
    } else {
      console.log(data);
      setMessageList([]);
      data.map((message) => {
        setMessageList((messageList) => [
          ...messageList,
          {
            room: room,
            author: message.sender,
            message: message.message,
            time: message.created_at,
          },
        ]);
      });
    }
  };
  if (!isLoaded) {
    fetchMessageHistory();
    setIsLoaded(true);
  }

  useMemo(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <Link to="/mail">
          <p>
            Live chat <>&rarr;</> Pošalji paket
          </p>
        </Link>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
