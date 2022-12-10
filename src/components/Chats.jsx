import { doc, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
    };

    return () => {
      unsub();
    };
  }, [currentUser.uid]);

  console.log(chats);

  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://thumbs.dreamstime.com/b/ci%C3%A9rrese-encima-del-retrato-de-la-muchacha-atractiva-hermosa-joven-sonriendo-alegre-mirando-c%C3%A1mara-sobre-el-fondo-blanco-mujer-109133771.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://thumbs.dreamstime.com/b/ci%C3%A9rrese-encima-del-retrato-de-la-muchacha-atractiva-hermosa-joven-sonriendo-alegre-mirando-c%C3%A1mara-sobre-el-fondo-blanco-mujer-109133771.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://thumbs.dreamstime.com/b/ci%C3%A9rrese-encima-del-retrato-de-la-muchacha-atractiva-hermosa-joven-sonriendo-alegre-mirando-c%C3%A1mara-sobre-el-fondo-blanco-mujer-109133771.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://thumbs.dreamstime.com/b/ci%C3%A9rrese-encima-del-retrato-de-la-muchacha-atractiva-hermosa-joven-sonriendo-alegre-mirando-c%C3%A1mara-sobre-el-fondo-blanco-mujer-109133771.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://thumbs.dreamstime.com/b/ci%C3%A9rrese-encima-del-retrato-de-la-muchacha-atractiva-hermosa-joven-sonriendo-alegre-mirando-c%C3%A1mara-sobre-el-fondo-blanco-mujer-109133771.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
